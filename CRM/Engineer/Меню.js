function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEngineer = [];
  menuEngineer.push({name: "Начало работы", functionName: "sheetNameMonth"});
      //menuEngineer.push(null); // line separator
  menuEngineer.push({name: "Следующий месяц", functionName: "nextMonth"});
  
  ss.addMenu("Инженер", menuEngineer);
}