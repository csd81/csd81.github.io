// Text Analytics Toolbox — 5 core functions:
// tokenizedDocument, bagOfWords, tfidf, removeStopWords, fitlda (collapsed Gibbs LDA).
import {
  type Value, scalar, rowVec, colVec, toArray, asScalar, toMat as m, isMat,
  MatError, mat, zeros, makeObject, str, bool,
} from '../values';
import type { ToolboxModule } from './types';

// ── English stop words ─────────────────────────────────────────────────────────────────
const STOP_WORDS = new Set([
  'a','about','above','after','again','against','all','am','an','and','any','are',
  'as','at','be','because','been','before','being','below','between','both','but',
  'by','can','did','do','does','doing','down','during','each','few','for','from',
  'further','get','got','had','has','have','having','he','her','here','hers',
  'herself','him','himself','his','how','i','if','in','into','is','it','its',
  'itself','just','me','more','most','my','myself','no','nor','not','now','of',
  'off','on','once','only','or','other','our','ours','ourselves','out','over',
  'own','s','same','she','should','so','some','such','than','that','the','their',
  'theirs','them','themselves','then','there','these','they','this','those',
  'through','to','too','under','until','up','us','very','was','we','were','what',
  'when','where','which','while','who','whom','why','will','with','you','your',
  'yours','yourself','yourselves','t','re','ve','ll','d','m',
]);

// ── Tokenise a single string → string[] ───────────────────────────────────────────────
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9'\-\s]/g, ' ')  // keep apostrophe/hyphen inside words
    .split(/\s+/)
    .map(w => w.replace(/^['\-]+|['\-]+$/g, ''))  // strip leading/trailing punctuation
    .filter(w => w.length > 1);
}

// ── Extract raw string from a Value ───────────────────────────────────────────────────
function valToString(v: Value): string {
  if (isMat(v) && (v as any).isChar) return String.fromCharCode(...(Array.from((v as any).data) as number[]));
  if ((v as any).kind === 'str') return (v as any).value ?? '';
  return '';
}

// ── Extract token arrays from a tokenizedDocument object or cell array ────────────────
function unpackDocs(v: Value): string[][] {
  if ((v as any).kind === 'object' && (v as any).className === 'tokenizedDocument') {
    const props = (v as any).props as Map<string, Value>;
    const tok = props.get('_tokens');
    if (tok && (tok as any).kind === 'cell') return (tok as any).items.map(unpackTokens);
    if (tok) return [unpackTokens(tok)];
    return [];
  }
  if ((v as any).kind === 'cell') return (v as any).items.map((item: Value) => unpackDocs(item)[0] ?? []);
  const s = valToString(v);
  if (s) return [tokenize(s)];
  return [];
}

function unpackTokens(v: Value): string[] {
  if ((v as any).kind === 'cell') return (v as any).items.map(valToString).filter((s: string) => s.length > 0);
  if (isMat(v) && (v as any).isChar) return tokenize(valToString(v));
  return [];
}

function packTokenDoc(docs: string[][]): Value {
  const props = new Map<string, Value>();
  const cellItems = docs.map(toks => {
    const cellToks = { kind: 'cell' as const, items: toks.map(t => str(t)) };
    return cellToks as unknown as Value;
  });
  const cell: Value = { kind: 'cell', items: cellItems } as unknown as Value;
  props.set('_tokens', cell);
  props.set('NumDocuments', scalar(docs.length));
  props.set('NumTokens', scalar(docs.reduce((s, d) => s + d.length, 0)));
  return makeObject('tokenizedDocument', props);
}

// ── tokenizedDocument ─────────────────────────────────────────────────────────────────
async function tokenizedDocument(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('tokenizedDocument: requires text input');
  const docs: string[][] = [];
  const v = args[0];
  if ((v as any).kind === 'cell') {
    for (const item of (v as any).items) {
      const s = valToString(item);
      docs.push(tokenize(s));
    }
  } else {
    const s = valToString(v);
    if (!s) throw new MatError('tokenizedDocument: input must be a string or cell array of strings');
    docs.push(tokenize(s));
  }
  return [packTokenDoc(docs)];
}

// ── removeStopWords ───────────────────────────────────────────────────────────────────
async function removeStopWords(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('removeStopWords: requires tokenizedDocument');
  const docs = unpackDocs(args[0]);
  const custom = args.length > 1 && (args[1] as any).kind === 'cell'
    ? (args[1] as any).items.map(valToString) as string[]
    : [];
  const stopSet = custom.length > 0 ? new Set([...STOP_WORDS, ...custom]) : STOP_WORDS;
  const filtered = docs.map(toks => toks.filter(t => !stopSet.has(t)));
  return [packTokenDoc(filtered)];
}

