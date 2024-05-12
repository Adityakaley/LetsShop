// Function to open the payment popup
function openPaymentPopup() {
  closeAddressInputPopup();
  document.getElementById("paymentPopup").style.display = "block";
}

// Function to close the payment popup
function closePaymentPopup() {
  document.getElementById("paymentPopup").style.display = "none";
}

// Function to validate and process payment
function processPayment() {
  var selectedPaymentMethod = document.querySelector(
    'input[name="paymentMethod"]:checked'
  );

  if (!selectedPaymentMethod) {
    alert("Please select a payment method.");
    return;
  }

  if (selectedPaymentMethod.value === "card") {
    var cardNumber = document.getElementById("cardNumber").value.trim();
    var expiryDate = document.getElementById("expiryDate").value.trim();
    var cvv = document.getElementById("cvv").value.trim();

    if (cardNumber === "" || expiryDate === "" || cvv === "") {
      alert("Please fill in all card details.");
      return;
    }
  }

  // Additional validation logic can be added here

  // If all validations pass, close the popup
  closePaymentPopup();
  completePayment();

  // Additional logic for processing payment can be added here
}
