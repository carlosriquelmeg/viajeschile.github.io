$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $("#enviarCorreo").click(function () {
        alert("El correo fue enviado correctamente");
    });
});


$(document).ready(function () {
    $("#texto-card1").mouseenter(function () {
        $(this).css("color", "#00CEF5");
    });
});

$(document).ready(function () {
    $("#texto-card1").mouseleave(function () {
        $(this).css("color", "white");
    });
});
$(document).ready(function () {
    $("#texto-card2").mouseenter(function () {
        $(this).css("color", "#00CEF5");
    });
});

$(document).ready(function () {
    $("#texto-card2").mouseleave(function () {
        $(this).css("color", "white");
    });
});


$(document).ready(function () {
    $("#texto-card3").mouseenter(function () {
        $(this).css("color", "#00CEF5");
    });
});

$(document).ready(function () {
    $("#texto-card3").mouseleave(function () {
        $(this).css("color", "white");
    });
});


const navbar = document.getElementById("navbar");

function cambiarColor() {
    if (window.scrollY > 100) {
        navbar.classList.add("navbar-scroll");
    } else {
        navbar.classList.remove("navbar-scroll");
    }
}

window.addEventListener("scroll", cambiarColor);