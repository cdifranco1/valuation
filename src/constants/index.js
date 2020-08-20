
export const lineItemTitles = {
  revenues: "Revenues ",
  cogs: "COGS",
  gp: "Gross Profit ",
  opex: "OpEx",
  ebitda: "EBITDA ",
  depreciation: "Depreciation ",
  amortization: "Amortization ",
  ebit: "EBIT ",
  taxes: "Taxes ",
  nopat: "NOPAT ",
  nwcChange: "Change in NWC ",
  capex: "CapEx ",
  fcf: "Unlevered Free Cash Flow ",
  discountPeriods: "Periods Discounted ",
  pvFactors: "PV Factor ",
  dcf: "Discounted Cash Flows ",
  partialPeriods: "Partial Period Factor",
}

export const forecastSequence = [
  "revenues",
  "cogs",
  "gp",
  "opex",
  "ebitda",
  "depreciation",
  "amortization",
  "ebit",
  "taxes",
  "nopat",
  "depreciation",
  "amortization",
  "capex",
  "nwcChange",
  "fcf",
  "partialPeriods",
  "discountPeriods",
  "pvFactors",
  "dcf"
]

export const forecastInputLineItems = [
  'revenues',
  'cogs',
  'opex',
  'depreciation',
  'amortization',
  'capex',
  'nwcChange'
]

export const template = {
  _id: '',
  userId: '',
  forecasts: {
    revenues: [],
    cogs: [],
    opex: [],
    nwcChange: [],
    depreciation: [],
    amortization: [],
    capex: [],
    gp: [],
    ebitda: [],
    ebit: [],
    taxes: [],
    nopat: [],
    fcf: [],
    dcf: []
  },
  discounting: {
    discountPeriods: [],
    pvFactors: [],
    partialPeriods: []
  },
  BEV: { 
    discretePV: '', 
    consolidated: '' 
  },
  TV: {
    values: {
      terminalCF: '',
      preDiscountTV: '',
      discountedTV: ''
    },
    pvFactor: '',
    terminalFactor: ''
  },
  valAssumps: { 
    wacc: '12', 
    taxRate: '25', 
    ltgr: '3' 
  },
  genInputs: { 
    projectName: '',
    entityName: '',
    periods: 5, 
    valDate: '2019-10-31', 
    fye: '2019-12-31' 
  }
}
