const tipcalculate = () => {
  let amount = document.getElementById("bill-amount").value;

  let percentage = document.getElementById("tip-percentage").value;

  let tip = amount * (percentage / 100);

  let totalamount = tip + Number(amount);

  document.getElementById("tip-amount").value = tip;
  document.getElementById("total").value = totalamount;
};
