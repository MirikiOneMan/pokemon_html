import "./styles.scss";
import 'animate.css';

const circle1 = document.getElementById("sw1");
const circle2 = document.getElementById("sw2");
const circle3 = document.getElementById("sw3");
var clear2 = circle1;
circle1.style.order = 1;
circle2.style.order = 2;
circle3.style.order = 3;
changePoint(circle1, clear2);

/* SCREEN */
const LS = document.getElementById("partOne");
const TS = document.getElementById("partThree");
const WS = document.getElementById("partF");
var Scree = LS;

circle1.addEventListener("click", function(event) {
    changePoint(circle1, clear2);
    changeScreen(LS, Scree);
});
circle2.addEventListener("click", function(event) {
    changePoint(circle2, clear2);
    changeScreen(TS, Scree);
});
circle3.addEventListener("click", function(event) {
    changePoint(circle3, clear2);
    changeScreen(WS, Scree);
});

function changePoint(p1, p2) {
    p2.style.backgroundColor = "#4c69f7";
    clear2 = p1;
    p1.style.backgroundColor = "#2030E9";
}

function changeScreen(s1, s2) {
    s2.classList.remove("active");
    s2.classList.add("inactive");
    Scree = s1;
    s1.classList.add("active");
    s1.classList.remove("inactive");
}