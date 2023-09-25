
//AGREGA TUS ENLACES DE FIREBASE AQUÍ
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD4KDc99LGsZ0xiAh99EeEMPW4jo0gp3ew",
      authDomain: "clase101-67f1a.firebaseapp.com",
      databaseURL: "https://clase101-67f1a-default-rtdb.firebaseio.com",
      projectId: "clase101-67f1a",
      storageBucket: "clase101-67f1a.appspot.com",
      messagingSenderId: "183243986866",
      appId: "1:183243986866:web:5d0c184e1f1c678504b6ab"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "agregando el nombre de la sala"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Inicia el código
                  console.log("Nombre de la sala: " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //Finaliza el código
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
