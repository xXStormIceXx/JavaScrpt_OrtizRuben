function fetchStarWars (){
    let xhr = new XMLHttpRequest();
    let swID = document.getElementById('swID').value;
    console.log(swID);
    let url = `https://swapi.py4e.com/api/people/${swID}`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200) {
            let response = JSON.parche(this.responseText);
            console.log(response);
            displayHero(response);
        }else if(this.readyState ==4){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}
function displayHero(data){
    let warriorInfo = document.getElementsById('starwarsInfo');
    if(data.response === "error"){
        warriorInfo.innerHTML = `<p>Error:${data.error}</p>`;
    }else{
        let filmsList = data['films'].map(film =>` <li>${film}</li>`).join('');
        let vehicles = data['vehicles'].map(vehicle =>`<li>${vehicle}</li>`).join('');
        let starships = data['starships'].map(starship =>`<li>${starship}</li>`).join('');
        warriorInfo.innerHTML=
        `<p>Name:${data.name}</p>
        <p>Height: ${data.Height}</p>
        <p>Mass: ${data.mass}</p>
        <p>Hair Color: ${data.hair_color}</p>
        <p>Skin Color: ${data.skin_color}</p>
        <p>Eye Color: ${data.eye_color}</p>
        <p>Birth Year: ${data.birth_year}</p>
        <p>Gender: ${data.gender}</p>
        <p>Home World: ${data.homeworld}</p>
        <ul class="list-group">
            <p>Films: ${filmsList} </p>
        </ul> 
            <br>
        <p>Spencies: ${data.species}</p>
        <ul class="list-group">
            <p>Vehicles: ${vehicles}</p>
        </ul>
        <ul class="list-group">
            <p>StarShips: ${starships}</p>
        </ul>
        <p>Created: ${data.created}</p>
        <p>Edited: ${data.edited}</p>
        <p>URL: ${data.url}</p>`
    }
}