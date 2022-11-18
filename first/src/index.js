import "./styles.css";

const circle1 = document.getElementById("sw1");
const circle2 = document.getElementById("sw2");
const circle3 = document.getElementById("sw3");
var clear = circle2.offsetLeft;
circle1.style.order = 1;
circle2.style.order = 2;
circle3.style.order = 3;

circle2.style.backgroundColor = "black";
circle3.style.backgroundColor = "yellow";

circle1.addEventListener("click", function (event) {
    circle1.style.backgroundColor = "#2030E9";

    circle1.style.left = clear + "%";
    circle2.style.order = 2;
    circle3.style.order = 3;

});

circle2.addEventListener("click", function (event) {

    circle1.style.left = clear;
    circle2.style.left = circle1.offsetLeft;

    console.log(circle2.offsetLeft);
    console.log(circle1.offsetLeft);
});
circle3.addEventListener("click", function (event) {
});
