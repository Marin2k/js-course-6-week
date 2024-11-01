"use strict";
// Массив для хранения заказов
var orders = [];
// Функция для добавления заказа в список
function addOrder() {
    var dateInput = document.getElementById("dateInput").value;
    var amountInput = document.getElementById("amountInput").value;
    var amount = parseFloat(amountInput);
    if (dateInput && !isNaN(amount)) {
        var newOrder = { date: dateInput, amount: amount };
        orders.push(newOrder);
        displayOrders();
        document.getElementById("dateInput").value = '';
        document.getElementById("amountInput").value = '';
    }
    else {
        alert("Пожалуйста, введите корректные дату и сумму.");
    }
}
// Функция для отображения списка заказов на странице
function displayOrders() {
    var orderList = document.getElementById("orderList");
    orderList.innerHTML = '';
    for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
        var order = orders_1[_i];
        var listItem = document.createElement("li");
        listItem.textContent = "\u0414\u0430\u0442\u0430: ".concat(order.date, ", \u0421\u0443\u043C\u043C\u0430: ").concat(order.amount);
        orderList.appendChild(listItem);
    }
}
// Функция для расчёта суммы заказов за февраль 2020 года
function calculateFebruary2020Orders(orders) {
    var total = 0;
    for (var _i = 0, orders_2 = orders; _i < orders_2.length; _i++) {
        var order = orders_2[_i];
        if (order.date.substring(0, 7) === "2020-02") {
            total += order.amount;
        }
    }
    return total;
}
// Функция для расчёта и отображения общей суммы
function calculateTotal() {
    var totalAmount = calculateFebruary2020Orders(orders); // Получаем общую сумму
    var resultElement = document.getElementById("result");
    resultElement.innerText = "\u041E\u0431\u0449\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0437\u0430\u043A\u0430\u0437\u043E\u0432 \u0437\u0430 \u0444\u0435\u0432\u0440\u0430\u043B\u044C 2020: ".concat(totalAmount, " \u0440\u0443\u0431."); // Отображаем результат
}
// Экспортируем функции для работы с HTML
window.addOrder = addOrder;
window.calculateTotal = calculateTotal;
