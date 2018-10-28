import React from 'react';

const SearchBox = ({ setSearchField }) => {
  return (
    <div className='pa2'>
      <input 
       className='pa3 ba b--green bg-lightest-blue'
       type='search'
       placeholder='search robots'
       onInput={setSearchField} />
    </div>
  )
}

export default SearchBox