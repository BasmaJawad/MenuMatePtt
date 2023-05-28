const navbar = document.querySelector(".wrapper")
const footer = document.getElementById("footerContainer")

function navbarSetup(){
    navbar.innerHTML = ' <a href=\'hp2.html\' id="logo">Menyoo</a>\n' +
        '        <nav>\n' +
        '            <ul id="navbarWrapper">\n' +
        '                <li><a href=\'priceTable.html\'>Priser & Services</a></li>\n' +
        '                <li><a href=\'contactForm.html\'>Kontakt os</a></li>\n' +
        '                <li><a href=\'#\'>Om Os</a></li>\n' +
        '            </ul>\n' +
        '        </nav>'

}

function footerSetup(){
    footer.innerHTML = '    <footer>\n' +
        '        © 2023 Menumate. All rights reserved. <br>\n' +
        '        Designed and developed by Menumate.\n' +
        '\n' +
        '    </footer>'
}

navbarSetup()
footerSetup()