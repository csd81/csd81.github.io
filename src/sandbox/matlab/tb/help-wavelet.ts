// Help entries for the Wavelet Toolbox, extracted from wavelet.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_WAVELET: Record<string, HelpEntry | string> = {
    dct: { summary: 'Discrete cosine transform', syntax: ['y = dct(x)', 'y = dct(x,n)'], seealso: ['idct', 'fft'] },
    dwt: { summary: 'Single-level 1-D discrete wavelet transform', syntax: ['[cA,cD] = dwt(x,wname)', '[cA,cD] = dwt(x,Lo_D,Hi_D)'], seealso: ['idwt', 'wavedec'] },
    wavedec: { summary: 'Multilevel 1-D wavelet decomposition', syntax: ['[c,l] = wavedec(x,n,wname)', '[c,l] = wavedec(x,n,LoD,HiD)', '[c,l] = wavedec(___,Mode=extmode)'], seealso: ['waverec', 'dwt', 'detcoef'] },
    haart: { summary: '1-D Haar discrete wavelet transform', syntax: ['[a,d] = haart(x)', '[a,d] = haart(x,level)', '[a,d] = haart(x,level,integerflag)'], seealso: ['ihaart', 'ihaart2', 'haart2'] },
    ihaart2: { summary: 'Inverse 2-D Haar discrete wavelet transform', syntax: ['xrec = ihaart2(a,h,v,d)', 'xrec = ihaart2(a,h,v,d,level)', 'xrec = ihaart2(___,integerflag)'], seealso: ['haart', 'ihaart', 'haart2'] },
    detcoef: { summary: 'Extract detail coefficients from wavelet decomposition', syntax: ['D = detcoef(C,L)', 'D = detcoef(C,L,N)', 'D = detcoef(C,L,N,"cells")'], seealso: ['appcoef', 'wavedec'] },
    dyaddown: { summary: 'Dyadic downsampling', syntax: ['Y = dyaddown(X)', 'Y = dyaddown(X,EVENODD)', "Y = dyaddown(___,'type')"], seealso: ['dyadup'] },
    qorthwavf: { summary: 'Kingsbury Q-shift filters for complex dual-tree transform', syntax: ['[LoDa,LoDb,HiDa,HiDb,LoRa,LoRb,HiRa,HiRb] = qorthwavf(num)'], seealso: ['qbiorthfilt', 'dualtree'] },
    biorwavf: { summary: 'Biorthogonal wavelet filter pair (reconstruction and decomposition)', syntax: ['[RF,DF] = biorwavf(wname)'], seealso: ['biorfilt', 'waveinfo'] },
    biorfilt: { summary: 'Biorthogonal wavelet filters (four-filter bank)', syntax: ['[LoD,HiD,LoR,HiR] = biorfilt(DF,RF)', "[LoD1,HiD1,LoR1,HiR1,LoD2,HiD2,LoR2,HiR2] = biorfilt(DF,RF,'8')"], seealso: ['biorwavf', 'orthfilt'] },
  };
