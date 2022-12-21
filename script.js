// work space
const workSpace = document.querySelector('.work_space');
const startTestBtn = document.getElementById('start_test_btn');
const nextBtn = document.getElementById('next_btn');

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
    else if(!user.email.value.includes('@gmail.com') ){
        alert("Write your real email, please");
    }
    else{
        workSpace.classList.remove('enable');
        workSpace.classList.add('disable');
        qFrame.classList.add('enable');
        countQuestions = 0;
        user.userRating = 0;
        renderingQuestions(countQuestions);
        userAnswers = [];
        userAnswersCheckBox = [];
        selectedArray = [];
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


const quizResults = document.getElementById('quiz_results');
const quizFrames = document.querySelectorAll('.quiz_frame_js');
let viewedStep = 0;


function clickNextBtn(){
    nextBtn.firstElementChild.addEventListener('click', () =>{
        viewedStep++;
        console.log(`viewedStep = ${viewedStep}`);
        increaseSteps();
    

    if(viewedStep == 9){
        nextBtn.innerHTML = `<span class="next_btn_text">See results</span>`; 
    }
            
})
}
clickNextBtn();

function increaseSteps(){
    progressStep[viewedStep].classList.add('progress_step_active');
    progressStep[viewedStep - 1].classList.remove('progress_step_active');
}

function resetSteps(){
    progressStep[viewedStep].classList.remove('progress_step_active');
    viewedStep = 0;
    progressStep[viewedStep].classList.add('progress_step_active');
}







// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// working with objects and class

// Створити об’єкт «Користувач» з властивостями «Прізвище», «Ім’я». 
var UserObject = {
    name:"Nataliya",
    sername: "Bratchykova"
}
console.log(`User object:\n\t${UserObject.name} ${UserObject.sername}`);

// Створити об’єкт «Студент», що містить властивості «Спеціальність», «Група» і методи: додати, змінити, видалити дані. 
var Student = {
    speciality: "Computer science",
    group: "TR-11",

    // method for adding data
    addData(addProperty, addData){
        Object.assign(this, { [addProperty]: addData})
    },

    // method for changing data
    changeData(propertyName, propertyValue){
        return this[propertyName] = propertyValue
    },

    // method for deleting data
    deleteData(propertyName){
        delete this[propertyName];
    }

}
console.log(`Student object before using methods:\n\t${Student.speciality}, ${Student.group}`);

Student.addData("university", "KPI");
console.log(`Added new property: university - ${Student.university}`);

Student.changeData("group", "JPN-11")
console.log(`Changed  property's value: group - ${Student.group}`);

Student.deleteData("group");
console.log("Deleted data - group and value");
for(var key in Student){
    console.log(` ${key}- ${Student[key]}\n`);
}

// Реалізувати копіювання властивостей і методів об’єктів «Користувач» і «Студент»
var UserObject1 = UserObject;
var StudentObject1 = Student;
console.log("Coppy User and Students objescts. Show results\n");
console.log("User's coppy\n");
for(var key in UserObject1){
    console.log(`${key} - ${UserObject1[key]}\n`);
}
console.log("\n\nStudent's coppy\n");
for(var key in StudentObject1){
    console.log(`${key} - ${StudentObject1[key]}\n`);
}
Student.prototype = Object.create(Student);

console.log("\n\n\n\tAdd to student's prototype function for showing his data");
// Додати в прототип об’єкту «Студент» метод «Показати дані»
 Student.prototype.showData = function(){
    for(var key in Student){
        console.log(`Student's ${key} is ${this[key]}\n`);
    }
 }
 Student.prototype.showData();

// Створити об’єкт «Успішність», що наслідує властивості і методи об’єкту «Студент» і має додаткові властивості «Тест», «Спроба», «Бали»
// і метод «Розрахунок середнього балу» (за декілька спроб). Перевизначити в об’єкті «Успішність» метод «Показати дані».

var Success = {};
Success = Object.create(Student);

Success.prototype.test = "test";
Success.prototype.attempt = 10;
Success.prototype.points = [1,2,3,4,5,6,7,8,9,10];

Success.prototype.countAveragePoint = function(){
    count = 0;
    for(var i = 0; i < this.points.length; i++){
        count += this.points[i];
    }
    count /= this.attempt;
    return count;
}

Success.prototype.showData = function(){
    for(var key in Success.prototype){
        console.log(`Success's ${key} is ${this[key]}\n`);
    }
}
Success.prototype.showData();


//Реалізувати класи «Студент» і «Успішність» з такими же методами і властивостями як і попередні об’єкти. «Успішність» наслідує
// методи та властивості від «Студент». При реалізації використовувати геттери і сеттери, наприклад, для перевірки даних чи виведення в різних
//виглядах інформацію

class Student1{
    constructor(speciality, group){
        this.speciality = speciality;
        this.group = group;
    }
    get group(){
        return this._Group;
    }
    set group(value){
        if(value.includes([0-9])){
            console.log("set correct group's name");
        }
        else{
            this._Group = value;
        }
    }

    // method for adding data
    addData(addData){
        this.addData = addData;
    }

    // method for changing data
    changeData(propertyName, propertyValue){
        this[propertyName] = propertyValue
    }

    // method for deleting data
    deleteData(propertyName){
        this[propertyName] = null;
    }

    showData(){
        
        console.log(`Class Student\n\tSpeciality - ${this.speciality}\n\tGroup - ${this._Group}`);
        
    }
}
var studentNata = new Student1("Computer Science", "TR-11");
console.log("\n\n\nWORK WITH CLASS\n");
studentNata.showData();



// success class 
class Success1 extends Student1{
        test = "test";
        attempt = "attempts";
        
    constructor(speciality, group, points){
        
        super(speciality, group)
        this._points = points;
    }

    // add set and get for points array
    
    counrAveragePoint(){
       let count = 0;
        for(var i = 0; i < this._points.length; i++){
            count+= this._points[i];
        }
       return count /= this._points.length;
    }

    showData(){
        
        var arrayStr = '';
        this._points.forEach(element => {
            arrayStr += element + ' ';
        });
        console.log(`Class Succedd\n\tSpeciality - ${this.speciality}\n\tGroup - ${this._Group}\n\tTest - ${this.test}\n\tPoints - ${arrayStr}`);
    }
}

var suc = new Success1("Computer Science", "TR-11", [1,2,3,4,5,6,7]);
console.log(`Average point - ${suc.counrAveragePoint()}`);
suc.showData();

