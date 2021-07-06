import React, { useState } from 'react';

import styles from '../styles/Doc.module.css';

export default function Doc() {
  const [text, setText] = useState(undefined);

  return (
    <div>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
}
