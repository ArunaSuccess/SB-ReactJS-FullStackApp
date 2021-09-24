import axios from "axios";

const STOCKS_REST_API_URL = 'http://localhost:8081/api/stocks';

class StockService {

    getStocks() {
        return axios.get(STOCKS_REST_API_URL);
    }
}

export default new StockService();