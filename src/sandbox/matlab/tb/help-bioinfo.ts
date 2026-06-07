// Help entries for the Bioinformatics Toolbox, extracted from bioinfo.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_BIOINFO: Record<string, HelpEntry | string> = {
    nt2int: { summary: 'Convert nucleotide sequence to integer sequence', syntax: ['SeqInt = nt2int(SeqChar)', 'SeqInt = nt2int(SeqChar,Name=Value)'], description: ['SeqInt = nt2int(SeqChar) converts a nucleotide character sequence to a row vector of integers using the standard IUPAC encoding (A=1, C=2, G=3, T=4, etc.).', "Specify 'Unknown' to control the integer value for unknown nucleotides (default 0); 'ACGTOnly',true to restrict to A/C/G/T/U only."], seealso: ['int2nt', 'aa2int', 'baselookup'] },
    int2nt: { summary: 'Convert integer sequence to nucleotide sequence', syntax: ['SeqChar = int2nt(SeqInt)', 'SeqChar = int2nt(SeqInt,Name=Value)'], description: ["SeqChar = int2nt(SeqInt) converts an integer vector to a nucleotide character vector using the standard IUPAC decoding.", "Specify 'Alphabet','DNA' (default) or 'RNA' to choose the nucleotide alphabet."], seealso: ['nt2int', 'int2aa', 'baselookup'] },
    aa2int: { summary: 'Convert amino acid sequence to integer sequence', syntax: ['SeqInt = aa2int(SeqChar)', 'SeqInt = aa2int(SeqChar,Unknown=unknownAA)'], description: ['SeqInt = aa2int(SeqChar) converts a character vector or string of single-letter amino acid codes to a row vector of integers.'], seealso: ['int2aa', 'nt2int', 'aminolookup'] },
    int2aa: { summary: 'Convert integer sequence to amino acid sequence', syntax: ['SeqChar = int2aa(SeqInt)', 'SeqChar = int2aa(SeqInt,Name=Value)'], description: ['SeqChar = int2aa(SeqInt) converts an integer vector to a character vector of single-letter amino acid codes.'], seealso: ['aa2int', 'int2nt', 'aminolookup'] },
    seqreverse: { summary: 'Reverse a nucleotide sequence', syntax: ['SeqR = seqreverse(SeqNT)'], seealso: ['seqcomplement', 'seqrcomplement', 'fliplr'] },
    seqcomplement: { summary: 'Complementary strand of a DNA/RNA nucleotide sequence', syntax: ['SeqC = seqcomplement(SeqNT)'], seealso: ['seqrcomplement', 'seqreverse', 'palindromes'] },
    seqrcomplement: { summary: 'Reverse complement of a DNA/RNA nucleotide sequence', syntax: ['SeqRC = seqrcomplement(SeqNT)'], seealso: ['seqcomplement', 'seqreverse'] },
    basecount: { summary: 'Count nucleotide base occurrences in a sequence', syntax: ['NTStruct = basecount(SeqNT)', 'NTStruct = basecount(SeqNT,Name=Value)'], seealso: ['aacount', 'codoncount', 'dimercount', 'baselookup'] },
    aacount: { summary: 'Count amino acid occurrences in a sequence', syntax: ['countStruct = aacount(SeqAA)', 'countStruct = aacount(SeqAA,Name=Value)'], seealso: ['basecount', 'codoncount', 'aminolookup'] },
    nt2aa: { summary: 'Convert nucleotide sequence to amino acid sequence', syntax: ['SeqAA = nt2aa(SeqNT)', 'SeqAA = nt2aa(SeqNT,Name=Value)'], description: ['SeqAA = nt2aa(SeqNT) translates a nucleotide sequence to an amino acid sequence using the standard genetic code.'], seealso: ['aa2nt', 'baselookup', 'codonbias'] },
  };
