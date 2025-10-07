// Variables
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * citazioniAGG.length);
  console.log(citazioniAGG[random]);
  quote.innerText = citazioniAGG[random].citazione;
  person.innerText = citazioniAGG[random].persona;
});

const citazioniAGG = [
  // Tre uomini e una gamba (1997)
  {
    citazione:
      "Certo, ci vuole coraggio, bisogna abbandonare tutto. E se ti va male? Be', il rischio c'è. Del resto, se non rischi... Tu non hai mai rischiato? - Una volta. Una volta ho messo 2 fisso a Inter-Cagliari.",
    persona: "Giovanni e Aldo",
  },
  {
    citazione:
      "Scusate ma... centosettanta milioni per questa merdina qua? Ma dai, è una follia! - Ma che follia, ma lo sai che questo qui è un Garpez, uno dei più grandi scultori viventi? - Ma scultore che cosa? Il mio falegname con trentamila lire la fa meglio!",
    persona: "Giovanni, Giacomo e Trio",
  },
  {
    citazione: "E così domani ti sposi? - Sì... ma niente di serio.",
    persona: "Giacomo e Chiara",
  },
  {
    citazione:
      "Scusa, puoi togliere i piedi dal cruscotto, che lo sporchi? - Mii, come sei pignolo! - Io sono pignolo? - Beh, un po' pignolo lo sei! - Cioè, questo qua mi cammina sul cruscotto e io sarei pignolo?",
    persona: "Trio",
  },
  {
    citazione:
      "Mi hai rotto i coglioni, hai capito? Perché non sono un automa! Sono una persona, e ad un certo punto te lo devo proprio dire: vaffanculo! Vaffanculo! Tu, il tuo negozio, la tua villa di merda, mi fai schifo! Stronzo! ... Era occupato.",
    persona: "Giovanni",
  },
  {
    citazione:
      "Sì, però anche tu: ti sembra il caso di dormire con la maglietta di Sforza? - Eh, quella di Ronaldo era finita!",
    persona: "Giovanni e Aldo",
  },
  {
    citazione:
      "Ragazzi! Ho trovato il nuovo Ringhio! - Ma se è nero! - Ma perché devi essere razzista anche coi cani?",
    persona: "Aldo e Giovanni",
  },
  {
    citazione:
      "Buona questa cadrega. - La mela sarebbe la cadrega? - No, la cadrega è la sedia.",
    persona: "Giacomo e Giovanni",
  },

  // Così è la vita (1998)
  {
    citazione:
      "E il settimo giorno Dio creò il cheeseburger! - ...Maria! Che ho fatto, Maria, che ho fatto?! Gli ho spappolato la faccia!",
    persona: "Aldo",
  },
  {
    citazione:
      "Non sento più niente! Oddio, non sento più niente! - Ci credo che non senti niente, deficienti! È ketchup! Hai assassinato il sacchetto d'hamburger, hai assassinato!",
    persona: "Giovanni e Giacomo",
  },
  {
    citazione:
      "Se al mattino spacchi le pietre al pomeriggio scavi le buche. Se al mattino scavi le buche al pomeriggio spacchi le pietre. Se al mattino spacchi le palle... la sera pure.",
    persona: "Giacomo",
  },
  {
    citazione: "Mia moglie è un puttanone.",
    persona: "Aldo",
  },

  // Chiedimi se sono felice (2000)
  {
    citazione:
      "Ma Giacomino, Giacomino, sempre con queste americanate! Finiscila va! - Americanate che cosa?!? È francese il Cyrano!",
    persona: "Aldo e Giacomo",
  },
  {
    citazione:
      "Tu sei il sole, l'amore, l'infinito... Il mio cuore è chiamato trama, la mia gioia, il mio battimani, il veleno, gli attori cani. Chi per la fretta caca nell'ortica, spesso il culo gli formica. ",
    persona: "Giacomo e Aldo (Poeti)",
  },
  {
    citazione: "Chi sa fare sa capire! - Ma che cazzo di proverbio è???",
    persona: "Giovanni e Aldo",
  },
  {
    citazione:
      "Allora, secondo Platone l'uomo una volta era così, come questa mela: perfetto, bastava se stesso ed era felice.",
    persona: "Giovanni",
  },
  {
    citazione:
      "Speriamo di sentire presto gli zoccoli del cavallo di San Bartolomeo. Eh sì. Che venga a pigghiasselo col suo sacco nero!",
    persona: "Trio",
  },

  // La leggenda di Al, John & Jack (2002)
  {
    citazione:
      "Jack, noi stiamo mettendo la nostra vita nelle sue mani e questo non sa neanche come si chiama!",
    persona: "John (Giacomo)",
  },
  {
    citazione:
      "E allora basta, non facciamo più niente. Lascia la lampadina e andiamo tutti a casa. Vorrà dire che ci faremo, per colpa tua, una bella nuotata nell'acido.",
    persona: "Jack (Giovanni)",
  },

  // Fuga da Reuma Park (2016)
  {
    citazione:
      "Ma che ne sai tu? Te sei nato in 'sto posto qua, io sono un immigrato! Chi è di qua sta di qua, chi è di là sta di là, chi è di su sta di su e chi è di giù è un immigrato!",
    persona: "Giovanni",
  },

  // La banda dei Babbi Natale (2010)
  {
    citazione:
      "Io non ho mai temuto la prova costume, è il costume che teme me!",
    persona: "Aldo",
  },
  {
    citazione:
      "Come diceva Winston Churchill: «Non c'è bisogno di inasprire le pene per bigamia, un bigamo ha due suocere e come punizione mi pare che basti.»",
    persona: "Giovanni",
  },
];
