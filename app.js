/**
 * Finance Enterprise ERP
 * Modules: 
 * 1. Users Per User Group (Master Data Setup > User Data)
 * 2. User Groups (Master Data Setup > User Data)
 * 3. Users Per Company (Master Data Setup > User Data)
 * 4. Payment Terms (Accounting Rules)
 */

// =============================================================================
// MASTER DATA DEFINITIONS (ERP Master Data Setup)
// =============================================================================

// User Master (Pre-existing ERP User Master directory)
const userMaster = [
  { id: 'UNSS0P4', name: 'Robert Vance' },
  { id: 'ADM001', name: 'Sarah Jenkins' },
  { id: 'FIN002', name: 'Michael Chang' },
  { id: 'ACC003', name: 'Elena Rostova' },
  { id: 'AUD004', name: 'David Miller' },
  { id: 'OPS005', name: 'Karen Patel' },
  { id: 'MGR006', name: 'Arthur Pendelton' },
  { id: 'SYS007', name: 'James Wilson' }
];

// Accounting Periods Master (Pre-existing ERP Accounting Periods master)
const accountingPeriodsMaster = [
  { code: '2026-01', name: 'Jan 2026', status: 'closed' },
  { code: '2026-02', name: 'Feb 2026', status: 'closed' },
  { code: '2026-03', name: 'Mar 2026', status: 'open' },
  { code: '2026-04', name: 'Apr 2026', status: 'open' },
  { code: '2026-05', name: 'May 2026', status: 'open' },
  { code: '2026-06', name: 'Jun 2026', status: 'open' },
  { code: '2026-07', name: 'Jul 2026', status: 'future' },
  { code: '2026-08', name: 'Aug 2026', status: 'future' },
  { code: '2026-09', name: 'Sep 2026', status: 'future' },
  { code: '2026-10', name: 'Oct 2026', status: 'future' },
  { code: '2026-11', name: 'Nov 2026', status: 'future' },
  { code: '2026-12', name: 'Dec 2026', status: 'future' },
  { code: 'YEAR_END', name: 'Year-End Adjustments', status: 'open' }
];

// User Groups Master (Pre-configured User Groups)
let userGroupsData = [
  {
    groupName: 'FINANCE ADMIN',
    description: 'Full administrative finance access for general ledger, adjustments, and period management',
    allowedPeriods: ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', 'YEAR_END']
  },
  {
    groupName: 'FINANCE USER',
    description: 'Standard operational finance postings, vouchers, and daily transactions',
    allowedPeriods: ['2026-03', '2026-04']
  },
  {
    groupName: 'ACCOUNTS TEAM',
    description: 'Accounts payable and accounts receivable transactional processing and reconciliation',
    allowedPeriods: ['2026-03', '2026-04']
  },
  {
    groupName: 'AUDIT GROUP',
    description: 'Internal and external audit inspection, historical review, and compliance verification',
    allowedPeriods: ['2026-01', '2026-02', '2026-03']
  },
  {
    groupName: 'MANAGEMENT',
    description: 'Executive management reporting, trial balance review, and fiscal closure approvals',
    allowedPeriods: ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05']
  }
];

// Users Per User Group Association Records
let usersPerUserGroupData = [
  { userId: 'UNSS0P4', groupName: 'FINANCE ADMIN' },
  { userId: 'ADM001', groupName: 'FINANCE ADMIN' },
  { userId: 'FIN002', groupName: 'FINANCE USER' },
  { userId: 'ACC003', groupName: 'ACCOUNTS TEAM' },
  { userId: 'AUD004', groupName: 'AUDIT GROUP' },
  { userId: 'MGR006', groupName: 'MANAGEMENT' },
  { userId: 'OPS005', groupName: 'FINANCE USER' }
];

// Company Setup under Master Data Setup
const companyMaster = [
  { code: 'COMP01', name: 'Global Holdings Ltd' },
  { code: 'COMP02', name: 'Enterprise Finance Corp' },
  { code: 'COMP03', name: 'Pacific Trading Co' },
  { code: 'COMP04', name: 'Atlantic Logistics Corp' },
  { code: 'COMP05', name: 'Nordic Industries AB' }
];

// Users Per Company Association Records (State)
let usersPerCompanyData = [
  { companyCode: 'COMP01', userId: 'UNSS0P4', isDefault: true },
  { companyCode: 'COMP01', userId: 'FIN002', isDefault: true },
  { companyCode: 'COMP01', userId: 'ACC003', isDefault: true },
  { companyCode: 'COMP01', userId: 'ADM001', isDefault: false },
  { companyCode: 'COMP02', userId: 'UNSS0P4', isDefault: false },
  { companyCode: 'COMP02', userId: 'ADM001', isDefault: true },
  { companyCode: 'COMP02', userId: 'AUD004', isDefault: true },
  { companyCode: 'COMP03', userId: 'MGR006', isDefault: true },
  { companyCode: 'COMP03', userId: 'OPS005', isDefault: true }
];

// Payment Terms Default Sample Data
const defaultPaymentTerms = [
  { company: 'COMP01', code: 'NET15', desc: '15 Days Net', days: 15, commercialYear: 'No', endOfMonth: 'No' },
  { company: 'COMP01', code: 'NET30', desc: '30 Days Net', days: 30, commercialYear: 'No', endOfMonth: 'No' },
  { company: 'COMP01', code: 'NET60', desc: '60 Days Net', days: 60, commercialYear: 'No', endOfMonth: 'No' },
  { company: 'COMP01', code: 'EOM30', desc: 'End of Month + 30 Days', days: 30, commercialYear: 'No', endOfMonth: 'Yes' },
  { company: 'COMP02', code: 'COD', desc: 'Cash On Delivery', days: 0, commercialYear: 'No', endOfMonth: 'No' },
  { company: 'COMP02', code: 'CIA', desc: 'Cash In Advance', days: 0, commercialYear: 'No', endOfMonth: 'No' },
  { company: 'COMP02', code: 'COM360', desc: 'Commercial Year Terms', days: 90, commercialYear: 'Yes', endOfMonth: 'No' },
  { company: 'COMP03', code: '2/10NET30', desc: '2% Discount in 10 Days, Net 30', days: 30, commercialYear: 'No', endOfMonth: 'No' }
];

// Authority Classes Master Data (State)
let authorityClassesData = [
  { authorityClass: 'ADMIN', description: 'Full Financial System Authority Class' },
  { authorityClass: 'GL_APPROV', description: 'General Ledger Voucher Approval Class' },
  { authorityClass: 'AP_SUPER', description: 'Accounts Payable Supervisor Authority' },
  { authorityClass: 'AR_CLERK', description: 'Accounts Receivable Entry Authority' },
  { authorityClass: 'TAX_SPEC', description: 'Tax Operations & Settlement Authority' },
  { authorityClass: 'TREASURY', description: 'Treasury & Cash Management Authority' }
];

// Authority Combinations Master Data (State)
let authorityCombinationsData = [
  { authorityClass: 'ADMIN', allowed: true, account: '%', costCenter: '%', project: '%' },
  { authorityClass: 'GL_APPROV', allowed: true, account: '1000..3999', costCenter: 'CC100..CC199', project: '%' },
  { authorityClass: 'AP_SUPER', allowed: true, account: '2000..2999', costCenter: 'CC101', project: 'PRJ_AP' },
  { authorityClass: 'AR_CLERK', allowed: true, account: '1100..1299', costCenter: 'CC102', project: '%' },
  { authorityClass: 'TAX_SPEC', allowed: true, account: '2200..2299', costCenter: '%', project: 'TAX_2026' },
  { authorityClass: 'TREASURY', allowed: true, account: '1010..1090', costCenter: 'CC200', project: 'TREAS_OP' },
  { authorityClass: 'AP_SUPER', allowed: false, account: '9000..9999', costCenter: '%', project: '%' }
];

// Users per Authority Class Association Records (State)
let usersPerAuthorityClassData = [
  { userId: 'UNSS0P4', authorityClass: 'ADMIN' },
  { userId: 'ADM001', authorityClass: 'ADMIN' },
  { userId: 'FIN002', authorityClass: 'GL_APPROV' },
  { userId: 'ACC003', authorityClass: 'AP_SUPER' },
  { userId: 'OPS005', authorityClass: 'AR_CLERK' },
  { userId: 'AUD004', authorityClass: 'TAX_SPEC' },
  { userId: 'MGR006', authorityClass: 'TREASURY' }
];

// Ledger Master Data (Pre-existing ERP Ledger directory)
const ledgerMaster = [
  { ledgerId: 'GL01', ledgerCode: 'GL01', ledgerName: '01 - General Ledger', type: 'Primary General Ledger', description: 'Primary General Ledger for all enterprise financial transactions' },
  { ledgerId: 'SIM01', ledgerCode: 'SIM01', ledgerName: '02 - Simulation Ledger', type: 'Simulation / Forecasting', description: 'Simulation Ledger for budget forecasting and what-if scenarios' },
  { ledgerId: 'PL01', ledgerCode: 'PL01', ledgerName: '03 - Parallel Ledger', type: 'Statutory / IFRS', description: 'Parallel IFRS / Statutory Accounting Ledger' }
];

// Nominal Accounts / Cash Accounts Master Data (State)
let nominalAccountsData = [
  {
    shortName: 'BAD DEBTS',
    paymentInstitute: 'BAD DEBTS',
    currency: 'GBP',
    accountNumber: '000',
    description: 'BAD DEBTS',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'BAD DEBTS',
    name: 'BAD DEBTS',
    type: 'Expense',
    group: 'Operating Expenses',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'CAPITAL ON TAP (CC)',
    paymentInstitute: 'CC',
    currency: 'GBP',
    accountNumber: '4397-4400-6685-9563',
    description: 'CAPITAL ON TAP (CC) 9563',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'CAPITAL ON TAP (CC)',
    name: 'CAPITAL ON TAP (CC) 9563',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'CASH-HY',
    paymentInstitute: 'CASH-HY',
    currency: 'GBP',
    accountNumber: '1234',
    description: 'Cash Account - HY',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'CASH-HY',
    name: 'Cash Account - HY',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'CURRAC',
    paymentInstitute: 'NATWEST',
    currency: 'GBP',
    accountNumber: '24661619',
    description: 'Natwest Current Account-10',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'CURRAC',
    name: 'Natwest Current Account-10',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'CURRAC (DD)',
    paymentInstitute: 'NATWEST (DD)',
    currency: 'GBP',
    accountNumber: '25270508',
    description: 'Natwest Current Account-10',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'CURRAC (DD)',
    name: 'Natwest Current Account-10',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'CURRAC - CZK',
    paymentInstitute: 'HSBC CURR (CZK)',
    currency: 'CZK',
    accountNumber: '27684369',
    description: 'Do not Use',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'CURRAC - CZK',
    name: 'Do not Use',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Inactive'
  },
  {
    shortName: 'CURRAC - PLN',
    paymentInstitute: 'HSBC CURR (PLN)',
    currency: 'PLN',
    accountNumber: '27684393',
    description: 'Do not Use',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'CURRAC - PLN',
    name: 'Do not Use',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Inactive'
  },
  {
    shortName: 'CURRAC WAYMADE (DD)',
    paymentInstitute: 'NATWEST WAYMADE (DD)',
    currency: 'GBP',
    accountNumber: '25550640',
    description: 'Natwest Current Account-10',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'CURRAC WAYMADE (DD)',
    name: 'Natwest Current Account-10',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'EURAC',
    paymentInstitute: 'NATWEST',
    currency: 'EUR',
    accountNumber: '27629872',
    description: 'Natwest Current Account-10',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'EURAC',
    name: 'Natwest Current Account-10',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'FACFLOW',
    paymentInstitute: 'RBS',
    currency: 'GBP',
    accountNumber: 'C5333',
    description: 'RBS Facflow-2103',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'FACFLOW',
    name: 'RBS Facflow-2103',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'FACFLOW-STOCK(E)',
    paymentInstitute: 'RBS',
    currency: 'GBP',
    accountNumber: '000',
    description: 'RBS Facflow-1009',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'FACFLOW-STOCK(E)',
    name: 'RBS Facflow-1009',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'FACFLOW-WAYMADE',
    paymentInstitute: 'RBS-W',
    currency: 'GBP',
    accountNumber: 'C5337',
    description: 'RBS Facflow-2156',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'FACFLOW-WAYMADE',
    name: 'RBS Facflow-2156',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'GROUP (FIN) EURO',
    paymentInstitute: 'NATWEST GROUP EURO',
    currency: 'EUR',
    accountNumber: '27684342',
    description: 'Natwest- Group Finance (EU)',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'GROUP (FIN) EURO',
    name: 'Natwest- Group Finance (EU)',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'GROUP (FIN) GBP',
    paymentInstitute: 'NATWEST GROUP GBP',
    currency: 'GBP',
    accountNumber: '25547747',
    description: 'Natwest- Group Finance (GB)',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'GROUP (FIN) GBP',
    name: 'Natwest- Group Finance (GB)',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC CURR (EURO)',
    paymentInstitute: 'HSBC CURR (EURO)',
    currency: 'EUR',
    accountNumber: '400515-82819007',
    description: 'HSBC CURR (EURO) 9007',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC CURR (EURO)',
    name: 'HSBC CURR (EURO) 9007',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC CURR (GBP)',
    paymentInstitute: 'HSBC CURR (GBP)',
    currency: 'GBP',
    accountNumber: '403804-74726278',
    description: 'HSBC CURR (GBP) 6278',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC CURR (GBP)',
    name: 'HSBC CURR (GBP) 6278',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC GOW CURR (CZK)',
    paymentInstitute: 'HSBC CURR (CZK)',
    currency: 'CZK',
    accountNumber: '400515-82810490',
    description: 'HSBC GOW CURR (CZK) 049',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC GOW CURR (CZK)',
    name: 'HSBC GOW CURR (CZK) 049',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC GOW CURR (DKK)',
    paymentInstitute: 'HSBC CURR (DKK)',
    currency: 'DKK',
    accountNumber: '400515-82810517',
    description: 'HSBC GOW CURR (DKK) 051',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC GOW CURR (DKK)',
    name: 'HSBC GOW CURR (DKK) 051',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC GOW CURR (EURO)',
    paymentInstitute: 'HSBC CURR (EURO)',
    currency: 'EUR',
    accountNumber: '400515-82817369',
    description: 'HSBC GOW CURR (EURO) 736',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC GOW CURR (EURO)',
    name: 'HSBC GOW CURR (EURO) 736',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC GOW CURR (GBP)',
    paymentInstitute: 'HSBC CURR (GBP)',
    currency: 'GBP',
    accountNumber: '403804-24661591',
    description: 'HSBC GOW CURR (GBP) 159',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC GOW CURR (GBP)',
    name: 'HSBC GOW CURR (GBP) 159',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC GOW CURR (NOK)',
    paymentInstitute: 'HSBC CURR (NOK)',
    currency: 'NOK',
    accountNumber: '400515-82817774',
    description: 'HSBC GOW CURR (NOK) 774',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC GOW CURR (NOK)',
    name: 'HSBC GOW CURR (NOK) 774',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC GOW CURR (PLN)',
    paymentInstitute: 'HSBC CURR (PLN)',
    currency: 'PLN',
    accountNumber: '400515-82817350',
    description: 'HSBC GOW CURR (PLN) 735',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC GOW CURR (PLN)',
    name: 'HSBC GOW CURR (PLN) 735',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC GOW CURR (USD)',
    paymentInstitute: 'HSBC CURR (USD)',
    currency: 'USD',
    accountNumber: '400515-82810525',
    description: 'HSBC GOW CURR (USD) 052',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC GOW CURR (USD)',
    name: 'HSBC GOW CURR (USD) 052',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC ID (EURO)',
    paymentInstitute: 'HSBC ID (EURO)',
    currency: 'EUR',
    accountNumber: '34308',
    description: 'HSBC ID (EURO) 34308',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC ID (EURO)',
    name: 'HSBC ID (EURO) 34308',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC ID (GBP)',
    paymentInstitute: 'HSBC ID (GBP)',
    currency: 'GBP',
    accountNumber: '34307',
    description: 'HSBC ID (GBP) 34307',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC ID (GBP)',
    name: 'HSBC ID (GBP) 34307',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'HSBC LAX ID (GBP)',
    paymentInstitute: 'HSBC LAX ID (GBP)',
    currency: 'GBP',
    accountNumber: '46279',
    description: 'HSBC ID (GBP) 46279',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'HSBC LAX ID (GBP)',
    name: 'HSBC ID (GBP) 46279',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'I/CO CASH',
    paymentInstitute: 'I/CO NET',
    currency: 'GBP',
    accountNumber: 'IC - GLAX',
    description: 'I/Co Netting with GLAX',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'I/CO CASH',
    name: 'I/Co Netting with GLAX',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'I/CO CASH BNS',
    paymentInstitute: 'I/CO NET BNS',
    currency: 'GBP',
    accountNumber: 'IC - BNS',
    description: 'I/Co Cash BNS',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'I/CO CASH BNS',
    name: 'I/Co Cash BNS',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'I/CO CASH GHL',
    paymentInstitute: 'I/CO NET GHL',
    currency: 'GBP',
    accountNumber: 'IC - GHL',
    description: 'I/Co Cash GHL',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'I/CO CASH GHL',
    name: 'I/Co Cash GHL',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'I/CO CASH GLAX',
    paymentInstitute: 'I/CO NET GLAX',
    currency: 'GBP',
    accountNumber: 'IC - GLAX',
    description: 'I/Co Cash GLAX',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'I/CO CASH GLAX',
    name: 'I/Co Cash GLAX',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'I/CO CASH LBNS',
    paymentInstitute: 'I/CO NET LBNS',
    currency: 'GBP',
    accountNumber: 'IC - LBNS',
    description: 'I/Co Cash LBNS',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'I/CO CASH LBNS',
    name: 'I/Co Cash LBNS',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'I/CO CASH SPE',
    paymentInstitute: 'I/CO NET SPE',
    currency: 'GBP',
    accountNumber: 'IC - SPE',
    description: 'I/Co Cash SPE',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'I/CO CASH SPE',
    name: 'I/Co Cash SPE',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'NET AP/AR',
    paymentInstitute: 'CASH',
    currency: 'GBP',
    accountNumber: '123456',
    description: 'Netting AP/AR',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'NET AP/AR',
    name: 'Netting AP/AR',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'NET AP/AR (EURO)',
    paymentInstitute: 'CASH',
    currency: 'EUR',
    accountNumber: '123456',
    description: 'Netting AP/AR (Euro)',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'NET AP/AR (EURO)',
    name: 'Netting AP/AR (Euro)',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'PROPERTY',
    paymentInstitute: 'PROPERTY',
    currency: 'GBP',
    accountNumber: 'TS336',
    description: 'RBS FACTORING',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'PROPERTY',
    name: 'RBS FACTORING',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: 'WRITE OFF',
    paymentInstitute: 'WRITE OFF',
    currency: 'GBP',
    accountNumber: '000',
    description: 'WRITE OFF',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: '',
    voucherTypeDesc: '',
    instituteCode: '',
    officeCode: '',
    code: 'WRITE OFF',
    name: 'WRITE OFF',
    type: 'Expense',
    group: 'Operating Expenses',
    balance: 'Debit',
    status: 'Active'
  },
  // Maintained accounts for Account Linking integration
  {
    shortName: '5100',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '5100-001',
    description: 'Office Rent Expense',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'EX',
    voucherTypeDesc: 'Expense Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '5100',
    name: 'Office Rent Expense',
    type: 'Expense',
    group: 'Operating Expenses',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: '5200',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '5200-001',
    description: 'Salary Expense',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'PY',
    voucherTypeDesc: 'Payroll Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '5200',
    name: 'Salary Expense',
    type: 'Expense',
    group: 'Payroll & Staff Expenses',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: '4100',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '4100-001',
    description: 'Sales Revenue',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'RV',
    voucherTypeDesc: 'Revenue Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '4100',
    name: 'Sales Revenue',
    type: 'Revenue',
    group: 'Operating Revenue',
    balance: 'Credit',
    status: 'Active'
  },
  {
    shortName: '1010',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '1010-001',
    description: 'Bank Account',
    defaultFlag: true,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'CB',
    voucherTypeDesc: 'Cash Book Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '1010',
    name: 'Bank Account',
    type: 'Asset',
    group: 'Cash & Cash Equivalents',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: '1100',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '1100-001',
    description: 'Accounts Receivable',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'AR',
    voucherTypeDesc: 'Receivables Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '1100',
    name: 'Accounts Receivable',
    type: 'Asset',
    group: 'Current Assets',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: '2000',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '2000-001',
    description: 'Accounts Payable',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'AP',
    voucherTypeDesc: 'Payables Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '2000',
    name: 'Accounts Payable',
    type: 'Liability',
    group: 'Current Liabilities',
    balance: 'Credit',
    status: 'Active'
  },
  {
    shortName: '5300',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '5300-001',
    description: 'Utilities Expense',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'EX',
    voucherTypeDesc: 'Expense Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '5300',
    name: 'Utilities Expense',
    type: 'Expense',
    group: 'Operating Expenses',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: '4200',
    paymentInstitute: 'BANK-US',
    currency: 'USD',
    accountNumber: '4200-001',
    description: 'Consulting Revenue',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'RV',
    voucherTypeDesc: 'Revenue Voucher',
    instituteCode: 'INST-01',
    officeCode: 'OFF-01',
    code: '4200',
    name: 'Consulting Revenue',
    type: 'Revenue',
    group: 'Operating Revenue',
    balance: 'Credit',
    status: 'Active'
  },
  {
    shortName: '1100-GOW',
    paymentInstitute: 'NATWEST',
    currency: 'GBP',
    accountNumber: '1100-GOW-01',
    description: 'Inter Co Debtors (Gowrie)',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'IP',
    voucherTypeDesc: 'Customer Claims, Invoice',
    instituteCode: 'NATWEST',
    officeCode: 'OFF-01',
    code: '1100-GOW',
    name: 'Inter Co Debtors (Gowrie)',
    type: 'Asset',
    group: 'Intercompany Receivables',
    balance: 'Debit',
    status: 'Active'
  },
  {
    shortName: '1100-SYR',
    paymentInstitute: 'NATWEST',
    currency: 'GBP',
    accountNumber: '1100-SYR-01',
    description: 'Inter Co Debtors (Syri)',
    defaultFlag: false,
    intlCashAccount: false,
    statementNotEditable: false,
    associatedCashAccount: '',
    balanceMethod: 'Detailed',
    voucherType: 'IP',
    voucherTypeDesc: 'Customer Claims, Invoice',
    instituteCode: 'NATWEST',
    officeCode: 'OFF-01',
    code: '1100-SYR',
    name: 'Inter Co Debtors (Syri)',
    type: 'Asset',
    group: 'Intercompany Receivables',
    balance: 'Debit',
    status: 'Active'
  }
];

// Account Linking / Posting Control Details Data (State from Screenshot)
let accountLinkingData = [
  {
    id: 'AL001',
    postingType: 'IP2',
    codePartName: 'Account',
    controlType: 'IC2',
    customerGroup: 'IC-GOW',
    controlTypeDesc: 'Inter Co Debtors (Gowrie)',
    accountCode: '1100-GOW',
    codePartDesc: 'Inter Co Debtors (Gowrie)',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/07/2017',
    status: 'Active'
  },
  {
    id: 'AL002',
    postingType: 'IP2',
    codePartName: 'Account',
    controlType: 'IC2',
    customerGroup: 'IC-SYRI',
    controlTypeDesc: 'IC-SYRI',
    accountCode: '1100-SYR',
    codePartDesc: 'Inter Co Debtors (Syri)',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/07/2017',
    status: 'Active'
  },
  {
    id: 'AL003',
    postingType: 'IP1',
    codePartName: 'Account',
    controlType: 'IC1',
    customerGroup: 'DOM-SUP',
    controlTypeDesc: 'Domestic Trade Payables',
    accountCode: '2000',
    codePartDesc: 'Accounts Payable',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/01/2014',
    status: 'Active'
  },
  {
    id: 'AL004',
    postingType: 'IP1',
    codePartName: 'Account',
    controlType: 'IC1',
    customerGroup: 'INT-SUP',
    controlTypeDesc: 'International Suppliers',
    accountCode: '2000',
    codePartDesc: 'Accounts Payable',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/01/2014',
    status: 'Active'
  },
  {
    id: 'AL005',
    postingType: 'IP3',
    codePartName: 'Account',
    controlType: 'IC3',
    customerGroup: 'VAT-STD',
    controlTypeDesc: 'Standard Output Tax',
    accountCode: '1100',
    codePartDesc: 'Accounts Receivable',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/01/2014',
    status: 'Active'
  },
  {
    id: 'AL006',
    postingType: 'IP4',
    codePartName: 'Account',
    controlType: 'IC4',
    customerGroup: 'VAT-INP',
    controlTypeDesc: 'Input Tax Disbursed',
    accountCode: '2000',
    codePartDesc: 'Accounts Payable',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/01/2014',
    status: 'Active'
  },
  {
    id: 'AL007',
    postingType: 'IP5',
    codePartName: 'Account',
    controlType: 'IC5',
    customerGroup: 'PRE-COST',
    controlTypeDesc: 'Preliminary Project Costing',
    accountCode: '5100',
    codePartDesc: 'Office Rent Expense',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/01/2015',
    status: 'Active'
  },
  {
    id: 'AL008',
    postingType: 'IP17',
    codePartName: 'Account',
    controlType: 'IC17',
    customerGroup: 'ADV-CLM',
    controlTypeDesc: 'Customer Advance Claims',
    accountCode: '1100',
    codePartDesc: 'Accounts Receivable',
    specControlTyp: '',
    specControlTypDesc: '',
    specNoDetails: '',
    specNoCtValue: '',
    validFrom: '01/01/2016',
    status: 'Active'
  }
];

// Function Groups Master Data (Pre-existing ERP Function Groups)
const functionGroupsMaster = [
  { code: 'A', name: 'Direct Cash Payment' },
  { code: 'B', name: 'Direct Cash Receipt' },
  { code: 'C', name: 'Customer Invoices' },
  { code: 'D', name: 'Supplier Invoices' },
  { code: 'F', name: 'Currency Revaluation' },
  { code: 'J', name: 'General Journal Entry' },
  { code: 'K', name: 'Customer Payments' },
  { code: 'M', name: 'Manual Journal Entries' },
  { code: 'U', name: 'Supplier Payments' },
  { code: 'Z', name: 'Year End Closing' }
];

// Voucher Types Master Data (State)
let voucherTypesData = [
  {
    code: 'M',
    description: 'Manual Journal Voucher',
    ledger: '01 - General Ledger',
    ledgerId: 'GL01',
    balanceMandatory: true,
    useManualInternalMethods: false,
    automaticAllotment: true,
    singleFunctionGroup: false,
    simulationVoucher: false,
    functionGroups: [
      {
        functionGroup: 'M',
        description: 'Manual Journal Entries',
        optionalAutoBalance: false,
        storeOriginal: true,
        autoAllotmentReq: true,
        singleGroupReq: false
      },
      {
        functionGroup: 'J',
        description: 'General Journal Entry',
        optionalAutoBalance: false,
        storeOriginal: true,
        autoAllotmentReq: true,
        singleGroupReq: false
      }
    ]
  },
  {
    code: 'F',
    description: 'Supplier Invoice Voucher',
    ledger: '01 - General Ledger',
    ledgerId: 'GL01',
    balanceMandatory: true,
    useManualInternalMethods: false,
    automaticAllotment: true,
    singleFunctionGroup: true,
    simulationVoucher: false,
    functionGroups: [
      {
        functionGroup: 'D',
        description: 'Supplier Invoices',
        optionalAutoBalance: false,
        storeOriginal: true,
        autoAllotmentReq: true,
        singleGroupReq: true
      },
      {
        functionGroup: 'U',
        description: 'Supplier Payments',
        optionalAutoBalance: true,
        storeOriginal: true,
        autoAllotmentReq: true,
        singleGroupReq: false
      }
    ]
  },
  {
    code: 'J',
    description: 'Customer Invoice & Revenue',
    ledger: '01 - General Ledger',
    ledgerId: 'GL01',
    balanceMandatory: true,
    useManualInternalMethods: false,
    automaticAllotment: true,
    singleFunctionGroup: false,
    simulationVoucher: false,
    functionGroups: [
      {
        functionGroup: 'C',
        description: 'Customer Invoices',
        optionalAutoBalance: false,
        storeOriginal: true,
        autoAllotmentReq: true,
        singleGroupReq: false
      },
      {
        functionGroup: 'K',
        description: 'Customer Payments',
        optionalAutoBalance: true,
        storeOriginal: true,
        autoAllotmentReq: true,
        singleGroupReq: false
      }
    ]
  },
  {
    code: 'S',
    description: 'Simulation & Budgetary Adjustment',
    ledger: '02 - Simulation Ledger',
    ledgerId: 'SIM01',
    balanceMandatory: false,
    useManualInternalMethods: true,
    automaticAllotment: false,
    singleFunctionGroup: false,
    simulationVoucher: true,
    functionGroups: [
      {
        functionGroup: 'A',
        description: 'Direct Cash Payment',
        optionalAutoBalance: true,
        storeOriginal: false,
        autoAllotmentReq: false,
        singleGroupReq: false
      }
    ]
  },
  {
    code: 'U',
    description: 'Direct Bank Settlement',
    ledger: '01 - General Ledger',
    ledgerId: 'GL01',
    balanceMandatory: true,
    useManualInternalMethods: true,
    automaticAllotment: true,
    singleFunctionGroup: true,
    simulationVoucher: false,
    functionGroups: [
      {
        functionGroup: 'B',
        description: 'Direct Cash Receipt',
        optionalAutoBalance: false,
        storeOriginal: true,
        autoAllotmentReq: true,
        singleGroupReq: true
      }
    ]
  }
];

// Define Voucher Type State
let vtActiveCode = 'M';
let vtSelectedFgIndex = null;
let vtCurrentPage = 1;
let vtPageSize = 1000;

// Query Voucher Types State
let qvtCurrentDataset = [];
let qvtSelectedRowIndex = null;
let qvtCurrentPage = 1;
let qvtPageSize = 1000;

// =============================================================================
// APPLICATION STATE
// =============================================================================
let currentScreen = 'query-voucher-types'; // 'users-per-user-group' | 'user-groups' | 'users-per-company' | 'define-voucher-type' | 'query-voucher-types' | 'payment-terms'

// Users Per User Group State
let upugCurrentDataset = [...usersPerUserGroupData];
let upugSelectedRowIndex = null;
let upugCurrentPage = 1;
let upugPageSize = 1000;

// User Groups State
let ugCurrentDataset = [...userGroupsData];
let ugSelectedRowIndex = null;
let ugCurrentPage = 1;
let ugPageSize = 1000;

// Users Per Company State
let upcSelectedCompany = '';
let upcCurrentDataset = [];
let upcSelectedRowIndex = null;
let upcCurrentPage = 1;
let upcPageSize = 1000;

// Payment Terms State
let ptDataset = [];
let ptSelectedRowIndex = null;
let ptCurrentPage = 1;
let ptPageSize = 1000;

// Nominal Account State
let naCurrentDataset = [];
let naSelectedRowIndex = null;
let naCurrentPage = 1;
let naPageSize = 1000;
let naEditingIndex = null;

// Account Linking State
let alCurrentDataset = [];
let alSelectedRowIndex = null;
let alCurrentPage = 1;
let alPageSize = 1000;
let alEditingIndex = null;

// =============================================================================
// DOM INITIALIZATION
// =============================================================================
document.addEventListener('DOMContentLoaded', () => {
  initUsersPerUserGroupModule();
  initUserGroupsModule();
  initUsersPerCompanyModule();
  initDefineVoucherTypeModule();
  initQueryVoucherTypesModule();
  initPaymentTermsModule();
  initAuthorityClassesModule();
  initAuthorityCombinationsModule();
  initUsersPerAuthorityClassModule();
  initNominalAccountModule();
  initAccountLinkingModule();
  initGlobalNavigation();
  initUserBadge();

  // Load screen based on URL hash or default to query-voucher-types
  const initialHash = window.location.hash;
  if (initialHash === '#user-groups') {
    switchScreen('user-groups');
  } else if (initialHash === '#user-per-company') {
    switchScreen('users-per-company');
  } else if (initialHash === '#users-per-user-group') {
    switchScreen('users-per-user-group');
  } else if (initialHash === '#define-voucher-type') {
    switchScreen('define-voucher-type');
  } else if (initialHash === '#payment-terms') {
    switchScreen('payment-terms');
  } else if (initialHash === '#authority-classes') {
    switchScreen('authority-classes');
  } else if (initialHash === '#authority-combinations') {
    switchScreen('authority-combinations');
  } else if (initialHash === '#users-per-authority-class') {
    switchScreen('users-per-authority-class');
  } else if (initialHash === '#nominal-account') {
    switchScreen('nominal-account');
  } else if (initialHash === '#account-linking') {
    switchScreen('account-linking');
  } else {
    switchScreen('query-voucher-types');
  }
});

