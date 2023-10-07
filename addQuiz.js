

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
  import { getDatabase ,set,push,ref} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCWAMdHwDAlN7Hdo8o4HSr_LGoYxAJjVcw",
    authDomain: "quiz-app-database-shayan.firebaseapp.com",
    projectId: "quiz-app-database-shayan",
    storageBucket: "quiz-app-database-shayan.appspot.com",
    messagingSenderId: "129601985544",
    appId: "1:129601985544:web:aa43f88a17bc500cd145bd",
    measurementId: "G-7GRBBPYQRB"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);



  // database upper

  var question = document.getElementById('question');
  var option = document.getElementById('options');
  var optionsParent = document.getElementById('optionsParent');
  var correctAnswerElem = document.getElementById('correctAnswer');
  var options = []
  var correctAnswer  

function renderOptions(){
    optionsParent.innerHTML = '';
    for (var i = 0; i < options.length; i++){
        optionsParent.innerHTML+= `<li onclick="setCorrectAnswer('${options[i]}')" class= "p-2 bg-light fs-5 rounded shadow my-2">${options[i]}</li>`;
    }
}


window.addOption = function(){
    options.push(option.value);
    console.log(options);
    renderOptions()
}

window.setCorrectAnswer = function(a){
    correctAnswer = a
    correctAnswerElem.innerHTML = correctAnswer

}

window.submitQuestion = function(){
    var obj = {
        question: question.value,
        options: options,
        correctAnswer : correctAnswer,
        

    }
    obj.id = push(ref(database,'question/')).key
    var reference = ref(database,`question/${obj.id}`) 
    set(reference,obj)
    


    console.log(obj);
}









