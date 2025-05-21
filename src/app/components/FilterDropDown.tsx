import { useEffect } from 'react';
import './FilterDropDown.css';
interface FilterDropDownProps {
  filterFunction: (filteredCountry: string) => void;
}
const FilterDropDown: React.FC<FilterDropDownProps> = ({ filterFunction }) => {
  useEffect(() => {
    filterFunction('');
  }, []);

  return (
    <select
      className="dropDown"
      onChange={(e) => filterFunction(e.target.value)}
    >
      <option value="">-- Select a region --</option>
      <option value="africa">Africa</option>
      <option value="americas">Americas</option>
      <option value="europe">Europe</option>
      <option value="asia">Asia</option>
      <option value="oceania">Oceania</option>
    </select>
  );
};

export default FilterDropDown;
