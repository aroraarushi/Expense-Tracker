import axios from "axios";

export function storeExpense(expenseData){
    axios.post('https://react-native-course-bf1fe-default-rtdb.firebaseio.com/expenses.json',
        expenseData
    )
}