function setColorEngineer(nameEngineer) {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheets()[0];
  var ranges = sheet.getRange('H2:H');
  var rule = SpreadsheetApp.newConditionalFormatRule()
    .setRanges([ranges])
    .whenTextEqualTo(nameEngineer)
    .setBold(true)
    .setBackground(randomColor())
    .setFontColor('#FFFFFF')
    .build();
  var rules = sheet.getConditionalFormatRules();
  rules.push(rule);
  sheet.setConditionalFormatRules(rules);
};

function randomColor() {
  var max = 0xfff;
  return '#' + Math.round(Math.random() * max).toString(16);
}
