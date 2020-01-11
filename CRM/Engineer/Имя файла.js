function engineerName() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var name = ss.getName();
  
  return name.substr(0, name.length - 7);
}
