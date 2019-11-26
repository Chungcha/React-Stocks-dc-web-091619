import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  filterStocks = () => {
    if (this.props.filter !== "") {
      return this.props.allStocks.filter(stock=> stock.type === this.props.filter)
    } else { 
      return this.props.allStocks
    }
  }

  filterbyPrice = () => {
    if (this.props.byPrice) {
      let priceSort = this.filterStocks().sort((a, b)=>{
        if (a.price < b.price) {
          return -1
        } if (a.price > b.price) {
          return 1
        } 
        return 0
      })
      return priceSort
    } else {
      return this.filterStocks()
    }
  }

  filterbyAlpha = () => {
    if (this.props.byAlpha) {
      let alphaSort = this.filterbyPrice().sort((a, b)=>{
        if (a.name < b.name) {
          return -1
        } if (a.name > b.name) {
          return 1
        } 
        return 0
      })
      return alphaSort
    } else {
      return this.filterbyPrice()
    }
  }


  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.filterbyAlpha().map(stock=><Stock 
          stock={stock} 
          key={stock.id}
          toggleStock={this.props.buyStock}
        />)}
      </div>
    );
  }

}

export default StockContainer;
