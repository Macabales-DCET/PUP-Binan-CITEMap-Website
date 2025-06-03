//Elevator Buttons
function floor(floorNumber) {
    // Hide inactive floors
    const maps = document.querySelectorAll('.map');
    maps.forEach(map => map.classList.remove('active'));

    // Remove highlight from unselected button
    const buttons = document.querySelectorAll('.floorbutton');
    buttons.forEach(btn => btn.classList.remove('active'));

    // Show the map and highlight selected button
    document.querySelector(`.map${floorNumber}`).classList.add('active');
    document.querySelector(`#floor${floorNumber}id`).classList.add('active');
}

// Makes Floor 1 selected by default
window.onload = () => {
    floor(1);
  };

// Highlights the Coordinates

// Room Buttons Testing
function prayroomButton() {
    alert("This is the campus' Prayer Room.")
}
function r114Button() {
    alert("This is room no.114.")
}
function r115Button() {
    alert("This is room no.115.")
}
function r101Button() {
    alert("This is room no.101.")
}
function r103Button() {
    alert("This is room no.103.")
}
function r105Button() {
    alert("This is room no.105.")
}
function r106Button() {
    alert("This is room no.106.")
}
function r107Button() {
    alert("This is room no.107. This room is designated as the Industrial Engineering Lab.")
}
function balconyButton() {
    alert("This is not a room. It is meant to represent the balcony on top of the exit here.")
}
function r116Button() {
    alert("This is room no.116.")
}
function r117Button() {
    alert("This is room no.117.")
}
function r121Button() {
    alert("This is room no.121.")
}
function r123Button() {
    alert("This is room no.123.")
}
function r119Button() {
    alert("This is room no.119.")
}
function r120Button() {
    alert("This is room no.120. It is the Guidance Councilor's Office.")
}
function r102Button() {
    alert("This is room no.102. It is the Testing Area.")
}
function r104Button() {
    alert("This is room no.104. It is currently the organization room of the ACES PUP Binan Organization.")
}
function cr1Button() {
    alert("These are the Comfort Rooms and Storage Rooms of the 1st Floor.")
}
function openButton() {
    alert("An open area behind the campus. It has a basketball/volleyball court. It is also perfect for hosting crowded activities, like concerts.")
}
function canteenButton() {
    alert("This is the campus' canteen. It sells a variety of food and beverages. It also accepts payment via Gcash.")
}
function parkingButton() {
    alert("This open area at the side of the campus is the parking lot.")
}