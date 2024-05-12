// Function to open the cart popup
function openCartPopup() {
  closeItemAddedDialog();
  if (document.getElementById("cartItems").innerHTML.trim() === "") {
    document.getElementById("cartItems").innerHTML = "<p>No items in cart</p>";
  }
  document.getElementById("cartSection").style.display = "block";
}

// Function to close the cart popup
function closeCartPopup() {
  document.getElementById("cartSection").style.display = "none";
}

// Function to open the item added dialog
function openItemAddedDialog() {
  document.getElementById("itemAddedDialog").style.display = "block";
}

// Function to close the item added dialog
function closeItemAddedDialog() {
  document.getElementById("itemAddedDialog").style.display = "none";
}

// Function to calculate subtotal, GST, and total
function calculateTotal() {
  var cartItems = document.querySelectorAll(".cartItem");
  var subtotal = 0;

  // Calculate subtotal
  cartItems.forEach(function (item) {
    var price = parseFloat(item.dataset.price);
    subtotal += price;
  });

  // Calculate GST
  var gst = subtotal * 0.18;

  // Calculate total
  var total = subtotal + gst;

  // Update HTML with calculated values
  document.getElementById("subtotal").textContent =
    "Subtotal: $" + subtotal.toFixed(2);
  document.getElementById("gst").textContent = "GST (18%): $" + gst.toFixed(2);
  document.getElementById("total").textContent = "Total: $" + total.toFixed(2);
}

// Function to add item to cart
function addToCart(brand, description, price, imageSrc) {
  // Create a new item element
  var newItem = document.createElement("div");
  newItem.classList.add("cartItem");

  // Set the data attribute for the price
  newItem.dataset.price = price;

  // Set the CSS for the card
  newItem.style.width = "100%";
  newItem.style.border = "1px solid #088178";
  newItem.style.borderRadius = "25px";
  newItem.style.padding = "10px 12px 10px 12px";
  newItem.style.position = "relative";
  newItem.style.margin = "10px 12px";
  newItem.style.backgroundColor = "#ffffff";
  newItem.style.cursor = "pointer";

  // Create an image element
  var img = document.createElement("img");
  img.src = imageSrc;
  img.style.width = "50px";
  img.style.height = "50px";
  img.style.borderRadius = "25px";
  img.style.marginBottom = "10px";

  // Create and set the text content for the brand, description, and price
  var brandSpan = document.createElement("span");
  brandSpan.textContent = brand;

  var descriptionPara = document.createElement("p");
  descriptionPara.textContent = description;

  var priceSpan = document.createElement("span");
  priceSpan.textContent = `$${price}`;

  // Create a remove button
  var removeButton = document.createElement("button");
  removeButton.textContent = "Remove Item";
  removeButton.style.padding = "5px 10px";
  removeButton.style.backgroundColor = "#ff0000";
  removeButton.style.color = "#ffffff";
  removeButton.style.border = "none";
  removeButton.style.borderRadius = "3px";
  removeButton.style.marginTop = "10px";
  removeButton.style.cursor = "pointer";

  // Add event listener to remove the item from the cart
  removeButton.addEventListener("click", function () {
    newItem.remove();
    calculateTotal(); // Recalculate total after removing item
  });

  // Append the image, text content, and remove button to the new item element
  newItem.appendChild(img);
  newItem.appendChild(brandSpan);
  newItem.appendChild(descriptionPara);
  newItem.appendChild(priceSpan);
  newItem.appendChild(removeButton);

  // Add the item to the cart section
  var cartIt = document.getElementById("cartItems");
  var noItemsMessage = cartIt.querySelector("p");

  if (
    noItemsMessage !== null &&
    noItemsMessage.textContent === "No items in cart"
  ) {
    cartIt.removeChild(noItemsMessage);
  }
  document.getElementById("cartItems").appendChild(newItem);
  openItemAddedDialog();
  calculateTotal(); // Update total after adding item
}
