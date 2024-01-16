
var order = {
    items: [],
    total: 0
};

function addToOrder(category, item, price) {
    var listItem = item + ' (' + category + ') - $' + price.toFixed(2);
    order.items.push(listItem);
    order.total += price;
    updateOrderBox();
}

function updateOrderBox() {
    var orderListElement = document.getElementById('order-list');
    var totalPriceElement = document.getElementById('total-price');

    orderListElement.innerHTML = ''; // Clear existing items
    order.items.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.innerText = item;
        orderListElement.appendChild(listItem);
    });

    totalPriceElement.innerText = 'Total: $' + order.total.toFixed(2);
}

function clearOrder() {
    order.items = [];
    order.total = 0;
    updateOrderBox();
}

function placeOrder() {
    // Implement order placement logic here
    alert('Order placed! Total amount: $' + order.total.toFixed(2));
    clearOrder();
}
