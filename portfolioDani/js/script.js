const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
})

function sendEmail() {
    var name = document.querySelector('input[name="name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    var mailtoLink = "mailto:danielmcucuzza@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent("Mi nombre es " + name + "\n" + message);

    window.location.href = mailtoLink;
}

function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Correo copiado: " + text);
}

function openWhatsApp(phoneNumber) {
    var whatsappLink = "https://wa.me/" + phoneNumber;
    window.open(whatsappLink, "_blank");
}

function descargarCV() {
    var rutaCV = '/media/cvCucuzza.pdf';
    window.open(rutaCV, '_blank');
}