var firebaseConfig ={
    apiKey: "AIzaSyBv20ZONNTjOHFI6NjMU_-AlGQEp1M_oNM",
    authDomain: "hehehehehehehehhheh-fc63a.firebaseapp.com",
    databaseURL: "https://hehehehehehehehhheh-fc63a-default-rtdb.firebaseio.com",
    projectId: "hehehehehehehehhheh-fc63a",
    storageBucket: "hehehehehehehehhheh-fc63a.appspot.com",
    messagingSenderId: "254968259530",
    appId: "1:254968259530:web:2f0a64801d7aca94ba2533",
  };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){

msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
});
document.getElementById("msg").value="";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  childData = childSnapshot.val(); if (childKey != "purpose"){
  Room_names = localStorage.getItem("room_name");
  user_name=localStorage.getItem("user_name");
 //Start code
 console.log(firebase_message_id);
 console.log(message_data);
 name1 = message_data["name"];
 message = message_data["message"];
 like = message_data["like"];
 name_with_tag ="<h4>"+name1+"<img class = 'user' src='tick.png'></h4>";
 message_with_tag ="<h4 class ='message_h4'>"+messsage+"</h4>";
 likebutton ="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updateLike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
 row = name_with_tag + message_with_tag + like_button + span_with_tag;
 document.getElementById("output").innerHTML += row;
 //End code
 }});});}
getData();
function updateLike(message_id){
   console.log("clicked on like button - " + message_id);
   button_id = message_id;
   likes = document.getElementById(button_id).value;
   updated_likes = Number(likes) + 1;
   console.log(updated_likes);
   firebase.database().ref(room_name).child(message_id).update({
   like : updated_likes
   });
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
};
