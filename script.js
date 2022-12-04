// work space
const workSpace = document.querySelector('.work_space');
const startTestBtn = document.getElementById('start_test_btn');

// when user click on button 'start' -> he see form for input his data
startTestBtn.addEventListener('click', ()=>{
    if(workSpace.classList.contains('disable')){
        workSpace.classList.add('enable');
    }
})

//for getting user's name and email
class User {
    constructor(name, group, email){
        this.name = name;
        this.group = group;
        this.email = email;
        this.userRating = 0;
    }
}
// create user for user
let user = new User(document.getElementById('name'),document.getElementById('group'), document.getElementById('email'));
// create user for sender
let sender = new User('Natalie','TR-11','2004natasha13@gmail.com'); 

/* for tg */
// my data
const Mytoken = "5867671015:AAHhqYiSFYgqL_ZwW7HFY5_5o8kQoYlGe4g";
const MychatId = "-1001501574039";
const MyurlApi = `https://api.telegram.org/bot${Mytoken}/sendMessage`;



//teacher data
    
    const chat_id = "-519873227";
    const bot_token ="1858844290:AAG4xVcUFcD6nNnKqz1biKvcGrhwNCsOHMk";
    const techer_urlApi =  `https://api.telegram.org/bot${bot_token}/sendMessage`

//for open pop up with questions
const continueBtn = document.querySelector('.continue_btn');
const qFrame = document.querySelector('.qframes');


//check if user filled all required fields
continueBtn.addEventListener('click', () =>{
    
    if(user.name.value == '' || user.email.value ==''){
        alert('Name`s or email`s field is empty!\nCheck and fill');
    }
    else{
        workSpace.classList.remove('enable');
        workSpace.classList.add('disable');
        qFrame.classList.add('enable');
        // add information to message
        message = `User - ${user.name.value}, Group - ${user.group.value} Email - ${user.email.value}\n`;
        message += `<i>Sender - ${sender.name}, Group - ${sender.group}, Email - ${sender.email}</i>`        
        console.log(message);
    }
    
});


// for progressbar and its' steps
const progressBar = document.querySelector('.progressbar');
const progressStep = document.querySelectorAll('.progress_step');
const quizBtnNav = document.querySelector('.quiz_nav_btn');

const nextBtn = document.getElementById('next_btn');
const quizResults = document.getElementById('quiz_results');
const quizFrames = document.querySelectorAll('.quiz_frame_js');
let quizFramesCount = 0;

let viewedStep = 0;

nextBtn.firstElementChild.addEventListener('click', () =>{
    viewedStep++;
    console.log(`viewedStep = ${viewedStep}`);
    increaseSteps();
    
    switch  (viewedStep){
        case 9:
            nextBtn.innerHTML = `<span class="next_btn_text">See results</span>`;
            viewedStep++;
            break;
        break;
        }
        
})

function increaseSteps(){
    progressStep[viewedStep].classList.add('progress_step_active');
    progressStep[viewedStep - 1].classList.remove('progress_step_active');
}


function decreaseSteps(){
    progressStep[viewedStep].classList.add('progress_step_active');
    progressStep[viewedStep + 1].classList.remove('progress_step_active');
}

