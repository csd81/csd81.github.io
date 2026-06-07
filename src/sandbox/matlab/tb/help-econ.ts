// Help entries for the Econometrics Toolbox, extracted from econ.ts.
// Keyed by function name; consumed via ToolboxModule.help (see tb/types.ts).
import type { HelpEntry } from '../help';

export const HELP_ECON: Record<string, HelpEntry | string> = {
    adftest: { summary: 'Returns the rejection decision from conducting an augmented Dickey-Fuller test for a unit root in the input univariate time series.', syntax: ['h = adftest(y)', 'StatTbl = adftest(Tbl)', '[ ___ ] = adftest( ___ ,Name=Value)', '[ ___ ,reg] = adftest( ___ )'], seealso: ['kpsstest', 'lmctest', 'pptest', 'vratiotest', 'i10test'] },
    pptest: { summary: 'Returns the rejection decision from conducting the Phillips-Perron test for a unit root in the input univariate time series.', syntax: ['h = pptest(y)', 'StatTbl = pptest(Tbl)', '[ ___ ] = pptest( ___ ,Name=Value)', '[ ___ ,reg] = pptest( ___ )'], seealso: ['adftest', 'kpsstest', 'vratiotest', 'lmctest'] },
    price2ret: { summary: 'Returns the matrix of numVars continuously compounded return series, and corresponding time intervals, from the input matrix of numVars price series.', syntax: ['[Returns,intervals] = price2ret(Prices)', 'ReturnTbl = price2ret(PriceTbl)', '[ ___ ] = price2ret( ___ ,Name=Value)'], seealso: ['ret2price', 'tick2ret'] },
    tick2ret: { summary: 'Convert tick (price) series to return series', syntax: ['ret = tick2ret(price)', 'ret = tick2ret(price,base)'], seealso: ['ret2tick', 'price2ret'] },
    lagmatrix: { summary: 'Shifts the input regular series in time by the input vector of lags (positive) or leads (negative), and returns the matrix of shifted series.', syntax: ['YLag = lagmatrix(Y,lags)', '[YLag,TLag] = lagmatrix(Y,lags)', 'LagTbl = lagmatrix(Tbl,lags)', '[ ___ ] = lagmatrix( ___ ,Name=Value)'] },
    autocorr: { summary: 'Returns the sample autocorrelation function (ACF) and associated lags of the input univariate time series.', syntax: ['[acf,lags] = autocorr(y)', 'ACFTbl = autocorr(Tbl)', '[ ___ ] = autocorr( ___ ,Name=Value)', 'autocorr( ___ )'] },
  };
