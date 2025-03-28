import { TFilterStatus } from '../../../../types/TodoFIlterStatus';
import styles from './styles.module.css';
import useTodosFilter from '../../../../store/todosFilterStore';
import Button from '../../../ui/Button';

interface IProtps {
  item: TFilterStatus;
}

const FilterItem: React.FC<IProtps> = ({ item }) => {
  const activeFilter = useTodosFilter((state) => state.currentFilterStatus);
  const changeFilterStatus = useTodosFilter(
    (state) => state.changeFilterStatus,
  );

  return (
    <li>
      <Button
        className={`${activeFilter === item ? styles.active : ''} ${styles.btn}`}
        onClick={() => changeFilterStatus(item)}
      >
        {item}
      </Button>
    </li>
  );
};

export default FilterItem;
