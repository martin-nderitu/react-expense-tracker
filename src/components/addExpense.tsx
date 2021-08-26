import {useState} from "react";
import {v4 as uuidv4} from "uuid";
import {useExpenseReducer} from "./expenseContext";


export default function AddExpense() {
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const dispatch = useExpenseReducer();

    const addExpense = () => {
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        // @ts-ignore
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });

        setName("");
        setCost("");
    }

    return (
        // @ts-ignore
        <div className="modal fade" id="addExpenseModal" tabIndex="-1" aria-labelledby="addExpense" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header rounded-0 text-white bg-success">
                        <h5 className="modal-title">Add Expense</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>

                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input required={true} type="text" className="form-control" id="name"
                                   placeholder="Enter expense name"
                                   onChange={(event) => setName(event.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="cost" className="form-label">Cost</label>
                            <input required={true} type="number" className="form-control" id="cost"
                                   placeholder="Enter expense cost"
                                   onChange={(event) => setCost(event.target.value)}
                            />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={addExpense}
                                data-bs-dismiss="modal">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
}