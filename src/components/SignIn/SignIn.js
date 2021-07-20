import firebase from 'firebase/app';

import styles from './SignIn.module.css';

export default function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  function signInWithGitHub() {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  return (
    <div>
      <h1>Codelab</h1>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithGitHub}>Sign in with GitHub</button>
    </div>
  );
}
