const tipcalculate = () => {
  let amount = document.getElementById("bill-amount").value;

  let percentage = document.getElementById("tip-percentage").value;
  let bill_split = document.getElementById("bill-split").value;

  let tip = amount * (percentage / 100);

  let totalamount = tip + Number(amount);
  let perHead = totalamount / bill_split;

  document.getElementById("tip-amount").value = tip;
  document.getElementById("total").value = totalamount;
  document.getElementById("total-split").value = perHead;
};
