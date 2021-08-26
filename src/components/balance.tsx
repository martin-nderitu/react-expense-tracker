import {useExpense} from "./expenseContext";

export default function Balance() {
    const {budget, expenses} = useExpense();
    const totalExpenses = expenses.reduce( (total: any, item: any) => total + item.cost, 0);
    const alertType = totalExpenses > budget ? "danger" : "success";

    return (
        <div className={`alert alert-${alertType}`} role="alert">
            <span><strong>Balance:</strong> Ksh. {budget - totalExpenses}</span>
        </div>
    );
}