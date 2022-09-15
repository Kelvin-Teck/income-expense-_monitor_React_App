import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import TransactionLists from "./components/TransactionLists";
import { GlobalProvider } from "./context/GlobalState";
import "./App.css";

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionLists />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
};

export default App;
