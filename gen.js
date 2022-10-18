
document.addEventListener('DOMContentLoaded', function() {
    const vehNum = document.getElementById('vehNum');
    const submitBtn = document.getElementById('submitBtn');

    console.log(uuid.v4())

    submitBtn.addEventListener('click', () => {
        let qrcode = new QRCode("qrcode", {
            text: vehNum.value.toString(),
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    });
});