// =============================================================================
// MODULE 1: USERS PER USER GROUP (MASTER SCREEN)
// =============================================================================
function initUsersPerUserGroupModule() {
  const searchUserInput = document.getElementById('upugSearchUser');
  const filterGroupSelect = document.getElementById('upugFilterGroup');
  const btnSearch = document.getElementById('btnUpugSearch');
  const btnReset = document.getElementById('btnUpugReset');
  const btnHeaderAdd = document.getElementById('btnHeaderAddUpug');
  const btnAddRow = document.getElementById('btnUpugAddRow');
  const btnDeleteRow = document.getElementById('btnUpugDeleteRow');
  const btnDownload = document.getElementById('btnUpugDownload');
  const btnCollapse = document.getElementById('btnCollapseUpugGrid');
  const gridViewport = document.getElementById('upugGridViewport');

  const pageSizeSelect = document.getElementById('upugPageSizeSelect');
  const pageNumberInput = document.getElementById('upugPageNumberInput');
  const btnFirst = document.getElementById('btnUpugFirstPage');
  const btnPrev = document.getElementById('btnUpugPrevPage');
  const btnNext = document.getElementById('btnUpugNextPage');
  const btnLast = document.getElementById('btnUpugLastPage');

  const addModalOverlay = document.getElementById('addUpugModalOverlay');
  const addForm = document.getElementById('addUpugForm');
  const modalUserId = document.getElementById('modalUpugUserId');
  const modalUserName = document.getElementById('modalUpugUserName');
  const modalGroup = document.getElementById('modalUpugGroup');
  const modalGroupDesc = document.getElementById('modalUpugGroupDesc');
  const addModalAlert = document.getElementById('addUpugModalAlert');
  const addModalCloseBtn = document.getElementById('addUpugModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addUpugModalCancelBtn');

  const viewModalOverlay = document.getElementById('viewUpugModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewUpugModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewUpugModalOkBtn');
  const viewUserId = document.getElementById('viewUpugUserId');
  const viewUserName = document.getElementById('viewUpugUserName');
  const viewGroupName = document.getElementById('viewUpugGroupName');
  const viewGroupDesc = document.getElementById('viewUpugGroupDesc');

  function populateFilterGroupDropdown() {
    filterGroupSelect.innerHTML = '<option value="">All User Groups</option>';
    userGroupsData.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g.groupName;
      opt.textContent = g.groupName;
      filterGroupSelect.appendChild(opt);
    });
  }

  function populateAddModalDropdowns() {
    modalUserId.innerHTML = '<option value="">-- Select User ID --</option>';
    userMaster.forEach(u => {
      const opt = document.createElement('option');
      opt.value = u.id;
      opt.textContent = `${u.id} - ${u.name}`;
      modalUserId.appendChild(opt);
    });

    modalGroup.innerHTML = '<option value="">-- Select User Group --</option>';
    userGroupsData.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g.groupName;
      opt.textContent = g.groupName;
      modalGroup.appendChild(opt);
    });
  }

  modalUserId.addEventListener('change', () => {
    addModalAlert.innerHTML = '';
    const uid = modalUserId.value;
    const user = userMaster.find(u => u.id === uid);
    modalUserName.value = user ? user.name : '';
    checkDuplicateSelection();
  });

  modalGroup.addEventListener('change', () => {
    addModalAlert.innerHTML = '';
    const gName = modalGroup.value;
    const group = userGroupsData.find(g => g.groupName === gName);
    modalGroupDesc.value = group ? group.description : '';
    checkDuplicateSelection();
  });

  function checkDuplicateSelection() {
    const uid = modalUserId.value;
    const gName = modalGroup.value;
    if (uid && gName) {
      const isDup = usersPerUserGroupData.some(r => r.userId === uid && r.groupName === gName);
      if (isDup) {
        addModalAlert.innerHTML = `
          <div class="modal-alert modal-alert-error">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>User "${uid}" is already assigned to user group "${gName}". Duplicate assignment is not allowed.</span>
          </div>
        `;
      }
    }
  }

  function applyFilter() {
    const userQuery = searchUserInput.value.trim().toLowerCase();
    const groupFilter = filterGroupSelect.value;

    let filtered = [...usersPerUserGroupData];
    if (userQuery) {
      filtered = filtered.filter(r => {
        const user = userMaster.find(u => u.id === r.userId);
        const uName = user ? user.name.toLowerCase() : '';
        return r.userId.toLowerCase().includes(userQuery) || uName.includes(userQuery);
      });
    }

    if (groupFilter) {
      filtered = filtered.filter(r => r.groupName === groupFilter);
    }

    upugCurrentDataset = filtered;
    upugSelectedRowIndex = null;
    upugCurrentPage = 1;
    renderUpugTable();
  }

  btnSearch.addEventListener('click', () => {
    applyFilter();
    showToast(`Loaded ${upugCurrentDataset.length} user assignment(s).`, 'info');
  });

  searchUserInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') applyFilter();
  });

  filterGroupSelect.addEventListener('change', applyFilter);

  btnReset.addEventListener('click', () => {
    searchUserInput.value = '';
    filterGroupSelect.value = '';
    upugCurrentDataset = [...usersPerUserGroupData];
    upugSelectedRowIndex = null;
    upugCurrentPage = 1;
    renderUpugTable();
    showToast('Filter reset.', 'info');
  });

  function openAddModal() {
    addForm.reset();
    modalUserName.value = '';
    modalGroupDesc.value = '';
    addModalAlert.innerHTML = '';
    populateAddModalDropdowns();
    addModalOverlay.classList.add('active');
  }

  btnHeaderAdd.addEventListener('click', openAddModal);
  btnAddRow.addEventListener('click', openAddModal);

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const uid = modalUserId.value;
    const gName = modalGroup.value;

    if (!uid) {
      addModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>User ID is mandatory. Please select a user.</span>
        </div>
      `;
      return;
    }

    if (!gName) {
      addModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>User Group is mandatory. Please select a user group.</span>
        </div>
      `;
      return;
    }

    const isDup = usersPerUserGroupData.some(r => r.userId === uid && r.groupName === gName);
    if (isDup) {
      addModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>User "${uid}" is already assigned to user group "${gName}". Duplicate assignment is not allowed.</span>
        </div>
      `;
      return;
    }

    usersPerUserGroupData.unshift({ userId: uid, groupName: gName });
    addModalOverlay.classList.remove('active');
    applyFilter();
    showToast(`User "${uid}" successfully assigned to "${gName}".`, 'success');
  });

  addModalCloseBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));
  addModalCancelBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));

  window.handleViewUpug = function(userId, groupName) {
    const user = userMaster.find(u => u.id === userId);
    const group = userGroupsData.find(g => g.groupName === groupName);

    viewUserId.textContent = userId;
    viewUserName.textContent = user ? user.name : 'Unknown User';
    viewGroupName.textContent = groupName;
    viewGroupDesc.textContent = group ? group.description : '';

    viewModalOverlay.classList.add('active');
  };

  viewModalCloseBtn.addEventListener('click', () => viewModalOverlay.classList.remove('active'));
  viewModalOkBtn.addEventListener('click', () => viewModalOverlay.classList.remove('active'));

  window.handleDeleteUpug = function(userId, groupName) {
    const user = userMaster.find(u => u.id === userId);
    const uName = user ? user.name : userId;

    if (confirm(`Are you sure you want to remove user "${userId} (${uName})" from user group "${groupName}"?`)) {
      const idx = usersPerUserGroupData.findIndex(r => r.userId === userId && r.groupName === groupName);
      if (idx !== -1) {
        usersPerUserGroupData.splice(idx, 1);
        upugSelectedRowIndex = null;
        applyFilter();
        showToast(`Assignment for user "${userId}" removed.`, 'info');
      }
    }
  };

  btnDeleteRow.addEventListener('click', () => {
    if (upugSelectedRowIndex === null || !upugCurrentDataset[upugSelectedRowIndex]) {
      showToast('Please select a record from the grid to delete.', 'warning');
      return;
    }
    const item = upugCurrentDataset[upugSelectedRowIndex];
    window.handleDeleteUpug(item.userId, item.groupName);
  });

  btnDownload.addEventListener('click', () => {
    if (upugCurrentDataset.length === 0) {
      showToast('No records available to download.', 'warning');
      return;
    }
    exportUpugToCSV();
  });

  btnCollapse.addEventListener('click', () => {
    const icon = btnCollapse.querySelector('i');
    if (gridViewport.style.display === 'none') {
      gridViewport.style.display = 'block';
      icon.className = 'fa-solid fa-chevron-up';
    } else {
      gridViewport.style.display = 'none';
      icon.className = 'fa-solid fa-chevron-down';
    }
  });

  pageSizeSelect.addEventListener('change', (e) => {
    upugPageSize = parseInt(e.target.value, 10);
    upugCurrentPage = 1;
    renderUpugTable();
  });

  pageNumberInput.addEventListener('change', (e) => {
    const val = parseInt(e.target.value, 10);
    const totalPages = Math.ceil(upugCurrentDataset.length / upugPageSize) || 1;
    if (val >= 1 && val <= totalPages) {
      upugCurrentPage = val;
    } else {
      pageNumberInput.value = upugCurrentPage;
    }
    renderUpugTable();
  });

  btnFirst.addEventListener('click', () => {
    if (upugCurrentPage > 1) {
      upugCurrentPage = 1;
      renderUpugTable();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (upugCurrentPage > 1) {
      upugCurrentPage--;
      renderUpugTable();
    }
  });

  btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(upugCurrentDataset.length / upugPageSize);
    if (upugCurrentPage < totalPages) {
      upugCurrentPage++;
      renderUpugTable();
    }
  });

  btnLast.addEventListener('click', () => {
    const totalPages = Math.ceil(upugCurrentDataset.length / upugPageSize);
    if (upugCurrentPage < totalPages) {
      upugCurrentPage = totalPages;
      renderUpugTable();
    }
  });

  populateFilterGroupDropdown();
  upugCurrentDataset = [...usersPerUserGroupData];
  renderUpugTable();
}

function renderUpugTable() {
  const tableBody = document.getElementById('upugTableBody');
  const recordStatusText = document.getElementById('upugRecordStatusText');
  const totalPagesText = document.getElementById('upugTotalPagesText');
  const pageNumberInput = document.getElementById('upugPageNumberInput');
  const btnFirst = document.getElementById('btnUpugFirstPage');
  const btnPrev = document.getElementById('btnUpugPrevPage');
  const btnNext = document.getElementById('btnUpugNextPage');
  const btnLast = document.getElementById('btnUpugLastPage');

  tableBody.innerHTML = '';
  const totalRecords = upugCurrentDataset.length;

  if (totalRecords === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.className = 'empty-message-row';
    emptyRow.innerHTML = `
      <td colspan="6" class="empty-message-cell">
        <i class="fa-solid fa-circle-info"></i>
        No users per user group match the search criteria. Click <strong>"Add"</strong> to assign a user to a user group.
      </td>
    `;
    tableBody.appendChild(emptyRow);

    for (let i = 1; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `<td class="empty-cell">&nbsp;</td><td></td><td></td><td></td><td></td><td></td>`;
      tableBody.appendChild(tr);
    }

    totalPagesText.textContent = '0';
    pageNumberInput.value = '1';
    recordStatusText.textContent = 'No records found';
    btnFirst.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;
    btnLast.disabled = true;
    return;
  }

  const totalPages = Math.ceil(totalRecords / upugPageSize) || 1;
  totalPagesText.textContent = totalPages;
  pageNumberInput.value = upugCurrentPage;

  const startIndex = (upugCurrentPage - 1) * upugPageSize;
  const endIndex = Math.min(startIndex + upugPageSize, totalRecords);
  const pageRows = upugCurrentDataset.slice(startIndex, endIndex);

  pageRows.forEach((item, index) => {
    const actualIndex = startIndex + index;
    const srNo = actualIndex + 1;
    const user = userMaster.find(u => u.id === item.userId);
    const userName = user ? user.name : 'Unknown User';
    const group = userGroupsData.find(g => g.groupName === item.groupName);
    const groupDesc = group ? group.description : '';

    const tr = document.createElement('tr');
    tr.className = index % 2 === 0 ? 'row-even' : 'row-odd';
    if (upugSelectedRowIndex === actualIndex) {
      tr.classList.add('selected');
    }

    tr.innerHTML = `
      <td style="text-align: center; font-weight: 600; color: #4b6a84;">${srNo}</td>
      <td style="font-weight: 700; color: #164f78;">${escapeHtml(item.userId)}</td>
      <td style="font-weight: 500;">${escapeHtml(userName)}</td>
      <td style="font-weight: 700; color: #164f78;">${escapeHtml(item.groupName)}</td>
      <td style="font-weight: 500;">${escapeHtml(groupDesc)}</td>
      <td class="table-action-cell">
        <button type="button" class="btn-grid-action btn-view-user" title="View Assignment" onclick="event.stopPropagation(); handleViewUpug('${escapeHtml(item.userId)}', '${escapeHtml(item.groupName)}')">
          <i class="fa-solid fa-eye"></i>
        </button>
        <button type="button" class="btn-grid-action btn-delete-user" title="Remove Assignment" onclick="event.stopPropagation(); handleDeleteUpug('${escapeHtml(item.userId)}', '${escapeHtml(item.groupName)}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;

    tr.addEventListener('click', () => {
      document.querySelectorAll('#upugTableBody tr').forEach(r => r.classList.remove('selected'));
      tr.classList.add('selected');
      upugSelectedRowIndex = actualIndex;
    });

    tableBody.appendChild(tr);
  });

  if (pageRows.length < 10) {
    for (let i = pageRows.length; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `<td class="empty-cell">&nbsp;</td><td></td><td></td><td></td><td></td><td></td>`;
      tableBody.appendChild(tr);
    }
  }

  recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`;
  btnFirst.disabled = upugCurrentPage <= 1;
  btnPrev.disabled = upugCurrentPage <= 1;
  btnNext.disabled = upugCurrentPage >= totalPages;
  btnLast.disabled = upugCurrentPage >= totalPages;
}

function exportUpugToCSV() {
  const headers = ['Sr. No.', 'User ID', 'User Name', 'User Group', 'User Group Description'];
  const rows = upugCurrentDataset.map((item, i) => {
    const user = userMaster.find(u => u.id === item.userId);
    const userName = user ? user.name : 'Unknown User';
    const group = userGroupsData.find(g => g.groupName === item.groupName);
    const groupDesc = group ? group.description : '';
    return [
      i + 1,
      `"${item.userId}"`,
      `"${userName.replace(/"/g, '""')}"`,
      `"${item.groupName}"`,
      `"${groupDesc.replace(/"/g, '""')}"`
    ];
  });

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'Users_Per_User_Group_Export.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// MODULE 2: USER GROUPS MASTER SCREEN
// =============================================================================
function initUserGroupsModule() {
  const searchInput = document.getElementById('ugSearchInput');
  const periodFilterSelect = document.getElementById('ugPeriodFilterSelect');
  const btnSearch = document.getElementById('btnUgSearch');
  const btnReset = document.getElementById('btnUgReset');
  const btnHeaderAddUg = document.getElementById('btnHeaderAddUg');
  const btnAddRow = document.getElementById('btnUgAddRow');
  const btnDeleteRow = document.getElementById('btnUgDeleteRow');
  const btnDownload = document.getElementById('btnUgDownload');
  const btnCollapse = document.getElementById('btnCollapseUgGrid');
  const gridViewport = document.getElementById('ugGridViewport');

  const pageSizeSelect = document.getElementById('ugPageSizeSelect');
  const pageNumberInput = document.getElementById('ugPageNumberInput');
  const btnFirst = document.getElementById('btnUgFirstPage');
  const btnPrev = document.getElementById('btnUgPrevPage');
  const btnNext = document.getElementById('btnUgNextPage');
  const btnLast = document.getElementById('btnUgLastPage');

  const addModalOverlay = document.getElementById('addUgModalOverlay');
  const addForm = document.getElementById('addUgForm');
  const modalUgName = document.getElementById('modalUgName');
  const modalUgDesc = document.getElementById('modalUgDesc');
  const modalUgPeriodsList = document.getElementById('modalUgPeriodsList');
  const modalUgPeriodCount = document.getElementById('modalUgPeriodCount');
  const addModalAlert = document.getElementById('addUgModalAlert');
  const addModalCloseBtn = document.getElementById('addUgModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addUgModalCancelBtn');

  const btnSelectAll = document.getElementById('btnUgSelectAllPeriods');
  const btnClearAll = document.getElementById('btnUgClearPeriods');
  const btnSelectOpen = document.getElementById('btnUgSelectOpenPeriods');

  const editModalOverlay = document.getElementById('editUgModalOverlay');
  const editForm = document.getElementById('editUgForm');
  const editModalUgName = document.getElementById('editModalUgName');
  const editModalUgDesc = document.getElementById('editModalUgDesc');
  const editModalUgPeriodsList = document.getElementById('editModalUgPeriodsList');
  const editModalUgPeriodCount = document.getElementById('editModalUgPeriodCount');
  const editModalAlert = document.getElementById('editUgModalAlert');
  const editModalCloseBtn = document.getElementById('editUgModalCloseBtn');
  const editModalCancelBtn = document.getElementById('editUgModalCancelBtn');
  const btnEditSelectAll = document.getElementById('btnEditUgSelectAllPeriods');
  const btnEditClearAll = document.getElementById('btnEditUgClearPeriods');
  const btnEditSelectOpen = document.getElementById('btnEditUgSelectOpenPeriods');

  const viewModalOverlay = document.getElementById('viewUgModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewUgModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewUgModalOkBtn');
  const viewModalUgName = document.getElementById('viewModalUgName');
  const viewModalUgDesc = document.getElementById('viewModalUgDesc');
  const viewModalUgPeriods = document.getElementById('viewModalUgPeriods');

  periodFilterSelect.innerHTML = '<option value="">All Accounting Periods</option>';
  accountingPeriodsMaster.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.code;
    opt.textContent = `${p.code} (${p.name})`;
    periodFilterSelect.appendChild(opt);
  });

  function populatePeriodCheckboxes(container, counterEl, selectedCodes = []) {
    container.innerHTML = '';
    accountingPeriodsMaster.forEach(p => {
      const isChecked = selectedCodes.includes(p.code);
      const label = document.createElement('label');
      label.className = 'period-checkbox-item';
      label.innerHTML = `
        <input type="checkbox" value="${p.code}" ${isChecked ? 'checked' : ''}>
        <span>${p.code} (${p.name})</span>
        <span class="period-status-tag period-status-${p.status}">${p.status.toUpperCase()}</span>
      `;

      const checkbox = label.querySelector('input');
      checkbox.addEventListener('change', () => {
        updatePeriodCountBadge(container, counterEl);
      });

      container.appendChild(label);
    });
    updatePeriodCountBadge(container, counterEl);
  }

  function updatePeriodCountBadge(container, counterEl) {
    const checkedCount = container.querySelectorAll('input[type="checkbox"]:checked').length;
    counterEl.textContent = `${checkedCount} period${checkedCount === 1 ? '' : 's'} selected`;
  }

  btnSelectAll.addEventListener('click', () => {
    modalUgPeriodsList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
    updatePeriodCountBadge(modalUgPeriodsList, modalUgPeriodCount);
  });

  btnClearAll.addEventListener('click', () => {
    modalUgPeriodsList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    updatePeriodCountBadge(modalUgPeriodsList, modalUgPeriodCount);
  });

  btnSelectOpen.addEventListener('click', () => {
    accountingPeriodsMaster.forEach(p => {
      const cb = modalUgPeriodsList.querySelector(`input[value="${p.code}"]`);
      if (cb) cb.checked = (p.status === 'open');
    });
    updatePeriodCountBadge(modalUgPeriodsList, modalUgPeriodCount);
  });

  btnEditSelectAll.addEventListener('click', () => {
    editModalUgPeriodsList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = true);
    updatePeriodCountBadge(editModalUgPeriodsList, editModalUgPeriodCount);
  });

  btnEditClearAll.addEventListener('click', () => {
    editModalUgPeriodsList.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    updatePeriodCountBadge(editModalUgPeriodsList, editModalUgPeriodCount);
  });

  btnEditSelectOpen.addEventListener('click', () => {
    accountingPeriodsMaster.forEach(p => {
      const cb = editModalUgPeriodsList.querySelector(`input[value="${p.code}"]`);
      if (cb) cb.checked = (p.status === 'open');
    });
    updatePeriodCountBadge(editModalUgPeriodsList, editModalUgPeriodCount);
  });

  function applyUgFilter() {
    const query = searchInput.value.trim().toLowerCase();
    const period = periodFilterSelect.value;

    let filtered = [...userGroupsData];

    if (query) {
      filtered = filtered.filter(g =>
        g.groupName.toLowerCase().includes(query) ||
        g.description.toLowerCase().includes(query)
      );
    }

    if (period) {
      filtered = filtered.filter(g => g.allowedPeriods.includes(period));
    }

    ugCurrentDataset = filtered;
    ugSelectedRowIndex = null;
    ugCurrentPage = 1;
    renderUgTable();
  }

  btnSearch.addEventListener('click', () => {
    applyUgFilter();
    showToast(`Loaded ${ugCurrentDataset.length} user group(s).`, 'info');
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') applyUgFilter();
  });

  periodFilterSelect.addEventListener('change', applyUgFilter);

  btnReset.addEventListener('click', () => {
    searchInput.value = '';
    periodFilterSelect.value = '';
    ugCurrentDataset = [...userGroupsData];
    ugSelectedRowIndex = null;
    ugCurrentPage = 1;
    renderUgTable();
    showToast('Search filter reset.', 'info');
  });

  function openAddUgModal() {
    addForm.reset();
    addModalAlert.innerHTML = '';
    const openPeriodCodes = accountingPeriodsMaster.filter(p => p.status === 'open').map(p => p.code);
    populatePeriodCheckboxes(modalUgPeriodsList, modalUgPeriodCount, openPeriodCodes);
    addModalOverlay.classList.add('active');
    setTimeout(() => modalUgName.focus(), 50);
  }

  btnHeaderAddUg.addEventListener('click', openAddUgModal);
  btnAddRow.addEventListener('click', openAddUgModal);

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addModalAlert.innerHTML = '';

    const name = modalUgName.value.trim().toUpperCase();
    const desc = modalUgDesc.value.trim();

    if (!name) {
      addModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>User Group is mandatory. Please enter a valid User Group name.</span>
        </div>
      `;
      modalUgName.focus();
      return;
    }

    const duplicate = userGroupsData.some(g => g.groupName.toUpperCase() === name);
    if (duplicate) {
      addModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Duplicate User Group: "${name}" already exists. Duplicate User Groups are not allowed.</span>
        </div>
      `;
      modalUgName.focus();
      return;
    }

    const selectedCheckboxes = modalUgPeriodsList.querySelectorAll('input[type="checkbox"]:checked');
    const selectedPeriods = Array.from(selectedCheckboxes).map(cb => cb.value);

    if (selectedPeriods.length === 0) {
      addModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Allowed Accounting Periods is mandatory. Please select at least one period from the master list.</span>
        </div>
      `;
      return;
    }

    const newGroup = {
      groupName: name,
      description: desc || name,
      allowedPeriods: selectedPeriods
    };

    userGroupsData.unshift(newGroup);
    addModalOverlay.classList.remove('active');

    applyUgFilter();
    showToast(`User Group "${name}" created successfully.`, 'success');
  });

  addModalCloseBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));
  addModalCancelBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));

  window.handleEditUserGroup = function(groupName) {
    const group = userGroupsData.find(g => g.groupName === groupName);
    if (!group) return;

    editModalAlert.innerHTML = '';
    editModalUgName.value = group.groupName;
    editModalUgDesc.value = group.description;

    populatePeriodCheckboxes(editModalUgPeriodsList, editModalUgPeriodCount, group.allowedPeriods);
    editModalOverlay.classList.add('active');
    setTimeout(() => editModalUgDesc.focus(), 50);
  };

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    editModalAlert.innerHTML = '';

    const groupName = editModalUgName.value;
    const desc = editModalUgDesc.value.trim();

    const selectedCheckboxes = editModalUgPeriodsList.querySelectorAll('input[type="checkbox"]:checked');
    const selectedPeriods = Array.from(selectedCheckboxes).map(cb => cb.value);

    if (selectedPeriods.length === 0) {
      editModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Allowed Accounting Periods cannot be empty. Please select at least one period.</span>
        </div>
      `;
      return;
    }

    const group = userGroupsData.find(g => g.groupName === groupName);
    if (group) {
      group.description = desc || group.groupName;
      group.allowedPeriods = selectedPeriods;
    }

    editModalOverlay.classList.remove('active');
    applyUgFilter();
    showToast(`User Group "${groupName}" updated successfully.`, 'success');
  });

  editModalCloseBtn.addEventListener('click', () => editModalOverlay.classList.remove('active'));
  editModalCancelBtn.addEventListener('click', () => editModalOverlay.classList.remove('active'));

  window.handleViewUserGroup = function(groupName) {
    const group = userGroupsData.find(g => g.groupName === groupName);
    if (!group) return;

    viewModalUgName.textContent = group.groupName;
    viewModalUgDesc.textContent = group.description;

    viewModalUgPeriods.innerHTML = '';
    group.allowedPeriods.forEach(code => {
      const periodObj = accountingPeriodsMaster.find(p => p.code === code);
      const span = document.createElement('span');
      span.className = 'period-badge';
      span.textContent = periodObj ? `${periodObj.code} (${periodObj.name})` : code;
      viewModalUgPeriods.appendChild(span);
    });

    viewModalOverlay.classList.add('active');
  };

  viewModalCloseBtn.addEventListener('click', () => viewModalOverlay.classList.remove('active'));
  viewModalOkBtn.addEventListener('click', () => viewModalOverlay.classList.remove('active'));

  window.handleDeleteUserGroup = function(groupName) {
    if (confirm(`Are you sure you want to delete user group "${groupName}"?`)) {
      const idx = userGroupsData.findIndex(g => g.groupName === groupName);
      if (idx !== -1) {
        userGroupsData.splice(idx, 1);
        ugSelectedRowIndex = null;
        applyUgFilter();
        showToast(`User Group "${groupName}" deleted.`, 'info');
      }
    }
  };

  btnDeleteRow.addEventListener('click', () => {
    if (ugSelectedRowIndex === null || !ugCurrentDataset[ugSelectedRowIndex]) {
      showToast('Please select a user group from the grid to delete.', 'warning');
      return;
    }
    const item = ugCurrentDataset[ugSelectedRowIndex];
    window.handleDeleteUserGroup(item.groupName);
  });

  btnDownload.addEventListener('click', () => {
    if (ugCurrentDataset.length === 0) {
      showToast('No user group records to download.', 'warning');
      return;
    }
    exportUgToCSV();
  });

  btnCollapse.addEventListener('click', () => {
    const icon = btnCollapse.querySelector('i');
    if (gridViewport.style.display === 'none') {
      gridViewport.style.display = 'block';
      icon.className = 'fa-solid fa-chevron-up';
    } else {
      gridViewport.style.display = 'none';
      icon.className = 'fa-solid fa-chevron-down';
    }
  });

  pageSizeSelect.addEventListener('change', (e) => {
    ugPageSize = parseInt(e.target.value, 10);
    ugCurrentPage = 1;
    renderUgTable();
  });

  pageNumberInput.addEventListener('change', (e) => {
    const val = parseInt(e.target.value, 10);
    const totalPages = Math.ceil(ugCurrentDataset.length / ugPageSize) || 1;
    if (val >= 1 && val <= totalPages) {
      ugCurrentPage = val;
    } else {
      pageNumberInput.value = ugCurrentPage;
    }
    renderUgTable();
  });

  btnFirst.addEventListener('click', () => {
    if (ugCurrentPage > 1) {
      ugCurrentPage = 1;
      renderUgTable();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (ugCurrentPage > 1) {
      ugCurrentPage--;
      renderUgTable();
    }
  });

  btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(ugCurrentDataset.length / ugPageSize);
    if (ugCurrentPage < totalPages) {
      ugCurrentPage++;
      renderUgTable();
    }
  });

  btnLast.addEventListener('click', () => {
    const totalPages = Math.ceil(ugCurrentDataset.length / ugPageSize);
    if (ugCurrentPage < totalPages) {
      ugCurrentPage = totalPages;
      renderUgTable();
    }
  });

  renderUgTable();
}

