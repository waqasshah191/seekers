const customStyles = {
    control: (base, state) => ({
      ...base,
      fontFamily: 'Times New Roman',
      fontSize: 18,
      border: state.isFocused ? 0 : 0,
      boxShadow: state.isFocused ? 0 : 0,
      cursor: 'text',
      borderRadius: 0,
      borderBottom: 'solid 1px',
    }),

    option: (styles, { isFocused }) => {
      return {
        ...styles,
        cursor: 'pointer',
        backgroundColor: isFocused ? 'white' : 'white',
        color: isFocused ? 'rgba(255, 80, 86)' : 'black',
        lineHeight: 2,
      }
    },

    input: styles => ({
      ...styles,
      color: 'black',
      fontFamily: 'Times New Roman, Times, Serif',
    }),

    menu: styles => ({
      ...styles,
      marginTop: 0,
      boxShadow: 'none',
      borderRadius: 0,
    }),

    singleValue: styles => ({
      ...styles,
      color: 'rgba(255, 80, 86)',
    }),
}

export default customStyles