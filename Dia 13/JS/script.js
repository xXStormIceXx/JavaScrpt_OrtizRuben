function ValidateForm() {
    let name = document.getElementById('inputName').value;
    let nameactor = document.getElementById('nameactor').value;
    let ubicacion = document.getElementById('ubicacion').value;
    let poster = document.getElementById('poster').value;
    if (name == "") {
        alert('El campo de nombre es requerido');
        return false;
    }
    if (email == "") {
        alert('El campo de correo es requerido');
        return false;
    }
    if (phone == "") {const myModal = document.getElementById('myModal')
    const myInput = document.getElementById('myInput')
    
    myModal.addEventListener('shown.bs.modal', () => {
      myInput.focus()
    })
        alert('El campo telefono es requerido');
        return false;
    }
    let listPeople;

    if (localStorage.getItem('listPeople') == null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem(listPeople));
    }

    var html = "";

    listPeople.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')"class="btn btn-danger">Eliminar Dato></button> <button onclick="editData(' + index + ')"class="btn btn-warning">Editar Dato></button>';
        html += "</tr>";
    });

    document.getElementById('#tableData').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', function () {
    ReadData();
});

document.onload = ReadData();

function AddData() {
    if (ValidateForm() == true) {
        let name = document.getElementById('inputName').value;
        let email = document.getElementById('inputEmail').value;
        let phone = document.getElementById('inputPhone').value;

        var listPeople;

        if (localStorage.getItem('listPeople') == null) {
            listPeople = []
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }

        listPeople.push({
            name: name,
            email: email,
            phone: phone
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();

        document.getElementById('inputName').value = "";
        document.getElementById('inputEmail').value = "";
        document.getElementById('inputPhone').value = "";
    }

}


function deleteData(index) {

    if (localStorage.getItem('listPeople') == null) {
        listPeople = []
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    listPeople - splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));

    ReadData();

}

function editData(index) {
    document.getElementById('btnAdd').style.display = 'none';
    document.getElementById('btnUpdate').style.display = 'block';

    if (localStorage.getItem('listPeople') == null) {
        listPeople = []
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    document.getElementById('inputName').value = listPeople[index].email;
    document.getElementById('inputEmail').value = listPeople[index].email;
    document.getElementById('inputPhone').value = listPeople[index].email;

    document.getElementById('#bynUpdate').onclick = function () {
        if (ValidateForm() == true) {
            listPeople[index].name = document.getElementById('inputName').value;
            listPeople[index].Email = document.getElementById('inputEmail').value;
            listPeople[index].Phone = document.getElementById('inputPhone').value;

            localStorage.setItem('listPeople', JSON.stringify(listPeople));
            ReadData();

            document.getElementById('inputName').value = "";
            document.getElementById('inputEmail').value = "";
            document.getElementById('inputPhone').value = "";

            document.getElementById('btnAdd').style.display = 'block';
            document.getElementById('btnupdate').style.display = 'none';

        }
    };

}