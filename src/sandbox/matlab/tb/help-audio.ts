// Help entries for the Audio Toolbox, extracted from audio.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_AUDIO: Record<string, HelpEntry | string> = {
    hz2bark: { summary: 'Converts values in hertz to values on the Bark frequency scale.', syntax: ['bark = hz2bark(hz)'], seealso: ['bark2hz', 'hz2mel', 'mel2hz', 'hz2erb', 'erb2hz'] },
    bark2hz: { summary: 'Converts values on the Bark frequency scale to values in hertz.', syntax: ['hz = bark2hz(bark)'], seealso: ['hz2bark', 'hz2mel', 'mel2hz', 'hz2erb', 'erb2hz'] },
    hz2mel: { summary: 'Converts values in hertz to values on the mel frequency scale.', syntax: ['mel = hz2mel(hz)', 'mel = hz2mel(hz,MelStyle=style)'], seealso: ['mel2hz', 'hz2erb', 'erb2hz', 'hz2bark', 'bark2hz'] },
    mel2hz: { summary: 'Converts values on the mel frequency scale to values in hertz.', syntax: ['hz = mel2hz(mel)', 'hz = mel2hz(mel,MelStyle=style)'], seealso: ['hz2mel', 'hz2erb', 'erb2hz', 'hz2bark', 'bark2hz'] },
    hz2erb: { summary: 'Converts values in hertz to values on the ERB frequency scale.', syntax: ['erb = hz2erb(hz)'], seealso: ['erb2hz', 'hz2mel', 'mel2hz', 'hz2bark', 'bark2hz'] },
    erb2hz: { summary: 'Converts values on the ERB frequency scale to values in hertz.', syntax: ['hz = erb2hz(erb)'], seealso: ['hz2erb', 'hz2mel', 'mel2hz', 'hz2bark', 'bark2hz'] },
    dBov: { summary: 'Convert linear amplitude to dBov (full-scale decibels)', syntax: ['dBov_val = dBov(x)'], seealso: ['mag2db', 'db2mag'] },
    phon2sone: { summary: 'Converts phon to sone, according to ISO 532-1:2017(E).', syntax: ['sone = phon2sone(phon)', 'sone = phon2sone(phon,standard)'], seealso: ['sone2phon', 'acousticLoudness'] },
    sone2phon: { summary: 'Converts sone to phon, according to ISO 532-1:2017(E).', syntax: ['phon = sone2phon(sone)', 'phon = sone2phon(sone,standard)'], seealso: ['phon2sone', 'acousticLoudness'] },
    octavebw2bw: { summary: 'Converts octave bandwidths N and band center frequencies fc into linear analog cutoff frequencies cutoffsAnalog.', syntax: ['cutoffsAnalog = octavebw2bw(N,fc)', '[cutoffsAnalog,cutoffsDigital] = octavebw2bw(N,fc,SampleRate=fs)'], seealso: ['q2octavebw', 'octavebw2q', 'bw2octavebw', 'audioBandwidthSpecification'] },
    bw2octavebw: { summary: 'Converts cutoff frequencies into octave bandwidths, N.', syntax: ['[N,FcAnalog] = bw2octavebw(CutoffFrequencies)', '[N,FcAnalog,FcDigital] = bw2octavebw(CutoffFrequencies,SampleRate=fs)'], seealso: ['q2octavebw', 'octavebw2q', 'octavebw2bw', 'audioBandwidthSpecification'] },
    mls: { summary: 'Returns an excitation signal generated using the maximum length sequence (MLS) technique.', syntax: ['excitation = mls', 'excitation = mls(L)', 'excitation = mls(L,ExcitationLevel=level)'], seealso: ['impzest', 'sweeptone'] },
  };
