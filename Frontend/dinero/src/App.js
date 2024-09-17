// import logo from './logo.svg';
import './App.css';
import './script.js'

function App() {
  return (
    <div>
    <h2>Expense Tracker</h2>

    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">$0.00</h1>

      <div className="inc-exp-container">
        <div>
          <h4 className="moneyhead">Income</h4>
          <p id="money-plus" className="money plus">+$0.00</p>
        </div>
        <div>
          <h4 className="moneyhead">Expense</h4>
          <p id="money-minus" className="money minus">-$0.00</p>
        </div>
      </div>

      <h3>History</h3>
      <ul id="list" className="list">
         {/* <li className="minus">
          Cash <span>-$400</span><button className="delete-btn">x</button>
        </li>  */}
      </ul>

      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label for="text">Category</label>
          <input type="text" id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" step="0.01" id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>

    <script src="script.js"></script>
  </div>
  );
}

export default App;
