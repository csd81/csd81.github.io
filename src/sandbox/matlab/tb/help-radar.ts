// Help entries for the Radar Toolbox, extracted from radar.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_RADAR: Record<string, HelpEntry | string> = {
    dop2speed: { summary: 'Convert Doppler shift to speed', syntax: ['speed = dop2speed(dop,lambda)'], seealso: ['speed2dop', 'range2time'] },
    speed2dop: { summary: 'Convert speed to Doppler shift', syntax: ['dop = speed2dop(speed,lambda)'], seealso: ['dop2speed', 'radareqsnr'] },
    range2time: { summary: 'Convert range to propagation time', syntax: ['t = range2time(rng)', 't = range2time(rng,propspeed)'], seealso: ['time2range', 'range2bw'] },
    time2range: { summary: 'Convert propagation time to range', syntax: ['rng = time2range(t)', 'rng = time2range(t,propspeed)'], seealso: ['range2time', 'radareqrng'] },
    range2bw: { summary: 'Convert range resolution to bandwidth', syntax: ['bw = range2bw(rangeres)', 'bw = range2bw(rangeres,propspeed)'], seealso: ['range2time', 'radareqrng'] },
    radareqsnr: { summary: 'Estimates the output signal-to-noise ratio, SNR, at the receiver based on the wavelength lambda, the range tgtrng, the peak transmit power Pt, and the pulse width tau.', syntax: ['SNR = radareqsnr(lambda,tgtrng,Pt,tau)', 'SNR = radareqsnr(lambda,tgtrng,Pt,tau,Name,Value)'], seealso: ['phased.Transmitter', 'phased.ReceiverPreamp', 'noisepow', 'radareqpow', 'radareqrng'] },
    radareqpow: { summary: 'Estimates the peak transmit power, Pt, required for a radar operating at a wavelength of lambda meters to achieve the specified signal-to-noise ratio, SNR, in decibels for a targe', syntax: ['Pt = radareqpow(lambda,tgtrng,SNR,tau)', 'Pt = radareqpow(lambda,tgtrng,SNR,tau,Name,Value)'], seealso: ['phased.Transmitter', 'phased.ReceiverPreamp', 'noisepow', 'radareqrng', 'radareqsnr'] },
    radareqrng: { summary: 'Estimates the theoretical maximum detectable range maxrng for a radar operating with a wavelength of lambda meters with a pulse duration of Tau seconds.', syntax: ['maxrng = radareqrng(lambda,SNR,Pt,tau)', 'maxrng = radareqrng(lambda,SNR,Pt,tau,Name,Value)'], seealso: ['phased.Transmitter', 'phased.ReceiverPreamp', 'noisepow', 'radareqpow', 'radareqsnr'] },
    aperture2gain: { summary: 'Returns the antenna gain GdB corresponding to an effective aperture A for an incident electromagnetic wave with wavelength lambda.', syntax: ['GdB = aperture2gain(A,lambda)'], seealso: ['gain2aperture'] },
    grnd2slantrange: { summary: 'Returns the slant range slrng corresponding to the ground range projection grndrng.', syntax: ['slrng = grnd2slantrange(grndrng,grazang)'], seealso: ['rainelres', 'sarazres', 'slant2grndrange'] },
    sarnoiserefl: { summary: 'Computes the noise equivalent reflectivity.', syntax: ['neq = sarnoiserefl(freq,freqref,imgsnr,sigmaref)', 'neq = sarnoiserefl(freq,freqref,imgsnr,sigmaref,n)'], seealso: ['radareqsarpow', 'radareqsarrng', 'radareqsarsnr', 'rainscr'] },
    mtifactor: { summary: 'Calculates the MTI improvement factor in dB given the number of pulses in an (M - 1) delay canceler, M, the transmitted frequency, FREQ, and the pulse repetition frequency, PRF.', syntax: ['IM = mtifactor(M,FREQ,PRF)', 'IM = mtifactor(M,FREQ,PRF,Name,Value)'], seealso: ['mtiloss', 'cfarloss'] },
    steervec: { summary: 'Compute steering vector for an array', syntax: ['sv = steervec(pos,ang)', 'sv = steervec(pos,ang,freq)'], seealso: ['aperture2gain'] },
    sarbeamcompratio: { summary: 'Computes the beam compression ratio to illuminate a scene.', syntax: ['bcr = sarbeamcompratio(r,lambda,synlen,wa)', 'bcr = sarbeamcompratio(r,lambda,synlen,wa,Name,Value)'], seealso: ['sarbeamwidth', 'sarlen'] },
    bistaticSurfaceReflectivityLand: { summary: 'Bistatic land surface reflectivity', syntax: ['gamma = bistaticSurfaceReflectivityLand(elev_tx,elev_rx,model)'], seealso: ['sarnoiserefl'] },
  };
