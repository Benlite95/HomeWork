(function(){
    'use strict'
    const outputDiv = document.getElementById("output")
    const ordersInput  =  document.querySelector("#ordersInput")
    const fetchOrders = document.querySelector("#fetchOrdersBtn")
    fetchOrders.addEventListener('click',() => getOrders(ordersInput.value))

    class Order{
        constructor(customer,address,items){
            this. customer =  customer
            this.address = address
            this.items = items
        }
        getTotal(){
            let total = 0
            this.items.forEach(element => {
                const item  = Item.find(element.item)
                total += (+item.price * element.quantity)
            });
            return total
        }
    }

    class Item{
        constructor(name,price){
            this.name = name
            this.price = price
            Item.db.push(this)
        }
        static db = [];

        static find(name){
            return Item.db.find((item) => item.name == name);
        }

    }


    async function getOrders(fileName) {
        try {
            let orderData = await fetch(fileName);
            if (!orderData.ok) {
                throw new Error('Not OK Netword Response');
            }
            let orders = await orderData.json();
            displayOrders(orders)
        } 
        catch (error) {
            outputDiv.innerHTML = `An error occurred when searching for order -  (${error})`
            console.error('An error occurred ', error);
        }
    }


    function displayOrders(orders){
        orders.forEach(order => {
            let i = new Order(order.customer,order.address,order.items)
            let firstItem = true
            let itemDetails = ""
            order.items.forEach(item => {
                let j = new Item(item.item , item.total / item.quantity)
                !firstItem ? itemDetails += `<hr>` : itemDetails += "" ;
                itemDetails +=  `<h2>Items:</h2>
                            <p>Item: ${j.name}</p>
                            <p>Quantity: ${item.quantity}</p>
                            <p>Price: ${j.price}</p>`
                firstItem = false

            })
            const element = document.createElement('div');
            let orderDetails = `<div><h1>Customer: ${i.customer}</h1>
                                    <p>Address: ${i.address}</p>
                                    <p>Total: ${i.getTotal()}</p></div>
                                    <div>${itemDetails}</div>`
            outputDiv.innerHTML += orderDetails
        })
    }
}())
