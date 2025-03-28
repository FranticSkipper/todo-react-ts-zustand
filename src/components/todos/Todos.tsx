import { TodoInput } from './todo-input/TodoInput';
import TodoFilter from './todo-filter/TodoFIlter';
import TodoList from './todo-list/TodoList';
import { useEffect, useRef, useState } from 'react';
import useTodos from '../../store/todosStore';

export default function Todos() {
  const [hydrated, setHydrated] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const unsub = useTodos.persist.onFinishHydration(() => {
      setHydrated(true);
    });

    if (useTodos.persist.hasHydrated()) {
      setHydrated(true);
    }

    return unsub;
  }, []);

  if (!hydrated) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <TodoFilter />
      </div>

      <div>
        <TodoList inputRef={inputRef} />
      </div>

      <div>
        <TodoInput inputRef={inputRef} />
      </div>
    </div>
  );
}
