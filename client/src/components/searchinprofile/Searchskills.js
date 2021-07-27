import React from 'react'
import skillList from './skillsdata.json'
import Select,{components} from 'react-select'
import customStyles from './Styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
//import SearchIcon from '@material-ui/icons/Search';

const searchList = skillList.map(
    ({ Category}) => {
      return{ 
       value: Category, 
       label: Category

      }
     }
);

class SearchBar extends React.Component{
 state = {
  selectedOption: null,
 }

 handleChange = selectedOption => {
  this.setState({ selectedOption })
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
      isMulti
      value={selectedOption}
      options={searchList}
      onChange={this.handleChange}
      closeMenuOnSelect={false}
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