# Finance Enterprise - Master Screens UI

An exact, pixel-accurate web recreation of the **Finance Enterprise** legacy ERP module, featuring:
1. **Users Per User Group** master screen (`Accounting Rules > User Data > Users Per User Group`)
2. **User Groups** master screen (`Accounting Rules > User Data > User Groups`)
3. **Users Per Company** master screen (`Accounting Rules > User Data > Users Per Company`)
4. **Payment Terms** master screen (`Accounting Rules > Payment Terms`)
5. **Define Voucher Types** master screen (`Accounting Rules > User Data > Define Voucher Type`)
6. **Query Voucher Types** inquiry screen (`Accounting Rules > User Data > Query Voucher Types`)
7. **Authority Classes** master screen (`Accounting Rules > Authority > Authority Classes`)
8. **Authority Combinations** master screen (`Accounting Rules > Authority > Authority Combinations`)
9. **Users per Authority Class** master screen (`Accounting Rules > Authority > Users per Authority Class`)
10. **Nominal Account** master screen (`Accounting Rules > Nominal Account`)
11. **Account Linking** mapping screen (`Accounting Rules > Account Linking`)

---

## 🏷️ 1. Users Per User Group Master Screen

A standalone grid establishing the associations between enterprise users and user groups:

### 1.1 Grid Columns
1. **Sr. No.** — Row serial number.
2. **User ID** — ERP User identification code (e.g. `UNSS0P4`, `ADM001`, `FIN002`).
3. **User Name** — User's full name from User Master.
4. **User Group** — Assigned User Group code (e.g. `FINANCE ADMIN`, `FINANCE USER`, `ACCOUNTS TEAM`).
5. **User Group Description** — Detailed explanation of the group's scope and responsibilities.
6. **Action** — Action buttons:
   - **View** (`fa-eye`): Opens a dialog showing the full assignment details.
   - **Delete** (`fa-trash-can`): Prompts confirmation to remove the user from the user group.

### 1.2 Add Record Entry & Validation
Clicking **“Add”** (available both above the grid in the card header and in the bottom toolbar) opens an assignment dialog:
- **User ID Selection**: Selected directly from the existing **User Master** dropdown (`UNSS0P4`, `ADM001`, etc.).
- **User Name Auto-population**: Selecting a User ID automatically populates the read-only User Name field.
- **User Group Selection**: Selected from the existing **User Groups Master** (`FINANCE ADMIN`, `FINANCE USER`, etc.).
- **User Group Description Auto-population**: Selecting a User Group automatically populates the read-only User Group Description field.
- **Duplicate Prevention**: Rejects duplicate assignments of the same User ID to the same User Group with in-dialog validation.
- **Immediate Grid Refresh**: Saving persists the record and refreshes the grid.

### 1.3 Search & Export
- **Filter Controls**: Filter by User (ID/Name) or by User Group dropdown.
- **CSV Export**: Downloads all current records to `Users_Per_User_Group_Export.csv`.
- **Pagination**: Enterprise page controls (`<<`, `<`, `Page 1 of X`, `>`, `>>`, customizable page size).

---

## 👥 2. User Groups Master Screen

- Grid columns: `User Group`, `User Group Description`, `Allowed Accounting Periods`, `Action`.
- Multi-select integration with **Accounting Periods Master** (`2026-01` through `2026-12`, `YEAR_END`).
- Quick selectors: **Select All**, **Clear All**, **Open Only**.
- View, Edit, and Delete actions.

---

## 🏢 3. Users Per Company Master Screen

- Header section: Company Code dropdown with auto-populating read-only Company Name.
- Grid columns: `Sr. No.`, `User ID`, `User Name`, `Default Company`, `Action`.
- Enforces ERP business rule: a user can only have **one** default company.
- Empty company notification: `"No users assigned to this company. Click 'Add User' to assign users."`

---

## 💳 4. Payment Terms Screen

- Filter by Company and Payment Term code.
- 5-column table (`Payment Term`, `Payment Term Desc`, `Days to Due Date`, `Use Commercial Year`, `End of Month`).
- Add modal, delete, CSV export, and pagination controls.

5. **Define Voucher Types** master screen (`Accounting Rules > User Data > Define Voucher Type`)

---

## 📑 5. Define Voucher Types Master Screen (`LAXMI01 - Define Voucher Types`)

Accurately extracted and recreated from the enterprise ERP screen:

