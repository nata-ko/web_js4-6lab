// array, that contains objects for rendering questions, answers and result
const DATA = [
    //first
     { 
         question:{
             name:'1) function Animal(...){}\nlet cat = new Animal(...);\nДо властивосей та методів яких функцій матиме доступ об`єкт cat',
             type:'checkbox'
         },
 
         answers:[
             {
                 name:'Animal',
                 answerId:0
             },
             {
                 name:'Cat',
                 answerId:1
             },
             {
                 name:'Object',
                 answerId:2
             },
             {
                 name:'DOM',
                 answerId:3
             }
         ],
         correctAnswers:[
             'Animal', 'Object'
         ],
 
         taskId:1,
 
         code:{
             hasCode: false,
         }
         
     },
 
     //second
     {
         question:{
             name:'2) Що таке прототип?',
             type:'radio'
         },
 
         answers:[
             {
                 name:'механізм, за допомогою якого об`єкти JavaScriptу спадковують властивості один від одного',
                 isCorrect: true,
                 answerId:21
             },
             {
                 name:'механізм, за допомогою якого об`єкти JavaScript не успадковують властивості один від одного',
                 isCorrect: false,
                 answerId:22
             },
             {
                 name:'механізм, що запобігає об`єктам JavaScript успадковувати властивості один від одного',
                 isCorrect: false,
                 answerId:23
             },
             {
                 name:'механізм, якого давно потрібно позбутись',
                 isCorrect: false,
                 answerId:24
             }
         ],
 
         taskId:2,
         code:{
             hasCode: false,
         }
         
     },
        //third
     {
         question:{
             name:'3) Як розмістити 3 блока таким чином, щоб вони стояли в ряд, а не колонку, і відстань між ними була однакова?(using flexbox)?',
             type:'text_input'
         },
 
         answers:[
             {
                 answer:'.block_wrapper{display:flex; justify-content: space-between};',
                 isCorrect: true,
                 answerId:31
             },
             
         ],
 
         taskId:3,
         code:{
             hasCode: true,
             code:` &lt;div class = "block_wrapper" &gt;<br>
             <div class="light_margin">&lt;div class = "block"&gt;&lt;/div&gt;<br></div>
             <div class="light_margin">&lt;div class = "block"&gt;&lt;/div&gt;<br></div>
             <div class="light_margin">&lt;div class = "block"&gt;&lt;/div&gt;<br></div>
             &lt; /div&gt;<br>`
         }
         
     },
 //fourth
     {
         question:{
             name:'4) Знайти та виправити помилку',
             type:'text_input'
         },
 
         answers:[
             {
                 answer:'<div class = "block2"></div>',
                 isCorrect: true,
                 answerId:41
             }
             
         ],
 
         taskId:4,
         code:{
             hasCode: true,
             code:`&lt;div class = "block_wrapper" &gt;<br>
             <div class="light_margin">&lt;div class = "block1"&gt;&lt;/div&gt;<br></div>
             <div class="light_margin">&lt;div class = "block2"&gt;&lt;div&gt;<br></div>
             <div class="light_margin">&lt;div class = "block3"&gt;&lt;/div&gt;<br></div>
             &lt; /div&gt;<br>`
         }
         
     },
 //fifth
     {
         question:{
             name:'<br>5) Як вивести в консоль національність(nationality) об`єкту japaNatka?',
             type:'text_input'
         },
 
         answers:[
             {
                 answer:'console.log(japaNatka.nationality);',
                 isCorrect: true,
                 answerId:51
             }
             
         ],
 
         taskId:5,
         code:{
             hasCode: true,
             code:'function Person(name, age, nationality){...}<br>let japaNatka = new Person(`Natalie`, `18`, `Ukrainian`);'
         }
         
     }, 
     //6th 
     {
         question:{
             name:'6) Встановити відповідність',
             type:'dragAndDrop'
         },
 
         answers:[
             {
                 name:'function Brick(...){...}\nfunction BlackBrick(){\n\t Brick.call(this);\n}',
                 answerId:61
             },
 
             {
                 name:'function Person(name, age, sex){...}\nPerson.prototype.birthYear = 2004;',
                 answerId:62
             },
 
             {
                 name:'Object.create();',
                 answerId:63
             },
 
             {
                 name:'function Person(name, age, sex){\n\tsayHi(){...};\n}\nPerson.prototype.killSomeone = function(){...};',
                 answerId:64
             }
             
         ],
 
         keys:[
            {
             name:'Створення об`єкта прототипа',
             id:61
            },
            {
             name:'Додавання нової властивості прототипу',
             id:62
            },
            {
             name:'Додавання нового методу прототипу',
             id:63
            },
            {
             name:'Приклад наслідування прототипів',
             id:64
            }
 
         ],
 
         kaPares:[
             {
                 key:'Створення об`єкта прототипа',
                 correctAnswer:'Object.create();'
             },
             {
                 key:'Додавання нової властивості прототипу',
                 correctAnswer:'function Person(name, age, sex){...}\nPerson.prototype.birthYear = 2004;'
             },
             {
                 key:'Додавання нового методу прототипу',
                 correctAnswer:'function Person(name, age, sex){\n\tsayHi(){...};\n}\nPerson.prototype.killSomeone = function(){...};'
             },
             {
                 key:'Приклад наслідування прототипів',
                 correctAnswer:'function Brick(...){...}\nfunction BlackBrick(){\n\t Brick.call(this);\n}'
             }
         ],
 
         taskId:6,
         code:{
             hasCode: false,
             code:''
         }
         
     },
     //7th 
     {
         question:{
             name:'7) Функція, що слугує аксесором для зміни/отримання прототипу',
             type:'radio'
         },
 
         answers:[
             {
                 name:'Object.getPrototypeOf(objectName);',
                 isCorrect: false,
                 answerId:71
             },
 
             {
                 name:'Object.setPrototypeOf(objectName, prototypeName);',
                 isCorrect: false,
                 answerId:72
             },
 
             {
                 name:'Object.create();',
                 isCorrect: false,
                 answerId:73
             },
 
             {
                 name:'objectName.__proto__',
                 isCorrect: true,
                 answerId:74
             }
             
         ],
 
         taskId:7,
         code:{
             hasCode: false,
         }
         
     },
     
     //8th 
     {
         question:{
             name:'8) Яка функція може замінити і бути сетером objectName.__proto__',
             type:'radio'
         },
 
         answers:[
             {
                 name:'Object.getPrototypeOf(objectName);',
                 isCorrect: false,
                 answerId:81
             },
 
             {
                 name:'Object.setPrototypeOf(objectName, prototypeName);',
                 isCorrect: true,
                 answerId:82
             },
 
             {
                 name:'Object.create();',
                 isCorrect: false,
                 answerId:83
             },
 
             {
                 name:'objectName.__proto__',
                 isCorrect: false,
                 answerId:84
             }
             
         ],
 
         keys:[
            {
             name:'Результат програми - true',
             id:81
            },
            {
             name:'Результат програми - false',
             id:82
            },
            {
             name:'Результат програми - Undefined',
             id:83
            }
 
         ],
         taskId:8,
         code:{
             hasCode: false,
             code:''
         }
     },
 
     //9th 
     {
         question:{
             name:'9) Встановити відповідність',
             type:'select'
         },
         answers:[
             {
                 name:'',
                 isSelected:true,
                 answerId:01
             },
             {
                 name:'setPropertyOf',
                 isSelected:false,
                 answerId:0
             },
 
             {
                 name:'getPropertyOf',
                 isSelected:false,
                 answerId:1
             },
 
             {
                 name:'Object',
                 isSelected:false,
                 answerId:2
             },
 
             {
                 name:'prototype',
                 isSelected:false,
                 answerId:3
             },
 
             {
                 name:'create',
                 isSelected:false,
                 answerId:4
             },
 
             {
                 name:'__proto__',
                 isSelected:false,
                 answerId:5
             }
         ],
         keys:[
            {
             start:'1) Object.',
             end:'(user1, user2)',
             id:91
            },
 
            {
             start:'<br>2)',
             end:'.getPrototypeOf(user1);',
             id:92
            },
            {
             start:'<br>3) Cat.',
             end:'= Object.create(Animal.prototype);',
             id: 93
            },
 
            {
             start:`<br>4) let user = {<br>name:'noname',<br>id: 29<br>};<br>let vipUser = { isVip: true};<br>vipUser.`,
             end:'=user;',
             id:94
            }
 
         ],
         taskId:9,
         code:{
             hasCode: false,
             code:''
         
         },
         kaPares:[
             {
                 key:'1) Object.',
                 correctAnswer:'setPropertyOf'
             },
             {
                 key:'<br>2)',
                 correctAnswer:'Object'
             },
             {
                 key:'<br>3) Cat.',
                 correctAnswer:'prototype'
             },
             {
                 key:`<br>4) let user = {<br>name:'noname',<br>id: 29<br>};<br>let vipUser = { isVip: true};<br>vipUser.`,
                 correctAnswer:'__proto__'
             }
         ]
     },
 
     {//10th 
     
     
         question:{
             name:'10) Встановити відповідність',
             type:'select'
         },
 
         answers:[
             {
                 name:'',
                 isSelected:true,
                 answerId:01
             },
             {
                 name:`console.log(!natasha.Enjoy_life);`,
                 isSelected:false,
                 answerId:0
             },
 
             {
                 name:'console.log(student.freeTime);',
                 isSelected:false,
                 answerId:1
             },
 
             {
                 name:'console.log(natasha.freeTime);',
                 isSelected:false,
                 answerId:2
             },
 
             {
                 name:'console.log(kirill.freeTime);',
                 isSelected:false,
                 answerId:3
             },
 
             {
                 name:'console.log(student.hobby);',
                 isSelected:false,
                 answerId:4
             },
             
         ],
 
         keys:[
            {
             start:'1) it`s illusion',
             end:'',
             id:101
            },
 
            {
             start:'<br>2) false ',
             end:'',
             id:102
            },
            {
             start:'<br>3) true',
             end:'',
             id: 103
            },
 
            {
             start:'<br>4) Undefined',
             end:'',
             id:104
            }
 
         ],
 
         kaPares:[
             {
                 key:'1) it`s illusion',
                 correctAnswer:'console.log(natasha.freeTime);'
             },
             {
                 key:'<br>2) false ',
                 correctAnswer:'console.log(student.freeTime);'
             },
             {
                 key:'<br>3) true',
                 correctAnswer:`console.log(!natasha.Enjoy_life);`
             },
             {
                 key:`<br>4) Undefined`,
                 correctAnswer:'console.log(student.hobby);'
             }
         ],
 
         taskId:10,
         code:{
             hasCode: true,
             code:`let student = {<br>
                 <div class="light_margin"> name:'noname',<br></div>
                 <div class="light_margin">freeTime:false,<br></div>
                 <div class="light_margin">Enjoy_life: false<br></div>
             }<br>
 
             let natasha = Object.create(student);<br>
             console.log(!natasha.Enjoy_life);<br>
 
             Object.setPrototypeOf(natasha, { freeTime:'is illusion'});<br>
             console.log(natasha.freeTime);<br>
             console.log(student.freeTime);<br>
 
             let kirill = Object.create(natasha);<br>
             Object.setPrototypeOf(kirill, student);<br>
             console.log(kirill.freeTime);<br>
 
             Object.setPrototypeOf(kirill, {
                 hobby:'sport'
             })<br>
 
             console.log(kirill.name);<br>
             console.log(student.name);`
         }
         
     }
 ]
 const shuffle = (array) => {
     let amount = array.length, temp, i;
   
     // while we have elements for shuffling array
     while (amount) {
   
       // take the last element
       i = Math.floor(Math.random() * amount--);
   
       // and exchange him with current
       temp = array[amount];
       array[amount] = array[i];
       array[i] = temp;
     }
   
     return array;
   }
 
 
 // function for rendering question
 const renderingQuestions = (index) => {
    // shuffling our answers
     shuffle(DATA[index].answers);
     // function for rendering answers
     const renderingAnswers = () => {
        //check question type
         if(DATA[index].question.type =='checkbox'){
            // do through array
             return DATA[index].answers.map((answer) =>{
                 return`
                 <div class="answer_option">
                         <input type="checkbox" name="answer_option${answer.answerId}" id="${answer.answerId}" class = "answer"  value = "${answer.name}">
                         <label for="${answer.answerId}">${answer.name}</label>
                     </div>
                 `
             }).join('');
         }
 
         else if(DATA[index].question.type =='radio'){
             return DATA[index].answers.map((answer) =>{
                 return`
                 <div class="answer_option">
                     <input type="radio" name="answer_option${index}" id="${answer.answerId}" class = "answer"  value = "${answer.name}">
                     <label for="${answer.answerId}">${answer.name}</label>
                  </div>
                 `
             }).join('');
         }
 
         else if(DATA[countQuestions].question.type =='text_input'){
             return DATA[index].answers.map((answer) =>{
                 return`
                     <div class="answer_option _write_answer">
                         <input type="text" name="answer_option${answer.answerId}" id="${answer.answerId}" placeholder=".class{color:white; text-decoration:none;}" class = "input_text answer"  class = "answer" >
                     </div>
                 `
             }).join('');
         }
         else if(DATA[index].question.type =='dragAndDrop'){
             return DATA[index].answers.map((answer) =>{
                 return`
                     <div class="answer_option">
                     <div class="answer_card answer" draggable="true" data-text="${answer.name}" id = "${answer.answerId}" name = "answer_option${answer.answerId}" value = "${answer.name}">
                     ${answer.name}
                     </div>
                 </div>`
                 }).join('');
         }
 
         else if (DATA[index].question.type =='select'){
             return DATA[index].answers.map((answer) =>{
                 if(answer.isSelected){
                     return`
                     <option value="${answer.name}" class = "answer" id = "${answer.answerId}" name ="option" selected>${answer.name}</option>
                     `
                 }
                 else{
                     return`
                     <option value="${answer.name}" class = "answer" id = "${answer.answerId}" name ="option">${answer.name}</option>
                     `
                 }
                 
             }).join('');
         }
     }
     //function for rendering keys(for some type of questions)
     const renderingKeys = () =>{
         if(DATA[index].question.type =='dragAndDrop'){
             return DATA[index].keys.map((key) =>{
                 return`
                 <div class="answer_option answer dragPlace">
                     <label for="" >${key.name}</label>
                     <div class="answer_place" data-text="${key.name}" ></div>
                 </div>
                 `;
             }).join('');
         }
 
         else if (DATA[index].question.type =='select'){
             return DATA[index].keys.map((key) =>{
                 return`
                 ${key.start}.<span class="answer_option" >
 
                 <select name="select" id="select"  class="select_options" data-keystart = "${key.start}">
                     ${renderingAnswers()}
                 </select>
     
             
                 ${key.end}
     
             </span>
                 `
             }).join('');
         }
     }
 
         
     if(DATA[index].question.type =='checkbox'){
        //insert in html next contant
         questions.innerHTML = `
         <div class="quiz_frame_title _title" data-question = "${DATA[index].question.name}" >${DATA[index].question.name}</div>
         <div class="quiz_options">
             ${renderingAnswers()}
         </div>
         `;
     }
     else if(DATA[countQuestions].question.type =='radio'){
         questions.innerHTML =  `
         <div class="quiz_frame_title _title" data-question = "${DATA[index].question.name}">${DATA[index].question.name}</div>
         <div class="quiz_options">
             ${renderingAnswers()}
         </div>
         `;
     }
     
     else if(DATA[countQuestions].question.type =='text_input'){
         questions.innerHTML =  `
                 <div class="quiz_frame_title _title" data-question = "${DATA[index].question.name}">
                 ${DATA[index].question.name}<br>
                     
                    ${DATA[index].code.code}
                 </div>
 
                 <div class="quiz_options">
                     ${renderingAnswers()}
                 </div>
             
         `;
     }
     else if(DATA[index].question.type =='dragAndDrop'){
         questions.innerHTML =  `
         <div class="quiz_frame_title _title" data-question = "${DATA[index].question.name}">${DATA[index].question.name}</div>
         ${DATA[index].code.code}
         <div class="quiz_option_bank">
 
             <div class="quiz_options">
 
                 ${renderingKeys()}
             </div>
 
             <div class="quiz_options">
                 ${renderingAnswers()}
                 
             </div>
         </div>`
     }
 
     else if (DATA[index].question.type =='select'){
     questions.innerHTML = 
     `
     <div class = "question_and_code">
         <div class="quiz_frame_title _title" data-question = "${DATA[index].question.name}">${DATA[index].question.name}</div>
         <div class = "code_place">${DATA[index].code.code}</div>
     </div>
 
     <div class="select_quiz">
         ${renderingKeys()}
     </div>
     `;
     
     }
     
 }
 
 // array for saving user's a
 let userAnswers = [];
 
 // class for saving objects that will relate to array with user's answers
 class userAnswersObj{
     constructor(question, answer){
         this.question = question;
         this.answer = answer;
     }
 }

 // arrays for saving user's answers for tasks with drag and drop and checkbox
 let userAnswersCheckBox = [];
 let userDragAndDropAnswers = [];
 
 // function for rendering result
 const renderingResults  = () => {
     questions.innerHTML = `
     <div class="result_title _title">Results</div>
         <div class="user__data">${user.name.value}</div>
         <div class="rezult__table">
             <div class="result_score">YOUR RATING: ${user.userRating}/${DATA.length}</div>
             <div class="result_graf"></div>
         </div>
     `;

     document.querySelector('.quiz_nav_btn').innerHTML = `
     <button class="btn next_btn" id="next_btn" disabled>
        <span class="next_btn_text send_rez">Send Rezults</span>
    </button>`;


     //message that will be sent on telegram
     message += `\n${user.name.value}'s test's score: ${user.userRating}/${DATA.length}\n`;
     console.log(message);

     document.querySelector('.send_rez').addEventListener('click', ()=>{
        document.querySelector('.quiz_nav_btn').innerHTML = `
        <button class="btn next_btn" id="next_btn">
           <span class="next_btn_text exit">Exit</span>
       </button>`;

       document.querySelector('.exit').addEventListener('click', ()=>{
        document.querySelector('.qframes').classList.remove('enable');
        document.querySelector('.quiz_nav_btn').innerHTML = `
            <button class="btn next_btn viewZero" id="next_btn" disabled>
                <span class="next_btn_text viewZero">Next</span>
            </button>`;
        
     })
       
     })  
     

     
    

 }
 
 // constantces
 const qframes = document.querySelector('.qframes');
 const questions = document.getElementById('questions');
 const qFrames = document.querySelectorAll('.quiz_frame_js');
 let countQuestions = 0;
 let index = 0;
 
