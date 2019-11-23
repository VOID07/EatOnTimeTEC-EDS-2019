import firebase from "firebase";
import "@firebase/firestore";
import app from "@firebase/app";

var config = {
  apiKey: "AIzaSyBbwBZFox5LUcIgHU5ywJ3l6fevTi6nehU",
  authDomain: "eatontimetec.firebaseapp.com",
  databaseURL: "https://eatontimetec.firebaseio.com",
  projectId: "eatontimetec",
  storageBucket: "eatontimetec.appspot.com",
  messagingSenderId: "826447191297",
  appId: "1:826447191297:web:53052e8a4677a0d221cf00",
  measurementId: "G-2GLHRRG37W"
};

var firestore = firebase.firestore();

var ordens = [];
firestore
  .collection("fl_content")
  .where("estado", "==", 0)
  .where("idCocinero", "==", 0)
  .where("tip", "==", "orden")
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var platos = [];
      ordens.push(doc.data().idOrden);
      ordens.push(doc.data().fechaDeCreacion);
      platos.push(ordens);
      console.log(platos);
    });
  })
  .catch(function(error) {
    console.log("Error: ", error);
  });

var menu = [];
firestore
  .collection("fl_content")
  .where("disponible", "==", true)
  .get()
  .catch()
  .then(snapshot => {
    snapshot.forEach(document => {
      document
        .data()
        .fotoComida[0].get()
        .then(snap => {
          firebase
            .storage()

            .getDownloadURL()
            .then(link => {
              menu.push({
                caribeno: document.data().caribeno,
                comidaRapida: document.data().comidaRapida,
                descripcion: document.data().descripcion,
                disponible: document.data().disponible,
                horneado: document.data().horneado,
                id: document.data().id,
                precio: document.data().precio,
                sopa: document.data().sopa,
                tiempoDeComida: document.data().tiempoDeComida,
                tipico: document.data().tipico,
                vegetariano: document.data().vegetariano
              });
              this.setState({ isDataFetched: true }, () => {
                console.log(this.state.isDataFetched);
              });
            });
        }); //firestore.document(document.data().fotoComida);
    });
  })
  .catch(error => {
    console.log("Error!", error);
  });

export default menu;
