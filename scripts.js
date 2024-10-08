const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")
const form = document.querySelector("form")

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");

  value = Number(value) / 100

  amount.value = formatCurrencyBRL(value);
}


function formatCurrencyBRL(value){
  value = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })

  return value
}

form.onsubmit = (event) => {
  event.preventDefault()

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    create_at: new Date()

  }

}