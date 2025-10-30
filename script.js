const quiz = [
      { q: "Capitale de la France ?", 
        options: ["Paris", "Rome", "Madrid"],
        correct: 0 
        },


      { q: "2 + 2 = ?", 
        options: ["3", "4", "5"],
        correct: 1 },

      {
        q: "Le soleil est une ?",
        options: ["Planète", "Étoile", "Lune"],
         correct: 1 }
    ];

    let index = 0;
    let score = 0;

    let questionEL = document.getElementById("question");
    let optionEl   =document.getElementById("option");
    let current    = quiz[index];
