import { useEffect, useMemo, useState } from "react"

interface IExpense {
  id: number
  vendor: string
  amount: number
}

import "./ExpenseTracker.css"

import trash from "../img/trash.svg"

function ExpenseTracker() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [expenses, setExpenses] = useState<IExpense[]>([])
  const totalExpenses = useMemo(() => {
    const total = expenses.reduce((acc, expense) => acc + expense.amount, 0)

    return Math.round(total * 100) / 100
  }, [expenses])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsSubmitting(true)

    const vendor = (
      event.currentTarget.elements.namedItem("vendor") as HTMLInputElement
    ).value.trim()

    const formattedVendor =
      vendor[0].toUpperCase() + vendor.slice(1).toLowerCase()

    const amount = parseFloat(
      (event.currentTarget.elements.namedItem("amount") as HTMLInputElement)
        .value
    )

    if (formattedVendor && amount) {
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        {
          id: Date.now(),
          vendor: formattedVendor,
          amount,
        },
      ])

      event.currentTarget.reset()
    }
  }

  const handleDelete = (id: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    )
  }

  useEffect(() => {
    if (!isSubmitting) {
      return
    }

    const wait = setTimeout(() => {
      setIsSubmitting(false)
    }, 700)

    return () => clearTimeout(wait)
  }, [isSubmitting])

  return (
    <div className="ExpenseTracker">
      <header>
        <h1>Expense Tracker</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="vendor">
            Vendor
            <input type="text" id="vendor" required />
          </label>

          <label htmlFor="amount">
            Amount
            <input type="number" id="amount" step="0.01" required />
          </label>

          <button type="submit" className={isSubmitting ? "submitting" : ""} />
        </form>
      </header>
      {expenses.length ? (
        <main>
          <ul>
            {expenses.map((expense) => (
              <li key={expense.id}>
                <span>{expense.vendor}</span>
                <span className="expense">{expense.amount.toFixed(2)}</span>

                <button onClick={() => handleDelete(expense.id)}>
                  <img src={trash} alt="Delete" />
                </button>
              </li>
            ))}
          </ul>
        </main>
      ) : null}

      {totalExpenses > 0 ? (
        <footer>
          <span>Total Spent</span>
          <span className="expenses">${totalExpenses.toFixed(2)}</span>
        </footer>
      ) : null}
    </div>
  )
}

export default ExpenseTracker
