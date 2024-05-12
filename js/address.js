// Function to open the address input popup
function openAddressInputPopup() {
  var cartIt = document.getElementById("cartItems");
  var noItemsMessage = cartIt.querySelector("p");
  if (
    noItemsMessage !== null &&
    noItemsMessage.textContent === "No items in cart"
  ) {
    alert("Please add items to cart first!");
  } else {
    closeCartPopup();
    document.getElementById("addressInputPopup").style.display = "block";
  }
}

// Function to close the address input popup
function closeAddressInputPopup() {
  document.getElementById("addressInputPopup").style.display = "none";
}

// Function to clear input fields
function clearInputs() {
  document.getElementById("fullName").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
}

// Function to save and continue with address validation
function saveAndContinue() {
  var fullName = document.getElementById("fullName").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  if (
    fullName.trim() === "" ||
    phoneNumber.trim() === "" ||
    email.trim() === "" ||
    address.trim() === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  // Additional validation logic can be added here

  // If all fields are filled, close the popup
  openPaymentPopup();
  // Additional logic for saving and continuing can be added here
}