### 5.1 Window Title & Header Controls
- **Window Titlebar**: `LAXMI01 - Define Voucher Types` with minimize, maximize, and close controls.
- **Voucher Type**: Dropdown code selector (`M`, `F`, `J`, `S`, `U`, etc.).
- **Voucher Type Description**: Text input field displaying and allowing edits to the voucher type description.
- **Save Button**: Persists modifications to the selected voucher type configuration and settings.
- **New Button**: Opens the **Define New Voucher Type** modal dialog to create new voucher types.

### 5.2 Fieldsets (Form Groups)
1. **Ledger Selection Fieldset**
   - `Ledger`: Dropdown selector (`01 - General Ledger`, `02 - Simulation Ledger`, `03 - Parallel Ledger`).
   - `Ledger ID`: Text input specifying the ledger identifier (e.g., `GL01`, `SIM01`).
   - `Balance Mandatory`: Checkbox flag enforcing balanced debit/credit voucher postings.
   - `Use Manual Internal Methods`: Checkbox flag enabling manual internal processing methods.
2. **Voucher Selection Fieldset**
   - `Automatic Allotment`: Checkbox flag controlling automatic allotment of voucher numbers.
   - `Single Function Group`: Checkbox flag restricting the voucher type to a single function group.
   - `Simulation Voucher`: Checkbox flag designating the voucher as a simulation/non-posting entry.

### 5.3 Function Groups Grid
Dotted-border data table replicating the exact legacy layout and column structure:
1. **Row Indicator Column**: Left indicator cell with selection cursor and bottom dash indicator.
2. **Function Group**: Function group identifier code (`Function Grou` header).
3. **Function Group Description**: Descriptive name of the function group from the Master directory.
4. **Optional Auto Balance**: Flag indicating whether auto balance is optional (`Optional / Auto Balance`).
5. **Store Original**: Flag indicating whether original voucher documents are retained (`Store / Original`).
6. **Automatic Allotment Required**: Flag indicating mandatory allotment (`Automatic Allotme / Required`).
7. **Single Function Group Required**: Flag indicating single group restriction (`Single Functi / Group Requir`).
8. **Actions & Toolbar**:
   - **Add Function Group**: Modal dialog allowing assignment of function groups from `Function Groups Master` with duplicate validation.
   - **Delete**: Remove function group assignments (either selected row or inline icon).
   - **Download (CSV)**: Export function group mappings to CSV (`Define_Voucher_Type_<CODE>.csv`).
   - **Section Collapse**: Toggle viewport expansion.
   - **Pagination**: Complete paging toolbar with page size options.

6. **Query Voucher Types** inquiry screen (`Accounting Rules > User Data > Query Voucher Types`)

---

## 🔍 6. Query Voucher Types Inquiry Screen (`LAXMI01 - Query Voucher Types`)

Consolidated inquiry screen extracted directly from the enterprise ERP screenshot:

### 6.1 Window Titlebar & Search Filters
- **Window Titlebar**: `LAXMI01 - Query Voucher Types` (clean window titlebar with minimize, maximize, and close controls removed per specifications).
- **Search Criteria**:
  - `Voucher Type`: Search input matching voucher type code or description.
  - `Function Group`: Dropdown filter populated from Function Groups master.
  - `Ledger`: Dropdown filter (`All Ledgers`, `01 - General Ledger`, `02 - Simulation Ledger`, `03 - Parallel Ledger`).
  - `Search` & `Reset` buttons.

### 6.2 Consolidated Inquiry Grid Columns
1. **Indicator**: Left row indicator column with selection cursor.
2. **Voucher Type**: Voucher Type code (`Voucher / Type`).
3. **Voucher Type Description**: Descriptive name of the voucher type.
4. **Function Group**: Assigned Function Group code (`Function / Group`).
5. **Function Group Description**: Description of the assigned function group.
6. **Automatic Allotment**: **Manual text field** (entered manually; read-only once saved).
7. **Use Manual Internal Methods**: **Manual text field** (entered manually; read-only once saved).
8. **Simulation Voucher**: **Manual text field** (entered manually; read-only once saved).
9. **Single Function Group**: **Manual text field** (entered manually; read-only once saved).
10. **Balance**: **Manual text field** (entered manually; read-only once saved).
11. **Ledger**: Associated accounting ledger (`Ledger`).
12. **Ledger ID**: Identifier of the ledger (`Ledger ID`).
13. **Optional Auto Balance**: **Manual text field** (entered manually; read-only once saved).
14. **Store Original**: **Manual text field** (entered manually; read-only once saved).
15. **Action**: Inline Edit button, View Details button, and Delete entry button.

