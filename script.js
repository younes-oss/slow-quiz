const quiz = [
      { q: "Capitale de la France ?", 
        options: ["Paris", "Rome", "Madrid","Rabat"],
        correct: 0 
        },

      { q: "2 + 2 = ?", 
        options: ["3", "4", "5"],
        correct: 1 },

      {
        q: "Le soleil est une ?",
        options: ["Planète", "Étoile", "Lune"],
         correct: 1 
      }
    ];

    let index = 0;
    let score = 0;

    const questionEL = document.getElementById("question");
    const optionContent = document.querySelectorAll(".ops");
    const optionDivs = document.querySelectorAll(".option");
    const scoreValue = document.querySelector(".score");
    const result = document.getElementById("result");

    let current    = quiz[index];

    function showQuestion() {
    const current = quiz[index];
    questionEL.textContent = current.q;


    optionDivs.forEach(div => {
    div.style.backgroundColor = ""; 

  });

  // vider les anciens textes
  // optionContent.forEach(el => el.textContent = "");

  // remplir les nouvelles options
  current.options.forEach((opt, i) => {
    optionContent[i].textContent = opt;
  });
  }

  optionDivs.forEach((div ,i) => {
  div.addEventListener("click", () => {

    if (i === quiz[index].correct){
      score++;
      div.style.backgroundColor='green';
    }
    else{
      div.style.backgroundColor='red';
    }
    
    scoreValue.innerHTML=`score : ${score}`;


    index++; // question suivante
    
    
    if (index < quiz.length) {
      
      showQuestion();
      
    }
     
   
     else {
      questionEL.textContent = " Fin du quiz !";
      document.querySelector(".options").style.display = "none";
    }
   
  });

});

  showQuestion();
    
    // Array.from(optionEl).forEach(elem =>{
    //   console.log(elem);
    //   elem.innerHTML = ''
      
    // });
    

    // optionContent.forEach(elem =>{
    //   console.log(elem);
    //   elem.innerHTML = ''
      
    // });

    //  current.options.forEach((opt,i) => {
    //       optionContent[i].innerHTML=opt; 
    // });


     
      
     

    
    

    
     


