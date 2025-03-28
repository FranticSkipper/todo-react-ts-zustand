import { useState } from 'react';
import useTodos from '../../../store/todosStore';
import Button from '../../ui/Button';
import Input from '../../ui/Input';

interface IProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

export function TodoInput({ inputRef }: IProps) {
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
        <Input
          ref={inputRef}
          type="text"
          value={text}
          onInput={handleTextChange}
          placeholder="Добавить новую задачу..."
        />
      </p>

      <Button type="submit">Add new</Button>
    </form>
  );
}
