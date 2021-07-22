import { Link } from 'react-router-dom';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import firebase from 'firebase/app';

import styles from './Home.module.css';

export default function Home() {
  // retrieve user projects
  const uid = firebase.auth().currentUser.uid;
  const projectsRef = firebase.firestore().collection('projects');
  const projectsQuery = projectsRef.where('users', 'array-contains', uid);
  const [projectsData] = useCollectionData(projectsQuery);

  if (!projectsData) return <div>Loading...</div>;

  return (
    <div>
      {
        projectsData.map(project =>
          <Link href={`/project/${project.id}`}></Link>
        )
      }
    </div>
  );
}
