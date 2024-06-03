  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import  {Set,Push,Ref,getDatabase}  from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBE5BbSZTuEwTkQHCoaRCKdQQjF9f6mJFM",
    authDomain: "database-62829.firebaseapp.com",
    databaseURL: "https://database-62829-default-rtdb.firebaseio.com",
    projectId: "database-62829",
    storageBucket: "database-62829.appspot.com",
    messagingSenderId: "908198990014",
    appId: "1:908198990014:web:4039c43cfbb4c9324d4eef",
    measurementId: "G-L5L0FLS9YH"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db=getDatabase();
var inp =document.getElementById("inp")
window.addData=function(){
    var obj ={
        text: inp.value,

    };
    console.log(obj);
    var key =Math.random();
    key=key.toString().slice(2);

    var reference = ref(db, `tasks/${key}`);
    push(reference, obj);
};


function getData(){
  onValue(reference,function(taskData){
    allTask = taskData.val();
    console.log(allTask,"Task Data");
    var arr = object.values(allTask);
    console.log(arr,"Task Data");
    parent.innerHTML ="";
    for (var i = 0; i<arr.length; i++){
      parent.innerHTML += `<p>${arr[i].text}<button
      onclick="removelist(`${arr[i].id}`)">Remove</button></p>`;
    }
    
  });
}
getData();