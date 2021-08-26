import React, {createContext, useContext, useReducer} from "react";
import ExpenseReducer from "./expenseReducer";


interface ExpenseItem {
    id: string;
    name: string;
    cost: number;
}

interface Expense {
    budget: number;
    expenses: ExpenseItem[];
}


const initialState = {
    budget: 0,
    expenses: [],
};

const ExpenseContext = createContext<Expense>(initialState);
const ExpenseContextReducer = createContext(null);

export const useExpense =  () => useContext(ExpenseContext);
export const useExpenseReducer = () => useContext(ExpenseContextReducer);

export function ExpenseProvider({children}: {children: React.ReactNode}) {
    const [state, dispatch] = useReducer(ExpenseReducer, initialState);

    return (
        <ExpenseContext.Provider value={state}>
            {/* @ts-ignore */}
            <ExpenseContextReducer.Provider value={dispatch}>
                {children}
            </ExpenseContextReducer.Provider>
        </ExpenseContext.Provider>
    );
}