### 6.3 Features & Toolbar
- **Manual Input Fields (No Y/N)**: All 7 configuration columns are manual text fields, matching the interaction pattern of **Voucher Type Description** and **Function Group Description**. No Y/N values are auto-populated, converted, or displayed.
- **Read-Only Once Saved**: Saved rows are presented as read-only text cells in the grid.
- **Strict Row Completion Validation**: A row can only be saved when **all required fields in that row have been completed**. Empty fields are highlighted with validation feedback.
- **Inline Row Entry & Editing**: Users can click "Add" on the bottom toolbar or "Edit" on any row to enter values manually via text inputs. Clicking "Save" validates and locks the row into read-only mode.
- **Add Entry Modal**: Alternative modal dialog entry accessible via `+ Add Entry` in the header card with complete field validation.
- **Inspect Modal**: Drill-down modal showing all 13 attributes as clean text descriptions without Y/N flags.
- **Delete Support**: Remove entries with confirmation dialog.
- **CSV Export**: Export all matching inquiry results to `Query_Voucher_Types_Export.csv`.
- **Dotted Table Styling**: Replicates the legacy dotted borders and row formatting.
- **Pagination & Page Size**: Paging controls with customizable page sizes (`10`, `50`, `100`, `1000`).

---

## 🛡️ 7. Authority Classes Master Screen

A master data screen managing financial authorization classes:

### 7.1 Grid Columns
1. **Sr. No.**: Row serial number (1, 2, 3...) matching existing master grids.
2. **Authority Class**: Unique authority class identification code (e.g., `ADMIN`, `GL_APPROV`, `AP_SUPER`).
3. **Description**: Detailed description of the financial authority class.
4. **Action**: Quick action buttons:
   - **Edit** (`fa-pen-to-square`): Opens edit modal to update the description.
   - **View** (`fa-eye`): Opens detail modal to view full record attributes.
   - **Delete** (`fa-trash-can`): Prompts confirmation to delete the authority class.

### 7.2 Features & Toolbar
- **Search & Filter**: Real-time / search button filtering by Authority Class code or Description.
- **Add Authority Class Modal**: Header and footer "Add" buttons open a validated modal dialog to create new classes with duplicate prevention.
- **Row Selection & Deletion**: Selecting a row highlights it and enables toolbar deletion.
- **CSV Export**: Downloads all current records to `Authority_Classes_Export.csv`.
- **Legacy ERP Padded Grid**: Padded dotted/alternating empty slots for authentic legacy look when viewing partial lists.
- **Pagination**: Complete paging controls (`<<`, `<`, `Page X of Y`, `>`, `>>`, customizable page sizes `10`, `50`, `100`, `1000`).

---

## 🔗 8. Authority Combinations Master Screen

A master data screen establishing allowed accounting code part combinations per authority class:

### 8.1 Grid Columns
1. **Sr. No.**: Row serial number (1, 2, 3...) matching existing master grids.
2. **Authority Class**: Assigned financial authority class code.
3. **Allowed**: Authorization status (`Allowed` in green tag or `Disallowed` in grey tag).
4. **Account**: Allowed account range or wildcard pattern (e.g. `1000..3999`, `%`).
5. **Cost Center**: Allowed cost center code or wildcard pattern (e.g. `CC101`, `%`).
6. **Project**: Allowed project code or wildcard pattern (e.g. `PRJ_FIN`, `%`).
7. **Action**: Quick action buttons (`Edit`, `View Details`, `Delete`).

### 8.2 Features & Toolbar
- **Multi-Filter Controls**: Filter by Authority Class dropdown, Allowed status dropdown, or search query across code parts.
- **Add Combination Modal**: Validated dialog linking to Authority Classes with duplicate combination prevention.
- **Edit & View Modals**: Edit allowed status and code parts or inspect combination drilldown details.
- **CSV Export**: Downloads records to `Authority_Combinations_Export.csv`.
- **Legacy ERP Padded Grid**: Empty padded rows ensuring consistent enterprise layout.
- **Pagination**: Paging controls (`<<`, `<`, `Page X of Y`, `>`, `>>`, customizable page sizes `10`, `50`, `100`, `1000`).

---

## 👥 9. Users per Authority Class Master Screen

A master data association screen linking ERP system users to financial authority classes extracted directly from the `IFSAPP.GEN_LED_USER` enterprise view:

