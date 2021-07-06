import Doc from '../components/Doc.js';
import SignIn from '../components/SignIn.js';

import firebase from 'firebase/app';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      {
        firebase.auth().currentUser ?
        <Doc /> :
        <SignIn />
      }
    </>
  );
}
