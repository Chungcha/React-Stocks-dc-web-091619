import React from 'react';

const SearchBar = (props) => {

  return (
    <div>

      <strong>Sort by:</strong>
      {/* <label>
        <input type="radio" value="Alphabetically" checked={props.alpha} onChange={props.sortAlpha}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={null}/>
        Price
      </label>
      <label>
        <input type="radio" value="None" checked={true} onChange={null}/>
        Price
      </label> */}
      <label>
        <input type="checkbox" value="Alphabetically" checked={props.alpha} onChange={props.sortAlpha}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={props.price} onChange={props.sortPrice}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.selectType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
