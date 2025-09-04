const app = document.getElementById('app');
const visitCard = {
    name: 'Anders Thorkildsen',
    experiences: [
        'Senior full-stack developer',
        'Senior tired father',
        'Senior frustrated spouse',
    ],
    number: 'Phone: 123456789',
    mail: 'Mail: google@gmail.com'
};
//Legge til ny array
visitCard.experiences.push('Reflektert');
//Oppdatere en Array i index 1
visitCard.experiences[1]='Greenie';
function updateVeiw() {
    app.innerHTML = /*HTML*/`
    <h1 onclick="changeBgColor()">${visitCard.name}</h1>
    <h2>${visitCard.experiences[0]}</h2>
    <h2>${visitCard.experiences[1]}</h2>
    <h2>${visitCard.experiences[2]}</h2>
    <h2>${visitCard.experiences[3]}</h2>
    <h2>${visitCard.number}</h2>
    <h2>${visitCard.mail}</h2>
    `;
}               
function changeBgColor(){
    app.style.backgroundColor = 'red';
    console.log('clicked');
    return;
};
updateVeiw();