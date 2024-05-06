document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.btn-info').addEventListener('click', function() {
        // Código para el botón "Nuevo Heroe"
    });

    document.querySelector('.btn-primary').addEventListener('click', function() {
        // Código para el botón "Actualizar Heroe"
    });

    document.querySelector('.btn-success').addEventListener('click', function() {
        // Código para el botón "Guardar Heroe"
        const formData = new FormData(document.getElementById('frmDataHero'));
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
        const jsonStr = JSON.stringify(jsonData);
        console.log(jsonStr);
        // Aquí puedes enviar jsonStr al servidor o hacer lo que necesites con los datos
    });

    document.querySelector('.btn-danger').addEventListener('click', function() {
        // Código para el botón "Eliminar Heroe"
    });

    document.querySelector('.btn-dark').addEventListener('click', function() {
        // Código para el botón "Cancelar"
    });

    document.querySelector('#addSuite').addEventListener('click', function() {
        // Código para añadir registros de trajes
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".btn-success").addEventListener("click", function() {
        // Obtener los valores de los campos del formulario
        var characterName = document.getElementById("characterName").value;
        var actorName = document.getElementById("actorName").value;
        var age = document.getElementById("age").value;
        var cityName = document.getElementById("cityName").value;
        var poster = document.getElementById("poster").value;
        var dateAppears = document.getElementById("dateAppears").value;
        var producer = document.getElementById("producer").value;

        // Crear un objeto con la información recolectada
        var heroeData = {
            characterName: characterName,
            actorName: actorName,
            age: age,
            cityName: cityName,
            poster: poster,
            dateAppears: dateAppears,
            producer: producer
        };

        // Mostrar la información recolectada en la consola (puedes cambiar esto según tus necesidades)
        console.log("Información del héroe:", heroeData);

        // Aquí puedes agregar código para enviar la información recolectada a tu servidor, almacenarla en una base de datos, etc.
    });
});
