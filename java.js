function Vards() {
    let userName = prompt("Lūdzu, ievadiet savu vārdu:");
    switch (userName) {
        case null:
            alert("Ievadi vārdu.");
            break;
        case undefined:
            alert("Ievadi vārdu.");
            break;
        case "":
            alert('Daunis');
            break;
        default:
            alert("Sveiki, " + userName + "! Prieks jūs redzēt!");
            window.location.href = './lapa1.html';
            document.cookie = ""
            break;
    }
}