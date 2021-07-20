import { Link } from 'react-router-dom';

import firebase from 'firebase/app';

import styles from './Landing.module.css';

export default function Landing() {
  return (
    <div>
      <h1>Codelab</h1>
      {
        firebase.auth().currentUser ?
        <Link to="/home">Home</Link> :
        <Link to="/signin">Sign In</Link>
      }
    </div>
  );
}
