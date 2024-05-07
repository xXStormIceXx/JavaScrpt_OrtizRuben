function validateForm(){

    let name = document.getElementById('inputName').value;
    let actorname = document.getElementById('inputActorName').value;
    let actorage = document.getElementById('inputActorAge').value;
    let ubication = document.getElementById('inputUbication').value;
    let poster = document.getElementById('inputPoster').value;
    let date = document.getElementById('inputDate').value;
    let producer = document.getElementById('inputProducer').value;

    if(name == "") {
        alert('El Nombre de Personaje es Requerido');
        return false;
    }
    
    if (actorname == "") {
        alert('El Nombre del Actor es Requerido');
        return false
    }

    if (actorage == "") {
        alert('La Edad del Actor es Requerida');
        return false
    }

    if (ubication == "") {
        alert('La Ubicacion es Requerida')
        return false
    }

    if (poster == "") {
        alert('El Poster es Requerido');
        return false
    }
    
    if (date == "") {
        alert('La Ubicacion es Requerida');
        return false
    }

    if (producer == "") {
        alert('El Productor es Requerido');
        return false
    }
}