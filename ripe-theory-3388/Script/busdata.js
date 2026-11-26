// ==========================================
// BUS DATA
// ==========================================

const busdata = [
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 620 },
    { busname: "Vikas Travels Jaipur", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.2", price: 530 },
    { busname: "Rahi Travells", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.8", price: 980 },
    { busname: "Mahalaxmi Travels ISO", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.9", price: 450 },
    { busname: "RC Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 750 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 450 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 650 },
    { busname: "Vijay Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.6", price: 250 },
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Vijay Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "3.5", price: 950 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 980 },
    { busname: "Samreen Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 852 },
    { busname: "Samreen Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "2.5", price: 455 },
    { busname: "Mahalaxmi Travels ISO", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "06:00", pickup: "Chandni Chowk", drop: "private bus stop", seats: 26, rating: "4.5", price: 852 },
    { busname: "Mahalaxmi Travels ISO", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 250 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Goldline Super Deluxe", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "3.5", price: 456 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 660 },
    { busname: "Gulzar Tours and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Chanakya Travels Agency", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Gulzar Tours and Travels", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "05:30", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 880 },
    { busname: "Chanakya Travels Agency", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 785 },
    { busname: "Gulzar Tours and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "3.5", price: 562 },
    { busname: "Chanakya Travels Agency", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "21:20", arrival: "04:05", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 751 },
    { busname: "Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "06:00", pickup: "Kashmiri Gate", drop: "private bus stop", seats: 26, rating: "4.5", price: 542 },
    { busname: "Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 852 },
    { busname: "Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "Karol Bagh", drop: "private bus stop", seats: 26, rating: "4.5", price: 452 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "04:05", pickup: "Dhaula kuan metro station", drop: "private bus stop", seats: 26, rating: "4.5", price: 777 },
    { busname: "Gulzar Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Gulzar Tour and Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 864 },
    { busname: "Nama Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "04:05", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Nama Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "06:00", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 752 },
    { busname: "Nama Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "05:30", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Zingbus", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "05:30", pickup: "ISBT MATERO STATION GATE NO.2", drop: "private bus stop", seats: 26, rating: "4.5", price: 896 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 896 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "05:30", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 654 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "06:00", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 754 },
    { busname: "Shrinath Solitaire Premium Class", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 554 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "05:30", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 455 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 245 },
    { busname: "Babu Travels", bustype: "A/C Seater/Sleeper", Depature: "23:15", arrival: "06:00", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "22:20", arrival: "04:05", pickup: "New Delhi Railway Station", drop: "private bus stop", seats: 26, rating: "4.5", price: 680 },
    { busname: "Vijay Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "04:05", pickup: "majnu ka teela", drop: "private bus stop", seats: 26, rating: "4.5", price: 856 },
    { busname: "Vijay Shakti Travels", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "majnu ka teela", drop: "private bus stop", seats: 26, rating: "4.5", price: 754 },
    { busname: "Deepak Transport Company", bustype: "A/C Seater/Sleeper", Depature: "20:45", arrival: "05:30", pickup: "majnu ka teela", drop: "private bus stop", seats: 26, rating: "4.5", price: 856 }
];

// ==========================================
// TRAVEL DATA
// ==========================================

let travel = {};

try {
    travel = JSON.parse(localStorage.getItem("travelData:")) || {};
} catch (error) {
    console.error("Travel data error:", error);
}

const fareLine = document.getElementById("fare");

if (fareLine) {
    fareLine.innerText = `${travel.from || "Delhi"} To ${travel.to || "Jaipur"}`;
}

// ==========================================
// SHOW BUS DATA
// ==========================================

function showdata(from, to, date) {
    const container = document.getElementById("all_bus_data");

    if (!container) return;

    container.innerHTML = "";

    // TC13: Display exactly 6 bus cards
    busdata.slice(0, 6).forEach((el, i) => {

        const div1 = document.createElement("div");
        div1.className = "one";

        const div2 = document.createElement("div");
        div2.className = "two";

        const div3 = document.createElement("div");
        div3.className = "three";

        const div4 = document.createElement("div");
        div4.className = "four";

        const div5 = document.createElement("div");
        div5.className = "five";

        const div6 = document.createElement("div");
        div6.className = "six";

        const busname = document.createElement("p");
        busname.innerText = el.busname;

        const bustype = document.createElement("p");
        bustype.innerText = el.bustype;

        const arrival = document.createElement("p");
        arrival.innerText = el.arrival;

        const departure = document.createElement("p");
        departure.innerText = el.Depature;

        const pickup = document.createElement("p");
        pickup.innerText = el.pickup;

        const drop = document.createElement("p");
        drop.innerText = el.drop;

        const rating = document.createElement("p");
        rating.innerText = el.rating;

        const people = document.createElement("p");
        people.innerText = `Rated by : ${el.price - 127}`;

        const price = document.createElement("p");
        price.innerText = `Starts from INR 20% off ${el.price}`;

        const offer = document.createElement("p");
        offer.innerText = "@redDeal applied";

        const single = document.createElement("p");
        single.innerText = "5Single";

        const seats = document.createElement("p");
        seats.innerText = `${el.seats} Seats available`;

        const viewSeats = document.createElement("button");
        viewSeats.style.backgroundColor = "#d84e55";
        viewSeats.innerText = "VIEW SEATS";

        viewSeats.onclick = function (event) {
            book(el, i, event);
        };

        const journeyDate = document.createElement("p");
        journeyDate.innerText = travel.onwardDate || "";

        div1.append(busname, bustype);
        div2.append(departure, pickup);
        div3.append(arrival, journeyDate, drop);
        div4.append(rating, people);
        div5.append(price, offer);
        div6.append(seats, viewSeats);

        const mainDiv = document.createElement("div");
        mainDiv.className = "main_cards";

        mainDiv.append(div1, div2, div3, div4, div5, div6);

        container.append(mainDiv);
    });
}

// Load bus cards
showdata();

// ==========================================
// SEAT SELECTION STATE
// ==========================================

let seatarr = [];

// ==========================================
// OPEN AND CLOSE SEAT LAYOUT
// ==========================================

function book(el, i, event) {

    const viewButton = event.currentTarget;
    const mainCard = viewButton.closest(".main_cards");

    if (!mainCard) return;

    const existingLayout = mainCard.querySelector("#seven");

    if (existingLayout) {
        existingLayout.remove();
        viewButton.innerText = "VIEW SEATS";
        seatarr = [];
        return;
    }

    // Reset previous selection
    seatarr = [];

    const div = document.createElement("div");
    div.id = "seven";

    const seatPrice = document.createElement("div");
    seatPrice.id = "seatprice_hover";

    const all = document.createElement("p");
    all.innerText = "ALL";

    const pr1 = document.createElement("p");
    pr1.innerText = el.price;

    const pr2 = document.createElement("p");
    pr2.innerText = el.price + 225;

    seatPrice.append(all, pr1, pr2);

    // Seat container
    const cont = document.createElement("div");
    cont.id = "seven_container";

    const left = document.createElement("div");
    left.id = "cont_left";

    const notice = document.createElement("p");
    notice.innerText = "Click on an Available seat to proceed with your transaction.";

    const lowerDeck = document.createElement("div");
    lowerDeck.id = "lower_deck";

    const outer = document.createElement("div");
    outer.id = "outer";

    const a = document.createElement("div");
    a.className = "seat_svg";

    const b = document.createElement("div");
    b.className = "seat_svg";

    const mid = document.createElement("div");
    mid.id = "mid";

    const c = document.createElement("div");
    c.className = "sleeper_svg";

    // Normal seats S1-S10
    for (let i = 0; i < 10; i++) {
        const seat = document.createElement("button");

        seat.innerHTML = `<span class="material-symbols-outlined">living</span>`;
        seat.id = `S${i + 1}`;
        seat.value = "true";

        seat.onclick = function () {
            seat_select(el, seat);
        };

        a.append(seat);
    }

    // Normal seats S11-S20
    for (let i = 10; i < 20; i++) {
        const seat = document.createElement("button");

        seat.innerHTML = `<span class="material-symbols-outlined">living</span>`;
        seat.id = `S${i + 1}`;
        seat.value = "true";

        seat.onclick = function () {
            seat_select(el, seat);
        };

        b.append(seat);
    }

    // Sleeper seats SP21-SP26
    for (let i = 20; i < 26; i++) {
        const seat = document.createElement("button");

        seat.innerHTML = `<span class="material-symbols-outlined">airline_seat_flat</span>`;
        seat.id = `SP${i + 1}`;
        seat.value = "true";

        seat.onclick = function () {
            seat_select(el, seat);
        };

        c.append(seat);
    }

    outer.append(a, b, mid, c);

    const driver = document.createElement("div");
    driver.id = "driver";
    driver.innerHTML = `<span class="material-symbols-outlined">block</span>`;

    lowerDeck.append(outer, driver);
    left.append(notice, lowerDeck);

    // Right side
    const right = document.createElement("div");
    right.id = "cont_right";

    showSeatLegend(right);

    cont.append(left, right);
    div.append(seatPrice, cont);

    mainCard.append(div);

    viewButton.innerText = "HIDE SEATS";
}

// ==========================================
// SEAT LEGEND
// ==========================================

function showSeatLegend(right) {

    right.innerHTML = "";

    const heading = document.createElement("h4");
    heading.innerText = "SEAT LEGEND";

    const legend = document.createElement("div");

    const availableInput = document.createElement("input");
    availableInput.type = "checkbox";
    availableInput.disabled = true;

    const availableText = document.createElement("p");
    availableText.innerText = "Available";

    const unavailableInput = document.createElement("input");
    unavailableInput.type = "checkbox";
    unavailableInput.disabled = true;

    const unavailableText = document.createElement("p");
    unavailableText.innerText = "Unavailable";

    legend.append(
        availableInput,
        availableText,
        unavailableInput,
        unavailableText
    );

    const deal = document.createElement("h4");
    deal.innerText = "REDDEAL";

    const offer = document.createElement("p");
    offer.innerText = "Get 13 % Extra OFF";

    const terms = document.createElement("p");
    terms.innerText = "Terms and Conditions::";

    const minimum = document.createElement("p");
    minimum.innerText = "Minimum ticket fare : INR 300";

    const maximum = document.createElement("p");
    maximum.innerText = "Maximum discount limit : INR 50";

    right.append(
        heading,
        legend,
        deal,
        offer,
        terms,
        minimum,
        maximum
    );
}

// ==========================================
// SELECT / DESELECT SEAT
// ==========================================

function seat_select(el, seatButton) {

    if (!seatButton) return;

    const seatno = seatButton.id;
    const right = document.getElementById("cont_right");

    if (!right) return;

    if (seatButton.value === "true") {

        // Select seat
        if (!seatarr.includes(seatno)) {
            seatarr.push(seatno);
        }

        seatButton.value = "false";
        seatButton.style.backgroundColor = "grey";

    } else {

        // Deselect seat
        seatarr = seatarr.filter(seat => seat !== seatno);

        seatButton.value = "true";
        seatButton.style.backgroundColor = "white";
    }

    // No seats selected: show original legend
    if (seatarr.length === 0) {
        showSeatLegend(right);
        right.style.backgroundColor = "#eeeded";
        return;
    }

    // Selected seat summary
    right.innerHTML = "";

    const selectedSeats = document.createElement("p");
    selectedSeats.id = "selected_seats";
    selectedSeats.innerText = `Selected Seats: ${seatarr.join(", ")}`;

    const first = document.createElement("div");
    first.id = "first";

    const pick = document.createElement("p");
    pick.innerText = "BOARDING POINT";

    pick.onclick = function () {
        pickpoint(el);
    };

    const drop = document.createElement("p");
    drop.innerText = "DROPPING POINT";

    drop.onclick = function () {
        droppoint(el);
    };

    first.append(pick, drop);

    const second = document.createElement("div");
    second.id = "second";

    const departure = document.createElement("p");
    departure.innerText = el.Depature;
    departure.id = "time";

    const arrival = document.createElement("p");
    arrival.innerText = el.pickup;
    arrival.id = "locationpoint";

    second.append(departure, arrival);

    const third = document.createElement("div");
    third.id = "third";

    const statement = document.createElement("p");
    statement.innerText = "Amount( Taxes will be calculated during payment )";

    const net = document.createElement("p");
    net.innerText = `INR ${el.price * seatarr.length}`;
    net.style.fontWeight = "bold";

    third.append(statement, net);

    const continueDiv = document.createElement("div");
    continueDiv.innerText = "CONTINUE";
    continueDiv.id = "continue";

    continueDiv.onclick = function () {
        process_continue(el, [...seatarr]);
    };

    right.append(
        selectedSeats,
        first,
        second,
        third,
        continueDiv
    );

    right.style.fontSize = "13px";
    right.style.backgroundColor = "white";
}

// ==========================================
// BOARDING AND DROPPING POINT
// ==========================================

function droppoint(el) {

    const location = document.getElementById("locationpoint");
    const time = document.getElementById("time");

    if (location) location.innerText = el.drop;
    if (time) time.innerText = el.arrival;
}

function pickpoint(el) {

    const location = document.getElementById("locationpoint");
    const time = document.getElementById("time");

    if (location) location.innerText = el.pickup;
    if (time) time.innerText = el.Depature;
}

// ==========================================
// PASSENGER DETAILS FORM
// ==========================================

function process_continue(el, selectedSeats) {

    const payment = document.createElement("div");
    payment.id = "payment_page";

    const paySide = document.createElement("div");
    paySide.id = "pay_side";

    const paySide2 = document.createElement("div");
    paySide2.id = "pay_side2";

    // Header
    const one = document.createElement("div");
    one.id = "side_one";

    const close = document.createElement("div");
    close.id = "side_close";

    close.onclick = closepopup;

    close.innerHTML = `<span class="material-symbols-outlined">double_arrow</span>`;

    const heading = document.createElement("h2");
    heading.id = "side_Head";
    heading.innerText = "Passenger Details";

    one.append(close, heading);

    // Passenger fields
    const two = document.createElement("div");
    two.id = "side_two";

    for (let i = 0; i < selectedSeats.length; i++) {

        const seatCard = document.createElement("div");

        const passenger = document.createElement("div");

        const p1 = document.createElement("p");
        p1.innerText = `Passenger ${i + 1}`;

        const p2 = document.createElement("p");
        p2.innerText = `Seat ${selectedSeats[i]}`;

        passenger.append(p1, p2);

        const name = document.createElement("label");
        name.innerText = "Name";

        const nameBox = document.createElement("input");
        nameBox.placeholder = "Enter Name";
        nameBox.required = true;
        nameBox.id = `name_box${i}`;

        const box = document.createElement("div");

        const left = document.createElement("div");

        const gender = document.createElement("label");
        gender.innerText = "Gender";

        const radio = document.createElement("div");

        const check1 = document.createElement("input");
        check1.type = "radio";
        check1.name = `gender${i}`;
        check1.value = "Male";

        const male = document.createElement("label");
        male.innerText = "Male";

        const check2 = document.createElement("input");
        check2.type = "radio";
        check2.name = `gender${i}`;
        check2.value = "Female";

        const female = document.createElement("label");
        female.innerText = "Female";

        radio.append(check1, male, check2, female);
        left.append(gender, radio);

        const right = document.createElement("div");

        const age = document.createElement("label");
        age.innerText = "Age";

        const ageBox = document.createElement("input");
        ageBox.type = "number";
        ageBox.placeholder = "Enter Age";
        ageBox.id = `age_box${i}`;
        ageBox.required = true;

        right.append(age, ageBox);

        box.append(left, right);

        seatCard.append(passenger, name, nameBox, box);

        two.append(seatCard);
    }

    // Contact details
    const contact = document.createElement("div");
    contact.id = "contact_msg";

    const pcont = document.createElement("div");

    const logo = document.createElement("p");
    logo.innerHTML = `<span class="material-symbols-outlined">contact_mail</span>`;

    const msg = document.createElement("p");
    msg.innerText = "Contact Details";

    pcont.append(logo, msg);

    const pcontact = document.createElement("p");
    pcontact.innerText = "Your ticket will be sent to these details";

    const emailId = document.createElement("label");
    emailId.innerText = "Email ID";

    const emailInput = document.createElement("input");
    emailInput.id = "passenger_email";
    emailInput.required = true;
    emailInput.type = "email";
    emailInput.placeholder = "Enter Email";

    const phone = document.createElement("label");
    phone.innerText = "Phone";

    const phoneInput = document.createElement("input");
    phoneInput.id = "passenger_phone";
    phoneInput.required = true;

    // TC44 FIX
    phoneInput.type = "tel";

    phoneInput.placeholder = "Enter Phone";

    contact.append(
        pcont,
        pcontact,
        emailId,
        emailInput,
        phone,
        phoneInput
    );

    two.append(contact);

    // Bottom section
    const three = document.createElement("div");
    three.id = "side_three";

    const terms = document.createElement("p");
    terms.innerText = "By clicking on proceed, I agree that I have read and understood the TnCs and the Privacy Policy";

    const proceedBox = document.createElement("div");

    const amount = document.createElement("p");
    amount.innerText = `Total Amount : INR ${el.price * selectedSeats.length}`;

    const button = document.createElement("button");
    button.id = "proceed_btn";
    button.innerText = "PROCEES TO PAY";

    button.onclick = function () {
        getadata(selectedSeats, el);
    };

    proceedBox.append(amount, button);
    three.append(terms, proceedBox);

    paySide2.append(one, two, three);
    payment.append(paySide, paySide2);

    document.querySelector("#payment").append(payment);

    document.getElementById("payment").style.display = "flex";
    document.getElementById("pay_side").style.opacity = "0.5";
}

// ==========================================
// CLOSE PASSENGER FORM
// ==========================================

function closepopup() {

    const payment = document.getElementById("payment");

    if (payment) {
        payment.style.display = "none";
        payment.innerHTML = "";
    }
}

// ==========================================
// SAVE PASSENGER AND BOOKING DATA
// ==========================================

function getadata(selectedSeats, el) {

    const ticketArray = [];

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min) + min);
    }

    for (let i = 0; i < selectedSeats.length; i++) {

        const ticketNumber = getRandomInt(721785, 99853562);

        const ticketObject = {
            Passenger_name: document.getElementById(`name_box${i}`).value,
            Passenger_age: document.getElementById(`age_box${i}`).value,
            bus_name: el.busname,
            bustype: el.bustype,
            Depature: el.Depature,
            arrival: el.arrival,
            date: travel.onwardDate || "date",
            pick: el.pickup,
            drop: el.drop,
            price: el.price,
            ticke_number: `REDG${ticketNumber}HT`
        };

        ticketArray.push(ticketObject);
    }

    localStorage.setItem("ticket_data", JSON.stringify(ticketArray));

    const userArray = [];

    const userObject = {
        email: document.getElementById("passenger_email").value,
        phone: document.getElementById("passenger_phone").value,
        seats: selectedSeats,
        price: el.price * selectedSeats.length
    };

    userArray.push(userObject);

    localStorage.setItem("user_data", JSON.stringify(userArray));

    window.location.href = "./payment.html";
}