const api = [
    {
        id:0,
        name:"Cristiano Ronaldo ",
        country:"Portugal",
        img:"url('./image/ronaldo.jpg')",
        text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti atque laudantium earum nisi nemo ex iure eos, harum nam explicabo iusto a, natus beatae vitae! Dicta delectus atque dolorum quas",
    },
    {
        id:1,
        name:"Lionel Andres Messi.",
        country:"Argentina",
        img:"url('./image/download.jpeg')",
        text:"Lionel Messi is a world-renowned football player, known for his excellence in the game. His playing style impresses many around the globe and his courage and skills as a player make him a legend. ",
    },
    {
        id:2,
        name:"Andres Guardado",
        country:"Spanish",
        img:"url('./image/andres.jpg')",
        text:"Andres Iniesta is widely regarded as one of the greatest midfielders of his generation. His technical abilities, vision, and passing range made him a vital component of the Spanish national team and Barcelona's success",
    },
    {
        id:3,
        name:" Xavier Hernandez Creus",
        country:"Spanish",
        img:"url('./image/xavi.jpg')",
        text:"Xavi is widely regarded as one of the greatest midfielders in football history. He was an integral part of Barcelona's success during his playing career, playing a crucial role in the team's iconic possession-based ",

    },
    {
        id:4,
        name:"Zlatan Ibrahimovic",
        country:"Swedish",
        img:"url('./image/Zlatan-Ibrahimovic-retiring-after-european-championship-2016-images.jpg')",
        text:"Zlatan Ibrahimovic is widely considered to be one of the greatest footballers of his generation. He is known for his technical skills, physicality, and powerful shooting ability, which have earned him numerous accolades and a reputation ",

    }

];

let image = document.querySelector(".pic");
let Name = document.querySelector(".name");
let pera = document.querySelector(".peragraph");
let country = document.querySelector(".country");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

//start item//

let currentItem = 0; 

///showperson function///

function showPerson(item) {
    
    image.style.backgroundImage = api[item].img;
    Name.textContent = api[item].name;
    pera.textContent = api[item].text;
    country.textContent = api[item].country;
};

/////next function///

next.addEventListener("click",()=>{
    currentItem++;
    if(currentItem > api.length - 1){
        currentItem = 0;
    };
    showPerson(currentItem);
});

///sohw prev function//

prev.addEventListener("click",()=>{
    currentItem--;
    if(currentItem < 0){
        currentItem = api.length - 1
    };
    showPerson(currentItem);
});
