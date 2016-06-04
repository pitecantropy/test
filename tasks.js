function Pizza(name, cost, timeToMake) {
	this.name = name;
	this.cost = cost;
	this.timeToMake = timeToMake;
}

function PizzaOrder(pizza) {
	this.pizza = pizza;
	var id;
	
	this.setId = function (valueId) {
		id = valueId;
	}
	this.getId = function() {
		return id;
	}	
	
}

PizzaOrder.prototype.start = function() {
	return Date.now();
}

PizzaOrder.prototype.ready = function(callback) {
	return callback;
}

function callback(pizza, order) {
	console.log(order.start() - pizza.timeToMake);
	console.log(order.getId());
}

var pizza = new Pizza("Peperoni", 100, 2000);
var order = new PizzaOrder(pizza);
order.setId(5);

order.ready(callback(pizza, order));


