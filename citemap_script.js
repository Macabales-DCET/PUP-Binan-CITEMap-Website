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

    // Prevent reloading when selecting rooms
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
};
// Highlights the Area of the Room

// Floor 1
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
function balcony1Button() {
    alert("This is not a room. It is meant to represent the balconies on top of the exit here.")
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

// Floor 2
function r221Button() {
    alert("This is room no.221. It is the Administrative Office.")
}
function r201Button() {
    alert("This is room no.201. It is the Faculty Lounge")
}
function r203Button() {
    alert("This is room no.203.")
}
function r205Button() {
    alert("This is room no.205. It is the AutoCAD/Multimedia Laboratory.")
}
function r207Button() {
    alert("This is room no.207. It is ComLab 1.")
}
function r209Button() {
    alert("This is room no.209. It is ComLab 2.")
}
function r211Button() {
    alert("This is room no.211. It is ComLab 3.")
}
function r202Button() {
    alert("This is room no.202. It is the Digital Laboratory.")
}
function r204Button() {
    alert("This is room no.204. It is the Dispensing Room.")
}
function r206Button() {
    alert("This is room no.206. It is the Microprocessor Library.")
}
function r218Button() {
    alert("This is room no.218.")
}
function r222Button() {
    alert("This is room no.222.")
}
function r208Button() {
    alert("This is room no.208. It is the Ergonomics Room.")
}
function r210Button() {
    alert("This is room no.210.")
}
function r212Button() {
    alert("This is room no.212.")
}
function cr2Button() {
    alert("These are the Comfort Rooms and Storage Rooms of the 2nd Floor.")
}
function balcony2Button() {
    alert("This is the balcony on the 2nd Floor.")
}

// Floor 3
function r301Button() {
    alert("This is room no.301.")
}
function r303Button() {
    alert("This is room no.303.")
}
function r305Button() {
    alert("This is room no.305.")
}
function r307Button() {
    alert("This is room no.307.")
}
function r309Button() {
    alert("This is room no.309.")
}
function libraryButton() {
    alert("This is the campus' library.")
}
function r302Button() {
    alert("This is room no.302.")
}
function r304Button() {
    alert("This is room no.304.")
}
function r306Button() {
    alert("This is room no.306. It is the Physics Room.")
}
function r315Button() {
    alert("This is room no.315.")
}
function r317Button() {
    alert("This is room no.317. It is a Stock Room.")
}
function r308Button() {
    alert("This is room no.308.")
}
function r310Button() {
    alert("This is room no.310.")
}
function r312Button() {
    alert("This is room no.312. It is a Library Reading Area.")
}
function cr3Button() {
    alert("These are the Comfort Rooms and Storage Rooms of the 3rd Floor.")
}
function balcony3Button() {
    alert("This is the balcony on the 3rd Floor.")
}

// Floor 4
function r401Button() {
    alert("This is room no.401.")
}
function r403Button() {
    alert("This is room no.403.")
}
function r405Button() {
    alert("This is room no.405.")
}
function loungeButton() {
    alert("This area is the Student Lounge. It is where students can stay while waiting for their next class and even play table tennis.")
}
function r402Button() {
    alert("This is room no.402.")
}
function r418Button() {
    alert("This is room no.418. It is a Stock Room.")
}
function r404Button() {
    alert("This is room no.404. It is the Chemistry Laboratory.")
}
function r406Button() {
    alert("This is room no.406.")
}
function cr4Button() {
    alert("These are the Comfort Rooms and Storage Rooms of the 4th Floor.")
}
function balcony4Button() {
    alert("This is the balcony on the 4th Floor.")
}
function balcony5Button() {
    alert("This is another balcony on the 4th Floor.")
}
function balcony6Button() {
    alert("This is, yet again, another balcony on the 4th Floor.")
}