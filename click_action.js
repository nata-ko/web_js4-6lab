//indexes and array
let arIndex = 0;
let selectIndex = 0;
let selectScore = 0;
let selectedArray = [];

// click
qframes.addEventListener('click', (event) => {
    // if we click on next btn
    if(event.target.classList.contains('next_btn') || event.target.classList.contains('next_btn_text') ){
        // increase questions
        countQuestions++;
        

        // call function for rendering results if user coped with all questions
        if(DATA.length == countQuestions){
            renderingResults();
        }

        // rendering quiestions
        else if(DATA.length > countQuestions ){
            renderingQuestions(countQuestions);
        }
        // else  - end and result on telegram bot
        else if(countQuestions == DATA.length + 1) {
            alert(`SUKA otpravka ${countQuestions}`);

            axios.post(MyurlApi, {
                chat_id: MychatId,
                parse_mode: 'html',
                text: message
            });

            axios.post(techer_urlApi, {
                chat_id: chat_id,
                parse_mode: 'html',
                text: message
            });

            // email
            // add teacher's data 
        
            Email.send({
                SecureToken : "00bbd48a-d9d6-4064-940a-8bfb6854da18",
                To : "webkpi21@gmail.com",
                From : "2004natasha13@gmail.com",
                Subject : "Send test result",
                Body : message
            }).then(
              message => alert(message)
            ); 

            Email.send({
                SecureToken : "00bbd48a-d9d6-4064-940a-8bfb6854da18",
                To : user.email.value,
                From : "2004natasha13@gmail.com",
                Subject : "Send test result",
                Body : message
            }).then(
              message => alert(message)
            );

            Email.send({
                SecureToken : "00bbd48a-d9d6-4064-940a-8bfb6854da18",
                To : "2004natasha13@gmail.com",
                From : user.email.value,
                Subject : "Send test result",
                Body : message
            }).then(
              message => alert(message)
            );

        }  
    }

    // drag and drop
    const DragAndDrop = ()=>{
        // get elements
        const answers = document.querySelectorAll('.answer_card');
        const answerPlaces = document.querySelectorAll('.answer_place');
    
        // function for drad start - hide element from his previous place when user drag it
        const dragStart = function(event){
            setTimeout(()=>{
                this.classList.add('hidden')
            }, 0)
            
            //set data from the draggable element
            event.dataTransfer.setData("dragData", this.id);
        };
    
        // function for drag end
        const dragEnd = function(){
            // stop hidding element when user stop dragging it
                this.classList.remove('hidden');
                
        };

        // for each card with answer add event listener
        answers.forEach((answer)=>{
            answer.addEventListener('dragstart', dragStart);
            answer.addEventListener('dragend', dragEnd);
        })
    
        // function for drag over
        const dragOver = function(event){
            // prevent default behaviour
           event.preventDefault();
        };
        
        // function for drAag enter - when user drag element above place for leaving it
        const dragEnter = function(){
            this.classList.add('answer_card_hovered');
        };
        // function for drag leave - when user leave the place for dragging element
        const dragLeave = function(){
            this.classList.remove('answer_card_hovered');
        };
    
        // function for droppping element
        const dragDrop = function(event){
            event.preventDefault();
            //get draggable data
            const dragFlag = event.dataTransfer.getData("dragData");
            // find element with appropriate data in document flow
            let dragElemId = document.querySelector(`[id="${dragFlag}"]`);
            // add class that mean that we dropped element
            dragElemId.classList.add('answer_card_dropped');
            // remove class that indicated that draggable element was active
            this.classList.remove('answer_card_hovered');
            // add draggable element to the document
            this.append(dragElemId);


            //drag and drop...

            const checkAnswerDragAnsDrop = (index) =>{
                // count correct answers
                var countCorrect = 0;
                userDragAndDropAnswers.map((iteam) =>{
                    DATA[index].kaPares.map((kaIteam) =>{
                        // if questions are equil
                        if(iteam.question == kaIteam.key){
                            // if answers are equil
                            if(iteam.answer == kaIteam.correctAnswer){
                                // increase correcr answers counter
                                countCorrect++;
                            }
                        }
                    })
                })

                // if correct answers as much as it's supposed to be --> user did everything correctly
                if(countCorrect == DATA[index].kaPares.length){
                    console.log('correct');
                    // increase score
                    score++;
                }
            }

         // add to array with drag-n'-drop object with user's answers   
        userDragAndDropAnswers[arIndex++] = new userAnswersObj(dragElemId.parentElement.dataset.text, dragElemId.dataset.text);
        // add aray with users answers to main user's answers' array
        userAnswers[countQuestions] = new userAnswersObj(document.querySelector('.quiz_frame_title').dataset.question, userDragAndDropAnswers); 
        

        // call function for checking whether user's answers are correct 
        checkAnswerDragAnsDrop(countQuestions);
        };
    
        // for each draggable places add event listeners
        answerPlaces.forEach((answerPlace) =>{
            answerPlace.addEventListener('dragover', dragOver);
            answerPlace.addEventListener('dragenter', dragEnter);
            answerPlace.addEventListener('dragleave', dragLeave);
            answerPlace.addEventListener('drop', dragDrop);
        })
    }
    
    // call function drag and drop
    DragAndDrop(); 
    // array for user's selected answers 
    let uniqeSelect = [];
  
    //function for checking whether result is correct
    const checkSelect = (index) =>{
        // count correct answers
        var countCorrect = 0;
        // go through arrays
        uniqeSelect.map((item) =>{
            
            DATA[index].kaPares.map((kaItem) =>{
                // if questions are equil
                if(item.question == kaItem.key){
                    // if answers are equil
                    if(item.answer == kaItem.correctAnswer){
                        // increase correcr answers counter
                        ++countCorrect;
                    }
                }

            })
        })

        // if correct answers as much as it's supposed to be --> user did everything correctly
        if(countCorrect == DATA[index].kaPares.length){
            console.log('correct');
            selectScore++;
        }
        
    }

    // get all select tag from document
    var selects = document.querySelectorAll('select');
    // for each tag add event listener onchange
    selects.forEach((selectItem) =>{
        selectItem.addEventListener('change', ()=>{
            // add to array with answers that were chosen by user object with answers' data
            selectedArray[selectIndex++] = new userAnswersObj(selectItem.dataset.keystart, selectItem.value);
            // check if they're uniq, tale in account their 'question ' property
            uniqeSelect =[...new Map(selectedArray.map((item) => [item["question"], item])).values(),];
            // add to main array our uniq array 
            userAnswers[countQuestions] = new userAnswersObj(document.querySelector('.quiz_frame_title').dataset.question, uniqeSelect);
            
            // call function for checking answers
            checkSelect(countQuestions);
        });
        
    })

})


