import firebase from 'firebase/app';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Codelab</h1>
      {
        firebase.auth().currentUser ?
        <button onClick={() => firebase.auth().signOut()}>
          Sign Out
        </button> :
        <button onClick={() => {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider);
        }}>
          Sign In
        </button>
      }
    </div>
  );
}
