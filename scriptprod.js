function toggleDBZ() {
    var dbzCol = document.querySelector('.dbz-col');
    dbzCol.classList.toggle('show');
}

function toggleOP() {
    var opCol = document.querySelector('.op-col');
    opCol.classList.toggle('show');
}

function toggleOtherscol() {
    var otherscol = document.getElementById('Otherscol');
    var oCol = otherscol.querySelector('.O-col');
    oCol.classList.toggle('show');
}


function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle('active');
}