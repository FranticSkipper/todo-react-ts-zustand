import { TFilterStatus } from '../../../../types/TodoFIlterStatus';
import useTodos from '../../../../store/todosStore';
import styles from './styles.module.css';

interface IProtps {
  item: TFilterStatus;
}

const FilterItem: React.FC<IProtps> = ({ item }) => {
  const activeFilter = useTodos((state) => state.currentFilterStatus);
  const changeFilterStatus = useTodos((state) => state.changeFilterStatus);

  return (
    <li>
      <button
        className={`${activeFilter === item ? styles.active : ''} ${styles.btn}`}
        onClick={() => changeFilterStatus(item)}
      >
        {item}
      </button>
    </li>
  );
};

export default FilterItem;
