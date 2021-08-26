import {useExpense, useExpenseReducer} from "./expenseContext";


export default function AllExpenses() {
    const {expenses} = useExpense();
    const dispatch = useExpenseReducer();

    const deleteExpense = (id: string) => {
        // @ts-ignore
        dispatch({
            type: "DELETE_EXPENSE",
            payload: id,
        });
    };

    const tableBody = () => {
        return expenses.map( (expense) => {
            return (
                <tr>
                    <td>{expense.name}</td>
                    <td>{expense.cost}</td>
                    <td>
                        <button type="button" className="btn btn-danger btn-sm"
                                onClick={() => deleteExpense(expense.id)}
                        >Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            {expenses.length ? (
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="text-white bg-success">
                            <tr>
                                <th scope="col">Expense</th>
                                <th scope="col">Cost (Ksh.)</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody()}
                        </tbody>
                    </table>
                </div>
                )
                : <div>No expenses added yet</div>
            }
        </>
    )
}
