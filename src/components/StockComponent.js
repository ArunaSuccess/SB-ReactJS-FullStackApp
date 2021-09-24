import React from "react";
import StockService from "../services/StockService";

class StockComponent extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            stocks:[]
        }
    }

    componentDidMount(){
        StockService.getStocks().then((response) => {
            this.setState({ stocks: response.data})
        });
    }

    render() {
        return (
        <div>
            <h1 className ="text-center"> Stocks List</h1>
            <table className = "table table-stripped">
                <thead>
                    <tr>
                        <td> Ticker</td>
                        <td> Purchase Price/Stock</td>
                        <td> Shares</td>
                        <td> Total Purchase Amt</td>
                        <td> Current Price/Stock</td>
                        <td> Gnls Reported</td>
                        <td> Gnls Calculated</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.stocks.map(
                            Stock =>
                            <tr key= {Stock.ticker}> 
                                <td> {Stock.ticker}</td>
                                <td> {Stock.boughtPrice}</td>
                                <td> {Stock.shares}</td>
                                <td> {Stock.purchaseAmt}</td>
                                <td> {Stock.currentPrice}</td>
                                <td> {Stock.glReported}</td>
                                <td> {Stock.glCalculated}</td>

                                {/* function approveGnls(Stock.glReported, Stock.glCalculated) {
                                    
                                } */}

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
        )
    }
}

export default StockComponent