function SendTelegram() {
	var ss = SpreadsheetApp.getActiveSpreadsheet();
	var activeCell = ss.getActiveSheet().getActiveCell();
	var sheet = ss.getSheets()[1];
	var range = sheet.getRange("A:A").getValues();
	var rowNum = activeCell.getRow()
	var lastRowInCol = range.filter(String).length;
	var namesEngineer = sheet.getRange(2, 1, lastRowInCol - 1, 1).getValues();
	var nameEngineer = activeCell.getValue();
	var namesEngineerArr = namesEngineer.map(function (row) { return row[0] })
	//var namesEngineerArr = namesEngineer.join().split(",");
	var rowEngineer = namesEngineerArr.indexOf(nameEngineer) + 2

	var chatID = sheet.getRange(rowEngineer, 4).getValue()

	var orderName = ss.getActiveSheet().getRange(rowNum, 2).getValue()
	var orderPhone = ss.getActiveSheet().getRange(rowNum, 3).getValue()
	var orderAdress = ss.getActiveSheet().getRange(rowNum, 4).getValue()
	var orderInfo = ss.getActiveSheet().getRange(rowNum, 5).getValue()

	var ipTokken = "Ваш токен";

	var text = encodeURIComponent("🤑 " + orderName + "\n" + "☎️ " + "+" + orderPhone + "\n" + "🏠 " + orderAdress + "\n" + "ℹ️ " + orderInfo);
	var url = "https://api.telegram.org/bot" + ipTokken + "/sendMessage?chat_id=" + chatID + "&text=" + text;

	messBox(url)
}

function messBox(url) {
	var ss = SpreadsheetApp.getActiveSpreadsheet();
	var ui = SpreadsheetApp.getUi()

	var columEngineer = ss.getSheets()[1].getActiveCell().getColumn()
	var rowEngineer = ss.getSheets()[1].getActiveCell().getRow()

	if (columEngineer == 8 && rowEngineer > 1) {
		var response = ui.alert('Отправить сообщение?', ui.ButtonSet.YES_NO);
		if (response == ui.Button.YES) {
			var openUrl = UrlFetchApp.fetch(url).getContentText()
		}
	}
}
