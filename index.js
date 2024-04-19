let ism = prompt("Ismingizni kriting");

let harf = prompt("Bronta harf kriting")

let orni = ism.indexOf(harf); // -1

if (orni === -1) {
    alert("Bu " + ism + " ismda " + harf + " mavjud emas!");
} else {
    alert("Bu " + ism + " ismda " + harf + " mavjud ");
}