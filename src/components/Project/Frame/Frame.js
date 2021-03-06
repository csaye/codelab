import styles from './Frame.module.css';

export default function Frame(props) {
  return (
    <div className={styles.container}>
      <iframe
        srcDoc={props.source}
        title="frame"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
}
