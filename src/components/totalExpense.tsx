import {useExpense} from "./expenseContext";

export default function TotalExpense() {
    const {expenses} = useExpense();
    const totalExpenses = expenses.reduce( (total: any, item: any) => total + item.cost, 0);

    return (
        <div className="alert alert-secondary" role="alert">
            <span><strong>Total expenses:</strong> Ksh. {totalExpenses}</span>
        </div>
    );
}