// ── bagOfWords ────────────────────────────────────────────────────────────────────────
// bag = bagOfWords(documents)
// Returns a bagOfWords object with:
//   Vocabulary: cell array of unique words
//   Counts: [nDocs × nVocab] count matrix
//   NumDocuments, NumWords (= vocab size)
async function bagOfWords(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('bagOfWords: requires tokenizedDocument');
  const docs = unpackDocs(args[0]);

  // Build vocabulary (sorted for determinism)
  const vocabSet = new Set<string>();
  for (const d of docs) for (const t of d) vocabSet.add(t);
  const vocab = [...vocabSet].sort();
  const wordIdx = new Map(vocab.map((w, i) => [w, i]));
  const V = vocab.length, D = docs.length;

  // Count matrix [D × V]
  const counts = new Float64Array(D * V);
  for (let d = 0; d < D; d++) for (const t of docs[d]) {
    const i = wordIdx.get(t);
    if (i !== undefined) counts[d * V + i]++;
  }

  const vocabCell: Value = { kind: 'cell', items: vocab.map(w => str(w)) } as unknown as Value;
  const props = new Map<string, Value>();
  props.set('Vocabulary', vocabCell);
  props.set('Counts', mat(D, V, counts));
  props.set('NumDocuments', scalar(D));
  props.set('NumWords', scalar(V));
  props.set('_vocab', vocabCell); // internal alias
  return [makeObject('bagOfWords', props)];
}

// ── tfidf ─────────────────────────────────────────────────────────────────────────────
// M = tfidf(bag) — TF-IDF matrix [nDocs × nVocab]
// TF(d,w)  = count(d,w) / sum_w count(d,w)
// IDF(w)   = log((1 + N) / (1 + df(w))) + 1   [sklearn-style smooth IDF]
// TFIDF = TF * IDF, then L2-normalised per document
async function tfidf(args: Value[]): Promise<Value[]> {
  if (args.length < 1) throw new MatError('tfidf: requires bagOfWords');
  const bag = args[0] as any;
  if (bag.kind !== 'object') throw new MatError('tfidf: requires bagOfWords object');
  const props = bag.props as Map<string, Value>;
  const countsMat = m(props.get('Counts')!);
  const D = countsMat.rows, V = countsMat.cols;
  const N = D;

  // Document frequencies
  const df = new Float64Array(V);
  for (let d = 0; d < D; d++) for (let v = 0; v < V; v++) if (countsMat.data[d*V+v] > 0) df[v]++;

  // IDF (smooth)
  const idf = df.map(dfw => Math.log((1 + N) / (1 + dfw)) + 1);

  // TF * IDF
  const result = new Float64Array(D * V);
  for (let d = 0; d < D; d++) {
    let rowSum = 0;
    for (let v = 0; v < V; v++) rowSum += countsMat.data[d*V+v];
    if (rowSum === 0) continue;
    let norm = 0;
    for (let v = 0; v < V; v++) {
      const val = (countsMat.data[d*V+v] / rowSum) * idf[v];
      result[d*V+v] = val;
      norm += val * val;
    }
    // L2 normalise
    norm = Math.sqrt(norm) || 1;
    for (let v = 0; v < V; v++) result[d*V+v] /= norm;
  }

  return [mat(D, V, result)];
}

