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
    document.querySelectorAll('area').forEach(area => {
        area.addEventListener('click', function(event) {
            event.preventDefault();
        });
    });
};
// Highlights the Area of the Room
  
// Room Modal
const roomModal = document.getElementById("roomModal");
const modalDisplay = document.getElementById("modal-display");

// Close Room Modal
function closeModal() {
    document.getElementById("roomModal").classList.remove("active");
}

// Floor 1
function prayroomButton(target) {
    //alert("This is the campus' prayer room.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r113Button(target) {
    //alert("This is room no.113.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r114Button(target) {
    //alert("This is room no.114.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r115Button(target) {
    //alert("This is room no.115.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r101Button(target) {
    //alert("This is room no.101.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r103Button(target) {
    //alert("This is room no.103.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r105Button(target) {
    //alert("This is room no.105.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r106Button(target) {
    //alert("This is room no.106.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r107Button(target) {
    //alert("This is room no.107. This room is designated as the Industrial Engineering Lab.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony1Button(target) {
    //alert("This is not a room. It is meant to represent the balconies on top of the exit here.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r116Button(target) {
    //alert("This is room no.116.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r117Button(target) {
    //alert("This is room no.117.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r121Button(target) {
    //alert("This is room no.121.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r123Button(target) {
    //alert("This is room no.123.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r119Button(target) {
    //alert("This is room no.119.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r120Button(target) {
    //alert("This is room no.120. It is the Guidance Councilor's Office.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r102Button(target) {
    //alert("This is room no.102. It is the Testing Area.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r104Button(target) {
    //alert("This is room no.104. It is currently an organization room.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr1Button(target) {
    //alert("These are the Comfort Rooms and Cleaning Supplies Storage Rooms of the 1st Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function openButton(target) {
    //alert("An open area behind the campus. It has a basketball/volleyball court. It is also perfect for hosting crowded activities, like concerts.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function canteenButton(target) {
    //alert("This is the campus' canteen. It sells a variety of food and beverages. It also accepts payment via Gcash.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function parkingButton(target) {
    //alert("This open area at the side of the campus is the parking lot.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}

// Floor 2
function r221Button(target) {
    //alert("This is room no.221. It is the Administrative Office.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r201Button(target) {
    //alert("This is room no.201. It is the Faculty Lounge")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r203Button(target) {
    //alert("This is room no.203.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r205Button(target) {
    //alert("This is room no.205. It is the AutoCAD/Multimedia Laboratory.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r207Button(target) {
    //alert("This is room no.207. It is ComLab 1.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r209Button(target) {
    //alert("This is room no.209. It is ComLab 2.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r211Button(target) {
    //alert("This is room no.211. It is ComLab 3.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r202Button(target) {
    //alert("This is room no.202. It is the Digital Laboratory.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r204Button(target) {
    //alert("This is room no.204. It is the Dispensing Room.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r206Button(target) {
    //alert("This is room no.206. It is the Microprocessor Library.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r218Button(target) {
    //alert("This is room no.218.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r222Button(target) {
    //alert("This is room no.222.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r208Button(target) {
    //alert("This is room no.208. It is the Ergonomics Room.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r210Button(target) {
    //alert("This is room no.210.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r212Button(target) {
    //alert("This is room no.212.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr2Button(target) {
    //alert("These are the Comfort Rooms and Cleaning Supplies Storage Rooms of the 2nd Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony2Button(target) {
    //alert("This is the balcony on the 2nd Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}

// Floor 3
function r301Button(target) {
    //alert("This is room no.301.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r303Button(target) {
    //alert("This is room no.303.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r305Button(target) {
    //alert("This is room no.305.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r307Button(target) {
    //alert("This is room no.307.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r309Button(target) {
    //alert("This is room no.309.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function libraryButton(target) {
    //alert("This is the campus' library.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r302Button(target) {
    //alert("This is room no.302.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r304Button(target) {
    //alert("This is room no.304.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r306Button(target) {
    //alert("This is room no.306. It is the Physics Room.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r315Button(target) {
    //alert("This is room no.315.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r317Button(target) {
    //alert("This is room no.317. It is a Stock Room.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r308Button(target) {
    //alert("This is room no.308.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r310Button(target) {
    //alert("This is room no.310.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r312Button(target) {
    //alert("This is room no.312. It is a Library Reading Area.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr3Button(target) {
    //alert("These are the Comfort Rooms and Cleaning Supplies Storage Rooms of the 3rd Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony3Button(target) {
    //alert("This is the balcony on the 3rd Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}

// Floor 4
function r401Button(target) {
    //alert("This is room no.401.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r403Button(target) {
    //alert("This is room no.403.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r405Button(target) {
    //alert("This is room no.405.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function loungeButton(target) {
    //alert("This area is the Student Lounge. It is where students can stay while waiting for their next class and even play table tennis.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r402Button(target) {
    //alert("This is room no.402.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r418Button(target) {
    //alert("This is room no.418. It is a Stock Room.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r404Button(target) {
    //alert("This is room no.404. It is the Chemistry Laboratory.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function r406Button(target) {
    //alert("This is room no.406.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function cr4Button(target) {
    //alert("These are the Comfort Rooms and Cleaning Supplies Storage Rooms of the 4th Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony4Button(target) {
    //alert("This is a balcony on the 4th Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony5Button(target) {
    //alert("This is another balcony on the 4th Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}
function balcony6Button(target) {
    //alert("This is, yet again, another balcony on the 4th Floor.")
    document.getElementById("roomModal").classList.add("active");
    const content = target.getAttribute("data-content");
    document.getElementById("modal-display").innerHTML = content;
    const number = target.getAttribute("title");
    document.getElementById("modal-title").innerHTML = number;
}