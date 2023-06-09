const navbar = document.querySelector(".wrapper")
const footer = document.getElementById("footerContainer")
const title = document.querySelector("title")

function navbarSetup(){
    navbar.innerHTML = ' <a href=\'hp2.html\' id="logo">Menyoo</a>\n' +
        '        <nav>\n' +
        '            <ul id="navbarWrapper">\n' +
        '                <li><a href=\'priceTable.html\'>Priser & Services</a></li>\n' +
        '                <li><a href=\'contactForm.html\'>Kontakt os</a></li>\n' +
        '                <li><a href=\'aboutUs.html\'>Om Os</a></li>\n' +
        '            </ul>\n' +
        '        </nav>'

}

function footerSetup(){
    footer.innerHTML = '<footer>' +
        '    <div class="logo">Menyoo' +
        '    </div>' +
        '    <div class="clearfix"></div>' +
        '    <p>&copy; 2023 Menyoo. Alle rettigheder forbeholdes.</p>' +
        '    <p>Designet og udviklet af Menyoo.</p>' +
        '</footer>';

}

function setTitle(){
title.innerHTML = "Menyoo.dk"

}

navbarSetup()
footerSetup()
setTitle()