// ── fitlda — Latent Dirichlet Allocation (collapsed Gibbs sampling) ───────────────────
// mdl = fitlda(bag, numTopics)
// Returns ldaModel with:
//   TopicWordProbabilities: [numTopics × nVocab]   — phi matrix
//   DocumentTopicProbabilities: [nDocs × numTopics] — theta matrix
//   Perplexity: scalar
async function fitlda(args: Value[]): Promise<Value[]> {
  if (args.length < 2) throw new MatError('fitlda: requires bagOfWords and numTopics');
  const bag = args[0] as any;
  if (bag.kind !== 'object') throw new MatError('fitlda: requires bagOfWords object');
  const K = Math.round(asScalar(m(args[1]))); // number of topics

  const props = bag.props as Map<string, Value>;
  const countsMat = m(props.get('Counts')!);
  const vocabCell = props.get('Vocabulary') as any;
  const D = countsMat.rows, V = countsMat.cols;

  // Parse options (name-value pairs)
  let alpha = 50 / K; // document-topic Dirichlet prior
  let beta = 0.1;     // topic-word Dirichlet prior
  let numIter = 100;
  for (let i = 2; i + 1 < args.length; i += 2) {
    const key = valToString(args[i]).toLowerCase();
    if (key === 'initialtopicdistribution' || key === 'alpha') alpha = asScalar(m(args[i+1]));
    if (key === 'beta') beta = asScalar(m(args[i+1]));
    if (key === 'numiterations') numIter = Math.round(asScalar(m(args[i+1])));
  }

  // Build word lists from count matrix
  const docs: number[][] = [];
  for (let d = 0; d < D; d++) {
    const words: number[] = [];
    for (let v = 0; v < V; v++) {
      const cnt = Math.round(countsMat.data[d*V+v]);
      for (let c = 0; c < cnt; c++) words.push(v);
    }
    docs.push(words);
  }

  // Total words
  const totalWords = docs.reduce((s, d) => s + d.length, 0);
  if (totalWords === 0) {
    const phi = new Float64Array(K * V).fill(1 / V);
    const theta = new Float64Array(D * K).fill(1 / K);
    const outProps = new Map<string, Value>();
    outProps.set('TopicWordProbabilities', mat(K, V, phi));
    outProps.set('DocumentTopicProbabilities', mat(D, K, theta));
    outProps.set('NumTopics', scalar(K));
    outProps.set('Perplexity', scalar(0));
    return [makeObject('ldaModel', outProps)];
  }

  // Initialise topic assignments randomly
  const topicAssign: number[][] = docs.map(words => words.map(() => Math.floor(Math.random() * K)));

  // Count matrices
  const ndk = new Int32Array(D * K);  // document-topic counts
  const nkv = new Int32Array(K * V);  // topic-word counts
  const nk  = new Int32Array(K);      // topic totals

  for (let d = 0; d < D; d++) for (let i = 0; i < docs[d].length; i++) {
    const k = topicAssign[d][i], v = docs[d][i];
    ndk[d*K+k]++; nkv[k*V+v]++; nk[k]++;
  }

  // Collapsed Gibbs sampling
  const Vbeta = V * beta;
  for (let iter = 0; iter < numIter; iter++) {
    for (let d = 0; d < D; d++) {
      const docLen = docs[d].length;
      for (let i = 0; i < docLen; i++) {
        const v = docs[d][i], kOld = topicAssign[d][i];
        // Remove current assignment
        ndk[d*K+kOld]--; nkv[kOld*V+v]--; nk[kOld]--;

        // Compute unnormalised posterior for each topic
        let sum = 0;
        const probs = new Float64Array(K);
        for (let k = 0; k < K; k++) {
          probs[k] = (ndk[d*K+k] + alpha) * (nkv[k*V+v] + beta) / (nk[k] + Vbeta);
          sum += probs[k];
        }

        // Sample new topic
        let r = Math.random() * sum, kNew = 0;
        for (let k = 0; k < K; k++) { r -= probs[k]; if (r <= 0) { kNew = k; break; } }
        kNew = Math.min(kNew, K-1);

        topicAssign[d][i] = kNew;
        ndk[d*K+kNew]++; nkv[kNew*V+v]++; nk[kNew]++;
      }
    }
  }

  // Compute phi = P(w | topic k): [K × V]
  const phi = new Float64Array(K * V);
  for (let k = 0; k < K; k++) {
    const denom = nk[k] + Vbeta;
    for (let v = 0; v < V; v++) phi[k*V+v] = (nkv[k*V+v] + beta) / denom;
  }

  // Compute theta = P(topic k | doc d): [D × K]
  const theta = new Float64Array(D * K);
  for (let d = 0; d < D; d++) {
    const docLen = docs[d].length;
    const denom = docLen + K * alpha;
    for (let k = 0; k < K; k++) theta[d*K+k] = (ndk[d*K+k] + alpha) / denom;
  }

  // Perplexity = exp(-log-likelihood / total_words)
  let loglik = 0;
  for (let d = 0; d < D; d++) for (const v of docs[d]) {
    let pWD = 0;
    for (let k = 0; k < K; k++) pWD += theta[d*K+k] * phi[k*V+v];
    loglik += Math.log(Math.max(pWD, 1e-300));
  }
  const perplexity = Math.exp(-loglik / totalWords);

  const outProps = new Map<string, Value>();
  outProps.set('TopicWordProbabilities', mat(K, V, phi));
  outProps.set('DocumentTopicProbabilities', mat(D, K, theta));
  outProps.set('NumTopics', scalar(K));
  outProps.set('Perplexity', scalar(perplexity));
  outProps.set('Vocabulary', vocabCell ?? ({ kind: 'cell', items: [] } as unknown as Value));
  return [makeObject('ldaModel', outProps)];
}

