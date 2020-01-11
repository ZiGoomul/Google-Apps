function showUserForm() {

  var template = HtmlService.createTemplateFromFile("userForm")

  var html = template.evaluate()

  html.setTitle("Новый инженер").setWidth(440).setHeight(420)
  SpreadsheetApp.getUi().showModalDialog(html, "Новый инженер");
  //showSidebar(html)
  Logger.log(html)
  console.log(html)

}

function appendData(data) {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[1];
  var lastRow = ss.getSheets()[1].getLastRow();
  var range = sheet.getRange("A:A").getValues();
  var lastRowInCol = range.filter(String).length;
  var date = new Date();

  sheet.appendRow([data.username, data.telephone, data.email, data.idchat])
  sheet.getRange(lastRowInCol + 1, 6).setValue(date);
  makeEngineerFilles(data.username, data.email);
  setColorEngineer(data.username);
}

function doneMessage() {
  Browser.msgBox("Инженер успешно нанят")
}