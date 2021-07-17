import { useState } from 'react';
import Editor from '../Editor/Editor.js';
import Frame from '../Frame/Frame.js';

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
  const [source, setSource] = useState('');

  useAuthState(firebase.auth());

  return (
    <div className={styles.container}>
      <Editor setSource={setSource} />
      <Frame source={source} />
    </div>
  );
}

export default App;
