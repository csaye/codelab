import Editor from './Editor/Editor.js';
import Frame from './Frame/Frame.js';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase from 'firebase/app';

import styles from './Project.module.css';

export default function Project() {
  const [valid, setValid] = useState(undefined);

  const { projectId } = useParams();

  // retrieve user projects
  const uid = firebase.auth().currentUser.uid;
  const projectsRef = firebase.firestore().collection('projects');
  const projectsQuery = projectsRef.where('users', 'array-contains', uid);

  // checks whether project is valid
  async function checkValid() {
    const userProjects = await projectsQuery.get();
    setValid(userProjects.docs.some(project => project.id === projectId));
  }

  // checks whether project id is valid
  useEffect(() => {
    if (projectId) checkValid();
  }, [projectId]);

  if (valid === undefined) return <div>Loading...</div>;
  if (valid === false) return <div>Project not found</div>;

  return (
    <div>
      <Editor />
      <Frame />
    </div>
  );
}
