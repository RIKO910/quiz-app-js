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
]
const questionEL =document.getElementById('question');
const a_text =document.getElementById('a_test');
const b_text =document.getElementById('b_test');
const c_text =document.getElementById('c_test');
const d_text =document.getElementById('d_test');
const submitbtn=document.getElementById('submit');

let currentQuestion =0 ;

loadQuiz();

function loadQuiz(){
    const currentQuizData =quizData[currentQuestion]
    questionEL.innerHTML=currentQuizData.question;
    a_text.innerHTML=currentQuizData.a;
    b_text.innerHTML=currentQuizData.b;
    c_text.innerHTML=currentQuizData.c;
    d_text.innerHTML=currentQuizData.d;
    
}

submitbtn.addEventListener("click",()=>
{   
    currentQuestion++;
    if(currentQuestion<quizData.length)
    {
        loadQuiz();
    }
    else{
        alert('okkk finished|')
    }


})