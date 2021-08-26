import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {ExpenseProvider} from "./components/expenseContext";
import Budget from "./components/budget";
import Balance from "./components/balance";
import TotalExpense from "./components/totalExpense";
import AllExpenses from "./components/allExpenses";
import AddExpense from "./components/addExpense";

function App() {
    return (
        <ExpenseProvider>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-sm-10">
                        <h1>Expense Tracker</h1>
                    </div>

                    <div className="col-sm-2 justify-content-end">
                        <button type="button" className="btn btn-primary rounded-4"
                                data-bs-toggle="modal" data-bs-target="#addExpenseModal"
                        >
                            Add Expense
                        </button>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-sm">
                        <Budget/>
                    </div>

                    <div className="col-sm">
                        <TotalExpense/>
                    </div>

                    <div className="col-sm">
                        <Balance/>
                    </div>
                </div>

                <h3 className="mt-3">Expenses</h3>
                <div className="row mt-3">
                    <div className="col-sm">
                        <AllExpenses/>
                    </div>
                </div>

                <AddExpense/>
            </div>
        </ExpenseProvider>
    );
}

export default App;