export const TEXTANALYTICS: ToolboxModule = {
  id: 'textanalytics',
  name: 'Text Analytics Toolbox',
  docBase: 'https://www.mathworks.com/help/textanalytics/',
  builtins: {
    tokenizedDocument,
    removeStopWords,
    bagOfWords,
    tfidf,
    fitlda,
  },
  help: {
    tokenizedDocument: {
      summary: 'Array of tokenized documents',
      syntax: ['documents = tokenizedDocument(str)', 'documents = tokenizedDocument(cellstr)'],
      description: [
        'documents = tokenizedDocument(str) splits the string into tokens (words) by whitespace and punctuation, lowercases all tokens, and returns a tokenizedDocument object.',
        'documents = tokenizedDocument(cellstr) tokenizes each string in the cell array and returns an array of tokenized documents.',
        'Access tokens via documents.NumDocuments and documents.NumTokens. Pass to bagOfWords or removeStopWords for further processing.',
      ],
      seealso: ['bagOfWords', 'removeStopWords', 'tfidf', 'fitlda'],
    },
    removeStopWords: {
      summary: 'Remove stop words from tokenized documents',
      syntax: ['documents = removeStopWords(documents)', 'documents = removeStopWords(documents,customWords)'],
      description: [
        'documents = removeStopWords(documents) removes common English stop words (the, a, is, and, …) from each tokenized document.',
        'removeStopWords(documents,customWords) additionally removes the words listed in the cell array customWords.',
        'Built-in list includes ~130 common English stop words.',
      ],
      seealso: ['tokenizedDocument', 'bagOfWords', 'normalizeWords'],
    },
    bagOfWords: {
      summary: 'Bag-of-words model',
      syntax: ['bag = bagOfWords(documents)', 'bag = bagOfWords(documents,customVocab)'],
      description: [
        'bag = bagOfWords(documents) creates a bag-of-words model from a tokenizedDocument array.',
        'bag.Vocabulary is a cell array of all unique words (sorted alphabetically).',
        'bag.Counts is an [nDocs × nVocab] matrix of word occurrence counts.',
        'bag.NumDocuments and bag.NumWords give the corpus and vocabulary sizes.',
        'Pass bag to tfidf for TF-IDF weighting or fitlda for topic modelling.',
      ],
      seealso: ['tokenizedDocument', 'tfidf', 'fitlda', 'removeStopWords'],
    },
    tfidf: {
      summary: 'TF-IDF matrix',
      syntax: ['M = tfidf(bag)', 'M = tfidf(bag,documents)'],
      description: [
        'M = tfidf(bag) returns an [nDocs × nVocab] matrix of TF-IDF weights.',
        'TF(d,w) = count(d,w) / total_words(d)',
        'IDF(w) = log((1 + N) / (1 + df(w))) + 1  [smooth IDF, sklearn convention]',
        'Each document row is L2-normalised so the matrix is ready for cosine-similarity search.',
        'Use for document similarity, clustering, or as feature matrix for classifiers.',
      ],
      seealso: ['bagOfWords', 'fitlda', 'tokenizedDocument'],
    },
    fitlda: {
      summary: 'Fit latent Dirichlet allocation (LDA) topic model',
      syntax: ['mdl = fitlda(bag,numTopics)', "mdl = fitlda(bag,numTopics,'NumIterations',200)"],
      description: [
        'mdl = fitlda(bag,K) fits a K-topic LDA model to the bag-of-words corpus using collapsed Gibbs sampling.',
        'Default priors: α = 50/K (document-topic), β = 0.1 (topic-word). Default 100 Gibbs iterations.',
        'mdl.TopicWordProbabilities is [K × V]: P(word | topic).',
        'mdl.DocumentTopicProbabilities is [nDocs × K]: P(topic | document).',
        'mdl.Perplexity measures model fit (lower = better).',
        "Options: 'NumIterations' (default 100), 'Alpha' (default 50/K), 'Beta' (default 0.1).",
      ],
      seealso: ['bagOfWords', 'tfidf', 'tokenizedDocument'],
    },
  },
};
