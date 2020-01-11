//Формула расчета с партнерами

function PercentPartner( avCheck, nOrders ){
  if ( avCheck < 1000 ) {
  	percent = 0.35;
  } else if ( avCheck >= 1000 && nOrders >= 10 ){
    percent = 0.4;
  } else {
  	percent = 0.35;
  }
  return percent;
}