import { TFilterStatus } from '../../../types/TodoFIlterStatus';
import FilterItem from './filter-item/FIlterItem';

const filter: TFilterStatus[] = ['all', 'completed', 'active'];

export default function TodoFilter() {
  const filtersToRender = filter.map((item) => (
    <FilterItem key={item} item={item} />
  ));
  return (
    <div>
      <ul>{filtersToRender}</ul>
    </div>
  );
}
