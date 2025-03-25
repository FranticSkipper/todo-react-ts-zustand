import { useState } from 'react';
import useTodos from '../../../store/todosStore';

export function TodoInput() {
  const [text, setText] = useState<string>('');

  const add = useTodos((state) => state.add);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    add({
      text: text,
    });

    setText('');
  }

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <input type="text" value={text} onInput={handleTextChange} />
      </p>

      <button type="submit">Add new</button>
    </form>
  );
}
