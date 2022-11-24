import "./styles.css";
import 'animate.css';

const circle1 = document.getElementById("sw1");
const circle2 = document.getElementById("sw2");
const circle3 = document.getElementById("sw3");
var clear = circle1;
var clear2 = circle1;
circle1.style.order = 1;
circle2.style.order = 2;
circle3.style.order = 3;
changePoint(circle1, clear2);

circle1.addEventListener("click", function (event) {
    changePoint(circle1, clear2);
});
circle2.addEventListener("click", function (event) {
    changePoint(circle2, clear2);
});
circle3.addEventListener("click", function (event) {
    changePoint(circle3, clear2);
});

function changePoint(p1, p2) {
    p2.style.backgroundColor = "#4c69f7"
    p2.classList.remove("pulse");
    clear2 = p1;
    p1.style.backgroundColor = "#2030E9";
    p1.classList.add("pulse");
}



