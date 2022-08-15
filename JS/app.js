

const loadDog = dog => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data))
}

const displayDog = (dogList) => {
    // console.log(dogList)
    const main = document.getElementById('main');
    const firstTen = dogList.slice(0, 10);

    for (const dog of firstTen) {
        const div = document.createElement('div');
        console.log(dog);
        div.className = "col-lg-4"
        div.innerHTML = `
         <h2> ${dog.name} </h2>
         <p>${dog.temperament}</p>
         <img width ="400px" height ="250px" src = "${dog.image.url}"/>

        `;
        main.appendChild(div);

    }


}