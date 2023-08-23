const quizDB = [
    {
        question : "Q1:FULL form of css",
        a: "Cascading style sheet",
        b: "Cascading super sheet",
        ans: "ans1"

    },

    {
        question : "Q1:FULL form of css",
        a: "Cascading style sheet",
        b: "Cascading super sheet",
        ans: "ans1"

    },

    {
        question : "Q1:FULL form of css",
        a: "Cascading style sheet",
        b: "Cascading super sheet",
        ans: "ans1"

    },

    {
        question : "Q1:FULL form of css",
        a: "Cascading style sheet",
        b: "Cascading super sheet",
        ans: "ans1"

    },

    {
        question : "Q1:FULL form of css",
        a: "Cascading style sheet",
        b: "Cascading super sheet",
        ans: "ans2"

    },
];

const question = document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');

const submit=document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');


let questionCount = 0;

const loadQuestion = () => {

    constquestionList = quizDB[questionCount]
    question.innerText = question.question;

    option1.innerText= question.a;
    option2.innerText= question.b;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answer.forEach((curAnsElem)  => {
        if(curAnsElem.checked) {
            answer= curAnsElem.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

})






