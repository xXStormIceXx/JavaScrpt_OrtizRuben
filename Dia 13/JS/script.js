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
