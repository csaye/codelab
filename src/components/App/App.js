import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firebaseConfig } from '../../util/firebaseConfig.js';

import styles from './App.module.css';

// initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  useAuthState(firebase.auth());

  return (
    <div>
    </div>
  );
}

export default App;
