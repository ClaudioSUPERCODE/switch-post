
// ===========SWITCH BREAK===========//

// ====LEV-2_7=======//

function showtxt() {
    let paket = document.getElementById("mylist").value;
    let ergebnis = document.getElementById("masse");
    switch (paket) {
        case "0":
            ergebnis.innerHTML = "<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm <br>B: 7 - 12,5 cm <br>H: bis 1 cm"
            break;
        case "1":
            ergebnis.innerHTML = "<b>DHL Paket 2 kg</b> <br>bis 60 x 30 x 15 cm"
            break;
        case "2":
            ergebnis.innerHTML = "<b>DHL Paket 5 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        case "3":
            ergebnis.innerHTML = "<b>DHL Paket 10 kg</b> <br>bis 120 x 60 x 60 cm"
            break;
        default:
            ergebnis.innerHTML = "<b>Extra große Größe</b>"
    }
}