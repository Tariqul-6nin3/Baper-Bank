document.getElementById("deposite-btn").addEventListener("click", function () {
  const depositeInput = document.getElementById("deposite-input");
  const depositeInputValue = depositeInput.value;
  const depositeInputNumber = parseFloat(depositeInputValue);

  const depositeAmount = document.getElementById("deposite-amount");
  const depositeAmountValue = depositeAmount.innerText;
  const depositeAmountNumber = parseFloat(depositeAmountValue);
  const currentTotal = depositeInputNumber + depositeAmountNumber;
  depositeAmount.innerText = currentTotal;
  depositeInput.value = "";
  const balance = document.getElementById("balance");
  const balanceValue = balance.innerText;
  const balanceNumber = parseFloat(balanceValue);
  const finalBalance = balanceNumber + depositeInputNumber;
  balance.innerText = finalBalance;
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawFieldValue = withdrawField.value;
  const withdrawFieldNumber = parseFloat(withdrawFieldValue);
  const withdrawnAmount = document.getElementById("withdrawn-amount");
  const withdrawnAmountValue = withdrawnAmount.innerText;
  const withdrawnAmountNumber = parseFloat(withdrawnAmountValue);
  const finalWithdrawnAmount = withdrawFieldNumber + withdrawnAmountNumber;
  withdrawnAmount.innerText = finalWithdrawnAmount;
  const balance = document.getElementById("balance");
  const balanceValue = balance.innerText;
  const balanceNumber = parseFloat(balanceValue);
  const remainingBalance = balanceNumber - finalWithdrawnAmount;
  balance.innerText = remainingBalance;
});