### 9.1 Grid Columns
1. **Sr. No.**: Row serial number (1, 2, 3...) matching existing master grids.
2. **User ID**: System User identifier (e.g. `UNSS0P4`, `ADM001`, `FIN002`, `ACC003`).
3. **User Name**: Associated full user name auto-populated from `userMaster`.
4. **Authority Class**: Assigned financial authority class code (e.g., `ADMIN`, `GL_APPROV`, `AP_SUPER`).
5. **Description**: Description of the assigned authority class auto-populated from `authorityClassesData`.
6. **Action**: Quick action buttons:
   - **Edit** (`fa-pen-to-square`): Opens edit modal to reassign user to another authority class.
   - **View Details** (`fa-eye`): Opens inspection modal showing full assignment attributes.
   - **Delete** (`fa-trash-can`): Prompts confirmation to remove user authority assignment.

### 9.2 Features & Toolbar
- **Multi-Filter Controls**:
  - Filter by **Authority Class** dropdown (`All Authority Classes` or specific class).
  - Search by **User** text input matching User ID or User Name.
  - `Search` and `Reset` action buttons.
- **Assign User to Authority Class Modal**:
  - Accessible via header `+ Add` button or footer toolbar `Add` button.
  - Dropdowns for User ID and Authority Class with auto-populated names/descriptions.
  - Validates and prevents duplicate assignments of the same user to the same authority class.
- **Edit & View Details Modals**: Edit user's assigned authority class with live description preview or inspect assignment details.
- **Row Selection & Toolbar Delete**: Click any row to select and highlight; remove using footer `Delete` or row inline trash icon.
- **CSV Export**: Downloads current filtered dataset to `Users_Per_Authority_Class_Export.csv`.
- **Legacy ERP Padded Grid**: Dotted and alternating empty row slots up to 10 rows when viewing partial lists.
- **Pagination & Page Size**: Paging controls (`<<`, `<`, `Page X of Y`, `>`, `>>`, customizable page sizes `10`, `50`, `100`, `1000`).

---

## 📖 10. Nominal Account / Cash Accounts Master Screen

Faithfully recreated from the legacy IFS Applications screenshot (`IFS Financial Integration - [LAXMI01 - Cash Accounts]`), providing complete master maintenance for Cash and Nominal Accounts:

### 10.1 Extracted Fields & Grid Columns
1. **Row Pointer / Selector**: Classic IFS indicator (`►` for active selected record, high-contrast dark row highlighting).
2. **Short Name**: Unique account code/short name identifier (e.g. `BAD DEBTS`, `CASH-HY`, `CURRAC`, `EURAC`, `FACFLOW`).
3. **Payment Institute**: Associated financial institution or clearing code (e.g. `BAD DEBTS`, `NATWEST`, `HSBC CURR (GBP)`, `RBS`).
4. **Currency**: Transaction currency code (`GBP`, `EUR`, `USD`, `CZK`, `PLN`, `DKK`, `NOK`).
5. **Account Number**: Official bank/ledger account number (e.g. `24661619`, `4397-4400-6685-9563`, `1234`).
6. **Description**: Complete account description (e.g. `Natwest Current Account-10`, `Cash Account - HY`).
7. **Default Flag**: Checkbox indicating primary default operational cash account.
8. **International Cash Account**: Checkbox indicating cross-border international cash account status.
9. **Statement Not Editable**: Checkbox restricting electronic statement modifications.
10. **Associated Cash Account**: Linked clearing or subsidiary cash account identifier.
11. **Balance Method**: Balance calculation methodology (`Detailed` or `Summary`), clickable link style.
12. **Voucher Type**: Associated transaction voucher prefix (e.g. `CB`, `N`, `EX`).
13. **Voucher Type Description**: Full descriptor for transaction vouchers.
14. **Institute Code**: Bank / institution routing identification code.
15. **Office Code**: Branch or regional office code.
16. **Excel Export `[X]`**: Dedicated green IFS Excel icon button located directly in the header cell.

