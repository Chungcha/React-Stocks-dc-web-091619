import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.boughtStocks.map(stock=><Stock stock={stock}
          toggleStock={this.props.sellStock} key={stock.id}/>)}
      </div>
    );
  }

}

export default PortfolioContainer;
