let balance = 0;
let ticket = 0;

function getDate() {
    let today = new Date().toLocaleDateString("tr-TR");
    document.getElementById("date").innerHTML = "Güncellenme Tarihi : " + today;
}

window.onload = () =>{
    getDate();

}

function select() {
    var e = document.getElementById("event");
    var eValue = document.getElementById("event").value;

    switch (eValue) {
        case "1":
            ticket = 150;
            break;
        case "2":
            ticket = 200;
            break;
        case "3":
            ticket = 250;
            break;
        case "4":
            ticket = 300;
            break;
        case "5":
            ticket = 350;
            break;
        default:
            alert("Hatalı Seçim !");
            break;
    }

    var who = e.options[e.selectedIndex].text;
    document.getElementById("who").innerHTML = who + " Konseri İçin Bilet";
}

function calculateTicket() {
    var count = document.getElementById("count").value;
    if (count == 0 && count == "0") {
        alert("Lütfen bilet adeti giriniz..");
        document.getElementById("gotoPay").disabled = true;
    }
    else{
        document.getElementById("gotoPay").disabled = false;
    }
    balance = count * ticket;
    document.getElementById("balance").innerHTML = "Toplam Tutar : " + balance + " ₺";
}

function lastStage() {
    document.getElementById("total").innerHTML = "Toplam Tutar : " + balance + " ₺";
}