function renderUgTable() {
  const tableBody = document.getElementById('ugTableBody');
  const recordStatusText = document.getElementById('ugRecordStatusText');
  const totalPagesText = document.getElementById('ugTotalPagesText');
  const pageNumberInput = document.getElementById('upcPageNumberInput');
  const btnFirst = document.getElementById('btnUgFirstPage');
  const btnPrev = document.getElementById('btnUgPrevPage');
  const btnNext = document.getElementById('btnUgNextPage');
  const btnLast = document.getElementById('btnUgLastPage');

  tableBody.innerHTML = '';
  const totalRecords = ugCurrentDataset.length;

  if (totalRecords === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.className = 'empty-message-row';
    emptyRow.innerHTML = `
      <td colspan="4" class="empty-message-cell">
        <i class="fa-solid fa-circle-info"></i>
        No user groups match the search criteria. Click <strong>"Add"</strong> to create a new user group.
      </td>
    `;
    tableBody.appendChild(emptyRow);

    for (let i = 1; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `<td class="empty-cell">&nbsp;</td><td></td><td></td><td></td>`;
      tableBody.appendChild(tr);
    }

    totalPagesText.textContent = '0';
    pageNumberInput.value = '1';
    recordStatusText.textContent = 'No user groups found';
    btnFirst.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;
    btnLast.disabled = true;
    return;
  }

  const totalPages = Math.ceil(totalRecords / ugPageSize) || 1;
  totalPagesText.textContent = totalPages;
  pageNumberInput.value = ugCurrentPage;

  const startIndex = (ugCurrentPage - 1) * ugPageSize;
  const endIndex = Math.min(startIndex + ugPageSize, totalRecords);
  const pageRows = ugCurrentDataset.slice(startIndex, endIndex);

  pageRows.forEach((item, index) => {
    const actualIndex = startIndex + index;
    const tr = document.createElement('tr');
    tr.className = index % 2 === 0 ? 'row-even' : 'row-odd';
    if (ugSelectedRowIndex === actualIndex) {
      tr.classList.add('selected');
    }

    let periodsHtml = '<div class="period-badges-container">';
    const displayPeriods = item.allowedPeriods.slice(0, 4);
    displayPeriods.forEach(pCode => {
      periodsHtml += `<span class="period-badge">${escapeHtml(pCode)}</span>`;
    });

    if (item.allowedPeriods.length > 4) {
      const remaining = item.allowedPeriods.length - 4;
      const allTooltip = item.allowedPeriods.join(', ');
      periodsHtml += `<span class="period-badge-count" title="${escapeHtml(allTooltip)}">+${remaining} more</span>`;
    }
    periodsHtml += '</div>';

    tr.innerHTML = `
      <td style="font-weight: 700; color: #164f78;">${escapeHtml(item.groupName)}</td>
      <td style="font-weight: 500;">${escapeHtml(item.description)}</td>
      <td>${periodsHtml}</td>
      <td class="table-action-cell">
        <button type="button" class="btn-grid-action btn-view-user" title="View Details" onclick="event.stopPropagation(); handleViewUserGroup('${escapeHtml(item.groupName)}')">
          <i class="fa-solid fa-eye"></i>
        </button>
        <button type="button" class="btn-grid-action btn-edit-user" title="Edit User Group" onclick="event.stopPropagation(); handleEditUserGroup('${escapeHtml(item.groupName)}')">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button type="button" class="btn-grid-action btn-delete-user" title="Delete User Group" onclick="event.stopPropagation(); handleDeleteUserGroup('${escapeHtml(item.groupName)}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;

    tr.addEventListener('click', () => {
      document.querySelectorAll('#ugTableBody tr').forEach(r => r.classList.remove('selected'));
      tr.classList.add('selected');
      ugSelectedRowIndex = actualIndex;
    });

    tableBody.appendChild(tr);
  });

  if (pageRows.length < 10) {
    for (let i = pageRows.length; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `<td class="empty-cell">&nbsp;</td><td></td><td></td><td></td>`;
      tableBody.appendChild(tr);
    }
  }

  recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`;
  btnFirst.disabled = ugCurrentPage <= 1;
  btnPrev.disabled = ugCurrentPage <= 1;
  btnNext.disabled = ugCurrentPage >= totalPages;
  btnLast.disabled = ugCurrentPage >= totalPages;
}

function exportUgToCSV() {
  const headers = ['User Group', 'User Group Description', 'Allowed Accounting Periods'];
  const rows = ugCurrentDataset.map(g => [
    `"${g.groupName}"`,
    `"${g.description.replace(/"/g, '""')}"`,
    `"${g.allowedPeriods.join(', ')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'User_Groups_Export.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// MODULE 3: USERS PER COMPANY MASTER SCREEN
// =============================================================================
function initUsersPerCompanyModule() {
  const companySelect = document.getElementById('upcCompanySelect');
  const companyNameInput = document.getElementById('upcCompanyNameInput');
  const btnSearch = document.getElementById('btnUpcSearch');
  const btnReset = document.getElementById('btnUpcReset');
  const btnHeaderAddUser = document.getElementById('btnHeaderAddUser');
  const btnAddRow = document.getElementById('btnUpcAddRow');
  const btnDeleteRow = document.getElementById('btnUpcDeleteRow');
  const btnDownload = document.getElementById('btnUpcDownload');
  const btnCollapse = document.getElementById('btnCollapseUpcGrid');
  const gridViewport = document.getElementById('upcGridViewport');

  const pageSizeSelect = document.getElementById('upcPageSizeSelect');
  const pageNumberInput = document.getElementById('upcPageNumberInput');
  const btnFirst = document.getElementById('btnUpcFirstPage');
  const btnPrev = document.getElementById('btnUpcPrevPage');
  const btnNext = document.getElementById('btnUpcNextPage');
  const btnLast = document.getElementById('btnUpcLastPage');

  const addModalOverlay = document.getElementById('addUpcModalOverlay');
  const addForm = document.getElementById('addUpcForm');
  const modalCompanyDisplay = document.getElementById('modalCompanyDisplay');
  const modalUserIdSelect = document.getElementById('modalUserIdSelect');
  const modalUserNameInput = document.getElementById('modalUserNameInput');
  const modalIsDefaultCompany = document.getElementById('modalIsDefaultCompany');
  const addModalCloseBtn = document.getElementById('addUpcModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addUpcModalCancelBtn');
  const alertContainer = document.getElementById('upcModalAlertContainer');

  const editModalOverlay = document.getElementById('editUpcModalOverlay');
  const editForm = document.getElementById('editUpcForm');
  const editModalCompanyDisplay = document.getElementById('editModalCompanyDisplay');
  const editModalUserId = document.getElementById('editModalUserId');
  const editModalUserName = document.getElementById('editModalUserName');
  const editModalIsDefault = document.getElementById('editModalIsDefaultCompany');
  const editModalCloseBtn = document.getElementById('editUpcModalCloseBtn');
  const editModalCancelBtn = document.getElementById('editUpcModalCancelBtn');

  companySelect.innerHTML = '<option value="">Select Company</option>';
  companyMaster.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.code;
    opt.textContent = c.code;
    companySelect.appendChild(opt);
  });

  function populateUserMasterDropdown() {
    modalUserIdSelect.innerHTML = '<option value="">-- Select User ID --</option>';
    userMaster.forEach(u => {
      const opt = document.createElement('option');
      opt.value = u.id;
      const alreadyAssigned = usersPerCompanyData.some(
        r => r.companyCode === upcSelectedCompany && r.userId === u.id
      );
      opt.textContent = alreadyAssigned ? `${u.id} - ${u.name} (Assigned)` : `${u.id} - ${u.name}`;
      modalUserIdSelect.appendChild(opt);
    });
  }

  companySelect.addEventListener('change', () => {
    const code = companySelect.value;
    upcSelectedCompany = code;
    upcSelectedRowIndex = null;
    upcCurrentPage = 1;

    if (!code) {
      companyNameInput.value = '';
      upcCurrentDataset = [];
      renderUpcTable();
      return;
    }

    const company = companyMaster.find(c => c.code === code);
    if (company) {
      companyNameInput.value = company.name;
    }

    loadUsersForSelectedCompany();
  });

  btnSearch.addEventListener('click', () => {
    if (!upcSelectedCompany) {
      showToast('Please select a Company Code first.', 'warning');
      companySelect.focus();
      return;
    }
    loadUsersForSelectedCompany();
    showToast(`Loaded users for company ${upcSelectedCompany}.`, 'info');
  });

  btnReset.addEventListener('click', () => {
    companySelect.value = '';
    companyNameInput.value = '';
    upcSelectedCompany = '';
    upcCurrentDataset = [];
    upcSelectedRowIndex = null;
    upcCurrentPage = 1;
    renderUpcTable();
    showToast('Company filter reset.', 'info');
  });

  function openAddUserModal() {
    if (!upcSelectedCompany) {
      showToast('Company is mandatory before adding a user. Please select a Company Code first.', 'warning');
      companySelect.focus();
      return;
    }

    const company = companyMaster.find(c => c.code === upcSelectedCompany);
    modalCompanyDisplay.textContent = `${company.code} - ${company.name}`;
    
    addForm.reset();
    modalUserNameInput.value = '';
    alertContainer.innerHTML = '';
    populateUserMasterDropdown();

    addModalOverlay.classList.add('active');
  }

  btnHeaderAddUser.addEventListener('click', openAddUserModal);
  btnAddRow.addEventListener('click', openAddUserModal);

  modalUserIdSelect.addEventListener('change', () => {
    alertContainer.innerHTML = '';
    const userId = modalUserIdSelect.value;
    if (!userId) {
      modalUserNameInput.value = '';
      return;
    }

    const user = userMaster.find(u => u.id === userId);
    if (user) {
      modalUserNameInput.value = user.name;
    }

    const isDuplicate = usersPerCompanyData.some(
      r => r.companyCode === upcSelectedCompany && r.userId === userId
    );

    if (isDuplicate) {
      alertContainer.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>User "${userId}" is already assigned to company "${upcSelectedCompany}". Duplicate assignment is not allowed.</span>
        </div>
      `;
    }
  });

  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = modalUserIdSelect.value;
    if (!userId) {
      alertContainer.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Please select a valid User ID.</span>
        </div>
      `;
      return;
    }

    const duplicate = usersPerCompanyData.some(
      r => r.companyCode === upcSelectedCompany && r.userId === userId
    );

    if (duplicate) {
      alertContainer.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Duplicate Assignment Error: User "${userId}" is already assigned to company "${upcSelectedCompany}".</span>
        </div>
      `;
      return;
    }

    const isDefault = modalIsDefaultCompany.checked;

    if (isDefault) {
      usersPerCompanyData.forEach(item => {
        if (item.userId === userId) {
          item.isDefault = false;
        }
      });
    }

    usersPerCompanyData.push({
      companyCode: upcSelectedCompany,
      userId: userId,
      isDefault: isDefault
    });

    addModalOverlay.classList.remove('active');
    loadUsersForSelectedCompany();

    const user = userMaster.find(u => u.id === userId);
    showToast(`User "${userId} - ${user ? user.name : ''}" assigned to ${upcSelectedCompany} successfully.`, 'success');
  });

  addModalCloseBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));
  addModalCancelBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));

  window.handleEditUpcUser = function(userId) {
    const record = usersPerCompanyData.find(
      r => r.companyCode === upcSelectedCompany && r.userId === userId
    );
    if (!record) return;

    const company = companyMaster.find(c => c.code === upcSelectedCompany);
    const user = userMaster.find(u => u.id === userId);

    editModalCompanyDisplay.textContent = `${company.code} - ${company.name}`;
    editModalUserId.value = record.userId;
    editModalUserName.value = user ? user.name : record.userId;
    editModalIsDefault.checked = record.isDefault;

    editModalOverlay.classList.add('active');
  };

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userId = editModalUserId.value;
    const isDefault = editModalIsDefault.checked;

    const record = usersPerCompanyData.find(
      r => r.companyCode === upcSelectedCompany && r.userId === userId
    );

    if (!record) return;

    if (isDefault) {
      usersPerCompanyData.forEach(item => {
        if (item.userId === userId) {
          item.isDefault = false;
        }
      });
      record.isDefault = true;
    } else {
      record.isDefault = false;
    }

    editModalOverlay.classList.remove('active');
    loadUsersForSelectedCompany();
    showToast(`Default Company status updated for user "${userId}".`, 'success');
  });

  editModalCloseBtn.addEventListener('click', () => editModalOverlay.classList.remove('active'));
  editModalCancelBtn.addEventListener('click', () => editModalOverlay.classList.remove('active'));

  window.handleDeleteUpcUser = function(userId) {
    const user = userMaster.find(u => u.id === userId);
    const userName = user ? user.name : userId;

    if (confirm(`Are you sure you want to remove user "${userId} (${userName})" from company "${upcSelectedCompany}"?`)) {
      const idx = usersPerCompanyData.findIndex(
        r => r.companyCode === upcSelectedCompany && r.userId === userId
      );

      if (idx !== -1) {
        usersPerCompanyData.splice(idx, 1);
        upcSelectedRowIndex = null;
        loadUsersForSelectedCompany();
        showToast(`User "${userId}" removed from company "${upcSelectedCompany}".`, 'info');
      }
    }
  };

  btnDeleteRow.addEventListener('click', () => {
    if (upcSelectedRowIndex === null || !upcCurrentDataset[upcSelectedRowIndex]) {
      showToast('Please select a user in the table to delete.', 'warning');
      return;
    }
    const item = upcCurrentDataset[upcSelectedRowIndex];
    window.handleDeleteUpcUser(item.userId);
  });

  btnDownload.addEventListener('click', () => {
    if (!upcSelectedCompany) {
      showToast('Please select a company to export records.', 'warning');
      return;
    }
    if (upcCurrentDataset.length === 0) {
      showToast('No users available to download for this company.', 'warning');
      return;
    }
    exportUpcToCSV();
  });

  btnCollapse.addEventListener('click', () => {
    const icon = btnCollapse.querySelector('i');
    if (gridViewport.style.display === 'none') {
      gridViewport.style.display = 'block';
      icon.className = 'fa-solid fa-chevron-up';
    } else {
      gridViewport.style.display = 'none';
      icon.className = 'fa-solid fa-chevron-down';
    }
  });

  pageSizeSelect.addEventListener('change', (e) => {
    upcPageSize = parseInt(e.target.value, 10);
    upcCurrentPage = 1;
    renderUpcTable();
  });

  pageNumberInput.addEventListener('change', (e) => {
    const val = parseInt(e.target.value, 10);
    const totalPages = Math.ceil(upcCurrentDataset.length / upcPageSize) || 0;
    if (val >= 1 && val <= totalPages) {
      upcCurrentPage = val;
    } else {
      pageNumberInput.value = upcCurrentPage;
    }
    renderUpcTable();
  });

  btnFirst.addEventListener('click', () => {
    if (upcCurrentPage > 1) {
      upcCurrentPage = 1;
      renderUpcTable();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (upcCurrentPage > 1) {
      upcCurrentPage--;
      renderUpcTable();
    }
  });

  btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(upcCurrentDataset.length / upcPageSize);
    if (upcCurrentPage < totalPages) {
      upcCurrentPage++;
      renderUpcTable();
    }
  });

  btnLast.addEventListener('click', () => {
    const totalPages = Math.ceil(upcCurrentDataset.length / upcPageSize);
    if (upcCurrentPage < totalPages) {
      upcCurrentPage = totalPages;
      renderUpcTable();
    }
  });

  renderUpcTable();
}

function loadUsersForSelectedCompany() {
  if (!upcSelectedCompany) {
    upcCurrentDataset = [];
    renderUpcTable();
    return;
  }

  const assigned = usersPerCompanyData.filter(r => r.companyCode === upcSelectedCompany);
  upcCurrentDataset = assigned.map(r => {
    const user = userMaster.find(u => u.id === r.userId);
    return {
      userId: r.userId,
      userName: user ? user.name : 'Unknown User',
      isDefault: r.isDefault
    };
  });

  upcSelectedRowIndex = null;
  upcCurrentPage = 1;
  renderUpcTable();
}

