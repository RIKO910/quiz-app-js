const quizData = [
    {
        question:'How old is Florin?',
        a:'10',
        b:'17',
        c:'26',
        d:'18',

        correct:'c'
    },
    {
        question:'What is best programmin language in 2022',
        a:'c',
        b:'c++',
        c:'python',
        d:'java',
        correct:'c'
    },
    {
        question:'Who is president of Bangladesh',
        a:'Riko',
        b:'Tarikul',
        c:'Abdul Hamid',
        d:'Syed',
        correct:'c'
    },
    {
        question:'what does HTML for?',
        a:'Hypertext Markup Language',
        b:'Cascading Style Sheet',
        c:'.......',
        d:'......',
        correct:'a'
    }
];
const answerEls=document.querySelectorAll(".answer");
const quiz=document.getElementById("quize");
const questionEL =document.getElementById('question');
const a_text =document.getElementById('a_test');
const b_text =document.getElementById('b_test');
const c_text =document.getElementById('c_test');
const d_text =document.getElementById('d_test');
const submitbtn=document.getElementById('submit');

let currentQuestion =0 ;
let score =0;
//let answer;

loadQuiz();

function loadQuiz(){
    deselctAnswers();
    const currentQuizData =quizData[currentQuestion]
    questionEL.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
    
}

function getSelected(){
  //  const answerEls=document.querySelectorAll(".answer");
     
    let answer =undefined;

    answerEls.forEach((answerEls)=>{
        if(answerEls.checked){
            answer= answerEls.id;
        }
    });
    return answer;
}

function deselctAnswers(){
    answerEls.forEach((answerEls)=>{
        answerEls.checked =false;
    });
   // return answer;
}

submitbtn.addEventListener("click",()=>
{   
    const answer = getSelected();

    console.log(answer )
    if(answer){
        if(answer === quizData[currentQuestion].correct)
        {
            score++
        }
        currentQuestion++;
        if(currentQuestion<quizData.length)
    {
        loadQuiz();
    }
    else{
        quiz.innerHTML =`<h2>You answer correctly at ${score}/${quizData.length}</h2>`;
    }
    }
});