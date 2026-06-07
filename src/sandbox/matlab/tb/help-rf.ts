// Help entries for the RF Toolbox, extracted from rf.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_RF: Record<string, HelpEntry | string> = {
    abcd2h: { summary: 'Converts the ABCD-parameters to the hybrid parameters.', syntax: ['h_params = abcd2h(abcd_params)'], seealso: ['abcd2s', 'abcd2y', 'abcd2z', 'z2abcd', 'h2abcd'] },
    gammams: { summary: 'Calculates the source reflection coefficient of a two-port network required for simultaneous conjugate match.', syntax: ['coefficient = gammams(s_params)', 'coefficient = gammams(hs)'] },
    powergain: { summary: "Calculate 2-port network power gain", syntax: ["g = powergain(s_params,z0,zs,zl,'Gt')", "g = powergain(s_params,z0,zs,'Ga')", "g = powergain(s_params,z0,zl,'Gp')", "g = powergain(s_params,'Gmag')"], description: ["g = powergain(s_params,z0,zs,zl,type) computes the specified power gain of a 2-port S-parameter network. Types: 'Gt' transducer, 'Ga' available, 'Gp' operating, 'Gmag' maximum available, 'Gmsg' maximum stable."], seealso: ['stabilityk', 'stabilitymu', 'gammams'] },
    s2scc: { summary: 'Functionconverts the 2N-port single-ended S-parameters to N-port common-mode S-parameters.', syntax: ['scc_params = s2scc(s_params)', 'scc_params = s2scc(s_params,option)'], seealso: ['s2abcd', 's2h', 's2s', 's2sdd', 's2smm'] },
    stabilityk: { summary: 'Calculates and returns the stability factor, k, and the conditions b1, b2, and delta for the two-port network.', syntax: ['[k,b1,b2,delta] = stabilityk(s_params)', '[k,b1,b2,delta] = stabilityk(hs)'], seealso: ['stabilitymu'] },
    s2abcd: { summary: 'Functionconverts the scattering parameters to the ABCD-parameters.', syntax: ['abcd_params = s2abcd(s_params,z0)'], seealso: ['abcd2s'] },
    abcd2s: { summary: 'Converts the ABCD-parameters abcd_params into the scattering parameters s_params.', syntax: ['s_params = abcd2s(abcd_params,z0)'], seealso: ['abcd2y', 'abcd2z', 'abcd2h', 's2abcd'] },
    s2y: { summary: 'Converts the scattering parameters to the admittance parameters.', syntax: ['y_params = s2y(s_params,z0)'], seealso: ['s2abcd', 's2h', 's2s', 's2sdd', 's2smm'] },
    y2s: { summary: 'Converts Y-parameters to S-parameters.', syntax: ['s_params = y2s(y_params,z0)'], seealso: ['y2abcd', 'y2z', 'y2h', 's2y'] },
    s2z: { summary: 'Converts the scattering parameters to the impedance parameters.', syntax: ['z_params = s2z(s_params,z0)'], seealso: ['s2abcd', 's2h', 's2s', 's2sdd', 's2smm'] },
    z2s: { summary: 'Converts the Z-parameters to the S-parameters.', syntax: ['s_params = z2s(z_params,z0)'], seealso: ['z2abcd', 'z2h', 'z2y', 's2z'] },
  };
