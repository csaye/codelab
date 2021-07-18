import firebase from 'firebase/app';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Codelab</h1>
    </div>
  );
}
