function onOpen() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var menuEngineer = [];
  menuEngineer.push({ name: "Новый инженер", functionName: "showUserForm" });
  //menuEngineer.push(null); // line separator
  menuEngineer.push({ name: "Уволить инженера", functionName: "firingEngineer" });

  ss.addMenu("Инженеры", menuEngineer)
}