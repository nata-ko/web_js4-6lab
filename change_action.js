let checkboxIndex = 0;
// check all changes that happen inside our qframes element
qframes.addEventListener('change', (event) => {  
    if(event.target.classList.contains('answer')){
        // if we work with radio 
        if(event.target.type == "radio"){
            // add yo array object, where questuion - key, redio's value is value
            userAnswers[countQuestions] = new userAnswersObj(document.querySelector('.quiz_frame_title').dataset.question, event.target.value );
            // call function for checking whether user answered correctly
            checkAnswerRadio(countQuestions);
        }
        
        // if we work with text input
        else if(event.target.type == "text"){
            // add to array object with values
            userAnswers[countQuestions] = new userAnswersObj(document.querySelector('.quiz_frame_title').dataset.question, event.target.value );
            // call function for checking whether user answered correctly
            checkAnswerInputText(countQuestions); 
        }


        // if we work with checkbox
        else if (event.target.type =="checkbox"){

            // check whether it was chosen by user
            if(event.target.checked){
                // add it to array with checkbox' type answers
                userAnswersCheckBox[checkboxIndex++] = event.target.value;
                console.log(userAnswersCheckBox);
                // add to array with user's answer object with previous array
                userAnswers[countQuestions] = new userAnswersObj(document.querySelector('.quiz_frame_title').dataset.question, userAnswersCheckBox);
            }

            // for those elements, that are not checked but could be in array(user changed his mind and choose different one)
            else{
                // find this element's index and delete it from array
                userAnswersCheckBox.splice(userAnswersCheckBox.indexOf(event.target.value), 1); 
            }

            // call function for checking whether user answered correctly
            checkAnswerCheckbox(countQuestions);        
        }  
 }

 // when we work with select, it count 2clicks(on select and on option)
 // that's why we check if it's more than 8(4 * 2) and if condition is satisfited we devide it on 8
    // add to score value and than set it new value - 0

                console.log(selectScore);
                if(selectScore >= 8){
                    selectScore /= 8;
                    score += selectScore;
                    selectScore = 0;
                }
              
                // set rating for our user
                user.userRating = score;   
})
