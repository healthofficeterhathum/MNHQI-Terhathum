/* =============================================================================
 * MNH QI Dashboard — configuration
 * -----------------------------------------------------------------------------
 * SHEET_CSV_URL: where the dashboard pulls live data from.
 *
 * Two ways to expose your Google Sheet as CSV (pick ONE, see README.md):
 *
 *  A) "Publish to web -> CSV"  (recommended, most reliable cross-origin)
 *     File -> Share -> Publish to web -> choose the sheet -> Comma-separated
 *     values (.csv) -> Publish. Paste the URL below. It looks like:
 *     https://docs.google.com/spreadsheets/d/e/<LONG_PUB_ID>/pub?gid=0&single=true&output=csv
 *
 *  B) gviz endpoint  (works if the sheet is shared "Anyone with the link -> Viewer")
 *     Uses the normal sheet ID. This is the default below so the dashboard
 *     works out of the box once link-sharing is on.
 * ===========================================================================*/

const SHEET_ID = "1bYzsn8NxUc1tpyAipQd23uenlgm2CrWD_pG58A-K4Uw";
const SHEET_GID = "0";

// Default: gviz CSV (option B). Replace with your "Publish to web" URL (option A)
// if you prefer — just assign it to SHEET_CSV_URL.
const SHEET_CSV_URL =
  `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${SHEET_GID}`;

// One Kobo project feeds every district; this site shows Terhathum only.
// Older free-text submissions used different spellings, so all three are listed.
const DISTRICT_SCOPE = { include: ["terhathum", "terathum", "tehrathum"] };

// Official palika names for Terhathum. Kobo entries were typed by hand, so the same
// palika arrived with different spellings. The dashboard shows every entry under the
// official name below. The data in Kobo / Google Sheet is NOT changed.
// To handle a new misspelling: add it (any case, spaces don't matter) to "spellings".
const PALIKA_NAMES = [
  { name: "Myanglung Municipality",          spellings: ["myanglung", "myaglung", "myanglung municipality", "myaglung 1"] },
  { name: "Laligurans Municipality",         spellings: ["laligurans", "laligurans municipality"] },
  { name: "Aathrai Rural Municipality",      spellings: ["aathrai", "aatharai", "athrai"] },
  { name: "Chhathar Rural Municipality",     spellings: ["chhathar", "chathar"] },
  { name: "Phedap Rural Municipality",       spellings: ["phedap", "fedap"] },
  { name: "Menchhayayem Rural Municipality", spellings: ["menchhayayem", "menchayayem"] },
];
