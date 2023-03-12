//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBv20ZONNTjOHFI6NjMU_-AlGQEp1M_oNM",
      authDomain: "hehehehehehehehhheh-fc63a.firebaseapp.com",
      databaseURL: "https://hehehehehehehehhheh-fc63a-default-rtdb.firebaseio.com",
      projectId: "hehehehehehehehhheh-fc63a",
      storageBucket: "hehehehehehehehhheh-fc63a.appspot.com",
      messagingSenderId: "254968259530",
      appId: "1:254968259530:web:2f0a64801d7aca94ba2533"
    };
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(user_name).update({
      purpose:"adding room name"
});

localStorage.setItem("room_name",room_name);

window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
};
