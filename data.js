const URL = 'https://randomuser.me/api/';

async function getRandomPerson() {
    document.getElementById("picture").setAttribute('src', 'loader.gif');
    const result = await fetch(URL);
    const data = await result.json();
    console.log(data);
    document.getElementById("picture").setAttribute('src', data.results[0].picture.large);
    console.log(data.results[0].name.first)
    document.getElementById('nume').innerText = data.results[0].name.first;
    document.getElementById('gender').innerText = data.results[0].gender;
    document.getElementById('email').innerText = data.results[0].email;
    document.getElementById('age').innerText = data.results[0].dob.age;
};

document.getElementById('fetch').addEventListener('click', getRandomPerson);
//final ex2
function blabla() {
    var micArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var i = 0;
    for (i = 0; i < micArray.length; i++) { console.log(micArray[i] * (micArray[i] + 15)); }
    var altArray = micArray;
    for (i = 0; i < altArray.length; i++) {
        altArray[i] = altArray[i] * 11;
        console.log(altArray[i]);
    }

}
blabla();
//final ex3