### 10.2 Features & Business Rules
- **Faithful Legacy IFS Chrome**: Recreates the classic window title bar, menu bar (`File`, `Edit`, `Operations`, `Commands`, `Window`, `Help`), standard IFS navigation/query toolbar, and quick tabs (`Links: Overview - Customer Orders | Customer | ...`).
- **Real-Time Data State**: Pre-populated with all 36 authentic records extracted directly from the system screenshot plus ERP cross-linked accounts.
- **Interactive Checkbox Toggling**: Inline toggling for Default Flag, International Cash Account, and Statement Not Editable.
- **Add / Edit / View Modals**: Full validation for mandatory fields (Short Name, Payment Institute, Account Number, Description) and duplicate prevention.
- **IFS CSV Export**: Downloads all 14 columns into `IFS_Cash_Accounts_Export.csv`.
- **System Information Bar**: Recreates authentic status pane (`Database: LIVE | Sid: IFSL | End User: RUTCHA`).
- **Account Linking Compatibility**: Retains backward-compatible properties so Account Linking mapping continues to work without disruption.

---

## 🔗 11. Account Linking to Ledger / Posting Control Screen

Faithfully recreated from the legacy IFS Posting Control screenshot (`Posting Control Details: IP2 - Customer Claims, Invoice`), providing automated account routing and ledger control rules:

### 11.1 Extracted Fields & Master Definition
1. **Posting Control Tabs**:
   - `Posting Control Details` (Active view)
   - `Posting Control`
   - `Posting Control Details Specification`
   - `Posting Control Combination Details`
2. **Master Control Header Fields**:
   - **Posting Type**: Dropdown selector (`IP2 - Customer Claims, Invoice`, `IP1 - Supplier Debts, Invoice`, `IP3 - Tax Received, Invoice`, `IP4 - Tax Disbursed, Invoice`, `IP5 - Preliminary Cost`, `IP17 - Customer Claims, Advance Inv`, `All Posting Types`).
   - **Code Part Name**: Auto-populated code part descriptor (e.g. `Account`).
   - **Control Type**: Auto-populated control type identifier (e.g. `IC2`, `IC1`, `IC3`, etc.).
   - **Default Value No Details**: Master default account code when no specific rule matches (e.g. `1100`, `2000`).
   - **Default Value No CT Value**: Optional default fallback value.
   - **Valid From**: Master effective date (e.g. `01/07/2017`).

### 11.2 Grid Columns (Posting Control Details)
1. **Sr. No.**: Row index.
2. **Customer Group**: Control type value / group code (e.g. `IC-GOW`, `IC-SYRI`, `DOM-SUP`, `INT-SUP`).
3. **Control Type Description**: Descriptor of control entity (e.g. `Inter Co Debtors (Gowrie)`, `IC-SYRI`).
4. **Account**: Linked Nominal Account code badge (e.g. `1100-GOW`, `1100-SYR`, `2000`).
5. **Code Part Description**: Descriptive name of the nominal account code part (e.g. `Inter Co Debtors (Gowrie)`, `Inter Co Debtors (Syri)`).
6. **Specification Control Type**: Optional specification rule control type code.
7. **Specification Control Type Description**: Description of specification control type.
8. **Specification No Details**: Specification default value.
9. **Specification No CT Value**: Specification control type value.
10. **Valid From**: Row-level effective date (e.g. `01/07/2017`).
11. **Action**: Quick action buttons (`Edit`, `View Details`, `Delete`).

### 11.3 Features & Business Logic
- **Direct Integration with Nominal Account Master**: Account dropdown dynamically pulls accounts from `nominalAccountsData` (including authentic intercompany debtors `1100-GOW` and `1100-SYR`).
- **Dynamic Live Preview**: Selecting a nominal account in the modal displays its type, account name, and balance characteristics in real time.
- **Posting Type Switching**: Changing the Posting Type updates the master header fields and displays matching posting rules seamlessly.
- **Search & Filters**: Search across Customer Group, Account, and Descriptions, plus filter by Nominal Account.
- **Add / Edit / View Modals**: Full validation for mandatory fields (Customer Group, Control Type Description, Nominal Account) with duplicate rule prevention within the same Posting Type.
- **CSV Export**: Downloads all 12 columns to `Posting_Control_Details_Export.csv`.
- **Pagination & Toolbar Actions**: Full enterprise pagination controls and toolbar actions.

---

## 📂 Project Structure

```
d:\Projects\FE\
├── index.html     # Semantic HTML structure with 11 ERP master screens and modals
├── style.css      # Vanilla CSS replicating exact enterprise gradients, tables, tags & dialogs
├── app.js         # Master data models, business logic, validation rules, and routing
└── README.md      # Documentation & user guide
```

---

## 🌐 How to View

Open [index.html](file:///d:/Projects/FE/index.html) in any modern web browser (Edge, Chrome, Firefox). No build step, Node.js, or local server installation is required.
