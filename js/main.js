//Utilizzando i dati forniti, creare un array di oggetti per
// rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti
// informazioni: nome, ruolo e foto.
//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni 
//di nome, ruolo e la stringa della foto
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
//BONUS 1:
//Trasformare la stringa foto in una immagine effettiva
//BONUS 2:
//Organizzare i singoli membri in card/schede
//Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
//Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
//Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
//Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
//Scott Estrada	Developer	            scott-estrada-developer.jpg
//Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

//creo una array con dentro gli oggetti nome ruolo e foto
const team = [
    {nome:"Wayne Barnett",
     ruolo: "Founder & CEO",
     foto: "wayne-barnett-founder-ceo.jpg"    
    },
    {nome: "Angela Caroll",
     ruolo:"Chief Editor",
     foto: "angela-caroll-chief-editor.jpg"
    },
    {nome: "Walter Gordon",
     ruolo:"Office Manager",
     foto: "walter-gordon-office-manager.jpg"
    },
    {nome: "Angela Lopez",
     ruolo:"Social Media Manager",
     foto: "angela-lopez-social-media-manager.jpg"
    },
    {nome: "Scott Estrada",
     ruolo:"Developer",
     foto: "scott-estrada-developer.jpg"
    },
    {nome: "Barbara Ramos",
     ruolo:"Graphic Designer",
     foto: "barbara-ramos-graphic-designer.jpg"
    }
];
const containerEl = document.querySelector(".container");
console.log(team);

//creo un ciclo che mi dia uno per volta i membri del team
for ( let key in team){
    console.log(" Nome " + team[key].nome + " Ruolo " + team[key].ruolo + " Foto " + team[key].foto);
    //utenti é uguale a indice di ogni utente per ciclo!
    const utenti = team[key];

    let box = document.createElement("div");
    box.innerHTML = "Nome: " + utenti.nome + " Ruolo: " + " " + utenti.ruolo + " Foto: " + " " + utenti.foto;
    box.classList.add("space");
    containerEl.append(box);

    
}

const containerCard = document.querySelector(".container-card")
for (let i = 0; i < team.length; i++ ) {
    //utenti é uguale a indice di ogni utente per ciclo!
    const utenti = team[i].foto;
    const descrizioneUtente = team[i]

    let boxImg = document.createElement("div");
    boxImg.classList.add("flexbox")

    //creo immagine
    let imgEl = document.createElement("img");
    //tramite src creo le foto
    imgEl.src = "img/" + utenti
    //imgEl.classList.add("card");

    let descrizione = document.createElement("h3");
    descrizione.innerHTML = "Nome: " + descrizioneUtente.nome + " Ruolo: " + " " + descrizioneUtente.ruolo;
    descrizione.classList.add("text-center")


    containerCard.append(boxImg);
    boxImg.append(descrizione);
    boxImg.append(imgEl);

}


