// Function to open the payment complete popup
function openPaymentCompletePopup() {
  document.getElementById("paymentCompletePopup").style.display = "block";
}

// Function to close the payment complete popup
function closePaymentCompletePopup() {
  document.getElementById("paymentCompletePopup").style.display = "none";
}

// Function to handle the payment completion
function completePayment() {
  // Get the values of the address inputs
  var fullName = document.getElementById("fullName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  // Additional validation logic can be added here

  // Construct the delivery address
  var deliveryAddress =
    fullName +
    "\n" +
    "Phone: " +
    phoneNumber +
    "\n" +
    "Email: " +
    email +
    "\n" +
    "Address: " +
    address;

  // Update the delivery address in the popup
  document.getElementById("deliveryAddress").textContent = deliveryAddress;

  // Open the payment complete popup
  openPaymentCompletePopup();
  clearInputs();
  document.getElementById("cartItems").innerHTML = "<p>No items in cart</p>";
  // Update HTML with calculated values
  document.getElementById("subtotal").textContent = "Subtotal: $0";
  document.getElementById("gst").textContent = "GST (18%): $0";
  document.getElementById("total").textContent = "Total: $0";
}
