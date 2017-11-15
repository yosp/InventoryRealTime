import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCwP2G16bWiPiV2KGryqkyYJs3asSq54NU",
    authDomain: "inventoryrealtime.firebaseapp.com",
    databaseURL: "https://inventoryrealtime.firebaseio.com",
    projectId: "inventoryrealtime",
    storageBucket: "inventoryrealtime.appspot.com",
    messagingSenderId: "496922984125"
  };

firebase.initializeApp(config);

export class fbService {

    static getAllUsers() {
        var starCountRef = firebase.database().ref('posts/');
        return firebase.database().ref('/posts/').once('value').then(function(snapshot) {
            return snapshot.val();
        });
    }

    static get(url, headers = null) {
        return Observable.ajax({
            url,
            method: 'GET',
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    } // get

    static post(url, body, headers = { 'Content-Type': 'application/json' }) {
        return Observable.ajax({
            url,
            method: 'POST',
            body,
            headers,
            async: true,
            crossDomain: true,
            responseType: 'json',
            createXHR: () => new XMLHttpRequest()
        });
    } // post

}

