function firingEngineer() {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var activeCell = ss.getActiveSheet().getActiveCell();
  var sheet = ss.getSheets()[1];
  var range = sheet.getRange("A:A").getValues();
  var lastRowInCol = range.filter(String).length;
  var namesEngineer = sheet.getRange(2, 1, lastRowInCol - 1, 1).getValues();
  var date = new Date();
  var nameEngineer = activeCell.getValue();
  var rowNum = activeCell.getRow();
  var emailEngineer = sheet.getRange(rowNum, 3).getValue();
  var namesEngineerArr = namesEngineer.map(function (row) { return row[0] })
  //var namesEngineerArr = namesEngineer.join().split(",");
  var rowEngineer = namesEngineerArr.indexOf(nameEngineer) != -1

  Logger.log(namesEngineer)

  if (rowEngineer) {
    sheet.getRange(rowNum, 7).setValue(date);
    sheet.getRange(rowNum, 4).copyTo(sheet.getRange(rowNum, 9));
    sheet.getRange(rowNum, 5).setValue("Уволен");
    sheet.getRange(rowNum, 1).setValue(nameEngineer + " 🛑");

    delEngineerFillesPermission(nameEngineer, emailEngineer);

  } else {
    Browser.msgBox("Кликните на ячейку с  инженером")
  }
}

function delEngineerFillesPermission(nameEngineer, emailEngineer) {

  var folder = DriveApp.getFoldersByName("CRM").next();

  var engineerFolder = folder.getFoldersByName('Engineer').next()
  var engineerFille = engineerFolder.getFilesByName(nameEngineer + " заказы").next()

  engineerFille.removeEditor(emailEngineer)

}
