function checkCashRegister(price, cash, cid) {
  let totalCID=0;
  let changearr=[];

  let currencyUnit=[
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ];

  
  for(let property of cid)
  {
    totalCID+=property[1];
  }

  let changeToPay=cash-price;

  if(changeToPay>totalCID)
  {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else if(changeToPay === totalCID) 
  {
    return { status: "CLOSED", change: cid };
  }
  else
  {
    
  }

  





  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
