import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCyI-JgGMQFziIre1xRmm1K1r0C4QvkFzI',
  authDomain: 'music-c2abf.firebaseapp.com',
  projectId: 'music-c2abf',
  storageBucket: 'music-c2abf.appspot.com',
  messagingSenderId: '610362001471',
  appId: '1:610362001471:web:5ee314070432f2d3bc508a',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth, db, usersCollection, storage, songsCollection, commentsCollection,
};
