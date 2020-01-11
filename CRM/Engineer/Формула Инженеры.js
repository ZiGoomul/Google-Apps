//Формула начисления ЗП выездным инженерам

function PercentEngineer( avCheck, nOrders ){
  if ( avCheck >= 2000 && nOrders >= 20) {
  	percent = 0.5;
  } else if ( avCheck > 1000){
    percent = 0.4;
  } else {
  	percent = (0.15 + avCheck/4000);
  }
  return percent;
}