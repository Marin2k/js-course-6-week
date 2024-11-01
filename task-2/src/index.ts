// Тип для заказа
interface Order {
  date: string;  
  amount: number; 
}
// Массив для хранения заказов
const orders: Order[] = [];
// Функция для добавления заказа в список
function addOrder(): void {
  const dateInput = (document.getElementById("dateInput") as HTMLInputElement).value;
  const amountInput = (document.getElementById("amountInput") as HTMLInputElement).value;
  const amount = parseFloat(amountInput);
  if (dateInput && !isNaN(amount)) {
    const newOrder: Order = { date: dateInput, amount: amount };
    orders.push(newOrder);
    displayOrders();
    (document.getElementById("dateInput") as HTMLInputElement).value = '';
    (document.getElementById("amountInput") as HTMLInputElement).value = '';
  } else {
    alert("Пожалуйста, введите корректные дату и сумму.");
  }
}
// Функция для отображения списка заказов на странице
function displayOrders(): void {
  const orderList = document.getElementById("orderList") as HTMLUListElement;
  orderList.innerHTML = ''; 
  for (const order of orders) {
    const listItem = document.createElement("li");
    listItem.textContent = `Дата: ${order.date}, Сумма: ${order.amount}`;
    orderList.appendChild(listItem);
  }
}
// Функция для расчёта суммы заказов за февраль 2020 года
function calculateFebruary2020Orders(orders: Order[]): number {
  let total = 0; 
  for (const order of orders) {
    if (order.date.substring(0, 7) === "2020-02") {
      total += order.amount; 
    }
  }
  return total; 
}
// Функция для расчёта и отображения общей суммы
function calculateTotal(): void {
  const totalAmount = calculateFebruary2020Orders(orders); // Получаем общую сумму
  const resultElement = document.getElementById("result") as HTMLParagraphElement;
  resultElement.innerText = `Общая сумма заказов за февраль 2020: ${totalAmount} руб.`; // Отображаем результат
}
// Экспортируем функции для работы с HTML
(window as any).addOrder = addOrder;
(window as any).calculateTotal = calculateTotal;