// call function for rendering questions 
 renderingQuestions(countQuestions);
 
 // funcion for checking answers on radio type questions
 const checkAnswerRadio = (index)=>{
    // for saving correct answer
       let correctAnswer;
    // find correct answer in data array
       DATA[index].answers.map((answer) =>{
           if(answer.isCorrect){
               correctAnswer = answer.name;
           }
       });
       // check whether user's answer equils to correct
       if(userAnswers[index].answer == correctAnswer){
        // increase score
         score++;
         // print in console that user's answer is correct
         console.log("your answer is correct");
 
       }
       else{
        // print in console that user's answer is correct
         console.log("YOUR ANSWER IS NOT CORRECT");
     };
 }
 
 // funcion for checking answers on text input type questions
 const checkAnswerInputText= (index) =>{
        // for saving correct answer
       let correctAnswer ;
        // go through array and find correct answer
       DATA[index].answers.map((answer) =>{
         if(answer.isCorrect){
             correctAnswer = answer.answer;
         }
     });
     // compare user's answer and correct
       if(userAnswers[index].answer == correctAnswer){
        // increase score
         score++;
         console.log("your answer is correct");
 
       }
       else{
         console.log("YOUR ANSWER IS NOT CORRECT");
       
     }
 }
 // function for checking user's answer for checkbox type questions
 const checkAnswerCheckbox = (index) =>{
    // for counting how many answers user chose
  let countCorrect = 0;
  // count other answers if they were chosen
  let otherAns = 0;
    // count how many user's answers equil to correct 
    userAnswers[index].answer.map((answer) =>{
        DATA[index].correctAnswers.map((correct) =>{
            if(answer == correct){
                countCorrect++;
            }
            else{
                otherAns++;
            }
        })
    })
    //if correctAnswers
     if(countCorrect == DATA[index].correctAnswers.length  && (otherAns == DATA[index].correctAnswers.length ||otherAns == DATA[index].correctAnswers.length+1) ){
         score++;
         console.log("your answer is correct");
         console.log("USER CHOSE " + userAnswers[index].answer.length + " ANSWERS");
     }
     else{
         console.log("YOUR ANSWER IS NOT CORRECT");
     }
 }
   
 // variable for counting user's score
 let score = 0;
