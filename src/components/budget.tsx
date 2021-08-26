import React, {ChangeEvent, useState} from "react";
import {useExpense, useExpenseReducer} from "./expenseContext";

export default function Budget() {
    const {budget} = useExpense();
    const dispatch = useExpenseReducer();
    const [showForm, setShowForm] = useState(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        dispatch({
            type: "SET_BUDGET",
            payload: event.target.value,
        });
    }

    const editBudgetForm = (
        <form className="row rows-cols-lg-auto g-3 align-items-center"
              onSubmit={() => setShowForm(false)}>
            <div className="input-group">
                <input type="number" className="form-control form-control-sm" value={budget}
                       placeholder="Enter budget" aria-describedby="editBudget"
                       required={true} onChange={handleChange}
                />
                <button type="submit" className="btn btn-primary" id="editBudget">Edit</button>
            </div>
        </form>
    );

    return (
        <>
            <div className="alert alert-info" role="alert">
                {showForm ? editBudgetForm : (
                    <>
                        <span className="me-2"><strong>Budget:</strong> Ksh. {budget}</span>
                        <button type="button" className="btn btn-sm btn-primary rounded-4"
                                onClick={() => setShowForm(true)}
                        >
                            Edit
                        </button>
                    </>
                )}
            </div>
        </>
    )
}