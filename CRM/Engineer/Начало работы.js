function sheetNameMonth() {
    var SpreadsheetID = "ID таблици";
	var ss = SpreadsheetApp.getActive();
	var sheetName = ss.getActiveSheet().getName();
	var year =new Date().getFullYear();
	var month = new Date().getMonth();
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
	if (ss.getNumSheets() > 1){  
		SpreadsheetApp.getUi().alert("Не мочи, ты у нас уже работаешь!");
	
    } else {
		for (var i = 0; i < monthDiapazon.length; i++) {
			if (month == i) {
				sheetName = monthDiapazon[i][0];
				dateBegin = monthDiapazon[i][1];
				dateEnd = monthDiapazon[i][2];
				break;
			}
		}
		if (ss.getSheetName() !== sheetName){  
			ss.getRange('G2:I').clearContent();
            ss.getRange('K2:K').clearContent();
		} 
		ss.getActiveSheet().setName(sheetName);
		ss.getRange('A2').activate();
		ss.getCurrentCell().setFormula('=QUERY(IMPORTRANGE("'+ SpreadsheetID +'";"\'Заказы\'!A2:H");"select Col1, Col7, Col2, Col3, Col4, Col5 WHERE (Col1 >= date\'' + dateBegin + '\' AND Col1 <= date\'' + dateEnd + '\') AND Col8 = \'"&N8&"\'")');
	}

}
