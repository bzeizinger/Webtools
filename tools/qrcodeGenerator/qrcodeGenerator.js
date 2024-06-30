const qrcodeCanvas = document.getElementById("qrcodeCanvas");
const qrcodeImage = document.getElementById("qrcodeImage");
const qrcodeInput = document.getElementById("qrcodeInput");

function generateQrcode() {
    let qrcodeValue = qrcodeInput.value.trim();

    if (qrcodeValue === "") {
        alert("Please enter some text or URL.");
        return;
    }

    qrcodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrcodeValue);
    qrcodeImage.className = "qrcodeImageDisplay";
}