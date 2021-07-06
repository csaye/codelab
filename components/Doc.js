import React, { useEffect, useState } from 'react';

import firebase from 'firebase/app';

export default function Doc() {
  const [text, setText] = useState(undefined);

  const docRef = firebase.firestore().collection('docs').doc('doc');

  // updates text locally and in firebase
  async function updateText(newText) {
    setText(newText);
    await docRef.update({ text: newText });
  }

  // retrieves text from firebase
  async function getText() {
    const doc = await docRef.get();
    setText(doc.data().text);
  }

  // get text on start
  useEffect(() => {
    getText();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // if no text, return loading
  if (text === undefined) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <textarea
        value={text}
        onChange={e => updateText(e.target.value)}
      />
    </div>
  );
}
