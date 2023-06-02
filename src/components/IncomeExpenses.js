import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map(transaction => transaction.amount)
  const expenses = amounts.filter(amount => amount < 0)
  const incomes = amounts.filter(amount => amount > 0)
  const totalExpenses = expenses.reduce((acc, item) => acc + item, 0).toFixed(2)
  const totalIncomes = incomes.reduce((acc, item) => acc + item, 0).toFixed(2)
  
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">+${totalIncomes}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">-${totalExpenses * -1}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses