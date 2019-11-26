import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor(){
    super()
    this.state={
      allStocks:[],
      boughtStocks:[],
      filter:"",
      byAlpha: false,
      byPrice: false
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/stocks")
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        allStocks:[...data]
      })
    })
  }

  buyStock = (stock) => {
    if (this.state.boughtStocks.includes(stock)){
      alert("ALREADY BOUGHT BRUH")
    } else {
    this.setState({
      boughtStocks: [...this.state.boughtStocks, stock]
    })
    }
  }

  sellStock = (stock) => {
    let keptStocks = this.state.boughtStocks.filter(allStock=> allStock !== stock)
    this.setState({
      boughtStocks: [...keptStocks]
    })
  }

  selectType = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  sortAlpha = () => {
    let alphaStatus = {
      true : false,
      false : true
    }
    this.setState({
      byAlpha: alphaStatus[this.state.byAlpha]
    })
  }

  sortPrice = () => {
    let priceStatus = {
      true : false,
      false : true
    }
    this.setState({
      byPrice: priceStatus[this.state.byPrice]
    })
  }

  render() {
    return (
      <div>
        <SearchBar selectType={this.selectType}
        sortAlpha = {this.sortAlpha}
        alpha = {this.state.byAlpha}
        sortPrice = {this.sortPrice}
        price = {this.state.byPrice}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                allStocks={this.state.allStocks}
                buyStock={this.buyStock}
                filter={this.state.filter}
                byPrice = {this.state.byPrice}
                byAlpha = {this.state.byAlpha}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks}
              sellStock={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
