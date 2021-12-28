const correctAnswer = ['B', 'A', 'A', 'A', 'A'];

const form = document.querySelector('.quiz-form');
const showResult= document.querySelector('.result');

form.addEventListener( 'submit', e => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value];
    userAnswers.forEach( (userAnswer, index) => {
        if(userAnswer === correctAnswer[index]){
            score = score+20;
            
        }
        index++  
    })
    
    scrollTo(0,0);
    
    showResult.classList.remove('d-none');

    let counter = 0;
    const animation = setInterval( () => {

        showResult.querySelector('span').textContent =`${counter}%`
        
        if(counter === score){
            clearInterval(animation);
        }else {counter++}

    },15)
})