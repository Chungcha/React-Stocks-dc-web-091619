import React from 'react'


const Stock = (props) => {

  const {ticker,name, price}=props.stock

    return(
      <div>
        <div className="card" onClick={()=>props.toggleStock(props.stock)}>
          <div className="card-body">
            <h5 className="card-title">{
                name
              }</h5>
            <p className="card-text">{
                `${ticker}:${price}`
              }</p>
          </div>
        </div>
      </div>
    )
};

export default Stock