function renderUpcTable() {
  const tableBody = document.getElementById('upcTableBody');
  const recordStatusText = document.getElementById('upcRecordStatusText');
  const totalPagesText = document.getElementById('upcTotalPagesText');
  const pageNumberInput = document.getElementById('upcPageNumberInput');
  const btnFirst = document.getElementById('btnUpcFirstPage');
  const btnPrev = document.getElementById('btnUpcPrevPage');
  const btnNext = document.getElementById('btnUpcNextPage');
  const btnLast = document.getElementById('btnUpcLastPage');

  tableBody.innerHTML = '';

  if (!upcSelectedCompany) {
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `
        <td class="empty-cell" style="text-align:center;">&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `;
      tableBody.appendChild(tr);
    }
    totalPagesText.textContent = '0';
    pageNumberInput.value = '1';
    recordStatusText.textContent = 'Please select a company';
    btnFirst.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;
    btnLast.disabled = true;
    return;
  }

  const totalRecords = upcCurrentDataset.length;
  if (totalRecords === 0) {
    const msgRow = document.createElement('tr');
    msgRow.className = 'empty-message-row';
    msgRow.innerHTML = `
      <td colspan="5" class="empty-message-cell">
        <i class="fa-solid fa-circle-info"></i>
        No users assigned to this company. Click <strong>"Add User"</strong> to assign users.
      </td>
    `;
    tableBody.appendChild(msgRow);

    for (let i = 1; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `
        <td class="empty-cell">&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `;
      tableBody.appendChild(tr);
    }

    totalPagesText.textContent = '0';
    pageNumberInput.value = '1';
    recordStatusText.textContent = 'No users assigned to this company.';
    btnFirst.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;
    btnLast.disabled = true;
    return;
  }

  const totalPages = Math.ceil(totalRecords / upcPageSize) || 1;
  totalPagesText.textContent = totalPages;
  pageNumberInput.value = upcCurrentPage;

  const startIndex = (upcCurrentPage - 1) * upcPageSize;
  const endIndex = Math.min(startIndex + upcPageSize, totalRecords);
  const pageRows = upcCurrentDataset.slice(startIndex, endIndex);

  pageRows.forEach((item, index) => {
    const actualIndex = startIndex + index;
    const srNo = actualIndex + 1;
    const tr = document.createElement('tr');
    tr.className = index % 2 === 0 ? 'row-even' : 'row-odd';
    if (upcSelectedRowIndex === actualIndex) {
      tr.classList.add('selected');
    }

    const defaultBadge = item.isDefault
      ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i> Yes</span>`
      : `<span class="badge-default-no"><i class="fa-solid fa-xmark"></i> No</span>`;

    tr.innerHTML = `
      <td style="text-align: center; font-weight: 600; color: #4b6a84;">${srNo}</td>
      <td style="font-weight: 700; color: #164f78;">${escapeHtml(item.userId)}</td>
      <td style="font-weight: 500;">${escapeHtml(item.userName)}</td>
      <td style="text-align: center;">${defaultBadge}</td>
      <td class="table-action-cell">
        <button type="button" class="btn-grid-action btn-edit-user" title="Edit Default Company" onclick="event.stopPropagation(); handleEditUpcUser('${escapeHtml(item.userId)}')">
          <i class="fa-solid fa-pen-to-square"></i>
        </button>
        <button type="button" class="btn-grid-action btn-delete-user" title="Remove User from Company" onclick="event.stopPropagation(); handleDeleteUpcUser('${escapeHtml(item.userId)}')">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </td>
    `;

    tr.addEventListener('click', () => {
      document.querySelectorAll('#upcTableBody tr').forEach(r => r.classList.remove('selected'));
      tr.classList.add('selected');
      upcSelectedRowIndex = actualIndex;
    });

    tableBody.appendChild(tr);
  });

  if (pageRows.length < 10) {
    for (let i = pageRows.length; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `
        <td class="empty-cell">&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `;
      tableBody.appendChild(tr);
    }
  }

  recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords}`;
  btnFirst.disabled = upcCurrentPage <= 1;
  btnPrev.disabled = upcCurrentPage <= 1;
  btnNext.disabled = upcCurrentPage >= totalPages;
  btnLast.disabled = upcCurrentPage >= totalPages;
}

function exportUpcToCSV() {
  const company = companyMaster.find(c => c.code === upcSelectedCompany);
  const companyName = company ? company.name : '';

  const headers = ['Sr. No.', 'Company Code', 'Company Name', 'User ID', 'User Name', 'Default Company'];
  const rows = upcCurrentDataset.map((r, i) => [
    i + 1,
    `"${upcSelectedCompany}"`,
    `"${companyName}"`,
    `"${r.userId}"`,
    `"${r.userName}"`,
    `"${r.isDefault ? 'Yes' : 'No'}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Users_Per_Company_${upcSelectedCompany}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// SCREEN NAVIGATION & GLOBAL ROUTING
// =============================================================================
function initGlobalNavigation() {
  setupSidebarAccordion();

  const allSubLinks = document.querySelectorAll('.sub-nav-item a');
  allSubLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');

      if (href === '#users-per-user-group') {
        switchScreen('users-per-user-group');
      } else if (href === '#user-groups') {
        switchScreen('user-groups');
      } else if (href === '#user-per-company') {
        switchScreen('users-per-company');
      } else if (href === '#define-voucher-type') {
        switchScreen('define-voucher-type');
      } else if (href === '#query-voucher-types') {
        switchScreen('query-voucher-types');
      } else if (href === '#payment-terms') {
        switchScreen('payment-terms');
      } else if (href === '#authority-classes') {
        switchScreen('authority-classes');
      } else if (href === '#authority-combinations') {
        switchScreen('authority-combinations');
      } else if (href === '#users-per-authority-class') {
        switchScreen('users-per-authority-class');
      } else if (href === '#nominal-account') {
        switchScreen('nominal-account');
      } else if (href === '#account-linking') {
        switchScreen('account-linking');
      } else {
        const title = link.getAttribute('data-title') || link.textContent.trim();
        showToast(`Navigated to ${title} (Screen template ready).`, 'info');
      }
    });
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#user-groups') {
      switchScreen('user-groups');
    } else if (window.location.hash === '#user-per-company') {
      switchScreen('users-per-company');
    } else if (window.location.hash === '#users-per-user-group') {
      switchScreen('users-per-user-group');
    } else if (window.location.hash === '#define-voucher-type') {
      switchScreen('define-voucher-type');
    } else if (window.location.hash === '#query-voucher-types') {
      switchScreen('query-voucher-types');
    } else if (window.location.hash === '#payment-terms') {
      switchScreen('payment-terms');
    } else if (window.location.hash === '#authority-classes') {
      switchScreen('authority-classes');
    } else if (window.location.hash === '#authority-combinations') {
      switchScreen('authority-combinations');
    } else if (window.location.hash === '#users-per-authority-class') {
      switchScreen('users-per-authority-class');
    } else if (window.location.hash === '#nominal-account') {
      switchScreen('nominal-account');
    } else if (window.location.hash === '#account-linking') {
      switchScreen('account-linking');
    } else {
      switchScreen('query-voucher-types');
    }
  });
}

function switchScreen(screenId) {
  currentScreen = screenId;
  const screenUpug = document.getElementById('screenUsersPerUserGroup');
  const screenUg = document.getElementById('screenUserGroups');
  const screenUpc = document.getElementById('screenUsersPerCompany');
  const screenVt = document.getElementById('screenDefineVoucherType');
  const screenQvt = document.getElementById('screenQueryVoucherTypes');
  const screenPt = document.getElementById('screenPaymentTerms');
  const screenAc = document.getElementById('screenAuthorityClasses');
  const screenComb = document.getElementById('screenAuthorityCombinations');
  const screenUpac = document.getElementById('screenUsersPerAuthorityClass');
  const screenNa = document.getElementById('screenNominalAccount');
  const screenAl = document.getElementById('screenAccountLinking');
  const breadcrumbContent = document.getElementById('breadcrumbContent');

  document.querySelectorAll('.sub-nav-item a').forEach(l => {
    l.classList.remove('active-red');
    l.classList.remove('active-nav');
    l.parentElement.classList.remove('selected');
  });

  // Hide all screens
  if (screenUpug) screenUpug.style.display = 'none';
  if (screenUg) screenUg.style.display = 'none';
  if (screenUpc) screenUpc.style.display = 'none';
  if (screenVt) screenVt.style.display = 'none';
  if (screenQvt) screenQvt.style.display = 'none';
  if (screenPt) screenPt.style.display = 'none';
  if (screenAc) screenAc.style.display = 'none';
  if (screenComb) screenComb.style.display = 'none';
  if (screenUpac) screenUpac.style.display = 'none';
  if (screenNa) screenNa.style.display = 'none';
  if (screenAl) screenAl.style.display = 'none';

  if (screenId === 'users-per-user-group') {
    if (screenUpug) screenUpug.style.display = 'flex';

    const upugLink = document.querySelector('a[href="#users-per-user-group"]');
    if (upugLink) {
      upugLink.classList.add('active-nav');
      upugLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">User Data</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Users Per User Group</span>
    `;

    document.title = 'Finance Enterprise - Users Per User Group';
    window.location.hash = '#users-per-user-group';
  } else if (screenId === 'user-groups') {
    if (screenUg) screenUg.style.display = 'flex';

    const ugLink = document.querySelector('a[href="#user-groups"]');
    if (ugLink) {
      ugLink.classList.add('active-nav');
      ugLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">User Data</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">User Groups</span>
    `;

    document.title = 'Finance Enterprise - User Groups';
    window.location.hash = '#user-groups';
  } else if (screenId === 'users-per-company') {
    if (screenUpc) screenUpc.style.display = 'flex';

    const upcLink = document.querySelector('a[href="#user-per-company"]');
    if (upcLink) {
      upcLink.classList.add('active-nav');
      upcLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">User Data</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Users Per Company</span>
    `;

    document.title = 'Finance Enterprise - Users Per Company';
    window.location.hash = '#user-per-company';
  } else if (screenId === 'define-voucher-type') {
    if (screenVt) screenVt.style.display = 'flex';

    const vtLink = document.querySelector('a[href="#define-voucher-type"]');
    if (vtLink) {
      vtLink.classList.add('active-nav');
      vtLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">User Data</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Define Voucher Types</span>
    `;

    document.title = 'Finance Enterprise - Define Voucher Types';
    window.location.hash = '#define-voucher-type';
  } else if (screenId === 'query-voucher-types') {
    if (screenQvt) screenQvt.style.display = 'flex';

    const qvtLink = document.querySelector('a[href="#query-voucher-types"]');
    if (qvtLink) {
      qvtLink.classList.add('active-nav');
      qvtLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">User Data</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Query Voucher Types</span>
    `;

    document.title = 'Finance Enterprise - Query Voucher Types';
    window.location.hash = '#query-voucher-types';
  } else if (screenId === 'payment-terms') {
    if (screenPt) screenPt.style.display = 'flex';

    const ptLink = document.querySelector('a[href="#payment-terms"]');
    if (ptLink) {
      ptLink.classList.add('active-nav');
      ptLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Payment Terms</span>
    `;

    document.title = 'Finance Enterprise - Payment Terms';
    window.location.hash = '#payment-terms';
  } else if (screenId === 'authority-classes') {
    if (screenAc) screenAc.style.display = 'flex';

    const acLink = document.querySelector('a[href="#authority-classes"]');
    if (acLink) {
      acLink.classList.add('active-nav');
      acLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">Authority</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Authority Classes</span>
    `;

    document.title = 'Finance Enterprise - Authority Classes';
    window.location.hash = '#authority-classes';
  } else if (screenId === 'authority-combinations') {
    if (screenComb) screenComb.style.display = 'flex';

    const combLink = document.querySelector('a[href="#authority-combinations"]');
    if (combLink) {
      combLink.classList.add('active-nav');
      combLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">Authority</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Authority Combinations</span>
    `;

    document.title = 'Finance Enterprise - Authority Combinations';
    window.location.hash = '#authority-combinations';
  } else if (screenId === 'users-per-authority-class') {
    if (screenUpac) screenUpac.style.display = 'flex';

    const upacLink = document.querySelector('a[href="#users-per-authority-class"]');
    if (upacLink) {
      upacLink.classList.add('active-nav');
      upacLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-item">Authority</span>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Users per Authority Class</span>
    `;

    document.title = 'Finance Enterprise - Users per Authority Class';
    window.location.hash = '#users-per-authority-class';
  } else if (screenId === 'nominal-account') {
    if (screenNa) screenNa.style.display = 'flex';

    const naLink = document.querySelector('a[href="#nominal-account"]');
    if (naLink) {
      naLink.classList.add('active-nav');
      naLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Nominal Account / Cash Accounts</span>
    `;

    document.title = 'Finance Enterprise - Cash Accounts';
    window.location.hash = '#nominal-account';
  } else if (screenId === 'account-linking') {
    if (screenAl) screenAl.style.display = 'flex';

    const alLink = document.querySelector('a[href="#account-linking"]');
    if (alLink) {
      alLink.classList.add('active-nav');
      alLink.parentElement.classList.add('selected');
    }

    breadcrumbContent.innerHTML = `
      <a href="#" class="breadcrumb-home"><i class="fa-solid fa-house"></i></a>
      <a href="#" class="breadcrumb-item">Accounting Rules</a>
      <span class="breadcrumb-separator">&gt;</span>
      <span class="breadcrumb-current">Account Linking</span>
    `;

    document.title = 'Finance Enterprise - Account Linking';
    window.location.hash = '#account-linking';
  }
}

function setupSidebarAccordion() {
  const nodes = document.querySelectorAll('.nav-node');
  nodes.forEach(node => {
    const item = node.querySelector('.nav-item');
    if (!item) return;

    item.addEventListener('click', (e) => {
      if (e.target.closest('.sub-nav-tree')) return;
      const isExpanded = node.classList.contains('expanded');
      node.classList.toggle('expanded', !isExpanded);
    });
  });

  const subGroups = document.querySelectorAll('.sub-nav-group');
  subGroups.forEach(group => {
    const header = group.querySelector('.sub-nav-group-header');
    if (!header) return;

    header.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = group.classList.contains('expanded');
      group.classList.toggle('expanded', !isExpanded);
      const icon = header.querySelector('.sub-group-icon i');
      if (icon) {
        icon.className = !isExpanded ? 'fa-regular fa-folder-open' : 'fa-regular fa-folder';
      }
    });
  });
}

function initUserBadge() {
  const badge = document.getElementById('userBadgeDropdown');
  if (badge) {
    badge.addEventListener('click', () => {
      showToast('Logged in as UNSS0P4. Full Role Permissions: View, Add, Edit, Delete.', 'info');
    });
  }
}

// =============================================================================
// MODULE 4: PAYMENT TERMS MODULE
// =============================================================================
function initPaymentTermsModule() {
  const tableBody = document.getElementById('tableBody');
  const btnSearch = document.getElementById('btnSearch');
  const companySelect = document.getElementById('companySelect');
  const paymentTermInput = document.getElementById('paymentTermInput');
  const pageSizeSelect = document.getElementById('pageSizeSelect');
  const pageNumberInput = document.getElementById('pageNumberInput');
  const btnFirst = document.getElementById('btnFirstPage');
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  const btnLast = document.getElementById('btnLastPage');

  const btnAddRow = document.getElementById('btnAddRow');
  const btnDeleteRow = document.getElementById('btnDeleteRow');
  const btnDownload = document.getElementById('btnDownload');
  const btnCollapse = document.getElementById('btnCollapseGrid');
  const gridViewport = document.getElementById('gridViewport');

  const addModalOverlay = document.getElementById('addModalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalCancelBtn = document.getElementById('modalCancelBtn');
  const addPaymentTermForm = document.getElementById('addPaymentTermForm');

  btnSearch.addEventListener('click', handlePtSearch);
  paymentTermInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handlePtSearch();
  });

  pageSizeSelect.addEventListener('change', (e) => {
    ptPageSize = parseInt(e.target.value, 10);
    ptCurrentPage = 1;
    renderPtTable();
  });

  pageNumberInput.addEventListener('change', (e) => {
    const val = parseInt(e.target.value, 10);
    const totalPages = Math.ceil(ptDataset.length / ptPageSize) || 0;
    if (val >= 1 && val <= totalPages) {
      ptCurrentPage = val;
    } else {
      pageNumberInput.value = ptCurrentPage;
    }
    renderPtTable();
  });

  btnFirst.addEventListener('click', () => {
    if (ptCurrentPage > 1) {
      ptCurrentPage = 1;
      renderPtTable();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (ptCurrentPage > 1) {
      ptCurrentPage--;
      renderPtTable();
    }
  });

  btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(ptDataset.length / ptPageSize);
    if (ptCurrentPage < totalPages) {
      ptCurrentPage++;
      renderPtTable();
    }
  });

  btnLast.addEventListener('click', () => {
    const totalPages = Math.ceil(ptDataset.length / ptPageSize);
    if (ptCurrentPage < totalPages) {
      ptCurrentPage = totalPages;
      renderPtTable();
    }
  });

  btnAddRow.addEventListener('click', () => {
    addPaymentTermForm.reset();
    if (companySelect.value) {
      document.getElementById('newCompany').value = companySelect.value;
    }
    addModalOverlay.classList.add('active');
  });

  modalCloseBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));
  modalCancelBtn.addEventListener('click', () => addModalOverlay.classList.remove('active'));

  addPaymentTermForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newRecord = {
      company: document.getElementById('newCompany').value,
      code: document.getElementById('newPaymentTerm').value.trim().toUpperCase(),
      desc: document.getElementById('newPaymentTermDesc').value.trim(),
      days: parseInt(document.getElementById('newDaysToDueDate').value, 10) || 0,
      commercialYear: document.getElementById('newUseCommercialYear').checked ? 'Yes' : 'No',
      endOfMonth: document.getElementById('newEndOfMonth').checked ? 'Yes' : 'No'
    };

    ptDataset.unshift(newRecord);
    addModalOverlay.classList.remove('active');
    ptSelectedRowIndex = 0;
    ptCurrentPage = 1;
    renderPtTable();
    showToast(`Payment term "${newRecord.code}" created successfully.`, 'success');
  });

  btnDeleteRow.addEventListener('click', () => {
    if (ptSelectedRowIndex === null || !ptDataset[ptSelectedRowIndex]) {
      showToast('Please select a row in the table to delete.', 'warning');
      return;
    }
    const item = ptDataset[ptSelectedRowIndex];
    if (confirm(`Are you sure you want to delete payment term "${item.code}"?`)) {
      ptDataset.splice(ptSelectedRowIndex, 1);
      ptSelectedRowIndex = null;
      renderPtTable();
      showToast(`Payment term "${item.code}" deleted.`, 'info');
    }
  });

  btnDownload.addEventListener('click', () => {
    if (ptDataset.length === 0) {
      showToast('No records available to download.', 'warning');
      return;
    }
    exportPtToCSV();
  });

  btnCollapse.addEventListener('click', () => {
    const icon = btnCollapse.querySelector('i');
    if (gridViewport.style.display === 'none') {
      gridViewport.style.display = 'block';
      icon.className = 'fa-solid fa-chevron-up';
    } else {
      gridViewport.style.display = 'none';
      icon.className = 'fa-solid fa-chevron-down';
    }
  });

  renderPtTable();
}

function handlePtSearch() {
  const company = document.getElementById('companySelect').value;
  const termQuery = document.getElementById('paymentTermInput').value.trim().toLowerCase();

  let results = [...defaultPaymentTerms];
  if (company) results = results.filter(r => r.company === company);
  if (termQuery) {
    results = results.filter(r =>
      r.code.toLowerCase().includes(termQuery) ||
      r.desc.toLowerCase().includes(termQuery)
    );
  }

  ptDataset = results;
  ptSelectedRowIndex = null;
  ptCurrentPage = 1;
  renderPtTable();
}

function renderPtTable() {
  const tableBody = document.getElementById('tableBody');
  const recordStatusText = document.getElementById('recordStatusText');
  const totalPagesText = document.getElementById('totalPagesText');
  const pageNumberInput = document.getElementById('pageNumberInput');
  const btnFirst = document.getElementById('btnFirstPage');
  const btnPrev = document.getElementById('btnPrevPage');
  const btnNext = document.getElementById('btnNextPage');
  const btnLast = document.getElementById('btnLastPage');

  tableBody.innerHTML = '';
  const totalRecords = ptDataset.length;
  const totalPages = Math.ceil(totalRecords / ptPageSize) || 0;

  totalPagesText.textContent = totalPages;
  pageNumberInput.value = totalPages > 0 ? ptCurrentPage : 1;

  if (totalRecords === 0) {
    for (let i = 0; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `
        <td class="empty-cell">&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `;
      tableBody.appendChild(tr);
    }
    recordStatusText.textContent = 'No records to view';
    btnFirst.disabled = true;
    btnPrev.disabled = true;
    btnNext.disabled = true;
    btnLast.disabled = true;
    return;
  }

  const startIndex = (ptCurrentPage - 1) * ptPageSize;
  const endIndex = Math.min(startIndex + ptPageSize, totalRecords);
  const pageRows = ptDataset.slice(startIndex, endIndex);

  pageRows.forEach((item, index) => {
    const actualIndex = startIndex + index;
    const tr = document.createElement('tr');
    tr.className = index % 2 === 0 ? 'row-even' : 'row-odd';
    if (ptSelectedRowIndex === actualIndex) {
      tr.classList.add('selected');
    }

    tr.innerHTML = `
      <td style="font-weight: 600; color: #164f78;">${escapeHtml(item.code)}</td>
      <td>${escapeHtml(item.desc)}</td>
      <td style="text-align: center;">${item.days}</td>
      <td style="text-align: center;">${escapeHtml(item.commercialYear)}</td>
      <td style="text-align: center;">${escapeHtml(item.endOfMonth)}</td>
    `;

    tr.addEventListener('click', () => {
      document.querySelectorAll('#tableBody tr').forEach(r => r.classList.remove('selected'));
      tr.classList.add('selected');
      ptSelectedRowIndex = actualIndex;
    });

    tableBody.appendChild(tr);
  });

  if (pageRows.length < 10) {
    for (let i = pageRows.length; i < 10; i++) {
      const tr = document.createElement('tr');
      tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
      tr.innerHTML = `
        <td class="empty-cell">&nbsp;</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `;
      tableBody.appendChild(tr);
    }
  }

  recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords}`;
  btnFirst.disabled = ptCurrentPage <= 1;
  btnPrev.disabled = ptCurrentPage <= 1;
  btnNext.disabled = ptCurrentPage >= totalPages;
  btnLast.disabled = ptCurrentPage >= totalPages;
}

function exportPtToCSV() {
  const headers = ['Payment Term', 'Payment Term Desc', 'Days to Due Date', 'Use Commercial Year', 'End of Month'];
  const rows = ptDataset.map(r => [
    `"${r.code}"`,
    `"${r.desc}"`,
    r.days,
    `"${r.commercialYear}"`,
    `"${r.endOfMonth}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'Payment_Terms_Export.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =============================================================================
// MODULE 4: DEFINE VOUCHER TYPES (MASTER SCREEN)
// =============================================================================
function initDefineVoucherTypeModule() {
  const codeSelect = document.getElementById('vtTypeCodeSelect');
  const descInput = document.getElementById('vtTypeDescInput');
  const btnSaveVt = document.getElementById('btnSaveVoucherType');
  const btnNewVt = document.getElementById('btnNewVoucherType');

  // Ledger Selection Elements
  const ledgerSelect = document.getElementById('vtLedgerSelect');
  const ledgerIdInput = document.getElementById('vtLedgerIdInput');
  const chkBalanceMandatory = document.getElementById('vtBalanceMandatory');
  const chkUseManualMethods = document.getElementById('vtUseManualInternalMethods');

  // Voucher Selection Elements
  const chkAutoAllotment = document.getElementById('vtAutomaticAllotment');
  const chkSingleFunctionGroup = document.getElementById('vtSingleFunctionGroup');
  const chkSimulationVoucher = document.getElementById('vtSimulationVoucher');

  // Grid Controls
  const gridViewport = document.getElementById('vtGridViewport');
  const btnCollapseGrid = document.getElementById('btnCollapseVtGrid');
  const btnHeaderAddFg = document.getElementById('btnHeaderAddFg');
  const btnAddRow = document.getElementById('btnVtAddRow');
  const btnDeleteRow = document.getElementById('btnVtDeleteRow');
  const btnDownload = document.getElementById('btnVtDownload');

  const pageSizeSelect = document.getElementById('vtPageSizeSelect');
  const pageNumberInput = document.getElementById('vtPageNumberInput');
  const btnFirst = document.getElementById('btnVtFirstPage');
  const btnPrev = document.getElementById('btnVtPrevPage');
  const btnNext = document.getElementById('btnVtNextPage');
  const btnLast = document.getElementById('btnVtLastPage');

  // Modal: Define New Voucher Type
  const addVtModal = document.getElementById('addVtModalOverlay');
  const addVtForm = document.getElementById('addVtForm');
  const modalVtCode = document.getElementById('modalVtCode');
  const modalVtDesc = document.getElementById('modalVtDesc');
  const modalVtLedger = document.getElementById('modalVtLedger');
  const modalVtLedgerId = document.getElementById('modalVtLedgerId');
  const modalVtBalMandatory = document.getElementById('modalVtBalMandatory');
  const modalVtManualMethods = document.getElementById('modalVtManualMethods');
  const modalVtAutoAllot = document.getElementById('modalVtAutoAllot');
  const modalVtSingleGroup = document.getElementById('modalVtSingleGroup');
  const modalVtSimVoucher = document.getElementById('modalVtSimVoucher');
  const addVtModalAlert = document.getElementById('addVtModalAlert');
  const addVtCloseBtn = document.getElementById('addVtModalCloseBtn');
  const addVtCancelBtn = document.getElementById('addVtModalCancelBtn');

  // Modal: Add Function Group
  const addFgModal = document.getElementById('addFgModalOverlay');
  const addFgForm = document.getElementById('addFgForm');
  const modalFgActiveVtDisplay = document.getElementById('modalFgActiveVtDisplay');
  const modalFgSelect = document.getElementById('modalFgSelect');
  const modalFgDescInput = document.getElementById('modalFgDescInput');
  const modalFgOptAutoBal = document.getElementById('modalFgOptAutoBal');
  const modalFgStoreOrig = document.getElementById('modalFgStoreOrig');
  const modalFgAutoAllotReq = document.getElementById('modalFgAutoAllotReq');
  const modalFgSingleGroupReq = document.getElementById('modalFgSingleGroupReq');
  const addFgModalAlert = document.getElementById('addFgModalAlert');
  const addFgCloseBtn = document.getElementById('addFgModalCloseBtn');
  const addFgCancelBtn = document.getElementById('addFgModalCancelBtn');

  // Populate Voucher Type code dropdown
  function populateVtDropdown() {
    codeSelect.innerHTML = '';
    voucherTypesData.forEach(vt => {
      const opt = document.createElement('option');
      opt.value = vt.code;
      opt.textContent = `${vt.code} - ${vt.description}`;
      codeSelect.appendChild(opt);
    });
    codeSelect.value = vtActiveCode;
  }

  // Load selected voucher type values into form fields
  function loadActiveVoucherTypeData() {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    if (!vt) return;

    descInput.value = vt.description || '';
    if (ledgerSelect) ledgerSelect.value = vt.ledger || '01 - General Ledger';
    if (ledgerIdInput) ledgerIdInput.value = vt.ledgerId || 'GL01';
    if (chkBalanceMandatory) chkBalanceMandatory.checked = !!vt.balanceMandatory;
    if (chkUseManualMethods) chkUseManualMethods.checked = !!vt.useManualInternalMethods;

    if (chkAutoAllotment) chkAutoAllotment.checked = !!vt.automaticAllotment;
    if (chkSingleFunctionGroup) chkSingleFunctionGroup.checked = !!vt.singleFunctionGroup;
    if (chkSimulationVoucher) chkSimulationVoucher.checked = !!vt.simulationVoucher;

    // Update window title if present
    const winTitle = document.getElementById('vtWindowCompanyTitle');
    if (winTitle) {
      winTitle.textContent = `LAXMI01 - Define Voucher Types [${vt.code}]`;
    }

    vtSelectedFgIndex = null;
    vtCurrentPage = 1;
    renderVtTable();
  }

  // Handle Voucher Type selection change
  codeSelect.addEventListener('change', () => {
    vtActiveCode = codeSelect.value;
    loadActiveVoucherTypeData();
  });

  // Save Voucher Type Changes
  btnSaveVt.addEventListener('click', () => {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    if (!vt) {
      showToast('No active voucher type selected.', 'error');
      return;
    }

    const newDesc = descInput.value.trim();
    if (!newDesc) {
      showToast('Voucher Type Description cannot be empty.', 'warning');
      descInput.focus();
      return;
    }

    vt.description = newDesc;
    if (ledgerSelect) vt.ledger = ledgerSelect.value;
    if (ledgerIdInput) vt.ledgerId = ledgerIdInput.value.trim();
    if (chkBalanceMandatory) vt.balanceMandatory = chkBalanceMandatory.checked;
    if (chkUseManualMethods) vt.useManualInternalMethods = chkUseManualMethods.checked;
    if (chkAutoAllotment) vt.automaticAllotment = chkAutoAllotment.checked;
    if (chkSingleFunctionGroup) vt.singleFunctionGroup = chkSingleFunctionGroup.checked;
    if (chkSimulationVoucher) vt.simulationVoucher = chkSimulationVoucher.checked;

    populateVtDropdown();
    showToast(`Voucher Type "${vt.code}" configuration saved successfully.`, 'success');
  });

  // Open New Voucher Type Modal
  btnNewVt.addEventListener('click', () => {
    addVtForm.reset();
    addVtModalAlert.innerHTML = '';
    modalVtCode.value = '';
    modalVtDesc.value = '';
    modalVtLedger.value = '01 - General Ledger';
    modalVtLedgerId.value = 'GL01';
    modalVtBalMandatory.checked = true;
    modalVtManualMethods.checked = false;
    modalVtAutoAllot.checked = true;
    modalVtSingleGroup.checked = false;
    modalVtSimVoucher.checked = false;
    addVtModal.classList.add('active');
    setTimeout(() => modalVtCode.focus(), 100);
  });

  addVtCloseBtn.addEventListener('click', () => addVtModal.classList.remove('active'));
  addVtCancelBtn.addEventListener('click', () => addVtModal.classList.remove('active'));

  // Save New Voucher Type Form
  addVtForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = modalVtCode.value.trim().toUpperCase();
    const desc = modalVtDesc.value.trim();

    if (!code) {
      addVtModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Voucher Type code is required.</span>
        </div>
      `;
      return;
    }

    if (!desc) {
      addVtModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Voucher Type description is required.</span>
        </div>
      `;
      return;
    }

    const exists = voucherTypesData.some(v => v.code === code);
    if (exists) {
      addVtModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Voucher Type "${code}" already exists. Please choose a unique code.</span>
        </div>
      `;
      return;
    }

    const newVt = {
      code,
      description: desc,
      ledger: modalVtLedger.value,
      ledgerId: modalVtLedgerId.value.trim() || 'GL01',
      balanceMandatory: modalVtBalMandatory.checked,
      useManualInternalMethods: modalVtManualMethods.checked,
      automaticAllotment: modalVtAutoAllot.checked,
      singleFunctionGroup: modalVtSingleGroup.checked,
      simulationVoucher: modalVtSimVoucher.checked,
      functionGroups: []
    };

    voucherTypesData.push(newVt);
    vtActiveCode = code;
    populateVtDropdown();
    loadActiveVoucherTypeData();

    addVtModal.classList.remove('active');
    showToast(`Voucher Type "${code} - ${desc}" created successfully.`, 'success');
  });

  // Open Add Function Group Modal
  function openAddFgModal() {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    if (!vt) return;

    modalFgActiveVtDisplay.textContent = `${vt.code} - ${vt.description}`;
    addFgForm.reset();
    modalFgDescInput.value = '';
    addFgModalAlert.innerHTML = '';

    modalFgSelect.innerHTML = '<option value="">-- Select Function Group --</option>';
    functionGroupsMaster.forEach(fg => {
      const opt = document.createElement('option');
      opt.value = fg.code;
      opt.textContent = `${fg.code} - ${fg.name}`;
      modalFgSelect.appendChild(opt);
    });

    modalFgOptAutoBal.checked = false;
    modalFgStoreOrig.checked = true;
    modalFgAutoAllotReq.checked = true;
    modalFgSingleGroupReq.checked = false;

    addFgModal.classList.add('active');
  }

  btnHeaderAddFg.addEventListener('click', openAddFgModal);
  btnAddRow.addEventListener('click', openAddFgModal);
  addFgCloseBtn.addEventListener('click', () => addFgModal.classList.remove('active'));
  addFgCancelBtn.addEventListener('click', () => addFgModal.classList.remove('active'));

  modalFgSelect.addEventListener('change', () => {
    const selCode = modalFgSelect.value;
    const fg = functionGroupsMaster.find(f => f.code === selCode);
    modalFgDescInput.value = fg ? fg.name : '';

    if (selCode) {
      const vt = voucherTypesData.find(item => item.code === vtActiveCode);
      const isAlreadyAdded = vt && vt.functionGroups.some(g => g.functionGroup === selCode);
      if (isAlreadyAdded) {
        addFgModalAlert.innerHTML = `
          <div class="modal-alert modal-alert-error">
            <i class="fa-solid fa-triangle-exclamation"></i>
            <span>Function Group "${selCode}" is already mapped to Voucher Type "${vtActiveCode}".</span>
          </div>
        `;
      } else {
        addFgModalAlert.innerHTML = '';
      }
    } else {
      addFgModalAlert.innerHTML = '';
    }
  });

  // Save Function Group Form
  addFgForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    if (!vt) return;

    const fgCode = modalFgSelect.value;
    if (!fgCode) {
      addFgModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Please select a valid Function Group.</span>
        </div>
      `;
      return;
    }

    const isAlreadyAdded = vt.functionGroups.some(g => g.functionGroup === fgCode);
    if (isAlreadyAdded) {
      addFgModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>Function Group "${fgCode}" is already added to this Voucher Type.</span>
        </div>
      `;
      return;
    }

    const fgMaster = functionGroupsMaster.find(f => f.code === fgCode);
    const desc = fgMaster ? fgMaster.name : modalFgDescInput.value.trim();

    vt.functionGroups.push({
      functionGroup: fgCode,
      description: desc,
      optionalAutoBalance: modalFgOptAutoBal.checked,
      storeOriginal: modalFgStoreOrig.checked,
      autoAllotmentReq: modalFgAutoAllotReq.checked,
      singleGroupReq: modalFgSingleGroupReq.checked
    });

    addFgModal.classList.remove('active');
    renderVtTable();
    showToast(`Function Group "${fgCode}" added to Voucher Type "${vt.code}".`, 'success');
  });

  // Global delete handler for inline trash button
  window.handleDeleteFg = function(index) {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    if (!vt || !vt.functionGroups[index]) return;

    const item = vt.functionGroups[index];
    if (confirm(`Are you sure you want to remove Function Group "${item.functionGroup} - ${item.description}" from Voucher Type "${vt.code}"?`)) {
      vt.functionGroups.splice(index, 1);
      vtSelectedFgIndex = null;
      renderVtTable();
      showToast(`Function Group "${item.functionGroup}" removed.`, 'info');
    }
  };

  // Delete Selected Row Button
  btnDeleteRow.addEventListener('click', () => {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    if (!vt) return;

    if (vtSelectedFgIndex === null || !vt.functionGroups[vtSelectedFgIndex]) {
      showToast('Please select a row in the table to delete.', 'warning');
      return;
    }

    const item = vt.functionGroups[vtSelectedFgIndex];
    if (confirm(`Are you sure you want to remove Function Group "${item.functionGroup} - ${item.description}"?`)) {
      vt.functionGroups.splice(vtSelectedFgIndex, 1);
      vtSelectedFgIndex = null;
      renderVtTable();
      showToast(`Function Group "${item.functionGroup}" deleted.`, 'info');
    }
  });

  // Export CSV
  btnDownload.addEventListener('click', () => {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    if (!vt || vt.functionGroups.length === 0) {
      showToast('No function group records available to download.', 'warning');
      return;
    }

    const headers = [
      'Function Group',
      'Function Group Description',
      'Optional Auto Balance',
      'Store Original',
      'Automatic Allotment Required',
      'Single Function Group Required'
    ];

    const rows = vt.functionGroups.map(r => [
      `"${r.functionGroup}"`,
      `"${r.description.replace(/"/g, '""')}"`,
      `"${r.optionalAutoBalance ? 'Yes' : 'No'}"`,
      `"${r.storeOriginal ? 'Yes' : 'No'}"`,
      `"${r.autoAllotmentReq ? 'Yes' : 'No'}"`,
      `"${r.singleGroupReq ? 'Yes' : 'No'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Define_Voucher_Type_${vt.code}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast(`CSV export generated for Voucher Type "${vt.code}".`, 'success');
  });

  // Collapse / Expand Grid
  btnCollapseGrid.addEventListener('click', () => {
    const icon = btnCollapseGrid.querySelector('i');
    if (gridViewport.style.display === 'none') {
      gridViewport.style.display = 'block';
      icon.className = 'fa-solid fa-chevron-up';
    } else {
      gridViewport.style.display = 'none';
      icon.className = 'fa-solid fa-chevron-down';
    }
  });

  // Pagination Handlers
  pageSizeSelect.addEventListener('change', () => {
    vtPageSize = parseInt(pageSizeSelect.value, 10) || 1000;
    vtCurrentPage = 1;
    renderVtTable();
  });

  btnFirst.addEventListener('click', () => {
    if (vtCurrentPage > 1) {
      vtCurrentPage = 1;
      renderVtTable();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (vtCurrentPage > 1) {
      vtCurrentPage--;
      renderVtTable();
    }
  });

  btnNext.addEventListener('click', () => {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    const totalRecords = vt ? vt.functionGroups.length : 0;
    const totalPages = Math.ceil(totalRecords / vtPageSize) || 1;
    if (vtCurrentPage < totalPages) {
      vtCurrentPage++;
      renderVtTable();
    }
  });

  btnLast.addEventListener('click', () => {
    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    const totalRecords = vt ? vt.functionGroups.length : 0;
    const totalPages = Math.ceil(totalRecords / vtPageSize) || 1;
    if (vtCurrentPage < totalPages) {
      vtCurrentPage = totalPages;
      renderVtTable();
    }
  });

  pageNumberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const pageVal = parseInt(pageNumberInput.value, 10);
      const vt = voucherTypesData.find(item => item.code === vtActiveCode);
      const totalRecords = vt ? vt.functionGroups.length : 0;
      const totalPages = Math.ceil(totalRecords / vtPageSize) || 1;
      if (!isNaN(pageVal) && pageVal >= 1 && pageVal <= totalPages) {
        vtCurrentPage = pageVal;
        renderVtTable();
      } else {
        pageNumberInput.value = vtCurrentPage;
      }
    }
  });

  // Render Table Function
  function renderVtTable() {
    const tableBody = document.getElementById('vtTableBody');
    const recordStatusText = document.getElementById('vtRecordStatusText');
    const totalPagesText = document.getElementById('vtTotalPagesText');
    const pageNumberInput = document.getElementById('vtPageNumberInput');

    tableBody.innerHTML = '';

    const vt = voucherTypesData.find(item => item.code === vtActiveCode);
    const dataset = vt ? vt.functionGroups : [];
    const totalRecords = dataset.length;
    const totalPages = Math.ceil(totalRecords / vtPageSize) || 1;

    totalPagesText.textContent = totalPages;
    pageNumberInput.value = vtCurrentPage;

    if (totalRecords === 0) {
      // Empty display matching legacy grid screenshot
      for (let i = 0; i < 7; i++) {
        const tr = document.createElement('tr');
        tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        const indicatorContent = i === 6 ? '<span style="font-weight:bold;">&ndash;</span>' : '&nbsp;';
        tr.innerHTML = `
          <td class="table-row-indicator">${indicatorContent}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        `;
        tableBody.appendChild(tr);
      }

      recordStatusText.textContent = 'Displaying 0 records';
      btnFirst.disabled = true;
      btnPrev.disabled = true;
      btnNext.disabled = true;
      btnLast.disabled = true;
      return;
    }

    const startIndex = (vtCurrentPage - 1) * vtPageSize;
    const endIndex = Math.min(startIndex + vtPageSize, totalRecords);
    const pageRows = dataset.slice(startIndex, endIndex);

    pageRows.forEach((item, index) => {
      const actualIndex = startIndex + index;
      const tr = document.createElement('tr');
      tr.className = index % 2 === 0 ? 'row-even' : 'row-odd';
      if (vtSelectedFgIndex === actualIndex) {
        tr.classList.add('selected');
      }

      const optAutoBalBadge = item.optionalAutoBalance
        ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i></span>`
        : ``;

      const storeOrigBadge = item.storeOriginal
        ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i></span>`
        : ``;

      const autoAllotReqBadge = item.autoAllotmentReq
        ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i></span>`
        : ``;

      const singleGroupReqBadge = item.singleGroupReq
        ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i></span>`
        : ``;

      const indicatorSymbol = vtSelectedFgIndex === actualIndex
        ? `<i class="fa-solid fa-play" style="font-size:7px; color:#186299;"></i>`
        : `${actualIndex + 1}`;

      tr.innerHTML = `
        <td class="table-row-indicator">${indicatorSymbol}</td>
        <td style="font-weight: 700; color: #164f78; text-align: center;">${escapeHtml(item.functionGroup)}</td>
        <td style="font-weight: 500;">${escapeHtml(item.description)}</td>
        <td style="text-align: center;">${optAutoBalBadge}</td>
        <td style="text-align: center;">${storeOrigBadge}</td>
        <td style="text-align: center;">${autoAllotReqBadge}</td>
        <td style="text-align: center;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 0 4px;">
            <div style="flex: 1; text-align: center;">${singleGroupReqBadge}</div>
            <button type="button" class="btn-grid-action btn-delete-user" title="Delete Function Group" onclick="event.stopPropagation(); window.handleDeleteFg(${actualIndex})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      `;

      tr.addEventListener('click', () => {
        document.querySelectorAll('#vtTableBody tr').forEach(r => r.classList.remove('selected'));
        tr.classList.add('selected');
        vtSelectedFgIndex = actualIndex;
        renderVtTable();
      });

      tableBody.appendChild(tr);
    });

    // Pad rows up to 7 rows with dotted cells like screenshot
    if (pageRows.length < 7) {
      for (let i = pageRows.length; i < 7; i++) {
        const tr = document.createElement('tr');
        tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        const indicatorContent = i === 6 ? '<span style="font-weight:bold;">&ndash;</span>' : '&nbsp;';
        tr.innerHTML = `
          <td class="table-row-indicator">${indicatorContent}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        `;
        tableBody.appendChild(tr);
      }
    }

    recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`;
    btnFirst.disabled = vtCurrentPage <= 1;
    btnPrev.disabled = vtCurrentPage <= 1;
    btnNext.disabled = vtCurrentPage >= totalPages;
    btnLast.disabled = vtCurrentPage >= totalPages;
  }

  // Initial load
  populateVtDropdown();
  loadActiveVoucherTypeData();
}

// =============================================================================
// MODULE 5: QUERY VOUCHER TYPES (MASTER INQUIRY SCREEN)
// =============================================================================
function initQueryVoucherTypesModule() {
  const filterVtInput = document.getElementById('qvtFilterVoucherType');
  const filterFgSelect = document.getElementById('qvtFilterFunctionGroup');
  const filterLedgerSelect = document.getElementById('qvtFilterLedger');
  const btnSearch = document.getElementById('btnQvtSearch');
  const btnReset = document.getElementById('btnQvtReset');
  const btnRefresh = document.getElementById('btnQvtRefresh');
  const btnDownload = document.getElementById('btnQvtDownload');
  const btnCollapse = document.getElementById('btnCollapseQvtGrid');
  const gridViewport = document.getElementById('qvtGridViewport');

  const btnHeaderAdd = document.getElementById('btnHeaderAddQvt');
  const btnAddRow = document.getElementById('btnQvtAddRow');
  const btnDeleteRow = document.getElementById('btnQvtDeleteRow');

  const pageSizeSelect = document.getElementById('qvtPageSizeSelect');
  const pageNumberInput = document.getElementById('qvtPageNumberInput');
  const btnFirst = document.getElementById('btnQvtFirstPage');
  const btnPrev = document.getElementById('btnQvtPrevPage');
  const btnNext = document.getElementById('btnQvtNextPage');
  const btnLast = document.getElementById('btnQvtLastPage');

  // Modal: View details
  const viewModal = document.getElementById('viewQvtModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewQvtModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewQvtModalOkBtn');

  // Modal: Add Entry
  const addModal = document.getElementById('addQvtModalOverlay');
  const addForm = document.getElementById('addQvtForm');
  const addModalCloseBtn = document.getElementById('addQvtModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addQvtModalCancelBtn');
  const addModalAlert = document.getElementById('addQvtModalAlert');
  const addTypeCodeInput = document.getElementById('addQvtTypeCode');
  const addTypeDescInput = document.getElementById('addQvtTypeDesc');
  const addFgCodeSelect = document.getElementById('addQvtFgCode');
  const addFgDescInput = document.getElementById('addQvtFgDesc');
  const addLedgerSelect = document.getElementById('addQvtLedger');
  const addLedgerIdInput = document.getElementById('addQvtLedgerId');

  // Text input fields in Add Entry Modal
  const addTxtAutoAllot = document.getElementById('addQvtAutoAllot');
  const addTxtManualMethods = document.getElementById('addQvtManualMethods');
  const addTxtSimulation = document.getElementById('addQvtSimulation');
  const addTxtSingleGroup = document.getElementById('addQvtSingleGroup');
  const addTxtBalance = document.getElementById('addQvtBalance');
  const addTxtOptAutoBal = document.getElementById('addQvtOptAutoBal');
  const addTxtStoreOrig = document.getElementById('addQvtStoreOrig');

  // Populate Function Groups filter and modal dropdowns
  function populateFilterDropdowns() {
    filterFgSelect.innerHTML = '<option value="">All Function Groups</option>';
    functionGroupsMaster.forEach(fg => {
      const opt = document.createElement('option');
      opt.value = fg.code;
      opt.textContent = `${fg.code} - ${fg.name}`;
      filterFgSelect.appendChild(opt);
    });
  }

  function populateAddModalFgDropdown() {
    addFgCodeSelect.innerHTML = '<option value="">-- Select (Optional) --</option>';
    functionGroupsMaster.forEach(fg => {
      const opt = document.createElement('option');
      opt.value = fg.code;
      opt.textContent = `${fg.code} - ${fg.name}`;
      addFgCodeSelect.appendChild(opt);
    });
  }

  addFgCodeSelect.addEventListener('change', () => {
    const sel = addFgCodeSelect.value;
    const fg = functionGroupsMaster.find(f => f.code === sel);
    addFgDescInput.value = fg ? fg.name : '';
  });

  // State for inline row editing
  let qvtEditingRowIndex = null; // null, number (editing row), or 'new' (new draft row)
  let qvtDraftNewRow = null;

  // Generate flattened query records from voucherTypesData - NO Y/N values!
  function buildQueryRecords() {
    const defaultTextMap = {
      'M_M': { auto: 'Automatic', manual: 'Internal Method', sim: 'Standard', single: 'General Group', bal: 'Mandatory', optBal: 'Balance Option', orig: 'Original Copy' },
      'M_J': { auto: 'Automatic', manual: 'Journal Method', sim: 'Standard', single: 'General Group', bal: 'Mandatory', optBal: 'Auto Balanced', orig: 'Original Copy' },
      'F_D': { auto: 'Automatic', manual: 'Invoice Matching', sim: 'Standard', single: 'Single Group', bal: 'Mandatory', optBal: 'Auto Balanced', orig: 'Original Copy' },
      'F_U': { auto: 'Automatic', manual: 'Payment Run', sim: 'Standard', single: 'Single Group', bal: 'Mandatory', optBal: 'Optional Auto', orig: 'Original Copy' },
      'J_C': { auto: 'Automatic', manual: 'Direct Invoicing', sim: 'Standard', single: 'Multi Group', bal: 'Mandatory', optBal: 'Standard Balance', orig: 'Original Copy' },
      'J_K': { auto: 'Automatic', manual: 'Customer Receipt', sim: 'Standard', single: 'Multi Group', bal: 'Mandatory', optBal: 'Optional Auto', orig: 'Original Copy' },
      'S_A': { auto: 'Manual Allot', manual: 'Manual Internal', sim: 'Simulation', single: 'Simulation Group', bal: 'Optional', optBal: 'Auto Balanced', orig: 'Archive Copy' },
      'U_B': { auto: 'Automatic', manual: 'Bank Reconciliation', sim: 'Standard', single: 'Single Group', bal: 'Mandatory', optBal: 'Auto Balanced', orig: 'Original Copy' }
    };

    const list = [];
    voucherTypesData.forEach(vt => {
      if (vt.functionGroups && vt.functionGroups.length > 0) {
        vt.functionGroups.forEach(fg => {
          const key = `${vt.code}_${fg.functionGroup}`;
          const defaults = defaultTextMap[key] || {
            auto: 'Automatic',
            manual: 'Standard Method',
            sim: 'Standard',
            single: 'Standard Group',
            bal: 'Mandatory',
            optBal: 'Auto Balanced',
            orig: 'Original Copy'
          };

          list.push({
            voucherType: vt.code,
            voucherTypeDesc: vt.description,
            functionGroup: fg.functionGroup,
            functionGroupDesc: fg.description,
            automaticAllotment: (typeof vt.automaticAllotment === 'string' && vt.automaticAllotment !== 'Y' && vt.automaticAllotment !== 'N') ? vt.automaticAllotment : defaults.auto,
            useManualInternalMethods: (typeof vt.useManualInternalMethods === 'string' && vt.useManualInternalMethods !== 'Y' && vt.useManualInternalMethods !== 'N') ? vt.useManualInternalMethods : defaults.manual,
            simulationVoucher: (typeof vt.simulationVoucher === 'string' && vt.simulationVoucher !== 'Y' && vt.simulationVoucher !== 'N') ? vt.simulationVoucher : defaults.sim,
            singleFunctionGroup: (typeof vt.singleFunctionGroup === 'string' && vt.singleFunctionGroup !== 'Y' && vt.singleFunctionGroup !== 'N') ? vt.singleFunctionGroup : defaults.single,
            balanceMandatory: (typeof vt.balanceMandatory === 'string' && vt.balanceMandatory !== 'Y' && vt.balanceMandatory !== 'N') ? vt.balanceMandatory : defaults.bal,
            ledger: vt.ledger || '01 - General Ledger',
            ledgerId: vt.ledgerId || 'GL01',
            optionalAutoBalance: (typeof fg.optionalAutoBalance === 'string' && fg.optionalAutoBalance !== 'Y' && fg.optionalAutoBalance !== 'N') ? fg.optionalAutoBalance : defaults.optBal,
            storeOriginal: (typeof fg.storeOriginal === 'string' && fg.storeOriginal !== 'Y' && fg.storeOriginal !== 'N') ? fg.storeOriginal : defaults.orig
          });
        });
      } else {
        list.push({
          voucherType: vt.code,
          voucherTypeDesc: vt.description,
          functionGroup: '',
          functionGroupDesc: '',
          automaticAllotment: (typeof vt.automaticAllotment === 'string' && vt.automaticAllotment !== 'Y' && vt.automaticAllotment !== 'N') ? vt.automaticAllotment : 'Automatic',
          useManualInternalMethods: (typeof vt.useManualInternalMethods === 'string' && vt.useManualInternalMethods !== 'Y' && vt.useManualInternalMethods !== 'N') ? vt.useManualInternalMethods : 'Standard Method',
          simulationVoucher: (typeof vt.simulationVoucher === 'string' && vt.simulationVoucher !== 'Y' && vt.simulationVoucher !== 'N') ? vt.simulationVoucher : 'Standard',
          singleFunctionGroup: (typeof vt.singleFunctionGroup === 'string' && vt.singleFunctionGroup !== 'Y' && vt.singleFunctionGroup !== 'N') ? vt.singleFunctionGroup : 'General Group',
          balanceMandatory: (typeof vt.balanceMandatory === 'string' && vt.balanceMandatory !== 'Y' && vt.balanceMandatory !== 'N') ? vt.balanceMandatory : 'Mandatory',
          ledger: vt.ledger || '01 - General Ledger',
          ledgerId: vt.ledgerId || 'GL01',
          optionalAutoBalance: 'Standard Balance',
          storeOriginal: 'Original Copy'
        });
      }
    });
    return list;
  }

  // Filter application
  function applyQvtFilters() {
    const allRecords = buildQueryRecords();
    const queryVt = filterVtInput.value.trim().toLowerCase();
    const queryFg = filterFgSelect.value;
    const queryLedger = filterLedgerSelect.value;

    let filtered = allRecords;

    if (queryVt) {
      filtered = filtered.filter(r =>
        r.voucherType.toLowerCase().includes(queryVt) ||
        r.voucherTypeDesc.toLowerCase().includes(queryVt)
      );
    }

    if (queryFg) {
      filtered = filtered.filter(r => r.functionGroup === queryFg);
    }

    if (queryLedger) {
      filtered = filtered.filter(r => r.ledger === queryLedger);
    }

    qvtCurrentDataset = filtered;
    qvtSelectedRowIndex = null;
    qvtEditingRowIndex = null;
    qvtCurrentPage = 1;
    renderQvtTable();
  }

  btnSearch.addEventListener('click', () => {
    applyQvtFilters();
    showToast(`Loaded ${qvtCurrentDataset.length} voucher type record(s).`, 'info');
  });

  filterVtInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') applyQvtFilters();
  });

  filterFgSelect.addEventListener('change', applyQvtFilters);
  filterLedgerSelect.addEventListener('change', applyQvtFilters);

  btnReset.addEventListener('click', () => {
    filterVtInput.value = '';
    filterFgSelect.value = '';
    filterLedgerSelect.value = '';
    qvtCurrentDataset = buildQueryRecords();
    qvtSelectedRowIndex = null;
    qvtEditingRowIndex = null;
    qvtCurrentPage = 1;
    renderQvtTable();
    showToast('Inquiry filters reset.', 'info');
  });

  btnRefresh.addEventListener('click', () => {
    applyQvtFilters();
    showToast('Voucher types inquiry grid refreshed.', 'success');
  });

  // Open Add Entry Modal (Blank manual input fields - NO Y/N values!)
  function openAddEntryModal() {
    addForm.reset();
    addModalAlert.innerHTML = '';
    addTypeCodeInput.value = '';
    addTypeDescInput.value = '';
    addFgDescInput.value = '';
    addLedgerSelect.value = '01 - General Ledger';
    addLedgerIdInput.value = 'GL01';

    // Blank manual input fields
    addTxtAutoAllot.value = '';
    addTxtManualMethods.value = '';
    addTxtSimulation.value = '';
    addTxtSingleGroup.value = '';
    addTxtBalance.value = '';
    addTxtOptAutoBal.value = '';
    addTxtStoreOrig.value = '';

    populateAddModalFgDropdown();
    addModal.classList.add('active');
    setTimeout(() => addTypeCodeInput.focus(), 100);
  }

  if (btnHeaderAdd) btnHeaderAdd.addEventListener('click', openAddEntryModal);

  // Bottom Add button triggers inline row entry
  if (btnAddRow) {
    btnAddRow.addEventListener('click', () => {
      window.startQvtNewInlineRow();
    });
  }

  addModalCloseBtn.addEventListener('click', () => addModal.classList.remove('active'));
  addModalCancelBtn.addEventListener('click', () => addModal.classList.remove('active'));

  // Save Add Entry Form - Enforce ALL required fields completed before saving
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const vtCode = addTypeCodeInput.value.trim().toUpperCase();
    const vtDesc = addTypeDescInput.value.trim();
    const fgCode = addFgCodeSelect.value.trim();
    const fgDesc = addFgDescInput.value.trim() || (fgCode ? (functionGroupsMaster.find(f => f.code === fgCode)?.name || '') : '');
    const ledgerVal = addLedgerSelect.value.trim();
    const ledgerIdVal = addLedgerIdInput.value.trim();
    const autoAllotVal = addTxtAutoAllot.value.trim();
    const manualMethodsVal = addTxtManualMethods.value.trim();
    const simulationVal = addTxtSimulation.value.trim();
    const singleGroupVal = addTxtSingleGroup.value.trim();
    const balanceVal = addTxtBalance.value.trim();
    const optAutoBalVal = addTxtOptAutoBal.value.trim();
    const storeOrigVal = addTxtStoreOrig.value.trim();

    const requiredFields = [
      { name: 'Voucher Type', val: vtCode },
      { name: 'Voucher Type Description', val: vtDesc },
      { name: 'Function Group', val: fgCode },
      { name: 'Function Group Description', val: fgDesc },
      { name: 'Ledger', val: ledgerVal },
      { name: 'Ledger ID', val: ledgerIdVal },
      { name: 'Automatic Allotment', val: autoAllotVal },
      { name: 'Use Manual Internal Methods', val: manualMethodsVal },
      { name: 'Simulation Voucher', val: simulationVal },
      { name: 'Single Function Group', val: singleGroupVal },
      { name: 'Balance', val: balanceVal },
      { name: 'Optional Auto Balance', val: optAutoBalVal },
      { name: 'Store Original', val: storeOrigVal }
    ];

    const missing = requiredFields.filter(f => !f.val);
    if (missing.length > 0) {
      addModalAlert.innerHTML = `
        <div class="modal-alert modal-alert-error">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span>A row should be saved only when all required fields have been completed. Missing: <strong>${missing.map(m => m.name).join(', ')}</strong></span>
        </div>
      `;
      return;
    }

    const newEntry = {
      voucherType: vtCode,
      voucherTypeDesc: vtDesc,
      functionGroup: fgCode,
      functionGroupDesc: fgDesc,
      automaticAllotment: autoAllotVal,
      useManualInternalMethods: manualMethodsVal,
      simulationVoucher: simulationVal,
      singleFunctionGroup: singleGroupVal,
      balanceMandatory: balanceVal,
      ledger: ledgerVal,
      ledgerId: ledgerIdVal,
      optionalAutoBalance: optAutoBalVal,
      storeOriginal: storeOrigVal
    };

    // Insert to current dataset at top - row becomes read-only
    qvtCurrentDataset.unshift(newEntry);
    qvtSelectedRowIndex = 0;
    qvtEditingRowIndex = null;
    qvtCurrentPage = 1;

    addModal.classList.remove('active');
    renderQvtTable();
    showToast(`Voucher Type entry "${vtCode}" saved successfully and is now read-only.`, 'success');
  });

  // Inline Row Handlers (Manual Input & Read-Only once saved)
  window.startQvtNewInlineRow = function() {
    qvtEditingRowIndex = 'new';
    qvtDraftNewRow = {
      voucherType: '',
      voucherTypeDesc: '',
      functionGroup: '',
      functionGroupDesc: '',
      automaticAllotment: '',
      useManualInternalMethods: '',
      simulationVoucher: '',
      singleFunctionGroup: '',
      balanceMandatory: '',
      ledger: '01 - General Ledger',
      ledgerId: 'GL01',
      optionalAutoBalance: '',
      storeOriginal: ''
    };
    qvtCurrentPage = 1;
    qvtSelectedRowIndex = null;
    renderQvtTable();
    setTimeout(() => {
      const firstInput = document.getElementById('qvt_inline_new_voucherType');
      if (firstInput) firstInput.focus();
    }, 50);
  };

  window.handleEditQvt = function(index) {
    qvtEditingRowIndex = index;
    renderQvtTable();
    setTimeout(() => {
      const firstInput = document.getElementById(`qvt_inline_${index}_voucherType`);
      if (firstInput) firstInput.focus();
    }, 50);
  };

  window.cancelQvtInlineRow = function() {
    qvtEditingRowIndex = null;
    qvtDraftNewRow = null;
    renderQvtTable();
    showToast('Editing cancelled.', 'info');
  };

  window.saveQvtInlineRow = function(target) {
    const isNew = target === 'new';
    const prefix = isNew ? 'qvt_inline_new' : `qvt_inline_${target}`;

    const fieldDefs = [
      { id: `${prefix}_voucherType`, prop: 'voucherType', label: 'Voucher Type' },
      { id: `${prefix}_voucherTypeDesc`, prop: 'voucherTypeDesc', label: 'Voucher Type Description' },
      { id: `${prefix}_functionGroup`, prop: 'functionGroup', label: 'Function Group' },
      { id: `${prefix}_functionGroupDesc`, prop: 'functionGroupDesc', label: 'Function Group Description' },
      { id: `${prefix}_automaticAllotment`, prop: 'automaticAllotment', label: 'Automatic Allotment' },
      { id: `${prefix}_useManualInternalMethods`, prop: 'useManualInternalMethods', label: 'Use Man Internal M' },
      { id: `${prefix}_simulationVoucher`, prop: 'simulationVoucher', label: 'Simulation Voucher' },
      { id: `${prefix}_singleFunctionGroup`, prop: 'singleFunctionGroup', label: 'Single Function Gr' },
      { id: `${prefix}_balanceMandatory`, prop: 'balanceMandatory', label: 'Balance' },
      { id: `${prefix}_ledger`, prop: 'ledger', label: 'Ledger' },
      { id: `${prefix}_ledgerId`, prop: 'ledgerId', label: 'Ledger ID' },
      { id: `${prefix}_optionalAutoBalance`, prop: 'optionalAutoBalance', label: 'Optional Auto Bal' },
      { id: `${prefix}_storeOriginal`, prop: 'storeOriginal', label: 'Store Origin' }
    ];

    let hasEmpty = false;
    const missingLabels = [];
    const record = {};

    fieldDefs.forEach(f => {
      const input = document.getElementById(f.id);
      const val = input ? input.value.trim() : '';
      if (!val) {
        hasEmpty = true;
        missingLabels.push(f.label);
        if (input) input.classList.add('input-error');
      } else {
        if (input) input.classList.remove('input-error');
      }
      record[f.prop] = (f.prop === 'voucherType' || f.prop === 'functionGroup') ? val.toUpperCase() : val;
    });

    if (hasEmpty) {
      showToast(`Cannot save row: All required fields must be completed. Missing: ${missingLabels.slice(0, 3).join(', ')}${missingLabels.length > 3 ? '...' : ''}`, 'warning');
      return;
    }

    // Save and switch back to read-only mode
    if (isNew) {
      qvtCurrentDataset.unshift(record);
      qvtSelectedRowIndex = 0;
    } else {
      qvtCurrentDataset[target] = record;
      qvtSelectedRowIndex = target;
    }

    qvtEditingRowIndex = null;
    qvtDraftNewRow = null;
    renderQvtTable();
    showToast(`Row for Voucher Type "${record.voucherType}" saved successfully and is now read-only.`, 'success');
  };

  // Global handler for View details - Clean manual attributes without Y/N
  window.handleViewQvt = function(index) {
    const item = qvtCurrentDataset[index];
    if (!item) return;

    document.getElementById('viewQvtTypeCode').textContent = item.voucherType || '—';
    document.getElementById('viewQvtTypeDesc').textContent = item.voucherTypeDesc || '—';
    document.getElementById('viewQvtFgCode').textContent = item.functionGroup || '—';
    document.getElementById('viewQvtFgDesc').textContent = item.functionGroupDesc || '—';
    document.getElementById('viewQvtLedger').textContent = item.ledger || '—';
    document.getElementById('viewQvtLedgerId').textContent = item.ledgerId || '—';

    function renderDetail(label, val) {
      return `<div class="view-qvt-detail-row">
        <span class="view-qvt-detail-label">${label}:</span>
        <span class="view-qvt-detail-val">${escapeHtml(val || '—')}</span>
      </div>`;
    }

    document.getElementById('viewQvtFlagAutoAllot').innerHTML = renderDetail('Automatic Allotment', item.automaticAllotment);
    document.getElementById('viewQvtFlagManualMethods').innerHTML = renderDetail('Use Man Internal M', item.useManualInternalMethods);
    document.getElementById('viewQvtFlagSimulation').innerHTML = renderDetail('Simulation Voucher', item.simulationVoucher);
    document.getElementById('viewQvtFlagSingleGroup').innerHTML = renderDetail('Single Function Gr', item.singleFunctionGroup);
    document.getElementById('viewQvtFlagBalance').innerHTML = renderDetail('Balance', item.balanceMandatory);
    document.getElementById('viewQvtFlagOptAutoBal').innerHTML = renderDetail('Optional Auto Bal', item.optionalAutoBalance);
    document.getElementById('viewQvtFlagStoreOrig').innerHTML = renderDetail('Store Origin', item.storeOriginal);

    viewModal.classList.add('active');
  };

  // Global handler for Delete row
  window.handleDeleteQvt = function(index) {
    const item = qvtCurrentDataset[index];
    if (!item) return;

    if (confirm(`Are you sure you want to delete Voucher Type entry "${item.voucherType}"${item.functionGroup ? ` (Group: ${item.functionGroup})` : ''}?`)) {
      qvtCurrentDataset.splice(index, 1);
      qvtSelectedRowIndex = null;
      renderQvtTable();
      showToast(`Voucher Type entry "${item.voucherType}" deleted.`, 'info');
    }
  };

  // Delete Selected Row Button
  if (btnDeleteRow) {
    btnDeleteRow.addEventListener('click', () => {
      if (qvtSelectedRowIndex === null || !qvtCurrentDataset[qvtSelectedRowIndex]) {
        showToast('Please select an entry in the table to delete.', 'warning');
        return;
      }
      window.handleDeleteQvt(qvtSelectedRowIndex);
    });
  }

  viewModalCloseBtn.addEventListener('click', () => viewModal.classList.remove('active'));
  viewModalOkBtn.addEventListener('click', () => viewModal.classList.remove('active'));

  // CSV Export
  btnDownload.addEventListener('click', () => {
    if (qvtCurrentDataset.length === 0) {
      showToast('No records available to download.', 'warning');
      return;
    }

    const headers = [
      'Voucher Type',
      'Voucher Type Description',
      'Function Group',
      'Function Group Description',
      'Automatic Allotment',
      'Use Manual Internal Methods',
      'Simulation Voucher',
      'Single Function Group',
      'Balance',
      'Ledger',
      'Ledger ID',
      'Optional Auto Balance',
      'Store Original'
    ];

    const rows = qvtCurrentDataset.map(r => [
      `"${r.voucherType}"`,
      `"${r.voucherTypeDesc.replace(/"/g, '""')}"`,
      `"${r.functionGroup}"`,
      `"${r.functionGroupDesc.replace(/"/g, '""')}"`,
      `"${r.automaticAllotment || ''}"`,
      `"${r.useManualInternalMethods || ''}"`,
      `"${r.simulationVoucher || ''}"`,
      `"${r.singleFunctionGroup || ''}"`,
      `"${r.balanceMandatory || ''}"`,
      `"${r.ledger}"`,
      `"${r.ledgerId}"`,
      `"${r.optionalAutoBalance || ''}"`,
      `"${r.storeOriginal || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'Query_Voucher_Types_Export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported Query Voucher Types to CSV.', 'success');
  });

  // Collapse Grid
  btnCollapse.addEventListener('click', () => {
    const icon = btnCollapse.querySelector('i');
    if (gridViewport.style.display === 'none') {
      gridViewport.style.display = 'block';
      icon.className = 'fa-solid fa-chevron-up';
    } else {
      gridViewport.style.display = 'none';
      icon.className = 'fa-solid fa-chevron-down';
    }
  });

  // Pagination Handlers
  pageSizeSelect.addEventListener('change', () => {
    qvtPageSize = parseInt(pageSizeSelect.value, 10) || 1000;
    qvtCurrentPage = 1;
    renderQvtTable();
  });

  btnFirst.addEventListener('click', () => {
    if (qvtCurrentPage > 1) {
      qvtCurrentPage = 1;
      renderQvtTable();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (qvtCurrentPage > 1) {
      qvtCurrentPage--;
      renderQvtTable();
    }
  });

  btnNext.addEventListener('click', () => {
    const totalRecords = qvtCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / qvtPageSize) || 1;
    if (qvtCurrentPage < totalPages) {
      qvtCurrentPage++;
      renderQvtTable();
    }
  });

  btnLast.addEventListener('click', () => {
    const totalRecords = qvtCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / qvtPageSize) || 1;
    if (qvtCurrentPage < totalPages) {
      qvtCurrentPage = totalPages;
      renderQvtTable();
    }
  });

  pageNumberInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const pageVal = parseInt(pageNumberInput.value, 10);
      const totalRecords = qvtCurrentDataset.length;
      const totalPages = Math.ceil(totalRecords / qvtPageSize) || 1;
      if (!isNaN(pageVal) && pageVal >= 1 && pageVal <= totalPages) {
        qvtCurrentPage = pageVal;
        renderQvtTable();
      } else {
        pageNumberInput.value = qvtCurrentPage;
      }
    }
  });

  // Render Table - Saved rows are read-only; editing/draft rows are manual inputs
  function renderQvtTable() {
    const tableBody = document.getElementById('qvtTableBody');
    const recordStatusText = document.getElementById('qvtRecordStatusText');
    const totalPagesText = document.getElementById('qvtTotalPagesText');
    const pageNumberInput = document.getElementById('qvtPageNumberInput');

    tableBody.innerHTML = '';

    const totalRecords = qvtCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / qvtPageSize) || 1;

    totalPagesText.textContent = totalPages;
    pageNumberInput.value = qvtCurrentPage;

    // Render new draft row at top if adding inline
    if (qvtEditingRowIndex === 'new') {
      const tr = document.createElement('tr');
      tr.className = 'qvt-row-editing';
      tr.innerHTML = `
        <td class="table-row-indicator"><i class="fa-solid fa-asterisk" style="font-size:8px; color:#d97706;"></i></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_voucherType" placeholder="Type *" value="${escapeHtml(qvtDraftNewRow?.voucherType || '')}" style="text-transform:uppercase;"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_voucherTypeDesc" placeholder="Description *" value="${escapeHtml(qvtDraftNewRow?.voucherTypeDesc || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_functionGroup" placeholder="Group *" value="${escapeHtml(qvtDraftNewRow?.functionGroup || '')}" style="text-transform:uppercase;"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_functionGroupDesc" placeholder="Group Desc *" value="${escapeHtml(qvtDraftNewRow?.functionGroupDesc || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_automaticAllotment" placeholder="Automatic Allotment *" value="${escapeHtml(qvtDraftNewRow?.automaticAllotment || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_useManualInternalMethods" placeholder="Use Man Internal M *" value="${escapeHtml(qvtDraftNewRow?.useManualInternalMethods || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_simulationVoucher" placeholder="Simulation Voucher *" value="${escapeHtml(qvtDraftNewRow?.simulationVoucher || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_singleFunctionGroup" placeholder="Single Function Gr *" value="${escapeHtml(qvtDraftNewRow?.singleFunctionGroup || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_balanceMandatory" placeholder="Balance *" value="${escapeHtml(qvtDraftNewRow?.balanceMandatory || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_ledger" placeholder="Ledger *" value="${escapeHtml(qvtDraftNewRow?.ledger || '01 - General Ledger')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_ledgerId" placeholder="Ledger ID *" value="${escapeHtml(qvtDraftNewRow?.ledgerId || 'GL01')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_optionalAutoBalance" placeholder="Optional Auto Bal *" value="${escapeHtml(qvtDraftNewRow?.optionalAutoBalance || '')}"></td>
        <td><input type="text" class="qvt-inline-input" id="qvt_inline_new_storeOriginal" placeholder="Store Origin *" value="${escapeHtml(qvtDraftNewRow?.storeOriginal || '')}"></td>
        <td class="table-action-cell">
          <button type="button" class="btn-grid-action btn-save-row" title="Save Row (All fields required)" onclick="event.stopPropagation(); window.saveQvtInlineRow('new')">
            <i class="fa-solid fa-floppy-disk"></i>
          </button>
          <button type="button" class="btn-grid-action btn-cancel-row" title="Cancel" onclick="event.stopPropagation(); window.cancelQvtInlineRow()">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </td>
      `;
      tableBody.appendChild(tr);
    }

    if (totalRecords === 0 && qvtEditingRowIndex !== 'new') {
      for (let i = 0; i < 10; i++) {
        const tr = document.createElement('tr');
        tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        tr.innerHTML = `
          <td class="table-row-indicator">&nbsp;</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        `;
        tableBody.appendChild(tr);
      }
      recordStatusText.textContent = 'No records found matching query criteria';
      btnFirst.disabled = true;
      btnPrev.disabled = true;
      btnNext.disabled = true;
      btnLast.disabled = true;
      return;
    }

    const startIndex = (qvtCurrentPage - 1) * qvtPageSize;
    const endIndex = Math.min(startIndex + qvtPageSize, totalRecords);
    const pageRows = qvtCurrentDataset.slice(startIndex, endIndex);

    pageRows.forEach((item, index) => {
      const actualIndex = startIndex + index;

      // Active inline row being edited
      if (actualIndex === qvtEditingRowIndex) {
        const tr = document.createElement('tr');
        tr.className = 'qvt-row-editing';
        tr.innerHTML = `
          <td class="table-row-indicator"><i class="fa-solid fa-pen" style="font-size:8px; color:#1e4566;"></i></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_voucherType" placeholder="Type *" value="${escapeHtml(item.voucherType || '')}" style="text-transform:uppercase;"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_voucherTypeDesc" placeholder="Description *" value="${escapeHtml(item.voucherTypeDesc || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_functionGroup" placeholder="Group *" value="${escapeHtml(item.functionGroup || '')}" style="text-transform:uppercase;"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_functionGroupDesc" placeholder="Group Desc *" value="${escapeHtml(item.functionGroupDesc || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_automaticAllotment" placeholder="Automatic Allotment *" value="${escapeHtml(item.automaticAllotment || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_useManualInternalMethods" placeholder="Use Man Internal M *" value="${escapeHtml(item.useManualInternalMethods || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_simulationVoucher" placeholder="Simulation Voucher *" value="${escapeHtml(item.simulationVoucher || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_singleFunctionGroup" placeholder="Single Function Gr *" value="${escapeHtml(item.singleFunctionGroup || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_balanceMandatory" placeholder="Balance *" value="${escapeHtml(item.balanceMandatory || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_ledger" placeholder="Ledger *" value="${escapeHtml(item.ledger || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_ledgerId" placeholder="Ledger ID *" value="${escapeHtml(item.ledgerId || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_optionalAutoBalance" placeholder="Optional Auto Bal *" value="${escapeHtml(item.optionalAutoBalance || '')}"></td>
          <td><input type="text" class="qvt-inline-input" id="qvt_inline_${actualIndex}_storeOriginal" placeholder="Store Origin *" value="${escapeHtml(item.storeOriginal || '')}"></td>
          <td class="table-action-cell">
            <button type="button" class="btn-grid-action btn-save-row" title="Save Row (All fields required)" onclick="event.stopPropagation(); window.saveQvtInlineRow(${actualIndex})">
              <i class="fa-solid fa-floppy-disk"></i>
            </button>
            <button type="button" class="btn-grid-action btn-cancel-row" title="Cancel" onclick="event.stopPropagation(); window.cancelQvtInlineRow()">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </td>
        `;
        tableBody.appendChild(tr);
        return;
      }

      // Saved row - All fields are READ-ONLY, matching Voucher Type Description and Function Group Description!
      const tr = document.createElement('tr');
      tr.className = index % 2 === 0 ? 'row-even' : 'row-odd';
      if (qvtSelectedRowIndex === actualIndex) {
        tr.classList.add('selected');
      }

      const indicatorSymbol = qvtSelectedRowIndex === actualIndex
        ? '<i class="fa-solid fa-play" style="font-size:7px; color:#186299;"></i>'
        : `${actualIndex + 1}`;

      tr.innerHTML = `
        <td class="table-row-indicator">${indicatorSymbol}</td>
        <td style="font-weight: 700; color: #164f78; text-align: center;">${escapeHtml(item.voucherType)}</td>
        <td style="font-weight: 500;">${escapeHtml(item.voucherTypeDesc)}</td>
        <td style="font-weight: 700; color: #164f78; text-align: center;">${escapeHtml(item.functionGroup)}</td>
        <td style="font-weight: 500;">${escapeHtml(item.functionGroupDesc)}</td>
        <td style="font-weight: 500; text-align: center;">${escapeHtml(item.automaticAllotment || '—')}</td>
        <td style="font-weight: 500; text-align: center;">${escapeHtml(item.useManualInternalMethods || '—')}</td>
        <td style="font-weight: 500; text-align: center;">${escapeHtml(item.simulationVoucher || '—')}</td>
        <td style="font-weight: 500; text-align: center;">${escapeHtml(item.singleFunctionGroup || '—')}</td>
        <td style="font-weight: 500; text-align: center;">${escapeHtml(item.balanceMandatory || '—')}</td>
        <td>${escapeHtml(item.ledger || '—')}</td>
        <td style="text-align: center; font-weight: 600; color: #3b5f7d;">${escapeHtml(item.ledgerId || '—')}</td>
        <td style="font-weight: 500; text-align: center;">${escapeHtml(item.optionalAutoBalance || '—')}</td>
        <td style="font-weight: 500; text-align: center;">${escapeHtml(item.storeOriginal || '—')}</td>
        <td class="table-action-cell">
          <button type="button" class="btn-grid-action btn-edit-user" title="Edit Entry" onclick="event.stopPropagation(); window.handleEditQvt(${actualIndex})">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button type="button" class="btn-grid-action btn-view-user" title="View Details" onclick="event.stopPropagation(); window.handleViewQvt(${actualIndex})">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button type="button" class="btn-grid-action btn-delete-user" title="Delete Entry" onclick="event.stopPropagation(); window.handleDeleteQvt(${actualIndex})">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </td>
      `;

      tr.addEventListener('click', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.closest('button')) {
          return;
        }
        document.querySelectorAll('#qvtTableBody tr').forEach(r => r.classList.remove('selected'));
        tr.classList.add('selected');
        qvtSelectedRowIndex = actualIndex;
      });

      tableBody.appendChild(tr);
    });

    // Pad rows up to 10 rows with dotted cells like screenshot
    if (pageRows.length < 10 && qvtEditingRowIndex !== 'new') {
      for (let i = pageRows.length; i < 10; i++) {
        const tr = document.createElement('tr');
        tr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        tr.innerHTML = `
          <td class="table-row-indicator">&nbsp;</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        `;
        tableBody.appendChild(tr);
      }
    }

    recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`;
    btnFirst.disabled = qvtCurrentPage <= 1;
    btnPrev.disabled = qvtCurrentPage <= 1;
    btnNext.disabled = qvtCurrentPage >= totalPages;
    btnLast.disabled = qvtCurrentPage >= totalPages;
  }

  // Initial load
  populateFilterDropdowns();
  qvtCurrentDataset = buildQueryRecords();
  renderQvtTable();
}

// =============================================================================
// MODULE 7: AUTHORITY CLASSES MASTER SCREEN
// =============================================================================
let acCurrentDataset = [];
let acCurrentPage = 1;
let acPageSize = 1000;
let acSelectedRowIndex = null;
let acEditingIndex = null;

function initAuthorityClassesModule() {
  const searchInput = document.getElementById('acSearchInput');
  const btnSearch = document.getElementById('btnAcSearch');
  const btnReset = document.getElementById('btnAcReset');
  const btnHeaderAdd = document.getElementById('btnHeaderAddAc');
  const btnCollapse = document.getElementById('btnCollapseAcGrid');
  const gridViewport = document.getElementById('acGridViewport');

  const tableBody = document.getElementById('acTableBody');
  const btnAddRow = document.getElementById('btnAcAddRow');
  const btnDeleteRow = document.getElementById('btnAcDeleteRow');
  const btnDownload = document.getElementById('btnAcDownload');

  const pageSizeSelect = document.getElementById('acPageSizeSelect');
  const pageNumberInput = document.getElementById('acPageNumberInput');
  const btnFirst = document.getElementById('btnAcFirstPage');
  const btnPrev = document.getElementById('btnAcPrevPage');
  const btnNext = document.getElementById('btnAcNextPage');
  const btnLast = document.getElementById('btnAcLastPage');
  const totalPagesText = document.getElementById('acTotalPagesText');
  const recordStatusText = document.getElementById('acRecordStatusText');

  // Modals
  const addModalOverlay = document.getElementById('addAcModalOverlay');
  const addForm = document.getElementById('addAcForm');
  const modalAcClass = document.getElementById('modalAcClass');
  const modalAcDesc = document.getElementById('modalAcDesc');
  const addModalAlert = document.getElementById('addAcModalAlert');
  const addModalCloseBtn = document.getElementById('addAcModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addAcModalCancelBtn');

  const editModalOverlay = document.getElementById('editAcModalOverlay');
  const editForm = document.getElementById('editAcForm');
  const editModalAcClass = document.getElementById('editModalAcClass');
  const editModalAcDesc = document.getElementById('editModalAcDesc');
  const editModalAlert = document.getElementById('editAcModalAlert');
  const editModalCloseBtn = document.getElementById('editAcModalCloseBtn');
  const editModalCancelBtn = document.getElementById('editAcModalCancelBtn');

  const viewModalOverlay = document.getElementById('viewAcModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewAcModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewAcModalOkBtn');
  const viewModalAcClass = document.getElementById('viewModalAcClass');
  const viewModalAcDesc = document.getElementById('viewModalAcDesc');

  function getFilteredRecords() {
    const q = (searchInput ? searchInput.value : '').trim().toLowerCase();
    if (!q) return [...authorityClassesData];
    return authorityClassesData.filter(item => 
      item.authorityClass.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  }

  function renderTable() {
    acCurrentDataset = getFilteredRecords();
    const totalRecords = acCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / acPageSize) || 1;

    if (acCurrentPage > totalPages) acCurrentPage = totalPages;
    if (acCurrentPage < 1) acCurrentPage = 1;

    if (pageNumberInput) pageNumberInput.value = acCurrentPage;
    if (totalPagesText) totalPagesText.textContent = totalPages;

    const startIndex = (acCurrentPage - 1) * acPageSize;
    const endIndex = Math.min(startIndex + acPageSize, totalRecords);
    const pageRows = acCurrentDataset.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (pageRows.length === 0) {
      const emptyTr = document.createElement('tr');
      emptyTr.innerHTML = `
        <td colspan="4" style="text-align: center; color: #7f99b1; padding: 20px 8px;">
          <i class="fa-solid fa-circle-exclamation" style="margin-right: 6px;"></i>No Authority Classes found.
        </td>
      `;
      tableBody.appendChild(emptyTr);
    } else {
      pageRows.forEach((row, pageIdx) => {
        const actualIndex = startIndex + pageIdx;
        const srNo = actualIndex + 1;
        const isSelected = acSelectedRowIndex === actualIndex;
        const tr = document.createElement('tr');
        tr.className = pageIdx % 2 === 0 ? 'row-even' : 'row-odd';
        if (isSelected) tr.classList.add('selected');

        tr.innerHTML = `
          <td style="text-align: center; font-weight: 600; color: #4b6a84;">${srNo}</td>
          <td style="font-weight: 700; color: #134267; letter-spacing: 0.5px;">${escapeHtml(row.authorityClass)}</td>
          <td>${escapeHtml(row.description)}</td>
          <td class="table-action-cell" style="text-align: center;">
            <button type="button" class="btn-grid-action btn-edit-user" title="Edit Authority Class" onclick="event.stopPropagation(); window.handleEditAc(${actualIndex})">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn-grid-action btn-view-user" title="View Details" onclick="event.stopPropagation(); window.handleViewAc(${actualIndex})">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button type="button" class="btn-grid-action btn-delete-user" title="Delete Authority Class" onclick="event.stopPropagation(); window.handleDeleteAc(${actualIndex})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        `;

        tr.addEventListener('click', () => {
          document.querySelectorAll('#acTableBody tr').forEach(r => r.classList.remove('selected'));
          tr.classList.add('selected');
          acSelectedRowIndex = actualIndex;
        });

        tableBody.appendChild(tr);
      });
    }

    // Pad rows up to 10 rows with empty slots for authentic legacy ERP feel
    if (pageRows.length > 0 && pageRows.length < 10) {
      for (let i = pageRows.length; i < 10; i++) {
        const padTr = document.createElement('tr');
        padTr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        padTr.innerHTML = `
          <td class="empty-cell">&nbsp;</td>
          <td></td>
          <td></td>
          <td></td>
        `;
        tableBody.appendChild(padTr);
      }
    }

    if (recordStatusText) {
      recordStatusText.textContent = totalRecords > 0
        ? `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`
        : 'No records to view';
    }

    if (btnFirst) btnFirst.disabled = acCurrentPage <= 1;
    if (btnPrev) btnPrev.disabled = acCurrentPage <= 1;
    if (btnNext) btnNext.disabled = acCurrentPage >= totalPages;
    if (btnLast) btnLast.disabled = acCurrentPage >= totalPages;
  }

  // Window callbacks for action buttons
  window.handleViewAc = function(index) {
    const item = acCurrentDataset[index];
    if (!item) return;
    if (viewModalAcClass) viewModalAcClass.textContent = item.authorityClass;
    if (viewModalAcDesc) viewModalAcDesc.textContent = item.description;
    if (viewModalOverlay) viewModalOverlay.classList.add('active');
  };

  window.handleEditAc = function(index) {
    const item = acCurrentDataset[index];
    if (!item) return;
    acEditingIndex = index;
    if (editModalAcClass) editModalAcClass.value = item.authorityClass;
    if (editModalAcDesc) editModalAcDesc.value = item.description;
    if (editModalAlert) editModalAlert.innerHTML = '';
    if (editModalOverlay) editModalOverlay.classList.add('active');
    setTimeout(() => { if (editModalAcDesc) editModalAcDesc.focus(); }, 50);
  };

  window.handleDeleteAc = function(index) {
    const item = acCurrentDataset[index];
    if (!item) return;
    if (confirm(`Are you sure you want to delete Authority Class "${item.authorityClass}"?`)) {
      const globalIdx = authorityClassesData.findIndex(x => x.authorityClass === item.authorityClass);
      if (globalIdx !== -1) {
        authorityClassesData.splice(globalIdx, 1);
        acSelectedRowIndex = null;
        renderTable();
        showToast(`Authority Class "${item.authorityClass}" deleted successfully.`, 'success');
      }
    }
  };

  // Search & Filter
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      acCurrentPage = 1;
      acSelectedRowIndex = null;
      renderTable();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      acCurrentPage = 1;
      renderTable();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      acCurrentPage = 1;
      acSelectedRowIndex = null;
      renderTable();
      showToast('Search filter reset.', 'info');
    });
  }

  // Collapse grid
  if (btnCollapse && gridViewport) {
    btnCollapse.addEventListener('click', () => {
      const isHidden = gridViewport.style.display === 'none';
      gridViewport.style.display = isHidden ? 'block' : 'none';
      const icon = btnCollapse.querySelector('i');
      if (icon) {
        icon.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
      }
    });
  }

  // Add Authority Class Dialog Handlers
  function openAddModal() {
    if (addForm) addForm.reset();
    if (addModalAlert) addModalAlert.innerHTML = '';
    if (addModalOverlay) addModalOverlay.classList.add('active');
    setTimeout(() => { if (modalAcClass) modalAcClass.focus(); }, 50);
  }

  function closeAddModal() {
    if (addModalOverlay) addModalOverlay.classList.remove('active');
  }

  if (btnHeaderAdd) btnHeaderAdd.addEventListener('click', openAddModal);
  if (btnAddRow) btnAddRow.addEventListener('click', openAddModal);
  if (addModalCloseBtn) addModalCloseBtn.addEventListener('click', closeAddModal);
  if (addModalCancelBtn) addModalCancelBtn.addEventListener('click', closeAddModal);

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const code = (modalAcClass ? modalAcClass.value : '').trim().toUpperCase();
      const desc = (modalAcDesc ? modalAcDesc.value : '').trim();

      if (!code || !desc) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Please enter both Authority Class and Description.
            </div>
          `;
        }
        return;
      }

      const exists = authorityClassesData.some(x => x.authorityClass.toUpperCase() === code);
      if (exists) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Authority Class "${escapeHtml(code)}" already exists.
            </div>
          `;
        }
        return;
      }

      authorityClassesData.push({ authorityClass: code, description: desc });
      closeAddModal();
      renderTable();
      showToast(`Authority Class "${code}" created successfully.`, 'success');
    });
  }

  // Edit Authority Class Dialog Handlers
  function closeEditModal() {
    if (editModalOverlay) editModalOverlay.classList.remove('active');
    acEditingIndex = null;
  }

  if (editModalCloseBtn) editModalCloseBtn.addEventListener('click', closeEditModal);
  if (editModalCancelBtn) editModalCancelBtn.addEventListener('click', closeEditModal);

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (acEditingIndex === null) return;
      const currentItem = acCurrentDataset[acEditingIndex];
      if (!currentItem) return;

      const newDesc = (editModalAcDesc ? editModalAcDesc.value : '').trim();
      if (!newDesc) {
        if (editModalAlert) {
          editModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Description is required.
            </div>
          `;
        }
        return;
      }

      const globalIdx = authorityClassesData.findIndex(x => x.authorityClass === currentItem.authorityClass);
      if (globalIdx !== -1) {
        authorityClassesData[globalIdx].description = newDesc;
      }

      closeEditModal();
      renderTable();
      showToast(`Authority Class "${currentItem.authorityClass}" updated successfully.`, 'success');
    });
  }

  // View Modal Close Handlers
  if (viewModalCloseBtn) viewModalCloseBtn.addEventListener('click', () => { if (viewModalOverlay) viewModalOverlay.classList.remove('active'); });
  if (viewModalOkBtn) viewModalOkBtn.addEventListener('click', () => { if (viewModalOverlay) viewModalOverlay.classList.remove('active'); });

  // Delete Footer Row
  if (btnDeleteRow) {
    btnDeleteRow.addEventListener('click', () => {
      if (acSelectedRowIndex === null || !acCurrentDataset[acSelectedRowIndex]) {
        showToast('Please select an Authority Class row to delete.', 'warning');
        return;
      }
      window.handleDeleteAc(acSelectedRowIndex);
    });
  }

  // Export CSV
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      const headers = ['Sr. No.', 'Authority Class', 'Description'];
      const rows = acCurrentDataset.map((r, idx) => [
        `"${idx + 1}"`,
        `"${r.authorityClass}"`,
        `"${r.description.replace(/"/g, '""')}"`
      ]);

      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'Authority_Classes_Export.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Authority Classes exported to CSV successfully.', 'success');
    });
  }

  // Pagination Handlers
  if (btnFirst) btnFirst.addEventListener('click', () => { acCurrentPage = 1; renderTable(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { if (acCurrentPage > 1) { acCurrentPage--; renderTable(); } });
  if (btnNext) btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(acCurrentDataset.length / acPageSize) || 1;
    if (acCurrentPage < totalPages) { acCurrentPage++; renderTable(); }
  });
  if (btnLast) btnLast.addEventListener('click', () => {
    acCurrentPage = Math.ceil(acCurrentDataset.length / acPageSize) || 1;
    renderTable();
  });

  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', () => {
      acPageSize = parseInt(pageSizeSelect.value, 10);
      acCurrentPage = 1;
      renderTable();
    });
  }

  if (pageNumberInput) {
    pageNumberInput.addEventListener('change', () => {
      const p = parseInt(pageNumberInput.value, 10);
      const totalPages = Math.ceil(acCurrentDataset.length / acPageSize) || 1;
      if (!isNaN(p) && p >= 1 && p <= totalPages) {
        acCurrentPage = p;
      }
      renderTable();
    });
  }

  // Initial render
  renderTable();
}

// =============================================================================
// MODULE 8: AUTHORITY COMBINATIONS MASTER SCREEN
// =============================================================================
let combCurrentDataset = [];
let combCurrentPage = 1;
let combPageSize = 1000;
let combSelectedRowIndex = null;
let combEditingIndex = null;

function initAuthorityCombinationsModule() {
  const classFilterSelect = document.getElementById('combClassFilterSelect');
  const allowedFilterSelect = document.getElementById('combAllowedFilterSelect');
  const searchInput = document.getElementById('combSearchInput');
  const btnSearch = document.getElementById('btnCombSearch');
  const btnReset = document.getElementById('btnCombReset');

  const btnHeaderAdd = document.getElementById('btnHeaderAddComb');
  const btnCollapse = document.getElementById('btnCollapseCombGrid');
  const gridViewport = document.getElementById('combGridViewport');

  const tableBody = document.getElementById('combTableBody');
  const btnAddRow = document.getElementById('btnCombAddRow');
  const btnDeleteRow = document.getElementById('btnCombDeleteRow');
  const btnDownload = document.getElementById('btnCombDownload');

  const pageSizeSelect = document.getElementById('combPageSizeSelect');
  const pageNumberInput = document.getElementById('combPageNumberInput');
  const btnFirst = document.getElementById('btnCombFirstPage');
  const btnPrev = document.getElementById('btnCombPrevPage');
  const btnNext = document.getElementById('btnCombNextPage');
  const btnLast = document.getElementById('btnCombLastPage');
  const totalPagesText = document.getElementById('combTotalPagesText');
  const recordStatusText = document.getElementById('combRecordStatusText');

  // Modals
  const addModalOverlay = document.getElementById('addCombModalOverlay');
  const addForm = document.getElementById('addCombForm');
  const modalCombClassSelect = document.getElementById('modalCombClassSelect');
  const modalCombAllowedSelect = document.getElementById('modalCombAllowedSelect');
  const modalCombAccount = document.getElementById('modalCombAccount');
  const modalCombCostCenter = document.getElementById('modalCombCostCenter');
  const modalCombProject = document.getElementById('modalCombProject');
  const addModalAlert = document.getElementById('addCombModalAlert');
  const addModalCloseBtn = document.getElementById('addCombModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addCombModalCancelBtn');

  const editModalOverlay = document.getElementById('editCombModalOverlay');
  const editForm = document.getElementById('editCombForm');
  const editModalCombClass = document.getElementById('editModalCombClass');
  const editModalCombAllowed = document.getElementById('editModalCombAllowed');
  const editModalCombAccount = document.getElementById('editModalCombAccount');
  const editModalCombCostCenter = document.getElementById('editModalCombCostCenter');
  const editModalCombProject = document.getElementById('editModalCombProject');
  const editModalAlert = document.getElementById('editCombModalAlert');
  const editModalCloseBtn = document.getElementById('editCombModalCloseBtn');
  const editModalCancelBtn = document.getElementById('editCombModalCancelBtn');

  const viewModalOverlay = document.getElementById('viewCombModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewCombModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewCombModalOkBtn');
  const viewModalCombClass = document.getElementById('viewModalCombClass');
  const viewModalCombAllowed = document.getElementById('viewModalCombAllowed');
  const viewModalCombAccount = document.getElementById('viewModalCombAccount');
  const viewModalCombCostCenter = document.getElementById('viewModalCombCostCenter');
  const viewModalCombProject = document.getElementById('viewModalCombProject');

  function populateClassDropdowns() {
    if (classFilterSelect) {
      const currentVal = classFilterSelect.value;
      classFilterSelect.innerHTML = '<option value="">All Authority Classes</option>';
      authorityClassesData.forEach(ac => {
        const opt = document.createElement('option');
        opt.value = ac.authorityClass;
        opt.textContent = `${ac.authorityClass} - ${ac.description}`;
        classFilterSelect.appendChild(opt);
      });
      classFilterSelect.value = currentVal;
    }

    if (modalCombClassSelect) {
      modalCombClassSelect.innerHTML = '<option value="">Select Authority Class</option>';
      authorityClassesData.forEach(ac => {
        const opt = document.createElement('option');
        opt.value = ac.authorityClass;
        opt.textContent = `${ac.authorityClass} - ${ac.description}`;
        modalCombClassSelect.appendChild(opt);
      });
    }
  }

  function getFilteredRecords() {
    const classVal = classFilterSelect ? classFilterSelect.value : '';
    const allowedVal = allowedFilterSelect ? allowedFilterSelect.value : '';
    const q = (searchInput ? searchInput.value : '').trim().toLowerCase();

    return authorityCombinationsData.filter(item => {
      if (classVal && item.authorityClass !== classVal) return false;
      if (allowedVal === 'true' && !item.allowed) return false;
      if (allowedVal === 'false' && item.allowed) return false;
      if (q) {
        const inAc = (item.authorityClass || '').toLowerCase().includes(q);
        const inAcc = (item.account || '').toLowerCase().includes(q);
        const inCc = (item.costCenter || '').toLowerCase().includes(q);
        const inPrj = (item.project || '').toLowerCase().includes(q);
        if (!inAc && !inAcc && !inCc && !inPrj) return false;
      }
      return true;
    });
  }

  function renderTable() {
    combCurrentDataset = getFilteredRecords();
    const totalRecords = combCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / combPageSize) || 1;

    if (combCurrentPage > totalPages) combCurrentPage = totalPages;
    if (combCurrentPage < 1) combCurrentPage = 1;

    if (pageNumberInput) pageNumberInput.value = combCurrentPage;
    if (totalPagesText) totalPagesText.textContent = totalPages;

    const startIndex = (combCurrentPage - 1) * combPageSize;
    const endIndex = Math.min(startIndex + combPageSize, totalRecords);
    const pageRows = combCurrentDataset.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (pageRows.length === 0) {
      const emptyTr = document.createElement('tr');
      emptyTr.innerHTML = `
        <td colspan="7" style="text-align: center; color: #7f99b1; padding: 20px 8px;">
          <i class="fa-solid fa-circle-exclamation" style="margin-right: 6px;"></i>No Authority Combinations found.
        </td>
      `;
      tableBody.appendChild(emptyTr);
    } else {
      pageRows.forEach((row, pageIdx) => {
        const actualIndex = startIndex + pageIdx;
        const srNo = actualIndex + 1;
        const isSelected = combSelectedRowIndex === actualIndex;
        const tr = document.createElement('tr');
        tr.className = pageIdx % 2 === 0 ? 'row-even' : 'row-odd';
        if (isSelected) tr.classList.add('selected');

        const allowedBadge = row.allowed
          ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i> Allowed</span>`
          : `<span class="badge-default-no"><i class="fa-solid fa-ban"></i> Disallowed</span>`;

        tr.innerHTML = `
          <td style="text-align: center; font-weight: 600; color: #4b6a84;">${srNo}</td>
          <td style="font-weight: 700; color: #134267; letter-spacing: 0.5px;">${escapeHtml(row.authorityClass)}</td>
          <td style="text-align: center;">${allowedBadge}</td>
          <td style="font-weight: 600; color: #1b4b72;">${escapeHtml(row.account || '%')}</td>
          <td>${escapeHtml(row.costCenter || '%')}</td>
          <td>${escapeHtml(row.project || '%')}</td>
          <td class="table-action-cell" style="text-align: center;">
            <button type="button" class="btn-grid-action btn-edit-user" title="Edit Combination" onclick="event.stopPropagation(); window.handleEditComb(${actualIndex})">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn-grid-action btn-view-user" title="View Details" onclick="event.stopPropagation(); window.handleViewComb(${actualIndex})">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button type="button" class="btn-grid-action btn-delete-user" title="Delete Combination" onclick="event.stopPropagation(); window.handleDeleteComb(${actualIndex})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        `;

        tr.addEventListener('click', () => {
          document.querySelectorAll('#combTableBody tr').forEach(r => r.classList.remove('selected'));
          tr.classList.add('selected');
          combSelectedRowIndex = actualIndex;
        });

        tableBody.appendChild(tr);
      });
    }

    // Pad rows up to 10 rows with empty slots for authentic legacy ERP feel
    if (pageRows.length > 0 && pageRows.length < 10) {
      for (let i = pageRows.length; i < 10; i++) {
        const padTr = document.createElement('tr');
        padTr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        padTr.innerHTML = `
          <td class="empty-cell">&nbsp;</td>
          <td></td><td></td><td></td><td></td><td></td><td></td>
        `;
        tableBody.appendChild(padTr);
      }
    }

    if (recordStatusText) {
      recordStatusText.textContent = totalRecords > 0
        ? `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`
        : 'No records to view';
    }

    if (btnFirst) btnFirst.disabled = combCurrentPage <= 1;
    if (btnPrev) btnPrev.disabled = combCurrentPage <= 1;
    if (btnNext) btnNext.disabled = combCurrentPage >= totalPages;
    if (btnLast) btnLast.disabled = combCurrentPage >= totalPages;
  }

  // Window Callbacks
  window.handleViewComb = function(index) {
    const item = combCurrentDataset[index];
    if (!item) return;
    if (viewModalCombClass) viewModalCombClass.textContent = item.authorityClass;
    if (viewModalCombAllowed) {
      viewModalCombAllowed.innerHTML = item.allowed
        ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i> Allowed</span>`
        : `<span class="badge-default-no"><i class="fa-solid fa-ban"></i> Disallowed</span>`;
    }
    if (viewModalCombAccount) viewModalCombAccount.textContent = item.account || '%';
    if (viewModalCombCostCenter) viewModalCombCostCenter.textContent = item.costCenter || '%';
    if (viewModalCombProject) viewModalCombProject.textContent = item.project || '%';
    if (viewModalOverlay) viewModalOverlay.classList.add('active');
  };

  window.handleEditComb = function(index) {
    const item = combCurrentDataset[index];
    if (!item) return;
    combEditingIndex = index;
    if (editModalCombClass) editModalCombClass.value = item.authorityClass;
    if (editModalCombAllowed) editModalCombAllowed.value = item.allowed ? 'true' : 'false';
    if (editModalCombAccount) editModalCombAccount.value = item.account || '%';
    if (editModalCombCostCenter) editModalCombCostCenter.value = item.costCenter || '%';
    if (editModalCombProject) editModalCombProject.value = item.project || '%';
    if (editModalAlert) editModalAlert.innerHTML = '';
    if (editModalOverlay) editModalOverlay.classList.add('active');
    setTimeout(() => { if (editModalCombAccount) editModalCombAccount.focus(); }, 50);
  };

  window.handleDeleteComb = function(index) {
    const item = combCurrentDataset[index];
    if (!item) return;
    if (confirm(`Are you sure you want to delete this combination for Authority Class "${item.authorityClass}" (Account: ${item.account})?`)) {
      const globalIdx = authorityCombinationsData.findIndex(x => 
        x.authorityClass === item.authorityClass &&
        x.account === item.account &&
        x.costCenter === item.costCenter &&
        x.project === item.project
      );
      if (globalIdx !== -1) {
        authorityCombinationsData.splice(globalIdx, 1);
        combSelectedRowIndex = null;
        renderTable();
        showToast(`Authority combination deleted successfully.`, 'success');
      }
    }
  };

  // Search & Filter listeners
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      combCurrentPage = 1;
      combSelectedRowIndex = null;
      renderTable();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      combCurrentPage = 1;
      renderTable();
    });
  }

  if (classFilterSelect) {
    classFilterSelect.addEventListener('change', () => {
      combCurrentPage = 1;
      renderTable();
    });
  }

  if (allowedFilterSelect) {
    allowedFilterSelect.addEventListener('change', () => {
      combCurrentPage = 1;
      renderTable();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (classFilterSelect) classFilterSelect.value = '';
      if (allowedFilterSelect) allowedFilterSelect.value = '';
      if (searchInput) searchInput.value = '';
      combCurrentPage = 1;
      combSelectedRowIndex = null;
      renderTable();
      showToast('Filters reset.', 'info');
    });
  }

  // Collapse grid
  if (btnCollapse && gridViewport) {
    btnCollapse.addEventListener('click', () => {
      const isHidden = gridViewport.style.display === 'none';
      gridViewport.style.display = isHidden ? 'block' : 'none';
      const icon = btnCollapse.querySelector('i');
      if (icon) {
        icon.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
      }
    });
  }

  // Add Combination Dialog
  function openAddModal() {
    populateClassDropdowns();
    if (addForm) addForm.reset();
    if (modalCombCostCenter) modalCombCostCenter.value = '%';
    if (modalCombProject) modalCombProject.value = '%';
    if (modalCombAllowedSelect) modalCombAllowedSelect.value = 'true';
    if (addModalAlert) addModalAlert.innerHTML = '';
    if (addModalOverlay) addModalOverlay.classList.add('active');
    setTimeout(() => { if (modalCombClassSelect) modalCombClassSelect.focus(); }, 50);
  }

  function closeAddModal() {
    if (addModalOverlay) addModalOverlay.classList.remove('active');
  }

  if (btnHeaderAdd) btnHeaderAdd.addEventListener('click', openAddModal);
  if (btnAddRow) btnAddRow.addEventListener('click', openAddModal);
  if (addModalCloseBtn) addModalCloseBtn.addEventListener('click', closeAddModal);
  if (addModalCancelBtn) addModalCancelBtn.addEventListener('click', closeAddModal);

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const authClass = modalCombClassSelect ? modalCombClassSelect.value : '';
      const isAllowed = modalCombAllowedSelect ? modalCombAllowedSelect.value === 'true' : true;
      const account = (modalCombAccount ? modalCombAccount.value : '').trim();
      const costCenter = (modalCombCostCenter ? modalCombCostCenter.value : '').trim() || '%';
      const project = (modalCombProject ? modalCombProject.value : '').trim() || '%';

      if (!authClass || !account) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Please select Authority Class and enter Account.
            </div>
          `;
        }
        return;
      }

      const duplicate = authorityCombinationsData.some(x => 
        x.authorityClass === authClass &&
        x.account.toLowerCase() === account.toLowerCase() &&
        x.costCenter.toLowerCase() === costCenter.toLowerCase() &&
        x.project.toLowerCase() === project.toLowerCase()
      );

      if (duplicate) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> This combination already exists for Authority Class "${escapeHtml(authClass)}".
            </div>
          `;
        }
        return;
      }

      authorityCombinationsData.push({
        authorityClass: authClass,
        allowed: isAllowed,
        account: account,
        costCenter: costCenter,
        project: project
      });

      closeAddModal();
      renderTable();
      showToast(`Authority combination for "${authClass}" added successfully.`, 'success');
    });
  }

  // Edit Combination Dialog
  function closeEditModal() {
    if (editModalOverlay) editModalOverlay.classList.remove('active');
    combEditingIndex = null;
  }

  if (editModalCloseBtn) editModalCloseBtn.addEventListener('click', closeEditModal);
  if (editModalCancelBtn) editModalCancelBtn.addEventListener('click', closeEditModal);

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (combEditingIndex === null) return;
      const currentItem = combCurrentDataset[combEditingIndex];
      if (!currentItem) return;

      const newAllowed = editModalCombAllowed ? editModalCombAllowed.value === 'true' : true;
      const newAccount = (editModalCombAccount ? editModalCombAccount.value : '').trim();
      const newCostCenter = (editModalCombCostCenter ? editModalCombCostCenter.value : '').trim() || '%';
      const newProject = (editModalCombProject ? editModalCombProject.value : '').trim() || '%';

      if (!newAccount) {
        if (editModalAlert) {
          editModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Account is required.
            </div>
          `;
        }
        return;
      }

      const globalIdx = authorityCombinationsData.findIndex(x => 
        x.authorityClass === currentItem.authorityClass &&
        x.account === currentItem.account &&
        x.costCenter === currentItem.costCenter &&
        x.project === currentItem.project
      );

      if (globalIdx !== -1) {
        authorityCombinationsData[globalIdx].allowed = newAllowed;
        authorityCombinationsData[globalIdx].account = newAccount;
        authorityCombinationsData[globalIdx].costCenter = newCostCenter;
        authorityCombinationsData[globalIdx].project = newProject;
      }

      closeEditModal();
      renderTable();
      showToast(`Authority combination updated successfully.`, 'success');
    });
  }

  // View Modal Close Handlers
  if (viewModalCloseBtn) viewModalCloseBtn.addEventListener('click', () => { if (viewModalOverlay) viewModalOverlay.classList.remove('active'); });
  if (viewModalOkBtn) viewModalOkBtn.addEventListener('click', () => { if (viewModalOverlay) viewModalOverlay.classList.remove('active'); });

  // Delete Footer Row
  if (btnDeleteRow) {
    btnDeleteRow.addEventListener('click', () => {
      if (combSelectedRowIndex === null || !combCurrentDataset[combSelectedRowIndex]) {
        showToast('Please select a combination row to delete.', 'warning');
        return;
      }
      window.handleDeleteComb(combSelectedRowIndex);
    });
  }

  // Export CSV
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      const headers = ['Sr. No.', 'Authority Class', 'Allowed', 'Account', 'Cost Center', 'Project'];
      const rows = combCurrentDataset.map((r, idx) => [
        `"${idx + 1}"`,
        `"${r.authorityClass}"`,
        `"${r.allowed ? 'Yes' : 'No'}"`,
        `"${(r.account || '').replace(/"/g, '""')}"`,
        `"${(r.costCenter || '').replace(/"/g, '""')}"`,
        `"${(r.project || '').replace(/"/g, '""')}"`
      ]);

      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'Authority_Combinations_Export.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Authority Combinations exported to CSV successfully.', 'success');
    });
  }

  // Pagination Handlers
  if (btnFirst) btnFirst.addEventListener('click', () => { combCurrentPage = 1; renderTable(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { if (combCurrentPage > 1) { combCurrentPage--; renderTable(); } });
  if (btnNext) btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(combCurrentDataset.length / combPageSize) || 1;
    if (combCurrentPage < totalPages) { combCurrentPage++; renderTable(); }
  });
  if (btnLast) btnLast.addEventListener('click', () => {
    combCurrentPage = Math.ceil(combCurrentDataset.length / combPageSize) || 1;
    renderTable();
  });

  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', () => {
      combPageSize = parseInt(pageSizeSelect.value, 10);
      combCurrentPage = 1;
      renderTable();
    });
  }

  if (pageNumberInput) {
    pageNumberInput.addEventListener('change', () => {
      const p = parseInt(pageNumberInput.value, 10);
      const totalPages = Math.ceil(combCurrentDataset.length / combPageSize) || 1;
      if (!isNaN(p) && p >= 1 && p <= totalPages) {
        combCurrentPage = p;
      }
      renderTable();
    });
  }

  // Initial render
  populateClassDropdowns();
  renderTable();
}

// =============================================================================
// MODULE 9: USERS PER AUTHORITY CLASS MASTER SCREEN
// =============================================================================
let upacCurrentDataset = [];
let upacCurrentPage = 1;
let upacPageSize = 1000;
let upacSelectedRowIndex = null;
let upacEditingIndex = null;

function initUsersPerAuthorityClassModule() {
  const classFilterSelect = document.getElementById('upacClassFilterSelect');
  const searchUserInput = document.getElementById('upacSearchUserInput');
  const btnSearch = document.getElementById('btnUpacSearch');
  const btnReset = document.getElementById('btnUpacReset');

  const btnHeaderAdd = document.getElementById('btnHeaderAddUpac');
  const btnCollapse = document.getElementById('btnCollapseUpacGrid');
  const gridViewport = document.getElementById('upacGridViewport');

  const tableBody = document.getElementById('upacTableBody');
  const btnAddRow = document.getElementById('btnUpacAddRow');
  const btnDeleteRow = document.getElementById('btnUpacDeleteRow');
  const btnDownload = document.getElementById('btnUpacDownload');

  const pageSizeSelect = document.getElementById('upacPageSizeSelect');
  const pageNumberInput = document.getElementById('upacPageNumberInput');
  const btnFirst = document.getElementById('btnUpacFirstPage');
  const btnPrev = document.getElementById('btnUpacPrevPage');
  const btnNext = document.getElementById('btnUpacNextPage');
  const btnLast = document.getElementById('btnUpacLastPage');
  const totalPagesText = document.getElementById('upacTotalPagesText');
  const recordStatusText = document.getElementById('upacRecordStatusText');

  // Modals
  const addModalOverlay = document.getElementById('addUpacModalOverlay');
  const addForm = document.getElementById('addUpacForm');
  const modalUpacUserId = document.getElementById('modalUpacUserId');
  const modalUpacUserName = document.getElementById('modalUpacUserName');
  const modalUpacClass = document.getElementById('modalUpacClass');
  const modalUpacClassDesc = document.getElementById('modalUpacClassDesc');
  const addModalAlert = document.getElementById('addUpacModalAlert');
  const addModalCloseBtn = document.getElementById('addUpacModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addUpacModalCancelBtn');

  const editModalOverlay = document.getElementById('editUpacModalOverlay');
  const editForm = document.getElementById('editUpacForm');
  const editModalUpacUserId = document.getElementById('editModalUpacUserId');
  const editModalUpacUserName = document.getElementById('editModalUpacUserName');
  const editModalUpacClass = document.getElementById('editModalUpacClass');
  const editModalUpacClassDesc = document.getElementById('editModalUpacClassDesc');
  const editModalAlert = document.getElementById('editUpacModalAlert');
  const editModalCloseBtn = document.getElementById('editUpacModalCloseBtn');
  const editModalCancelBtn = document.getElementById('editUpacModalCancelBtn');

  const viewModalOverlay = document.getElementById('viewUpacModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewUpacModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewUpacModalOkBtn');
  const viewModalUpacUserId = document.getElementById('viewModalUpacUserId');
  const viewModalUpacUserName = document.getElementById('viewModalUpacUserName');
  const viewModalUpacClass = document.getElementById('viewModalUpacClass');
  const viewModalUpacClassDesc = document.getElementById('viewModalUpacClassDesc');

  function populateDropdowns() {
    // Filter dropdown
    if (classFilterSelect) {
      const currentVal = classFilterSelect.value;
      classFilterSelect.innerHTML = '<option value="">All Authority Classes</option>';
      authorityClassesData.forEach(ac => {
        const opt = document.createElement('option');
        opt.value = ac.authorityClass;
        opt.textContent = `${ac.authorityClass} - ${ac.description}`;
        classFilterSelect.appendChild(opt);
      });
      classFilterSelect.value = currentVal;
    }

    // Add modal User dropdown
    if (modalUpacUserId) {
      modalUpacUserId.innerHTML = '<option value="">Select User ID</option>';
      userMaster.forEach(u => {
        const opt = document.createElement('option');
        opt.value = u.id;
        opt.textContent = `${u.id} (${u.name})`;
        modalUpacUserId.appendChild(opt);
      });
    }

    // Add modal Class dropdown
    if (modalUpacClass) {
      modalUpacClass.innerHTML = '<option value="">Select Authority Class</option>';
      authorityClassesData.forEach(ac => {
        const opt = document.createElement('option');
        opt.value = ac.authorityClass;
        opt.textContent = `${ac.authorityClass} - ${ac.description}`;
        modalUpacClass.appendChild(opt);
      });
    }

    // Edit modal Class dropdown
    if (editModalUpacClass) {
      editModalUpacClass.innerHTML = '<option value="">Select Authority Class</option>';
      authorityClassesData.forEach(ac => {
        const opt = document.createElement('option');
        opt.value = ac.authorityClass;
        opt.textContent = `${ac.authorityClass} - ${ac.description}`;
        editModalUpacClass.appendChild(opt);
      });
    }
  }

  // Auto-populate handlers in Add modal
  if (modalUpacUserId) {
    modalUpacUserId.addEventListener('change', () => {
      const selectedId = modalUpacUserId.value;
      const u = userMaster.find(user => user.id === selectedId);
      if (modalUpacUserName) {
        modalUpacUserName.value = u ? u.name : '';
      }
    });
  }

  if (modalUpacClass) {
    modalUpacClass.addEventListener('change', () => {
      const selectedClass = modalUpacClass.value;
      const ac = authorityClassesData.find(c => c.authorityClass === selectedClass);
      if (modalUpacClassDesc) {
        modalUpacClassDesc.value = ac ? ac.description : '';
      }
    });
  }

  // Auto-populate handler in Edit modal
  if (editModalUpacClass) {
    editModalUpacClass.addEventListener('change', () => {
      const selectedClass = editModalUpacClass.value;
      const ac = authorityClassesData.find(c => c.authorityClass === selectedClass);
      if (editModalUpacClassDesc) {
        editModalUpacClassDesc.value = ac ? ac.description : '';
      }
    });
  }

  function getFilteredRecords() {
    const classVal = classFilterSelect ? classFilterSelect.value : '';
    const q = (searchUserInput ? searchUserInput.value : '').trim().toLowerCase();

    return usersPerAuthorityClassData.filter(item => {
      if (classVal && item.authorityClass !== classVal) return false;
      if (q) {
        const user = userMaster.find(u => u.id === item.userId);
        const userName = user ? user.name.toLowerCase() : '';
        const inUserId = item.userId.toLowerCase().includes(q);
        const inUserName = userName.includes(q);
        const inClass = item.authorityClass.toLowerCase().includes(q);
        if (!inUserId && !inUserName && !inClass) return false;
      }
      return true;
    });
  }

  function renderTable() {
    upacCurrentDataset = getFilteredRecords();
    const totalRecords = upacCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / upacPageSize) || 1;

    if (upacCurrentPage > totalPages) upacCurrentPage = totalPages;
    if (upacCurrentPage < 1) upacCurrentPage = 1;

    if (pageNumberInput) pageNumberInput.value = upacCurrentPage;
    if (totalPagesText) totalPagesText.textContent = totalPages;

    const startIndex = (upacCurrentPage - 1) * upacPageSize;
    const endIndex = Math.min(startIndex + upacPageSize, totalRecords);
    const pageRows = upacCurrentDataset.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (pageRows.length === 0) {
      const emptyTr = document.createElement('tr');
      emptyTr.innerHTML = `
        <td colspan="6" style="text-align: center; color: #7f99b1; padding: 20px 8px;">
          <i class="fa-solid fa-circle-exclamation" style="margin-right: 6px;"></i>No Users found for Authority Classes.
        </td>
      `;
      tableBody.appendChild(emptyTr);
    } else {
      pageRows.forEach((row, pageIdx) => {
        const actualIndex = startIndex + pageIdx;
        const srNo = actualIndex + 1;
        const isSelected = upacSelectedRowIndex === actualIndex;
        const user = userMaster.find(u => u.id === row.userId);
        const userName = user ? user.name : row.userId;
        const acObj = authorityClassesData.find(ac => ac.authorityClass === row.authorityClass);
        const acDesc = acObj ? acObj.description : '';

        const tr = document.createElement('tr');
        tr.className = pageIdx % 2 === 0 ? 'row-even' : 'row-odd';
        if (isSelected) tr.classList.add('selected');

        tr.innerHTML = `
          <td style="text-align: center; font-weight: 600; color: #4b6a84;">${srNo}</td>
          <td style="font-weight: 700; color: #164f78;">${escapeHtml(row.userId)}</td>
          <td style="font-weight: 500;">${escapeHtml(userName)}</td>
          <td style="font-weight: 700; color: #134267;">${escapeHtml(row.authorityClass)}</td>
          <td>${escapeHtml(acDesc)}</td>
          <td class="table-action-cell" style="text-align: center;">
            <button type="button" class="btn-grid-action btn-edit-user" title="Edit Assignment" onclick="event.stopPropagation(); window.handleEditUpac(${actualIndex})">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn-grid-action btn-view-user" title="View Details" onclick="event.stopPropagation(); window.handleViewUpac(${actualIndex})">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button type="button" class="btn-grid-action btn-delete-user" title="Delete Assignment" onclick="event.stopPropagation(); window.handleDeleteUpac(${actualIndex})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        `;

        tr.addEventListener('click', () => {
          document.querySelectorAll('#upacTableBody tr').forEach(r => r.classList.remove('selected'));
          tr.classList.add('selected');
          upacSelectedRowIndex = actualIndex;
        });

        tableBody.appendChild(tr);
      });
    }

    // Pad rows up to 10 rows with empty slots for authentic legacy ERP feel
    if (pageRows.length > 0 && pageRows.length < 10) {
      for (let i = pageRows.length; i < 10; i++) {
        const padTr = document.createElement('tr');
        padTr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        padTr.innerHTML = `
          <td class="empty-cell">&nbsp;</td>
          <td></td><td></td><td></td><td></td><td></td>
        `;
        tableBody.appendChild(padTr);
      }
    }

    if (recordStatusText) {
      recordStatusText.textContent = totalRecords > 0
        ? `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`
        : 'No records to view';
    }

    if (btnFirst) btnFirst.disabled = upacCurrentPage <= 1;
    if (btnPrev) btnPrev.disabled = upacCurrentPage <= 1;
    if (btnNext) btnNext.disabled = upacCurrentPage >= totalPages;
    if (btnLast) btnLast.disabled = upacCurrentPage >= totalPages;
  }

  // Window Callbacks
  window.handleViewUpac = function(index) {
    const item = upacCurrentDataset[index];
    if (!item) return;
    const user = userMaster.find(u => u.id === item.userId);
    const acObj = authorityClassesData.find(ac => ac.authorityClass === item.authorityClass);

    if (viewModalUpacUserId) viewModalUpacUserId.textContent = item.userId;
    if (viewModalUpacUserName) viewModalUpacUserName.textContent = user ? user.name : item.userId;
    if (viewModalUpacClass) viewModalUpacClass.textContent = item.authorityClass;
    if (viewModalUpacClassDesc) viewModalUpacClassDesc.textContent = acObj ? acObj.description : '';
    if (viewModalOverlay) viewModalOverlay.classList.add('active');
  };

  window.handleEditUpac = function(index) {
    const item = upacCurrentDataset[index];
    if (!item) return;
    upacEditingIndex = index;
    const user = userMaster.find(u => u.id === item.userId);
    const acObj = authorityClassesData.find(ac => ac.authorityClass === item.authorityClass);

    populateDropdowns();
    if (editModalUpacUserId) editModalUpacUserId.value = item.userId;
    if (editModalUpacUserName) editModalUpacUserName.value = user ? user.name : item.userId;
    if (editModalUpacClass) editModalUpacClass.value = item.authorityClass;
    if (editModalUpacClassDesc) editModalUpacClassDesc.value = acObj ? acObj.description : '';
    if (editModalAlert) editModalAlert.innerHTML = '';
    if (editModalOverlay) editModalOverlay.classList.add('active');
  };

  window.handleDeleteUpac = function(index) {
    const item = upacCurrentDataset[index];
    if (!item) return;
    const user = userMaster.find(u => u.id === item.userId);
    const displayName = user ? `${item.userId} (${user.name})` : item.userId;

    if (confirm(`Are you sure you want to remove ${displayName} from Authority Class "${item.authorityClass}"?`)) {
      const globalIdx = usersPerAuthorityClassData.findIndex(x => 
        x.userId === item.userId && x.authorityClass === item.authorityClass
      );
      if (globalIdx !== -1) {
        usersPerAuthorityClassData.splice(globalIdx, 1);
        upacSelectedRowIndex = null;
        renderTable();
        showToast(`User assignment removed successfully.`, 'success');
      }
    }
  };

  // Search & Filter listeners
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      upacCurrentPage = 1;
      upacSelectedRowIndex = null;
      renderTable();
    });
  }

  if (searchUserInput) {
    searchUserInput.addEventListener('input', () => {
      upacCurrentPage = 1;
      renderTable();
    });
  }

  if (classFilterSelect) {
    classFilterSelect.addEventListener('change', () => {
      upacCurrentPage = 1;
      renderTable();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (classFilterSelect) classFilterSelect.value = '';
      if (searchUserInput) searchUserInput.value = '';
      upacCurrentPage = 1;
      upacSelectedRowIndex = null;
      renderTable();
      showToast('Filters reset.', 'info');
    });
  }

  // Collapse grid
  if (btnCollapse && gridViewport) {
    btnCollapse.addEventListener('click', () => {
      const isHidden = gridViewport.style.display === 'none';
      gridViewport.style.display = isHidden ? 'block' : 'none';
      const icon = btnCollapse.querySelector('i');
      if (icon) {
        icon.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
      }
    });
  }

  // Add Assignment Dialog
  function openAddModal() {
    populateDropdowns();
    if (addForm) addForm.reset();
    if (modalUpacUserName) modalUpacUserName.value = '';
    if (modalUpacClassDesc) modalUpacClassDesc.value = '';
    if (addModalAlert) addModalAlert.innerHTML = '';
    if (addModalOverlay) addModalOverlay.classList.add('active');
    setTimeout(() => { if (modalUpacUserId) modalUpacUserId.focus(); }, 50);
  }

  function closeAddModal() {
    if (addModalOverlay) addModalOverlay.classList.remove('active');
  }

  if (btnHeaderAdd) btnHeaderAdd.addEventListener('click', openAddModal);
  if (btnAddRow) btnAddRow.addEventListener('click', openAddModal);
  if (addModalCloseBtn) addModalCloseBtn.addEventListener('click', closeAddModal);
  if (addModalCancelBtn) addModalCancelBtn.addEventListener('click', closeAddModal);

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userId = modalUpacUserId ? modalUpacUserId.value : '';
      const authClass = modalUpacClass ? modalUpacClass.value : '';

      if (!userId || !authClass) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Please select both User ID and Authority Class.
            </div>
          `;
        }
        return;
      }

      const duplicate = usersPerAuthorityClassData.some(x => 
        x.userId === userId && x.authorityClass === authClass
      );

      if (duplicate) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> User "${escapeHtml(userId)}" is already assigned to Authority Class "${escapeHtml(authClass)}".
            </div>
          `;
        }
        return;
      }

      usersPerAuthorityClassData.push({
        userId: userId,
        authorityClass: authClass
      });

      closeAddModal();
      renderTable();
      showToast(`User "${userId}" assigned to "${authClass}" successfully.`, 'success');
    });
  }

  // Edit Assignment Dialog
  function closeEditModal() {
    if (editModalOverlay) editModalOverlay.classList.remove('active');
    upacEditingIndex = null;
  }

  if (editModalCloseBtn) editModalCloseBtn.addEventListener('click', closeEditModal);
  if (editModalCancelBtn) editModalCancelBtn.addEventListener('click', closeEditModal);

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (upacEditingIndex === null) return;
      const currentItem = upacCurrentDataset[upacEditingIndex];
      if (!currentItem) return;

      const newClass = editModalUpacClass ? editModalUpacClass.value : '';
      if (!newClass) {
        if (editModalAlert) {
          editModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Authority Class is required.
            </div>
          `;
        }
        return;
      }

      const duplicate = usersPerAuthorityClassData.some((x, idx) => 
        x.userId === currentItem.userId && x.authorityClass === newClass &&
        !(x.userId === currentItem.userId && x.authorityClass === currentItem.authorityClass)
      );

      if (duplicate) {
        if (editModalAlert) {
          editModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> User "${escapeHtml(currentItem.userId)}" is already assigned to "${escapeHtml(newClass)}".
            </div>
          `;
        }
        return;
      }

      const globalIdx = usersPerAuthorityClassData.findIndex(x => 
        x.userId === currentItem.userId && x.authorityClass === currentItem.authorityClass
      );

      if (globalIdx !== -1) {
        usersPerAuthorityClassData[globalIdx].authorityClass = newClass;
      }

      closeEditModal();
      renderTable();
      showToast(`User authority assignment updated successfully.`, 'success');
    });
  }

  // View Modal Close Handlers
  if (viewModalCloseBtn) viewModalCloseBtn.addEventListener('click', () => { if (viewModalOverlay) viewModalOverlay.classList.remove('active'); });
  if (viewModalOkBtn) viewModalOkBtn.addEventListener('click', () => { if (viewModalOverlay) viewModalOverlay.classList.remove('active'); });

  // Delete Footer Row
  if (btnDeleteRow) {
    btnDeleteRow.addEventListener('click', () => {
      if (upacSelectedRowIndex === null || !upacCurrentDataset[upacSelectedRowIndex]) {
        showToast('Please select a user assignment row to delete.', 'warning');
        return;
      }
      window.handleDeleteUpac(upacSelectedRowIndex);
    });
  }

  // Export CSV
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      const headers = ['Sr. No.', 'User ID', 'User Name', 'Authority Class', 'Description'];
      const rows = upacCurrentDataset.map((r, idx) => {
        const user = userMaster.find(u => u.id === r.userId);
        const userName = user ? user.name : r.userId;
        const acObj = authorityClassesData.find(ac => ac.authorityClass === r.authorityClass);
        const acDesc = acObj ? acObj.description : '';
        return [
          `"${idx + 1}"`,
          `"${r.userId}"`,
          `"${userName.replace(/"/g, '""')}"`,
          `"${r.authorityClass}"`,
          `"${acDesc.replace(/"/g, '""')}"`
        ];
      });

      const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'Users_Per_Authority_Class_Export.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Users per Authority Class exported to CSV successfully.', 'success');
    });
  }

  // Pagination Handlers
  if (btnFirst) btnFirst.addEventListener('click', () => { upacCurrentPage = 1; renderTable(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { if (upacCurrentPage > 1) { upacCurrentPage--; renderTable(); } });
  if (btnNext) btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(upacCurrentDataset.length / upacPageSize) || 1;
    if (upacCurrentPage < totalPages) { upacCurrentPage++; renderTable(); }
  });
  if (btnLast) btnLast.addEventListener('click', () => {
    upacCurrentPage = Math.ceil(upacCurrentDataset.length / upacPageSize) || 1;
    renderTable();
  });

  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', () => {
      upacPageSize = parseInt(pageSizeSelect.value, 10);
      upacCurrentPage = 1;
      renderTable();
    });
  }

  if (pageNumberInput) {
    pageNumberInput.addEventListener('change', () => {
      const p = parseInt(pageNumberInput.value, 10);
      const totalPages = Math.ceil(upacCurrentDataset.length / upacPageSize) || 1;
      if (!isNaN(p) && p >= 1 && p <= totalPages) {
        upacCurrentPage = p;
      }
      renderTable();
    });
  }

  // Initial render
  populateDropdowns();
  renderTable();
}

