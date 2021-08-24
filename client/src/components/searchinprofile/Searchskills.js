import React from 'react'
import categoriesList from '../../categories'
import Select,{components} from 'react-select'
import styled from '@emotion/styled'
import customStyles from './Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
//import SearchIcon from '@material-ui/icons/Search';

const subCategoriesList = categoriesList
  .map(({ subcategories }) => subcategories)
  .reduce((acc, item) => {
    return acc.concat(item);
  }, []);
const searchList = subCategoriesList.map(i => ({ value: i.title, label: i.title }))
console.log('searchList', searchList);
const StyledSearch = styled(Select)` 
    width: 300px;
    padding: 20px;
    .select__menu-list::-webkit-scrollbar{
      width: 4px;
      height: 0px;
    }
    .select__menu-list::-webkit-scrollbar-track{
      background: #f1f1f1;
    }
    .select__menu-list::-webkit-scrollbar-thumb{
      background: #888;
    }
    .select__menu-list::-webkit-scrollbar-thumb:hover{
      background: #555;
    }`

class SearchBar extends React.Component{
 state = {
  selectedOption: null,
 }
 componentDidMount() {
   const value = this.props.initialValue || null;
   this.setState({ selectedOption: value })
 }
 handleChange = selectedOption => {
  this.setState({ selectedOption })
  this.props.onChange({ selectedOption })
  // code to make something happen after selecting an option
 }
 render() {
  const { selectedOption } = this.state
  const DropdownIndicator = props => {
    return(
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
        <FontAwesomeIcon icon={faSearch} />
        </components.DropdownIndicator>
      )
    )
  }
  return (
    <div>
    <Select
      isMulti={this.props.isMulti}
      value={selectedOption}
      options={this.props.options || searchList}
      onChange={this.handleChange}
      closeMenuOnSelect={this.props.closeMenuOnSelect}
      placeholder= "Select Skills..."
      openMenuOnClick={true}
      classNamePrefix= "select"
      styles={customStyles}
      components={ {DropdownIndicator} }
    />
   </div>
  )
 }
}
export default SearchBar