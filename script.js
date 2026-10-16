
const shopName = "Best Gym Spots";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// Display the website name if an element with this ID exists.
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// Update the copyright year.
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${shopName}`;
}

// Count gym cards on the page.
const gymCards = document.querySelectorAll(".gym-card, .gym-card-item");
runningTotal = gymCards.length;

let gymCountElement = document.getElementById("gym-count");

if (!gymCountElement) {
    gymCountElement = document.createElement("p");
    gymCountElement.id = "gym-count";

    const mainSection = document.querySelector("main");

    if (mainSection) {
        mainSection.appendChild(gymCountElement);
    }
}

if (gymCountElement) {
    gymCountElement.textContent = `Gym spots displayed: ${runningTotal}`;
}

// DECISION 1: STOCK STATUS
const stockCount = 5;
let stockMessage;

if (stockCount > 10) {
    stockMessage = "In stock";
} else if (stockCount >= 1 && stockCount <= 10) {
    stockMessage = "Only a few left";
} else if (stockCount === 0) {
    stockMessage = "Sold out";
} else {
    stockMessage = "Invalid stock count";
}

// DECISION 2: FREE DELIVERY
const orderTotal = 1200;
const isMember = true;

const qualifiesForFreeDelivery = orderTotal >= 1000 && isMember;
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

// DECISION 3: SHOP STATUS
const isShopOpen = true;
const shopStatus = isShopOpen ? "Open today" : "Closed today";

// Display results on the page.
function displayResult(id, message) {
    let element = document.getElementById(id);

    if (!element) {
        element = document.createElement("p");
        element.id = id;

        const container = document.querySelector("main") || document.body;
        container.appendChild(element);
    }

    element.textContent = message;
}

displayResult("stock-status", `Stock status: ${stockMessage}`);

displayResult(
    "delivery-result",
    `Order: ₱${orderTotal.toFixed(2)} | Delivery: ₱${deliveryFee.toFixed(2)} | Final total: ₱${finalTotal.toFixed(2)}`
);

displayResult("shop-status", shopStatus);

// Labelled console messages.
console.log("Website name:", shopName);
console.log("Current year:", currentYear);
console.log("Gym spots displayed:", runningTotal);
console.log("Stock status:", stockMessage);
console.log("Free delivery:", qualifiesForFreeDelivery);
console.log("Final total:", finalTotal);
console.log("Shop status:", shopStatus);