// =============================================================================
// MODULE 10: NOMINAL ACCOUNT (MASTER SCREEN)
// =============================================================================
function initNominalAccountModule() {
  const searchInput = document.getElementById('naSearchInput');
  const currencyFilterSelect = document.getElementById('naCurrencyFilterSelect');
  const defaultFlagFilterSelect = document.getElementById('naDefaultFlagFilterSelect');
  const btnSearch = document.getElementById('btnNaSearch');
  const btnReset = document.getElementById('btnNaReset');
  const btnHeaderAdd = document.getElementById('btnHeaderAddNa');
  const btnCollapse = document.getElementById('btnCollapseNaGrid');
  const gridViewport = document.getElementById('naGridViewport');

  const tableBody = document.getElementById('naTableBody');
  const btnAddRow = document.getElementById('btnNaAddRow');
  const btnEditRow = document.getElementById('btnNaEditRow');
  const btnDeleteRow = document.getElementById('btnNaDeleteRow');
  const btnDownload = document.getElementById('btnNaDownload');

  // Pagination elements
  const pageSizeSelect = document.getElementById('naPageSizeSelect');
  const pageNumberInput = document.getElementById('naPageNumberInput');
  const btnFirst = document.getElementById('btnNaFirstPage');
  const btnPrev = document.getElementById('btnNaPrevPage');
  const btnNext = document.getElementById('btnNaNextPage');
  const btnLast = document.getElementById('btnNaLastPage');
  const totalPagesText = document.getElementById('naTotalPagesText');
  const recordStatusText = document.getElementById('naRecordStatusText');

  // Add Modal Elements
  const addModalOverlay = document.getElementById('addNaModalOverlay');
  const addForm = document.getElementById('addNaForm');
  const modalNaShortName = document.getElementById('modalNaShortName');
  const modalNaInstitute = document.getElementById('modalNaInstitute');
  const modalNaCurrency = document.getElementById('modalNaCurrency');
  const modalNaAccNumber = document.getElementById('modalNaAccNumber');
  const modalNaDesc = document.getElementById('modalNaDesc');
  const modalNaBalanceMethod = document.getElementById('modalNaBalanceMethod');
  const modalNaAssocAcc = document.getElementById('modalNaAssocAcc');
  const modalNaVoucherType = document.getElementById('modalNaVoucherType');
  const modalNaVoucherTypeDesc = document.getElementById('modalNaVoucherTypeDesc');
  const modalNaInstituteCode = document.getElementById('modalNaInstituteCode');
  const modalNaOfficeCode = document.getElementById('modalNaOfficeCode');
  const modalNaType = document.getElementById('modalNaType');
  const modalNaBalance = document.getElementById('modalNaBalance');
  const modalNaDefaultFlag = document.getElementById('modalNaDefaultFlag');
  const modalNaIntlFlag = document.getElementById('modalNaIntlFlag');
  const modalNaStmtFlag = document.getElementById('modalNaStmtFlag');
  const addModalAlert = document.getElementById('addNaModalAlert');
  const addModalCloseBtn = document.getElementById('addNaModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addNaModalCancelBtn');

  // Edit Modal Elements
  const editModalOverlay = document.getElementById('editNaModalOverlay');
  const editForm = document.getElementById('editNaForm');
  const editModalNaShortName = document.getElementById('editModalNaShortName');
  const editModalNaInstitute = document.getElementById('editModalNaInstitute');
  const editModalNaCurrency = document.getElementById('editModalNaCurrency');
  const editModalNaAccNumber = document.getElementById('editModalNaAccNumber');
  const editModalNaDesc = document.getElementById('editModalNaDesc');
  const editModalNaBalanceMethod = document.getElementById('editModalNaBalanceMethod');
  const editModalNaAssocAcc = document.getElementById('editModalNaAssocAcc');
  const editModalNaVoucherType = document.getElementById('editModalNaVoucherType');
  const editModalNaVoucherTypeDesc = document.getElementById('editModalNaVoucherTypeDesc');
  const editModalNaInstituteCode = document.getElementById('editModalNaInstituteCode');
  const editModalNaOfficeCode = document.getElementById('editModalNaOfficeCode');
  const editModalNaType = document.getElementById('editModalNaType');
  const editModalNaBalance = document.getElementById('editModalNaBalance');
  const editModalNaDefaultFlag = document.getElementById('editModalNaDefaultFlag');
  const editModalNaIntlFlag = document.getElementById('editModalNaIntlFlag');
  const editModalNaStmtFlag = document.getElementById('editModalNaStmtFlag');
  const editModalAlert = document.getElementById('editNaModalAlert');
  const editModalCloseBtn = document.getElementById('editNaModalCloseBtn');
  const editModalCancelBtn = document.getElementById('editNaModalCancelBtn');

  // View Modal Elements
  const viewModalOverlay = document.getElementById('viewNaModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewNaModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewNaModalOkBtn');
  const viewModalNaShortName = document.getElementById('viewModalNaShortName');
  const viewModalNaInstitute = document.getElementById('viewModalNaInstitute');
  const viewModalNaCurrency = document.getElementById('viewModalNaCurrency');
  const viewModalNaAccNumber = document.getElementById('viewModalNaAccNumber');
  const viewModalNaDesc = document.getElementById('viewModalNaDesc');
  const viewModalNaBalanceMethod = document.getElementById('viewModalNaBalanceMethod');
  const viewModalNaAssocAcc = document.getElementById('viewModalNaAssocAcc');
  const viewModalNaVoucherType = document.getElementById('viewModalNaVoucherType');
  const viewModalNaVoucherTypeDesc = document.getElementById('viewModalNaVoucherTypeDesc');
  const viewModalNaInstituteCode = document.getElementById('viewModalNaInstituteCode');
  const viewModalNaOfficeCode = document.getElementById('viewModalNaOfficeCode');
  const viewModalNaFlags = document.getElementById('viewModalNaFlags');

  // Default selection to first row if not set
  if (naSelectedRowIndex === null && nominalAccountsData.length > 0) {
    naSelectedRowIndex = 0;
  }

  function getFilteredRecords() {
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const currFilter = currencyFilterSelect ? currencyFilterSelect.value : '';
    const defFilter = defaultFlagFilterSelect ? defaultFlagFilterSelect.value : '';

    return nominalAccountsData.filter(item => {
      const sName = (item.shortName || item.code || '').toLowerCase();
      const pInst = (item.paymentInstitute || '').toLowerCase();
      const aNum = (item.accountNumber || '').toLowerCase();
      const desc = (item.description || item.name || '').toLowerCase();

      const matchQuery = !query ||
        sName.includes(query) ||
        pInst.includes(query) ||
        aNum.includes(query) ||
        desc.includes(query);

      const matchCurr = !currFilter || item.currency === currFilter;
      const matchDefault = !defFilter || (defFilter === 'true' ? item.defaultFlag : !item.defaultFlag);

      return matchQuery && matchCurr && matchDefault;
    });
  }

  function renderTable() {
    naCurrentDataset = getFilteredRecords();
    const totalRecords = naCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / naPageSize) || 1;

    if (naCurrentPage > totalPages) naCurrentPage = totalPages;
    if (naCurrentPage < 1) naCurrentPage = 1;

    if (pageNumberInput) pageNumberInput.value = naCurrentPage;
    if (totalPagesText) totalPagesText.textContent = totalPages;

    const startIndex = (naCurrentPage - 1) * naPageSize;
    const endIndex = Math.min(startIndex + naPageSize, totalRecords);
    const pageRows = naCurrentDataset.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (pageRows.length === 0) {
      const emptyTr = document.createElement('tr');
      emptyTr.innerHTML = `
        <td colspan="16" style="text-align: center; color: #7f99b1; padding: 28px 8px; font-size: 11.5px;">
          <i class="fa-solid fa-circle-exclamation" style="margin-right: 6px;"></i>No Nominal Accounts found matching criteria.
        </td>
      `;
      tableBody.appendChild(emptyTr);
    } else {
      pageRows.forEach((row, pageIdx) => {
        const actualIndex = startIndex + pageIdx;
        const isSelected = naSelectedRowIndex === actualIndex;
        const tr = document.createElement('tr');
        tr.className = (pageIdx % 2 === 0) ? 'row-even' : 'row-odd';
        if (isSelected) {
          tr.classList.add('selected');
        }

        const shortNameDisplay = escapeHtml(row.shortName || row.code || '');
        const instDisplay = escapeHtml(row.paymentInstitute || '');
        const currDisplay = escapeHtml(row.currency || 'GBP');
        const accNumDisplay = escapeHtml(row.accountNumber || '');
        const descDisplay = escapeHtml(row.description || row.name || '');
        const assocAccDisplay = escapeHtml(row.associatedCashAccount || '');
        const balMethodDisplay = escapeHtml(row.balanceMethod || 'Detailed');
        const vTypeDisplay = escapeHtml(row.voucherType || '');
        const vTypeDescDisplay = escapeHtml(row.voucherTypeDesc || '');
        const instCodeDisplay = escapeHtml(row.instituteCode || '');
        const offCodeDisplay = escapeHtml(row.officeCode || '');

        tr.innerHTML = `
          <td style="text-align: center; color: #486581; font-weight: 600;">${actualIndex + 1}</td>
          <td><strong>${shortNameDisplay}</strong></td>
          <td>${instDisplay}</td>
          <td style="text-align: center;"><span style="font-weight: 600; color: #164f78;">${currDisplay}</span></td>
          <td>${accNumDisplay}</td>
          <td>${descDisplay}</td>
          <td style="text-align: center;">
            <input type="checkbox" style="cursor: pointer; accent-color: #2c7bb6;" ${row.defaultFlag ? 'checked' : ''} onclick="event.stopPropagation(); window.toggleNaDefaultFlag(${actualIndex})">
          </td>
          <td style="text-align: center;">
            <input type="checkbox" style="cursor: pointer; accent-color: #2c7bb6;" ${row.intlCashAccount ? 'checked' : ''} onclick="event.stopPropagation(); window.toggleNaIntlFlag(${actualIndex})">
          </td>
          <td style="text-align: center;">
            <input type="checkbox" style="cursor: pointer; accent-color: #2c7bb6;" ${row.statementNotEditable ? 'checked' : ''} onclick="event.stopPropagation(); window.toggleNaStmtFlag(${actualIndex})">
          </td>
          <td>${assocAccDisplay || '-'}</td>
          <td style="text-align: center;"><span style="color: #17527f; font-weight: 500;">${balMethodDisplay}</span></td>
          <td style="text-align: center;">${vTypeDisplay ? `<span style="font-weight: 600; color: #0d3859;">${vTypeDisplay}</span>` : '-'}</td>
          <td>${vTypeDescDisplay || '-'}</td>
          <td>${instCodeDisplay || '-'}</td>
          <td>${offCodeDisplay || '-'}</td>
          <td style="text-align: center; white-space: nowrap;">
            <div style="display: flex; gap: 4px; justify-content: center;">
              <button type="button" class="btn-grid-action btn-edit-user" title="Edit Account" onclick="event.stopPropagation(); window.handleEditNa(${actualIndex})">
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button type="button" class="btn-grid-action btn-view-user" title="View Details" onclick="event.stopPropagation(); window.handleViewNa(${actualIndex})">
                <i class="fa-solid fa-eye"></i>
              </button>
              <button type="button" class="btn-grid-action btn-delete-user" title="Delete Account" onclick="event.stopPropagation(); window.handleDeleteNa(${actualIndex})">
                <i class="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </td>
        `;

        // Row selection click
        tr.addEventListener('click', () => {
          naSelectedRowIndex = actualIndex;
          renderTable();
        });

        // Double click to edit
        tr.addEventListener('dblclick', () => {
          window.handleEditNa(actualIndex);
        });

        tableBody.appendChild(tr);
      });
    }

    if (recordStatusText) {
      if (totalRecords === 0) {
        recordStatusText.textContent = 'No records to view';
      } else {
        const selItem = naCurrentDataset[naSelectedRowIndex];
        const selLabel = selItem ? ` | Selected: ${selItem.shortName || selItem.code}` : '';
        recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records${selLabel}`;
      }
    }
  }

  // Interactive inline checkbox toggles
  window.toggleNaDefaultFlag = function(index) {
    const item = naCurrentDataset[index];
    if (!item) return;
    item.defaultFlag = !item.defaultFlag;
    showToast(`"${item.shortName}": Default Flag set to ${item.defaultFlag ? 'Checked' : 'Unchecked'}.`, 'info');
  };

  window.toggleNaIntlFlag = function(index) {
    const item = naCurrentDataset[index];
    if (!item) return;
    item.intlCashAccount = !item.intlCashAccount;
    showToast(`"${item.shortName}": International Cash Account set to ${item.intlCashAccount ? 'Checked' : 'Unchecked'}.`, 'info');
  };

  window.toggleNaStmtFlag = function(index) {
    const item = naCurrentDataset[index];
    if (!item) return;
    item.statementNotEditable = !item.statementNotEditable;
    showToast(`"${item.shortName}": Statement Not Editable set to ${item.statementNotEditable ? 'Checked' : 'Unchecked'}.`, 'info');
  };

  // Window callbacks for action buttons
  window.handleViewNa = function(index) {
    const item = naCurrentDataset[index];
    if (!item) return;

    if (viewModalNaShortName) viewModalNaShortName.textContent = item.shortName || item.code;
    if (viewModalNaInstitute) viewModalNaInstitute.textContent = item.paymentInstitute || '-';
    if (viewModalNaCurrency) viewModalNaCurrency.textContent = item.currency || 'GBP';
    if (viewModalNaAccNumber) viewModalNaAccNumber.textContent = item.accountNumber || '-';
    if (viewModalNaDesc) viewModalNaDesc.textContent = item.description || item.name || '-';
    if (viewModalNaBalanceMethod) viewModalNaBalanceMethod.textContent = item.balanceMethod || 'Detailed';
    if (viewModalNaAssocAcc) viewModalNaAssocAcc.textContent = item.associatedCashAccount || '-';
    if (viewModalNaVoucherType) viewModalNaVoucherType.textContent = item.voucherType || '-';
    if (viewModalNaVoucherTypeDesc) viewModalNaVoucherTypeDesc.textContent = item.voucherTypeDesc || '-';
    if (viewModalNaInstituteCode) viewModalNaInstituteCode.textContent = item.instituteCode || '-';
    if (viewModalNaOfficeCode) viewModalNaOfficeCode.textContent = item.officeCode || '-';

    if (viewModalNaFlags) {
      viewModalNaFlags.innerHTML = `
        <span class="${item.defaultFlag ? 'badge-default-yes' : 'badge-default-no'}"><i class="fa-solid fa-${item.defaultFlag ? 'check' : 'ban'}"></i> Default: ${item.defaultFlag ? 'Yes' : 'No'}</span>
        <span class="${item.intlCashAccount ? 'badge-default-yes' : 'badge-default-no'}"><i class="fa-solid fa-${item.intlCashAccount ? 'check' : 'ban'}"></i> International: ${item.intlCashAccount ? 'Yes' : 'No'}</span>
        <span class="${item.statementNotEditable ? 'badge-default-yes' : 'badge-default-no'}"><i class="fa-solid fa-${item.statementNotEditable ? 'check' : 'ban'}"></i> Stmt Not Editable: ${item.statementNotEditable ? 'Yes' : 'No'}</span>
      `;
    }

    if (viewModalOverlay) viewModalOverlay.classList.add('active');
  };

  window.handleEditNa = function(index) {
    const item = naCurrentDataset[index];
    if (!item) return;
    naEditingIndex = index;

    if (editModalNaShortName) editModalNaShortName.value = item.shortName || item.code;
    if (editModalNaInstitute) editModalNaInstitute.value = item.paymentInstitute || '';
    if (editModalNaCurrency) editModalNaCurrency.value = item.currency || 'GBP';
    if (editModalNaAccNumber) editModalNaAccNumber.value = item.accountNumber || '';
    if (editModalNaDesc) editModalNaDesc.value = item.description || item.name || '';
    if (editModalNaBalanceMethod) editModalNaBalanceMethod.value = item.balanceMethod || 'Detailed';
    if (editModalNaAssocAcc) editModalNaAssocAcc.value = item.associatedCashAccount || '';
    if (editModalNaVoucherType) editModalNaVoucherType.value = item.voucherType || '';
    if (editModalNaVoucherTypeDesc) editModalNaVoucherTypeDesc.value = item.voucherTypeDesc || '';
    if (editModalNaInstituteCode) editModalNaInstituteCode.value = item.instituteCode || '';
    if (editModalNaOfficeCode) editModalNaOfficeCode.value = item.officeCode || '';
    if (editModalNaType) editModalNaType.value = item.type || 'Asset';
    if (editModalNaBalance) editModalNaBalance.value = item.balance || 'Debit';
    if (editModalNaDefaultFlag) editModalNaDefaultFlag.checked = !!item.defaultFlag;
    if (editModalNaIntlFlag) editModalNaIntlFlag.checked = !!item.intlCashAccount;
    if (editModalNaStmtFlag) editModalNaStmtFlag.checked = !!item.statementNotEditable;
    if (editModalAlert) editModalAlert.innerHTML = '';

    if (editModalOverlay) editModalOverlay.classList.add('active');
    setTimeout(() => { if (editModalNaInstitute) editModalNaInstitute.focus(); }, 50);
  };

  window.handleDeleteNa = function(index) {
    const item = naCurrentDataset[index];
    if (!item) return;

    // Check if account is linked in Account Linking
    const itemKey = item.shortName || item.code;
    const linkedMappings = accountLinkingData.filter(x => x.accountCode === itemKey || x.accountCode === item.code);
    let confirmMsg = `Are you sure you want to delete Account "${itemKey} - ${item.description || item.name}"?`;
    if (linkedMappings.length > 0) {
      confirmMsg = `Account "${itemKey}" is currently linked to ${linkedMappings.length} ledger(s) in Account Linking.\n\nDeleting this master account will also remove all associated ledger mappings.\n\nDo you wish to proceed?`;
    }

    if (confirm(confirmMsg)) {
      const globalIdx = nominalAccountsData.findIndex(x => (x.shortName || x.code) === itemKey);
      if (globalIdx !== -1) {
        nominalAccountsData.splice(globalIdx, 1);
        // Cascade delete from accountLinkingData
        accountLinkingData = accountLinkingData.filter(x => x.accountCode !== itemKey && x.accountCode !== item.code);
        naSelectedRowIndex = null;
        renderTable();

        if (typeof window.refreshAccountLinkingDropdowns === 'function') {
          window.refreshAccountLinkingDropdowns();
        }
        if (typeof window.renderAccountLinkingTable === 'function') {
          window.renderAccountLinkingTable();
        }

        showToast(`Account "${itemKey}" deleted successfully.`, 'success');
      }
    }
  };

  // Search & Filter listeners
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      naCurrentPage = 1;
      renderTable();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      naCurrentPage = 1;
      renderTable();
    });
  }

  if (currencyFilterSelect) {
    currencyFilterSelect.addEventListener('change', () => {
      naCurrentPage = 1;
      renderTable();
    });
  }

  if (defaultFlagFilterSelect) {
    defaultFlagFilterSelect.addEventListener('change', () => {
      naCurrentPage = 1;
      renderTable();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (currencyFilterSelect) currencyFilterSelect.value = '';
      if (defaultFlagFilterSelect) defaultFlagFilterSelect.value = '';
      naCurrentPage = 1;
      naSelectedRowIndex = 0;
      renderTable();
      showToast('Filters reset.', 'info');
    });
  }

  if (btnCollapse) {
    btnCollapse.addEventListener('click', () => {
      const icon = btnCollapse.querySelector('i');
      if (gridViewport.style.display === 'none') {
        gridViewport.style.display = 'block';
        icon.className = 'fa-solid fa-chevron-up';
      } else {
        gridViewport.style.display = 'none';
        icon.className = 'fa-solid fa-chevron-down';
      }
    });
  }

  // Add Dialog Handlers
  function openAddModal() {
    if (addForm) addForm.reset();
    if (modalNaCurrency) modalNaCurrency.value = 'GBP';
    if (modalNaBalanceMethod) modalNaBalanceMethod.value = 'Detailed';
    if (modalNaType) modalNaType.value = 'Asset';
    if (modalNaBalance) modalNaBalance.value = 'Debit';
    if (addModalAlert) addModalAlert.innerHTML = '';
    if (addModalOverlay) addModalOverlay.classList.add('active');
    setTimeout(() => { if (modalNaShortName) modalNaShortName.focus(); }, 50);
  }

  function closeAddModal() {
    if (addModalOverlay) addModalOverlay.classList.remove('active');
  }

  if (btnHeaderAdd) btnHeaderAdd.addEventListener('click', openAddModal);
  if (btnAddRow) btnAddRow.addEventListener('click', openAddModal);
  if (addModalCloseBtn) addModalCloseBtn.addEventListener('click', closeAddModal);
  if (addModalCancelBtn) addModalCancelBtn.addEventListener('click', closeAddModal);

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const shortName = (modalNaShortName ? modalNaShortName.value : '').trim().toUpperCase();
      const paymentInstitute = (modalNaInstitute ? modalNaInstitute.value : '').trim().toUpperCase();
      const currency = (modalNaCurrency ? modalNaCurrency.value : 'GBP').trim();
      const accountNumber = (modalNaAccNumber ? modalNaAccNumber.value : '').trim();
      const description = (modalNaDesc ? modalNaDesc.value : '').trim();
      const balanceMethod = (modalNaBalanceMethod ? modalNaBalanceMethod.value : 'Detailed').trim();
      const associatedCashAccount = (modalNaAssocAcc ? modalNaAssocAcc.value : '').trim();
      const voucherType = (modalNaVoucherType ? modalNaVoucherType.value : '').trim().toUpperCase();
      const voucherTypeDesc = (modalNaVoucherTypeDesc ? modalNaVoucherTypeDesc.value : '').trim();
      const instituteCode = (modalNaInstituteCode ? modalNaInstituteCode.value : '').trim();
      const officeCode = (modalNaOfficeCode ? modalNaOfficeCode.value : '').trim();
      const type = (modalNaType ? modalNaType.value : 'Asset').trim();
      const balance = (modalNaBalance ? modalNaBalance.value : 'Debit').trim();
      const defaultFlag = modalNaDefaultFlag ? modalNaDefaultFlag.checked : false;
      const intlCashAccount = modalNaIntlFlag ? modalNaIntlFlag.checked : false;
      const statementNotEditable = modalNaStmtFlag ? modalNaStmtFlag.checked : false;

      if (!shortName || !paymentInstitute || !accountNumber || !description) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Please fill in all mandatory fields (Short Name, Payment Institute, Account Number, Description).
            </div>
          `;
        }
        return;
      }

      // Check for duplicate Short Name
      const exists = nominalAccountsData.some(x => (x.shortName || x.code || '').toUpperCase() === shortName);
      if (exists) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Short Name "${escapeHtml(shortName)}" already exists. Duplicate Short Names are not allowed.
            </div>
          `;
        }
        return;
      }

      const newRecord = {
        shortName,
        paymentInstitute,
        currency,
        accountNumber,
        description,
        defaultFlag,
        intlCashAccount,
        statementNotEditable,
        associatedCashAccount,
        balanceMethod,
        voucherType,
        voucherTypeDesc,
        instituteCode,
        officeCode,
        code: shortName,
        name: description,
        type,
        group: 'Cash & Cash Equivalents',
        balance,
        status: 'Active'
      };

      nominalAccountsData.unshift(newRecord);
      naSelectedRowIndex = 0;
      closeAddModal();
      renderTable();

      if (typeof window.refreshAccountLinkingDropdowns === 'function') {
        window.refreshAccountLinkingDropdowns();
      }

      showToast(`Account "${shortName}" created successfully.`, 'success');
    });
  }

  // Edit Dialog Handlers
  function closeEditModal() {
    if (editModalOverlay) editModalOverlay.classList.remove('active');
    naEditingIndex = null;
  }

  if (editModalCloseBtn) editModalCloseBtn.addEventListener('click', closeEditModal);
  if (editModalCancelBtn) editModalCancelBtn.addEventListener('click', closeEditModal);

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (naEditingIndex === null) return;
      const currentItem = naCurrentDataset[naEditingIndex];
      if (!currentItem) return;

      const paymentInstitute = (editModalNaInstitute ? editModalNaInstitute.value : '').trim().toUpperCase();
      const currency = (editModalNaCurrency ? editModalNaCurrency.value : 'GBP').trim();
      const accountNumber = (editModalNaAccNumber ? editModalNaAccNumber.value : '').trim();
      const description = (editModalNaDesc ? editModalNaDesc.value : '').trim();
      const balanceMethod = (editModalNaBalanceMethod ? editModalNaBalanceMethod.value : 'Detailed').trim();
      const associatedCashAccount = (editModalNaAssocAcc ? editModalNaAssocAcc.value : '').trim();
      const voucherType = (editModalNaVoucherType ? editModalNaVoucherType.value : '').trim().toUpperCase();
      const voucherTypeDesc = (editModalNaVoucherTypeDesc ? editModalNaVoucherTypeDesc.value : '').trim();
      const instituteCode = (editModalNaInstituteCode ? editModalNaInstituteCode.value : '').trim();
      const officeCode = (editModalNaOfficeCode ? editModalNaOfficeCode.value : '').trim();
      const type = (editModalNaType ? editModalNaType.value : 'Asset').trim();
      const balance = (editModalNaBalance ? editModalNaBalance.value : 'Debit').trim();
      const defaultFlag = editModalNaDefaultFlag ? editModalNaDefaultFlag.checked : false;
      const intlCashAccount = editModalNaIntlFlag ? editModalNaIntlFlag.checked : false;
      const statementNotEditable = editModalNaStmtFlag ? editModalNaStmtFlag.checked : false;

      if (!paymentInstitute || !accountNumber || !description) {
        if (editModalAlert) {
          editModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Payment Institute, Account Number, and Description are required.
            </div>
          `;
        }
        return;
      }

      const globalIdx = nominalAccountsData.findIndex(x => (x.shortName || x.code) === (currentItem.shortName || currentItem.code));
      if (globalIdx !== -1) {
        nominalAccountsData[globalIdx].paymentInstitute = paymentInstitute;
        nominalAccountsData[globalIdx].currency = currency;
        nominalAccountsData[globalIdx].accountNumber = accountNumber;
        nominalAccountsData[globalIdx].description = description;
        nominalAccountsData[globalIdx].name = description;
        nominalAccountsData[globalIdx].balanceMethod = balanceMethod;
        nominalAccountsData[globalIdx].associatedCashAccount = associatedCashAccount;
        nominalAccountsData[globalIdx].voucherType = voucherType;
        nominalAccountsData[globalIdx].voucherTypeDesc = voucherTypeDesc;
        nominalAccountsData[globalIdx].instituteCode = instituteCode;
        nominalAccountsData[globalIdx].officeCode = officeCode;
        nominalAccountsData[globalIdx].type = type;
        nominalAccountsData[globalIdx].balance = balance;
        nominalAccountsData[globalIdx].defaultFlag = defaultFlag;
        nominalAccountsData[globalIdx].intlCashAccount = intlCashAccount;
        nominalAccountsData[globalIdx].statementNotEditable = statementNotEditable;
      }

      closeEditModal();
      renderTable();

      if (typeof window.refreshAccountLinkingDropdowns === 'function') {
        window.refreshAccountLinkingDropdowns();
      }
      if (typeof window.renderAccountLinkingTable === 'function') {
        window.renderAccountLinkingTable();
      }

      showToast(`Account "${currentItem.shortName || currentItem.code}" updated successfully.`, 'success');
    });
  }

  // Edit selected button in footer
  if (btnEditRow) {
    btnEditRow.addEventListener('click', () => {
      if (naSelectedRowIndex === null || !naCurrentDataset[naSelectedRowIndex]) {
        showToast('Please select an Account to edit.', 'warning');
        return;
      }
      window.handleEditNa(naSelectedRowIndex);
    });
  }

  // Delete selected button in footer & toolbar
  function deleteSelectedAccount() {
    if (naSelectedRowIndex === null || !naCurrentDataset[naSelectedRowIndex]) {
      showToast('Please select an Account to delete.', 'warning');
      return;
    }
    window.handleDeleteNa(naSelectedRowIndex);
  }

  if (btnDeleteRow) btnDeleteRow.addEventListener('click', deleteSelectedAccount);

  // Download CSV Handler
  function exportToCsv() {
    if (nominalAccountsData.length === 0) {
      showToast('No records available to download.', 'warning');
      return;
    }
    const headers = [
      'Short Name',
      'Payment Institute',
      'Currency',
      'Account Number',
      'Description',
      'Default Flag',
      'International Cash Account',
      'Statement Not Editable',
      'Associated Cash Account',
      'Balance Method',
      'Voucher Type',
      'Voucher Type Description',
      'Institute Code',
      'Office Code'
    ];

    const rows = nominalAccountsData.map(r => [
      `"${(r.shortName || r.code || '').replace(/"/g, '""')}"`,
      `"${(r.paymentInstitute || '').replace(/"/g, '""')}"`,
      `"${r.currency || 'GBP'}"`,
      `"${(r.accountNumber || '').replace(/"/g, '""')}"`,
      `"${(r.description || r.name || '').replace(/"/g, '""')}"`,
      `"${r.defaultFlag ? 'TRUE' : 'FALSE'}"`,
      `"${r.intlCashAccount ? 'TRUE' : 'FALSE'}"`,
      `"${r.statementNotEditable ? 'TRUE' : 'FALSE'}"`,
      `"${(r.associatedCashAccount || '').replace(/"/g, '""')}"`,
      `"${(r.balanceMethod || 'Detailed').replace(/"/g, '""')}"`,
      `"${(r.voucherType || '').replace(/"/g, '""')}"`,
      `"${(r.voucherTypeDesc || '').replace(/"/g, '""')}"`,
      `"${(r.instituteCode || '').replace(/"/g, '""')}"`,
      `"${(r.officeCode || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', 'Nominal_Accounts_Export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Nominal Accounts exported successfully.', 'success');
  }

  if (btnDownload) btnDownload.addEventListener('click', exportToCsv);

  // View modal close handlers
  if (viewModalCloseBtn) viewModalCloseBtn.addEventListener('click', () => viewModalOverlay?.classList.remove('active'));
  if (viewModalOkBtn) viewModalOkBtn.addEventListener('click', () => viewModalOverlay?.classList.remove('active'));

  // Pagination Handlers
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', () => {
      naPageSize = parseInt(pageSizeSelect.value, 10);
      naCurrentPage = 1;
      renderTable();
    });
  }

  if (btnFirst) btnFirst.addEventListener('click', () => { naCurrentPage = 1; renderTable(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { if (naCurrentPage > 1) { naCurrentPage--; renderTable(); } });
  if (btnNext) btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(naCurrentDataset.length / naPageSize) || 1;
    if (naCurrentPage < totalPages) { naCurrentPage++; renderTable(); }
  });
  if (btnLast) btnLast.addEventListener('click', () => {
    naCurrentPage = Math.ceil(naCurrentDataset.length / naPageSize) || 1;
    renderTable();
  });

  if (pageNumberInput) {
    pageNumberInput.addEventListener('change', () => {
      const p = parseInt(pageNumberInput.value, 10);
      const totalPages = Math.ceil(naCurrentDataset.length / naPageSize) || 1;
      if (!isNaN(p) && p >= 1 && p <= totalPages) {
        naCurrentPage = p;
      }
      renderTable();
    });
  }

  // Initial render
  renderTable();
}

// =============================================================================
// MODULE 11: ACCOUNT LINKING (MAPPING SCREEN)
// =============================================================================
function initAccountLinkingModule() {
  // Master Header & Tabs
  const postingTypeSelect = document.getElementById('alPostingTypeSelect');
  const codePartNameInput = document.getElementById('alCodePartNameInput');
  const controlTypeInput = document.getElementById('alControlTypeInput');
  const defaultValueNoDetailsInput = document.getElementById('alDefaultValueNoDetailsInput');
  const defaultValueNoCtInput = document.getElementById('alDefaultValueNoCtInput');
  const validFromMasterInput = document.getElementById('alValidFromMasterInput');
  const gridTitleText = document.getElementById('alGridTitleText');

  // Posting Control Tabs
  const tabAlDetails = document.getElementById('tabAlDetails');
  const tabAlPostingControl = document.getElementById('tabAlPostingControl');
  const tabAlSpec = document.getElementById('tabAlSpec');
  const tabAlComb = document.getElementById('tabAlComb');

  // Search & Filter Elements
  const searchInput = document.getElementById('alSearchInput');
  const accountFilterSelect = document.getElementById('alAccountFilterSelect');
  const btnSearch = document.getElementById('btnAlSearch');
  const btnReset = document.getElementById('btnAlReset');

  // Grid Structure Elements
  const btnHeaderAdd = document.getElementById('btnHeaderAddAl');
  const btnCollapse = document.getElementById('btnCollapseAlGrid');
  const gridViewport = document.getElementById('alGridViewport');
  const tableBody = document.getElementById('alTableBody');
  const btnAddRow = document.getElementById('btnAlAddRow');
  const btnEditRow = document.getElementById('btnAlEditRow');
  const btnDeleteRow = document.getElementById('btnAlDeleteRow');
  const btnDownload = document.getElementById('btnAlDownload');

  // Pagination Elements
  const pageSizeSelect = document.getElementById('alPageSizeSelect');
  const pageNumberInput = document.getElementById('alPageNumberInput');
  const btnFirst = document.getElementById('btnAlFirstPage');
  const btnPrev = document.getElementById('btnAlPrevPage');
  const btnNext = document.getElementById('btnAlNextPage');
  const btnLast = document.getElementById('btnAlLastPage');
  const totalPagesText = document.getElementById('alTotalPagesText');
  const recordStatusText = document.getElementById('alRecordStatusText');

  // Add Modal Elements
  const addModalOverlay = document.getElementById('addAlModalOverlay');
  const addForm = document.getElementById('addAlForm');
  const modalAlPostingType = document.getElementById('modalAlPostingType');
  const modalAlValidFrom = document.getElementById('modalAlValidFrom');
  const modalAlCustomerGroup = document.getElementById('modalAlCustomerGroup');
  const modalAlControlTypeDesc = document.getElementById('modalAlControlTypeDesc');
  const modalAlAccountSelect = document.getElementById('modalAlAccountSelect');
  const modalAlCodePartDesc = document.getElementById('modalAlCodePartDesc');
  const modalAlAccountPreview = document.getElementById('modalAlAccountPreview');
  const previewNaCode = document.getElementById('previewNaCode');
  const previewNaType = document.getElementById('previewNaType');
  const previewNaName = document.getElementById('previewNaName');
  const previewNaBalance = document.getElementById('previewNaBalance');
  const modalAlSpecControlTyp = document.getElementById('modalAlSpecControlTyp');
  const modalAlSpecControlTypDesc = document.getElementById('modalAlSpecControlTypDesc');
  const modalAlSpecNoDetails = document.getElementById('modalAlSpecNoDetails');
  const modalAlSpecNoCtValue = document.getElementById('modalAlSpecNoCtValue');
  const modalAlStatus = document.getElementById('modalAlStatus');
  const addModalAlert = document.getElementById('addAlModalAlert');
  const addModalCloseBtn = document.getElementById('addAlModalCloseBtn');
  const addModalCancelBtn = document.getElementById('addAlModalCancelBtn');

  // Edit Modal Elements
  const editModalOverlay = document.getElementById('editAlModalOverlay');
  const editForm = document.getElementById('editAlForm');
  const editModalAlPostingType = document.getElementById('editModalAlPostingType');
  const editModalAlValidFrom = document.getElementById('editModalAlValidFrom');
  const editModalAlCustomerGroup = document.getElementById('editModalAlCustomerGroup');
  const editModalAlControlTypeDesc = document.getElementById('editModalAlControlTypeDesc');
  const editModalAlAccountSelect = document.getElementById('editModalAlAccountSelect');
  const editModalAlCodePartDesc = document.getElementById('editModalAlCodePartDesc');
  const editModalAlAccountPreview = document.getElementById('editModalAlAccountPreview');
  const editPreviewNaCode = document.getElementById('editPreviewNaCode');
  const editPreviewNaType = document.getElementById('editPreviewNaType');
  const editPreviewNaName = document.getElementById('editPreviewNaName');
  const editPreviewNaBalance = document.getElementById('editPreviewNaBalance');
  const editModalAlSpecControlTyp = document.getElementById('editModalAlSpecControlTyp');
  const editModalAlSpecControlTypDesc = document.getElementById('editModalAlSpecControlTypDesc');
  const editModalAlSpecNoDetails = document.getElementById('editModalAlSpecNoDetails');
  const editModalAlSpecNoCtValue = document.getElementById('editModalAlSpecNoCtValue');
  const editModalAlStatus = document.getElementById('editModalAlStatus');
  const editModalAlert = document.getElementById('editAlModalAlert');
  const editModalCloseBtn = document.getElementById('editAlModalCloseBtn');
  const editModalCancelBtn = document.getElementById('editAlModalCancelBtn');

  // View Modal Elements
  const viewModalOverlay = document.getElementById('viewAlModalOverlay');
  const viewModalCloseBtn = document.getElementById('viewAlModalCloseBtn');
  const viewModalOkBtn = document.getElementById('viewAlModalOkBtn');
  const viewModalAlPostingType = document.getElementById('viewModalAlPostingType');
  const viewModalAlValidFrom = document.getElementById('viewModalAlValidFrom');
  const viewModalAlCustomerGroup = document.getElementById('viewModalAlCustomerGroup');
  const viewModalAlControlTypeDesc = document.getElementById('viewModalAlControlTypeDesc');
  const viewModalAlAccount = document.getElementById('viewModalAlAccount');
  const viewModalAlCodePartDesc = document.getElementById('viewModalAlCodePartDesc');
  const viewModalAlSpecControlTyp = document.getElementById('viewModalAlSpecControlTyp');
  const viewModalAlSpecControlTypDesc = document.getElementById('viewModalAlSpecControlTypDesc');
  const viewModalAlSpecNoDetails = document.getElementById('viewModalAlSpecNoDetails');
  const viewModalAlSpecNoCtValue = document.getElementById('viewModalAlSpecNoCtValue');
  const viewModalAlStatus = document.getElementById('viewModalAlStatus');

  // State variables
  let alCurrentPage = 1;
  let alPageSize = 1000;
  let alCurrentDataset = [];
  let alSelectedRowIndex = null;
  let alEditingIndex = null;

  // Master definitions mapping for Posting Types
  const postingTypeDefinitions = {
    'IP2': { codePart: 'Account', controlType: 'IC2', defNoDetails: '1100', defNoCt: '', validFrom: '01/07/2017', label: 'IP2 - Customer Claims, Invoice' },
    'IP1': { codePart: 'Account', controlType: 'IC1', defNoDetails: '2000', defNoCt: '', validFrom: '01/01/2014', label: 'IP1 - Supplier Debts, Invoice' },
    'IP3': { codePart: 'Account', controlType: 'IC3', defNoDetails: '1100', defNoCt: '', validFrom: '01/01/2014', label: 'IP3 - Tax Received, Invoice' },
    'IP4': { codePart: 'Account', controlType: 'IC4', defNoDetails: '2000', defNoCt: '', validFrom: '01/01/2014', label: 'IP4 - Tax Disbursed, Invoice' },
    'IP5': { codePart: 'Account', controlType: 'IC5', defNoDetails: '5100', defNoCt: '', validFrom: '01/01/2015', label: 'IP5 - Preliminary Cost' },
    'IP17': { codePart: 'Account', controlType: 'IC17', defNoDetails: '1100', defNoCt: '', validFrom: '01/01/2016', label: 'IP17 - Customer Claims, Advance Inv' },
    'ALL': { codePart: 'Account', controlType: 'ALL', defNoDetails: '-', defNoCt: '', validFrom: 'All Active Dates', label: 'All Posting Types' }
  };

  // Sync Master Header Fields
  function syncMasterHeader() {
    const selectedPt = postingTypeSelect ? postingTypeSelect.value : 'IP2';
    const def = postingTypeDefinitions[selectedPt] || postingTypeDefinitions['IP2'];

    if (codePartNameInput) codePartNameInput.value = def.codePart;
    if (controlTypeInput) controlTypeInput.value = def.controlType;
    if (defaultValueNoDetailsInput) defaultValueNoDetailsInput.value = def.defNoDetails;
    if (defaultValueNoCtInput) defaultValueNoCtInput.value = def.defNoCt;
    if (validFromMasterInput) validFromMasterInput.value = def.validFrom;
    if (gridTitleText) {
      gridTitleText.textContent = selectedPt === 'ALL'
        ? `Account Linking to Ledger - [Posting Control Details: All Types]`
        : `Account Linking to Ledger - [Posting Control Details: ${selectedPt}]`;
    }
  }

  if (postingTypeSelect) {
    postingTypeSelect.addEventListener('change', () => {
      syncMasterHeader();
      alCurrentPage = 1;
      alSelectedRowIndex = null;
      renderTable();
    });
  }

  // Tabs Handler
  const allTabs = [tabAlDetails, tabAlPostingControl, tabAlSpec, tabAlComb];
  allTabs.forEach(tab => {
    if (!tab) return;
    tab.addEventListener('click', () => {
      allTabs.forEach(t => {
        if (!t) return;
        t.style.background = '#eef5fb';
        t.style.color = '#1e4566';
        t.style.border = '1px solid #b8d2e8';
        t.classList.remove('active');
      });
      tab.style.background = '#2b7faa';
      tab.style.color = '#ffffff';
      tab.style.border = '1px solid #165383';
      tab.classList.add('active');
      showToast(`Switched view to ${tab.textContent.trim()}.`, 'info');
    });
  });

  // Populate dynamic dropdowns from nominalAccountsData
  function populateDynamicDropdowns() {
    const currentAccountFilterVal = accountFilterSelect ? accountFilterSelect.value : '';

    if (accountFilterSelect) {
      accountFilterSelect.innerHTML = '<option value="">All Accounts</option>';
      nominalAccountsData.forEach(acc => {
        const opt = document.createElement('option');
        opt.value = acc.code;
        opt.textContent = `${acc.code} - ${acc.name}`;
        accountFilterSelect.appendChild(opt);
      });
      accountFilterSelect.value = currentAccountFilterVal;
    }

    if (modalAlAccountSelect) {
      const currentAddVal = modalAlAccountSelect.value;
      modalAlAccountSelect.innerHTML = '<option value="">-- Select Nominal Account --</option>';
      nominalAccountsData.forEach(acc => {
        const opt = document.createElement('option');
        opt.value = acc.code;
        opt.textContent = `${acc.code} - ${acc.name} (${acc.type})`;
        modalAlAccountSelect.appendChild(opt);
      });
      modalAlAccountSelect.value = currentAddVal;
    }

    if (editModalAlAccountSelect) {
      const currentEditVal = editModalAlAccountSelect.value;
      editModalAlAccountSelect.innerHTML = '<option value="">-- Select Nominal Account --</option>';
      nominalAccountsData.forEach(acc => {
        const opt = document.createElement('option');
        opt.value = acc.code;
        opt.textContent = `${acc.code} - ${acc.name} (${acc.type})`;
        editModalAlAccountSelect.appendChild(opt);
      });
      editModalAlAccountSelect.value = currentEditVal;
    }
  }

  window.refreshAccountLinkingDropdowns = populateDynamicDropdowns;

  // Dynamic preview helpers
  function updateAddAccountPreview(accountCode) {
    const acc = nominalAccountsData.find(x => x.code === accountCode);
    if (!acc || !modalAlAccountPreview) {
      if (modalAlAccountPreview) modalAlAccountPreview.style.display = 'none';
      return;
    }
    if (previewNaCode) previewNaCode.innerHTML = `<span class="account-code-badge">${escapeHtml(acc.code)}</span>`;
    if (previewNaType) {
      const typeClass = `badge-type-${(acc.type || 'asset').toLowerCase()}`;
      previewNaType.innerHTML = `<span class="badge-account-type ${typeClass}">${escapeHtml(acc.type)}</span>`;
    }
    if (previewNaName) previewNaName.textContent = acc.name;
    if (previewNaBalance) {
      const balClass = `badge-bal-${(acc.balance || 'debit').toLowerCase()}`;
      previewNaBalance.innerHTML = `<span class="${balClass}">${escapeHtml(acc.balance)}</span>`;
    }
    modalAlAccountPreview.style.display = 'block';
    modalAlAccountPreview.classList.add('active-selection');

    if (modalAlCodePartDesc && !modalAlCodePartDesc.value) {
      modalAlCodePartDesc.value = acc.name;
    }
  }

  function updateEditAccountPreview(accountCode) {
    const acc = nominalAccountsData.find(x => x.code === accountCode);
    if (!acc || !editModalAlAccountPreview) {
      if (editModalAlAccountPreview) editModalAlAccountPreview.style.display = 'none';
      return;
    }
    if (editPreviewNaCode) editPreviewNaCode.innerHTML = `<span class="account-code-badge">${escapeHtml(acc.code)}</span>`;
    if (editPreviewNaType) {
      const typeClass = `badge-type-${(acc.type || 'asset').toLowerCase()}`;
      editPreviewNaType.innerHTML = `<span class="badge-account-type ${typeClass}">${escapeHtml(acc.type)}</span>`;
    }
    if (editPreviewNaName) editPreviewNaName.textContent = acc.name;
    if (editPreviewNaBalance) {
      const balClass = `badge-bal-${(acc.balance || 'debit').toLowerCase()}`;
      editPreviewNaBalance.innerHTML = `<span class="${balClass}">${escapeHtml(acc.balance)}</span>`;
    }
    editModalAlAccountPreview.style.display = 'block';
    editModalAlAccountPreview.classList.add('active-selection');
  }

  if (modalAlAccountSelect) {
    modalAlAccountSelect.addEventListener('change', () => updateAddAccountPreview(modalAlAccountSelect.value));
  }
  if (editModalAlAccountSelect) {
    editModalAlAccountSelect.addEventListener('change', () => updateEditAccountPreview(editModalAlAccountSelect.value));
  }

  // Filter logic
  function getFilteredRecords() {
    const pt = postingTypeSelect ? postingTypeSelect.value : 'IP2';
    const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    const accFilter = accountFilterSelect ? accountFilterSelect.value : '';

    return accountLinkingData.filter(item => {
      const matchPt = pt === 'ALL' || item.postingType === pt;
      const matchAcc = !accFilter || item.accountCode === accFilter;
      const matchQuery = !query ||
        (item.customerGroup && item.customerGroup.toLowerCase().includes(query)) ||
        (item.controlTypeDesc && item.controlTypeDesc.toLowerCase().includes(query)) ||
        (item.accountCode && item.accountCode.toLowerCase().includes(query)) ||
        (item.codePartDesc && item.codePartDesc.toLowerCase().includes(query));

      return matchPt && matchAcc && matchQuery;
    });
  }

  // Table rendering with all 11 columns
  function renderTable() {
    alCurrentDataset = getFilteredRecords();
    const totalRecords = alCurrentDataset.length;
    const totalPages = Math.ceil(totalRecords / alPageSize) || 1;

    if (alCurrentPage > totalPages) alCurrentPage = totalPages;
    if (alCurrentPage < 1) alCurrentPage = 1;

    if (pageNumberInput) pageNumberInput.value = alCurrentPage;
    if (totalPagesText) totalPagesText.textContent = totalPages;

    const startIndex = (alCurrentPage - 1) * alPageSize;
    const endIndex = Math.min(startIndex + alPageSize, totalRecords);
    const pageRows = alCurrentDataset.slice(startIndex, endIndex);

    tableBody.innerHTML = '';

    if (pageRows.length === 0) {
      const emptyTr = document.createElement('tr');
      emptyTr.innerHTML = `
        <td colspan="11" style="text-align: center; color: #7f99b1; padding: 26px 8px;">
          <i class="fa-solid fa-circle-exclamation" style="margin-right: 6px;"></i>No Posting Control / Account Linking rules found matching criteria.
        </td>
      `;
      tableBody.appendChild(emptyTr);
    } else {
      pageRows.forEach((row, pageIdx) => {
        const actualIndex = startIndex + pageIdx;
        const srNo = actualIndex + 1;
        const isSelected = alSelectedRowIndex === actualIndex;
        const tr = document.createElement('tr');
        tr.className = pageIdx % 2 === 0 ? 'row-even' : 'row-odd';
        if (isSelected) tr.classList.add('selected');

        tr.innerHTML = `
          <td style="text-align: center; font-weight: 600; color: #4b6a84;">${srNo}</td>
          <td style="font-weight: 700; color: #0000ee;">${escapeHtml(row.customerGroup)}</td>
          <td style="color: #1e4566;">${escapeHtml(row.controlTypeDesc || '')}</td>
          <td>
            <span class="account-code-badge" style="font-weight: 700;">${escapeHtml(row.accountCode)}</span>
          </td>
          <td style="color: #1e4566; font-weight: 500;">${escapeHtml(row.codePartDesc || '')}</td>
          <td style="color: #5c7b96;">${escapeHtml(row.specControlTyp || '-')}</td>
          <td style="color: #5c7b96;">${escapeHtml(row.specControlTypDesc || '-')}</td>
          <td style="color: #5c7b96;">${escapeHtml(row.specNoDetails || '-')}</td>
          <td style="color: #5c7b96;">${escapeHtml(row.specNoCtValue || '-')}</td>
          <td style="text-align: center; font-family: Consolas, monospace; color: #284c6b;">${escapeHtml(row.validFrom || '')}</td>
          <td class="table-action-cell" style="text-align: center;">
            <button type="button" class="btn-grid-action btn-edit-user" title="Edit Rule" onclick="event.stopPropagation(); window.handleEditAl(${actualIndex})">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button type="button" class="btn-grid-action btn-view-user" title="View Details" onclick="event.stopPropagation(); window.handleViewAl(${actualIndex})">
              <i class="fa-solid fa-eye"></i>
            </button>
            <button type="button" class="btn-grid-action btn-delete-user" title="Delete Rule" onclick="event.stopPropagation(); window.handleDeleteAl(${actualIndex})">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        `;

        tr.addEventListener('click', () => {
          document.querySelectorAll('#alTableBody tr').forEach(r => r.classList.remove('selected'));
          tr.classList.add('selected');
          alSelectedRowIndex = actualIndex;
        });

        tableBody.appendChild(tr);
      });
    }

    // Pad empty rows up to 10
    if (pageRows.length > 0 && pageRows.length < 10) {
      for (let i = pageRows.length; i < 10; i++) {
        const padTr = document.createElement('tr');
        padTr.className = i % 2 === 0 ? 'row-even' : 'row-odd';
        padTr.innerHTML = `
          <td class="empty-cell">&nbsp;</td>
          <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
        `;
        tableBody.appendChild(padTr);
      }
    }

    if (recordStatusText) {
      if (totalRecords === 0) {
        recordStatusText.textContent = 'No records to view';
      } else {
        recordStatusText.textContent = `Displaying ${startIndex + 1} - ${endIndex} of ${totalRecords} records`;
      }
    }
  }

  window.renderAccountLinkingTable = renderTable;

  // Window callbacks
  window.handleViewAl = function(index) {
    const item = alCurrentDataset[index];
    if (!item) return;

    if (viewModalAlPostingType) viewModalAlPostingType.textContent = item.postingType;
    if (viewModalAlValidFrom) viewModalAlValidFrom.textContent = item.validFrom || '-';
    if (viewModalAlCustomerGroup) viewModalAlCustomerGroup.textContent = item.customerGroup;
    if (viewModalAlControlTypeDesc) viewModalAlControlTypeDesc.textContent = item.controlTypeDesc || '-';
    if (viewModalAlAccount) {
      viewModalAlAccount.innerHTML = `<span class="account-code-badge">${escapeHtml(item.accountCode)}</span>`;
    }
    if (viewModalAlCodePartDesc) viewModalAlCodePartDesc.textContent = item.codePartDesc || '-';
    if (viewModalAlSpecControlTyp) viewModalAlSpecControlTyp.textContent = item.specControlTyp || '-';
    if (viewModalAlSpecControlTypDesc) viewModalAlSpecControlTypDesc.textContent = item.specControlTypDesc || '-';
    if (viewModalAlSpecNoDetails) viewModalAlSpecNoDetails.textContent = item.specNoDetails || '-';
    if (viewModalAlSpecNoCtValue) viewModalAlSpecNoCtValue.textContent = item.specNoCtValue || '-';
    if (viewModalAlStatus) {
      viewModalAlStatus.innerHTML = item.status === 'Active'
        ? `<span class="badge-default-yes"><i class="fa-solid fa-check"></i> Active</span>`
        : `<span class="badge-default-no"><i class="fa-solid fa-ban"></i> Inactive</span>`;
    }

    if (viewModalOverlay) viewModalOverlay.classList.add('active');
  };

  window.handleEditAl = function(index) {
    const item = alCurrentDataset[index];
    if (!item) return;
    alEditingIndex = index;

    populateDynamicDropdowns();

    if (editModalAlPostingType) editModalAlPostingType.value = item.postingType || 'IP2';
    if (editModalAlValidFrom) editModalAlValidFrom.value = item.validFrom || '01/07/2017';
    if (editModalAlCustomerGroup) editModalAlCustomerGroup.value = item.customerGroup || '';
    if (editModalAlControlTypeDesc) editModalAlControlTypeDesc.value = item.controlTypeDesc || '';
    if (editModalAlAccountSelect) editModalAlAccountSelect.value = item.accountCode || '';
    if (editModalAlCodePartDesc) editModalAlCodePartDesc.value = item.codePartDesc || '';
    if (editModalAlSpecControlTyp) editModalAlSpecControlTyp.value = item.specControlTyp || '';
    if (editModalAlSpecControlTypDesc) editModalAlSpecControlTypDesc.value = item.specControlTypDesc || '';
    if (editModalAlSpecNoDetails) editModalAlSpecNoDetails.value = item.specNoDetails || '';
    if (editModalAlSpecNoCtValue) editModalAlSpecNoCtValue.value = item.specNoCtValue || '';
    if (editModalAlStatus) editModalAlStatus.value = item.status || 'Active';
    if (editModalAlert) editModalAlert.innerHTML = '';

    updateEditAccountPreview(item.accountCode);

    if (editModalOverlay) editModalOverlay.classList.add('active');
  };

  window.handleDeleteAl = function(index) {
    const item = alCurrentDataset[index];
    if (!item) return;

    if (confirm(`Are you sure you want to delete Posting Control rule for Customer Group "${item.customerGroup}" (Account: ${item.accountCode})?`)) {
      const globalIdx = accountLinkingData.findIndex(x => x.id === item.id || (x.customerGroup === item.customerGroup && x.postingType === item.postingType));
      if (globalIdx !== -1) {
        accountLinkingData.splice(globalIdx, 1);
        alSelectedRowIndex = null;
        renderTable();
        showToast(`Rule for "${item.customerGroup}" removed successfully.`, 'success');
      }
    }
  };

  // Search & Reset listeners
  if (btnSearch) {
    btnSearch.addEventListener('click', () => {
      alCurrentPage = 1;
      alSelectedRowIndex = null;
      renderTable();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      alCurrentPage = 1;
      renderTable();
    });
  }

  if (accountFilterSelect) {
    accountFilterSelect.addEventListener('change', () => {
      alCurrentPage = 1;
      renderTable();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (accountFilterSelect) accountFilterSelect.value = '';
      if (postingTypeSelect) postingTypeSelect.value = 'IP2';
      syncMasterHeader();
      alCurrentPage = 1;
      alSelectedRowIndex = null;
      renderTable();
      showToast('Account Linking search & filters reset.', 'info');
    });
  }

  // Collapse grid
  if (btnCollapse && gridViewport) {
    btnCollapse.addEventListener('click', () => {
      const isHidden = gridViewport.style.display === 'none';
      gridViewport.style.display = isHidden ? 'block' : 'none';
      const icon = btnCollapse.querySelector('i');
      if (icon) {
        icon.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
      }
    });
  }

  // Add Dialog Handlers
  function openAddModal() {
    populateDynamicDropdowns();
    if (addForm) addForm.reset();
    const currentPt = postingTypeSelect ? postingTypeSelect.value : 'IP2';
    if (modalAlPostingType) modalAlPostingType.value = currentPt === 'ALL' ? 'IP2' : currentPt;
    if (modalAlValidFrom) modalAlValidFrom.value = (validFromMasterInput ? validFromMasterInput.value : '01/07/2017');
    if (modalAlAccountPreview) modalAlAccountPreview.style.display = 'none';
    if (modalAlStatus) modalAlStatus.value = 'Active';
    if (addModalAlert) addModalAlert.innerHTML = '';
    if (addModalOverlay) addModalOverlay.classList.add('active');
    setTimeout(() => { if (modalAlCustomerGroup) modalAlCustomerGroup.focus(); }, 50);
  }

  function closeAddModal() {
    if (addModalOverlay) addModalOverlay.classList.remove('active');
  }

  if (btnHeaderAdd) btnHeaderAdd.addEventListener('click', openAddModal);
  if (btnAddRow) btnAddRow.addEventListener('click', openAddModal);
  if (addModalCloseBtn) addModalCloseBtn.addEventListener('click', closeAddModal);
  if (addModalCancelBtn) addModalCancelBtn.addEventListener('click', closeAddModal);

  if (addForm) {
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const postingType = (modalAlPostingType ? modalAlPostingType.value : 'IP2').trim();
      const validFrom = (modalAlValidFrom ? modalAlValidFrom.value : '01/07/2017').trim();
      const customerGroup = (modalAlCustomerGroup ? modalAlCustomerGroup.value : '').trim().toUpperCase();
      const controlTypeDesc = (modalAlControlTypeDesc ? modalAlControlTypeDesc.value : '').trim();
      const accountCode = (modalAlAccountSelect ? modalAlAccountSelect.value : '').trim();
      const codePartDesc = (modalAlCodePartDesc ? modalAlCodePartDesc.value : '').trim();
      const specControlTyp = (modalAlSpecControlTyp ? modalAlSpecControlTyp.value : '').trim();
      const specControlTypDesc = (modalAlSpecControlTypDesc ? modalAlSpecControlTypDesc.value : '').trim();
      const specNoDetails = (modalAlSpecNoDetails ? modalAlSpecNoDetails.value : '').trim();
      const specNoCtValue = (modalAlSpecNoCtValue ? modalAlSpecNoCtValue.value : '').trim();
      const status = (modalAlStatus ? modalAlStatus.value : 'Active').trim();

      if (!customerGroup || !controlTypeDesc || !accountCode) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Customer Group, Control Type Description, and Account are mandatory.
            </div>
          `;
        }
        return;
      }

      // Duplicate prevention rule: Customer Group within same Posting Type must be unique
      const isDuplicate = accountLinkingData.some(x => x.postingType === postingType && x.customerGroup.toUpperCase() === customerGroup);
      if (isDuplicate) {
        if (addModalAlert) {
          addModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Rule for Customer Group "${escapeHtml(customerGroup)}" under Posting Type "${escapeHtml(postingType)}" already exists.
            </div>
          `;
        }
        return;
      }

      const newId = 'AL' + String(Date.now()).slice(-5);
      accountLinkingData.push({
        id: newId,
        postingType,
        codePartName: 'Account',
        controlType: (postingTypeDefinitions[postingType] || {}).controlType || 'IC2',
        customerGroup,
        controlTypeDesc,
        accountCode,
        codePartDesc,
        specControlTyp,
        specControlTypDesc,
        specNoDetails,
        specNoCtValue,
        validFrom,
        status
      });

      closeAddModal();
      renderTable();
      showToast(`Rule for "${customerGroup}" linked to Account "${accountCode}" successfully.`, 'success');
    });
  }

  // Edit Dialog Handlers
  function closeEditModal() {
    if (editModalOverlay) editModalOverlay.classList.remove('active');
    alEditingIndex = null;
  }

  if (editModalCloseBtn) editModalCloseBtn.addEventListener('click', closeEditModal);
  if (editModalCancelBtn) editModalCancelBtn.addEventListener('click', closeEditModal);

  if (btnEditRow) {
    btnEditRow.addEventListener('click', () => {
      if (alSelectedRowIndex === null || !alCurrentDataset[alSelectedRowIndex]) {
        showToast('Please select a Posting Control rule to edit.', 'warning');
        return;
      }
      window.handleEditAl(alSelectedRowIndex);
    });
  }

  if (editForm) {
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (alEditingIndex === null) return;
      const currentItem = alCurrentDataset[alEditingIndex];
      if (!currentItem) return;

      const postingType = (editModalAlPostingType ? editModalAlPostingType.value : 'IP2').trim();
      const validFrom = (editModalAlValidFrom ? editModalAlValidFrom.value : '01/07/2017').trim();
      const customerGroup = (editModalAlCustomerGroup ? editModalAlCustomerGroup.value : '').trim().toUpperCase();
      const controlTypeDesc = (editModalAlControlTypeDesc ? editModalAlControlTypeDesc.value : '').trim();
      const accountCode = (editModalAlAccountSelect ? editModalAlAccountSelect.value : '').trim();
      const codePartDesc = (editModalAlCodePartDesc ? editModalAlCodePartDesc.value : '').trim();
      const specControlTyp = (editModalAlSpecControlTyp ? editModalAlSpecControlTyp.value : '').trim();
      const specControlTypDesc = (editModalAlSpecControlTypDesc ? editModalAlSpecControlTypDesc.value : '').trim();
      const specNoDetails = (editModalAlSpecNoDetails ? editModalAlSpecNoDetails.value : '').trim();
      const specNoCtValue = (editModalAlSpecNoCtValue ? editModalAlSpecNoCtValue.value : '').trim();
      const status = (editModalAlStatus ? editModalAlStatus.value : 'Active').trim();

      if (!customerGroup || !controlTypeDesc || !accountCode) {
        if (editModalAlert) {
          editModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Customer Group, Control Type Description, and Account are mandatory.
            </div>
          `;
        }
        return;
      }

      const globalIdx = accountLinkingData.findIndex(x => x.id === currentItem.id || (x.customerGroup === currentItem.customerGroup && x.postingType === currentItem.postingType));

      const isDuplicate = accountLinkingData.some((x, idx) => idx !== globalIdx && x.postingType === postingType && x.customerGroup.toUpperCase() === customerGroup);
      if (isDuplicate) {
        if (editModalAlert) {
          editModalAlert.innerHTML = `
            <div class="form-alert-box alert-error" style="margin-bottom: 10px; padding: 6px 10px; background: #fdf2f2; border: 1px solid #f0a3a3; border-radius: 3px; font-size: 11px; color: #a92020;">
              <i class="fa-solid fa-circle-exclamation"></i> Rule for Customer Group "${escapeHtml(customerGroup)}" under Posting Type "${escapeHtml(postingType)}" already exists.
            </div>
          `;
        }
        return;
      }

      if (globalIdx !== -1) {
        accountLinkingData[globalIdx].postingType = postingType;
        accountLinkingData[globalIdx].validFrom = validFrom;
        accountLinkingData[globalIdx].customerGroup = customerGroup;
        accountLinkingData[globalIdx].controlTypeDesc = controlTypeDesc;
        accountLinkingData[globalIdx].accountCode = accountCode;
        accountLinkingData[globalIdx].codePartDesc = codePartDesc;
        accountLinkingData[globalIdx].specControlTyp = specControlTyp;
        accountLinkingData[globalIdx].specControlTypDesc = specControlTypDesc;
        accountLinkingData[globalIdx].specNoDetails = specNoDetails;
        accountLinkingData[globalIdx].specNoCtValue = specNoCtValue;
        accountLinkingData[globalIdx].status = status;
      }

      closeEditModal();
      renderTable();
      showToast('Posting Control rule updated successfully.', 'success');
    });
  }

  // Delete selected button in footer
  if (btnDeleteRow) {
    btnDeleteRow.addEventListener('click', () => {
      if (alSelectedRowIndex === null || !alCurrentDataset[alSelectedRowIndex]) {
        showToast('Please select a Posting Control rule to delete.', 'warning');
        return;
      }
      window.handleDeleteAl(alSelectedRowIndex);
    });
  }

  // Download CSV
  if (btnDownload) {
    btnDownload.addEventListener('click', () => {
      if (alCurrentDataset.length === 0) {
        showToast('No Posting Control records to download.', 'warning');
        return;
      }
      const headers = ['Sr. No.', 'Posting Type', 'Customer Group', 'Control Type Description', 'Account', 'Code Part Description', 'Specification Control Type', 'Specification Control Type Desc', 'Specification No Details', 'Specification No CT Value', 'Valid From', 'Status'];
      const rows = alCurrentDataset.map((r, idx) => {
        return [
          idx + 1,
          `"${r.postingType}"`,
          `"${(r.customerGroup || '').replace(/"/g, '""')}"`,
          `"${(r.controlTypeDesc || '').replace(/"/g, '""')}"`,
          `"${r.accountCode}"`,
          `"${(r.codePartDesc || '').replace(/"/g, '""')}"`,
          `"${(r.specControlTyp || '').replace(/"/g, '""')}"`,
          `"${(r.specControlTypDesc || '').replace(/"/g, '""')}"`,
          `"${(r.specNoDetails || '').replace(/"/g, '""')}"`,
          `"${(r.specNoCtValue || '').replace(/"/g, '""')}"`,
          `"${r.validFrom || ''}"`,
          `"${r.status || ''}"`
        ];
      });

      const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'Posting_Control_Details_Export.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('Posting Control details exported successfully.', 'success');
    });
  }

  // View modal close handlers
  if (viewModalCloseBtn) viewModalCloseBtn.addEventListener('click', () => viewModalOverlay?.classList.remove('active'));
  if (viewModalOkBtn) viewModalOkBtn.addEventListener('click', () => viewModalOverlay?.classList.remove('active'));

  // Pagination Handlers
  if (pageSizeSelect) {
    pageSizeSelect.addEventListener('change', () => {
      alPageSize = parseInt(pageSizeSelect.value, 10);
      alCurrentPage = 1;
      renderTable();
    });
  }

  if (btnFirst) btnFirst.addEventListener('click', () => { alCurrentPage = 1; renderTable(); });
  if (btnPrev) btnPrev.addEventListener('click', () => { if (alCurrentPage > 1) { alCurrentPage--; renderTable(); } });
  if (btnNext) btnNext.addEventListener('click', () => {
    const totalPages = Math.ceil(alCurrentDataset.length / alPageSize) || 1;
    if (alCurrentPage < totalPages) { alCurrentPage++; renderTable(); }
  });
  if (btnLast) btnLast.addEventListener('click', () => {
    alCurrentPage = Math.ceil(alCurrentDataset.length / alPageSize) || 1;
    renderTable();
  });

  if (pageNumberInput) {
    pageNumberInput.addEventListener('change', () => {
      const p = parseInt(pageNumberInput.value, 10);
      const totalPages = Math.ceil(alCurrentDataset.length / alPageSize) || 1;
      if (!isNaN(p) && p >= 1 && p <= totalPages) {
        alCurrentPage = p;
      }
      renderTable();
    });
  }

  // Initial render & sync
  syncMasterHeader();
  populateDynamicDropdowns();
  renderTable();
}

// =============================================================================
// UTILITIES & NOTIFICATIONS
// =============================================================================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `erp-toast erp-toast-${type}`;

  let icon = 'fa-circle-info';
  if (type === 'success') icon = 'fa-circle-check';
  if (type === 'warning') icon = 'fa-triangle-exclamation';
  if (type === 'error') icon = 'fa-circle-xmark';

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span>${escapeHtml(message)}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 300);
  }, 3500);
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
