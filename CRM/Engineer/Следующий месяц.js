function nextMonth() {
    var SpreadsheetID = "ID таблици";
	var ss = SpreadsheetApp.getActive();
    var numSheet = ss.getNumSheets();
    var lastSheetName = ss.getSheets()[numSheet-1].activate().getName();
    var year = new Date().getFullYear();
	var sheetNameNextMonth = '';
	var dateBegin = '';
	var dateEnd = '';
    var monthDiapazon = [	
						["Январь",	 year + "-01-01", year + "-02-01"],
						["Февраль",	 year + "-02-01", year + "-03-01"],
						["Март",	 year + "-03-01", year + "-04-01"],
						["Апрель",	 year + "-04-01", year + "-05-01"],
						["Май",		 year + "-05-01", year + "-06-01"],
						["Июнь",	 year + "-06-01", year + "-07-01"],
						["Июль",	 year + "-07-01", year + "-08-01"],
						["Август",	 year + "-08-01", year + "-09-01"],
						["Сентябрь",     year + "-09-01", year + "-10-01"],
						["Октябрь",	 year + "-10-01", year + "-11-01"],
						["Ноябрь",	 year + "-11-01", year + "-12-01"],
						["Декабрь",	 year + "-12-01", year + 1 +"-01-01"]
						];
	if (lastSheetName == monthDiapazon[11][0]){
		SpreadsheetApp.getUi().alert("Поздравляю с новым годом!\n За новой таблицей обратись к руководителю.");
	} else {
		for (var i = 0; i < monthDiapazon.length; i++) {
			switch(lastSheetName) {
				case monthDiapazon[i][0]:
				sheetNameNextMonth = monthDiapazon[i+1][0];
				dateBegin = monthDiapazon[i+1][1];
				dateEnd = monthDiapazon[i+1][2];
				break;
			}
		}
		ss.duplicateActiveSheet().setName(sheetNameNextMonth);
		ss.getRange('A2').activate();
		ss.getCurrentCell().setFormula('=QUERY(IMPORTRANGE("'+ SpreadsheetID +'";"\'Заказы\'!A2:H");"select Col1, Col7, Col2, Col3, Col4, Col5 WHERE (Col1 >= date\'' + dateBegin + '\' AND Col1 <= date\'' + dateEnd + '\') AND Col8 = \'"&N8&"\'")');
		ss.getActiveSheet().protect().setUnprotectedRanges([ss.getRange('G2:I')]);
		ss.getRange('G2:I').clearContent();
		ss.getRange('K2:K').clearContent();
        
        var allProtections = ss.getActiveSheet().getProtections(SpreadsheetApp.ProtectionType.SHEET);
        var protection = allProtections[0];
        protection.removeEditors(protection.getEditors());
	}
}
