import { useState } from 'react';

export function AddNew({ addNewTodo }) {
  const [text, setText] = useState<string>('');

  function handleSubmit(event) {
    event.preventDefault();

    addNewTodo({
      text: text,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input
          type="text"
          value={text}
          onInput={(event) => {
            setText(event?.target.value);
          }}
        />
      </p>

      <button type="submit">Add new</button>
    </form>
  );
}
