import { useState, useEffect } from 'react';
import { Controlled } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/css/css.js';
import 'codemirror/mode/javascript/javascript.js';

import styles from './Editor.module.css';

const compileDelay = 250;

export default function Editor(props) {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      props.setSource(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, compileDelay);
    return () => clearTimeout(timeout);
  }, [html, css, js]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.container}>
      <div className={styles.window}>
        <h1>HTML</h1>
        <Controlled
          value={html}
          onBeforeChange={(e, d, v) => setHtml(v)}
          options={{
            mode: 'xml',
            lineWrapping: true,
            theme: 'material',
            lineNumbers: true
          }}
        />
      </div>
      <div className={styles.window}>
        <h1>CSS</h1>
        <Controlled
          value={css}
          onBeforeChange={(e, d, v) => setCss(v)}
          options={{
            mode: 'css',
            lineWrapping: true,
            theme: 'material',
            lineNumbers: true
          }}
        />
      </div>
      <div className={styles.window}>
        <h1>JS</h1>
        <Controlled
          value={js}
          onBeforeChange={(e, d, v) => setJs(v)}
          options={{
            mode: 'javascript',
            lineWrapping: true,
            theme: 'material',
            lineNumbers: true
          }}
        />
      </div>
    </div>
  );
}
