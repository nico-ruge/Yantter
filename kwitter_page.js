//TUS ENLACES DE FIREBASE
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
 room_name = localStorage.getItem("room_name");
function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: ms,
            like: 0
      });

     document.getElementById("msg").value = "";

}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Inicia código

                        //Termina código
                  }
            });
      });
}
getData();
