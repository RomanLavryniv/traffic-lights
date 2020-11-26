function changeColor() {
    if (document.getElementById("green").classList.contains('greenLight') || (!document.getElementById("red").classList.contains('redLight') && !document.getElementById("yellow").classList.contains('yellowLight'))) {
        document.getElementById("green").classList.remove('greenLight');
        document.getElementById("red").classList.add('redLight');
    } else if (document.getElementById("red").classList.contains('redLight') && !document.getElementById("yellow").classList.contains('yellowLight')) {
        document.getElementById("red").classList.remove('redLight');
        document.getElementById("yellow").classList.add('yellowLight');
    } else if (document.getElementById("yellow").classList.contains('yellowLight') && !document.getElementById("green").classList.contains('greenLight')) {
        document.getElementById("yellow").classList.remove('yellowLight');
        document.getElementById("green").classList.add('greenLight');
    }

}