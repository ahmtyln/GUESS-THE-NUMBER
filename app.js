const number_random = Math.ceil(Math.random() * 100);
const number_input = document.getElementById("input");
const check = document.getElementById("check");
const reset = document.getElementById("reset");
const kontrol = document.getElementById("kontrol");
let attempts = 0;

function guessNumber() {
    if (number_input.value < 1 || number_input.value > 100) {
        window.alert("Just enter numbers between 1-100.");
    }else{
        if (number_input.value < number_random) {
            kontrol.innerText = "UP";
            attempts++;
            document.getElementById("try").innerHTML = attempts;
        } else if (number_input.value > number_random) {
            kontrol.innerText = "DOWN";
            attempts++;
            document.getElementById("try").innerHTML = attempts;
        } else if (number_input.value == number_random) {
            window.alert("CONGRATULATİONS! İF YOU WANT PLAY AGAİN ENTER 'RESTART' BUTTON.");
            attempts++;
            document.getElementById("try").innerHTML = attempts;
        } else {
            window.alert("Just enter numbers between 1-100.");
        }
    }
}
reset.addEventListener("click", function () {
    window.location.reload();
})

check.addEventListener("click", guessNumber);


