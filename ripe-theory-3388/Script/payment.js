// ==========================================
// REDBUS PAYMENT PAGE
// ==========================================

// Read booking data safely from localStorage
function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (error) {
        console.error("Error reading " + key, error);
        return fallback;
    }
}

const travel = readStorage("travelData:", {});
const tickets = readStorage("ticket_data", []);
const users = readStorage("user_data", []);

const booking = tickets[0] || {};
const contact = users[0] || {};

function getElement(id) {
    return document.getElementById(id);
}

function addText(id, value) {
    const parent = getElement(id);

    if (!parent || value === undefined || value === null || value === "") {
        return;
    }

    const p = document.createElement("p");
    p.innerText = value;
    parent.appendChild(p);

    return p;
}

// ==========================================
// BUS DETAILS
// ==========================================

addText("one", booking.bus_name || "");
addText("one", booking.bustype || "");

// ==========================================
// JOURNEY DETAILS
// ==========================================

addText("left1", "Departure");
addText("left1", travel.onwardDate || booking.date || "");
addText("left1", booking.Depature || "");

addText("right1", "Seat");

const seats = Array.isArray(contact.seats)
    ? contact.seats.join(", ")
    : (contact.seats || "");

addText("right1", seats);

addText("left2", "Boarding Point");
addText("left2", travel.from || "");
addText("left2", booking.pick || "");

addText("right2", "Dropping Point");
addText("right2", travel.to || "");
addText("right2", booking.drop || "");

// ==========================================
// PASSENGER AND CONTACT DETAILS
// ==========================================

addText("four", booking.Passenger_name || "");
addText("four", `Age: ${booking.Passenger_age || ""}`);
addText("four", `Email: ${contact.email || ""}`);
addText("four", `Phone: ${contact.phone || ""}`);

// ==========================================
// FARE DETAILS
// ==========================================

const originalFare = Number(
    contact.price !== undefined
        ? contact.price
        : (booking.price || 0)
);

const price1 = getElement("price1");
const price2 = getElement("price2");
const couponDiscount = getElement("coupon_dis");
const offerInput = getElement("offer");

if (price1) {
    price1.innerText = `INR ${originalFare}`;
}

if (price2) {
    price2.innerText = `INR ${originalFare}`;
}

if (couponDiscount) {
    couponDiscount.innerText = "";
}

// ==========================================
// COUPON CODE
// ==========================================

function applyCoupon() {
    if (!offerInput || !price2 || !couponDiscount) return;

    const coupon = offerInput.value.trim().toUpperCase();

    if (coupon === "RED100") {
        couponDiscount.innerText = "-100";
        price2.innerText = `INR ${Math.max(0, originalFare - 100)}`;
    } else {
        couponDiscount.innerText = "";
        price2.innerText = `INR ${originalFare}`;
    }
}

if (offerInput) {
    offerInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            applyCoupon();
        }
    });
}

// ==========================================
// PAYMENT OPTION CONTAINER
// ==========================================

function getPaymentContainer(optionId) {
    const option = getElement(optionId);

    if (!option) return null;

    return option.parentElement || option;
}

// ==========================================
// UPI PAYMENT
// ==========================================

function add_div() {
    const upiOption = getElement("upi_id");

    if (!upiOption) return;

    const existingForm = getElement("upi_form");

    if (existingForm) {
        existingForm.remove();
        return;
    }

    const form = document.createElement("div");
    form.id = "upi_form";

    const input = document.createElement("input");
    input.id = "paid1";
    input.type = "email";
    input.placeholder = "Enter UPI ID";
    input.required = true;

    const button = document.createElement("button");
    button.id = "paid2";
    button.type = "button";
    button.innerText = "PAY";

    button.addEventListener("click", showalert);

    form.appendChild(input);
    form.appendChild(button);

    // Add form immediately after UPI option
    upiOption.insertAdjacentElement("afterend", form);
}

// ==========================================
// QR PAYMENT
// ==========================================

function add_div2() {
    const qrOption = getElement("qr");

    if (!qrOption) return;

    const existingPanel = getElement("qr_panel");

    if (existingPanel) {
        existingPanel.remove();
        return;
    }

    const qrPanel = document.createElement("div");
    qrPanel.id = "qr_panel";
    qrPanel.innerText = "Scan the QR code using your UPI app.";

    qrPanel.style.padding = "16px";
    qrPanel.style.marginTop = "10px";
    qrPanel.style.border = "1px solid #999";

    qrOption.insertAdjacentElement("afterend", qrPanel);
}

// ==========================================
// PAYMENT OPTION INTERACTIONS
// ==========================================

["qr", "upi_id", "credit_card", "debit_card"].forEach(function (id) {
    const option = getElement(id);

    if (!option) return;

    option.style.cursor = "pointer";
    option.setAttribute("role", "button");
    option.setAttribute("tabindex", "0");

    option.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            option.click();
        }
    });
});

// ==========================================
// PAYMENT ALERT
// ==========================================

function showalert() {
    const input = getElement("paid1");
    const upiValue = input ? input.value.trim() : "";

    if (!upiValue) {
        alert("Enter UPI ID First");
        return;
    }

    alert(`Confirm Payment ${originalFare}`);
    alert("Booking Confirmed Successfully");

    window.location.href = "./index.html";
}