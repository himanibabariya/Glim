import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "summervibe", label: "SUMMER VIBES" },
    { value: "homedecor", label: "HOME DECOR" },
    { value: "springflower", label: "SPRING FLOWER" },
    { value: "wippedwax", label: "WIPPED WAX" },
    { value: "flowerbouquet", label: "FLOWER BOUQUET"},
    { value: "birthday", label: "BIRTHDAY" },
    // { value: "festive", label: "FESTIVE SEASONS" },
    { value: "winecandle", label: "WINE CANDLE" },
];

const customStyles = {
    control: (provided) => ({
        ...provided,
        backgroundColor: "#0f3460",
        color: "white",
        borderRadius: "5px",
        border: "none",
        boxShadow: "none",
        width: "200px",
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(products.filter(item => item.category ===selectedOption.value))
    }
    return (
    <Select
    options={options}
    defaultValue={{ value: "", label: "Filter By Category" }}
    styles={customStyles}
    onChange={handleChange}
    />
    );
};

export default FilterSelect;
