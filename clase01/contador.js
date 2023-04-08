const div = document.createElement('div');
div.className = "contador";

let spnCounter = document.createElement("span");
let count = 0

const btnSumar = document.createElement('button');
const btnRestar = document.createElement('button');

btnSumar.innerText = " + "
btnRestar.innerText = " - "

spnCounter.innerText = count

const restar = () => {
    count--
    spnCounter.innerText = count
}

const sumar = () => {
    count++
    spnCounter.innerText = count
}

btnRestar.addEventListener('click', restar)
btnSumar.addEventListener('click', sumar)

div.append(btnRestar)
div.append(spnCounter)
div.append(btnSumar)

document.body.append(div)