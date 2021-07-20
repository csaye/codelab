import { useState } from 'react';
import Header from '../Header/Header.js';
import Editor from '../Editor/Editor.js';
import Frame from '../Frame/Frame.js';
import SignIn from '../SignIn/SignIn.js';
import Home from '../Home/Home.js';
import Landing from '../Landing/Landing.js';
import Project from '../Project/Project.js';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

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
    <Router>
      <div className={styles.container}>
        <Header />
        <Switch>
          <Route path="/signin">
            {
              firebase.auth().currentUser ?
              <Redirect to="/home" /> :
              <SignIn />
            }
          </Route>
          <Route path="/home">
            {
              firebase.auth().currentUser ?
              <Home /> :
              <Redirect to="/signin" />
            }
          </Route>
          <Route path="/project/:projectId">
            {
              firebase.auth().currentUser ?
              <Project /> :
              <Redirect to="/signin" />
            }
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
