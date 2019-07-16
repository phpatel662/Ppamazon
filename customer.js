var mysql = require("mysql");
var inquirer = require("inquirer");

//read database password from .env
require("dotenv").config();

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: process.env.ROOT_PASSWORD,
	database: "Ppamazon_db"
});

connection.connect(function (error) {
	if (error) throw error;

	var query = connection.query(
		"SELECT * FROM products",
		function (err, data) {
			for (var i = 0; i < data.length; i++) {
				console.log("ID: " + data[i].id + " PRODUCT: " + data[i].name + " $" + data[i].price);
			}
			inquirer.prompt([
				{
					name: "itemId",
					message: "Enter the ID of the product you would like to buy."
				},
				{
					name: "quantity",
					message: "How many would you like to buy?"
				}
			]).then(function (answers) {
				var query = connection.query(
					"SELECT * FROM products WHERE ?",
					{
						id: answers.itemId
					},
					function (err, data) {
						if (answers.quantity > data[0].stock) {
							console.log("Not enough product in stock to fulfill your order.");
							connection.end();
						} else {
							var query = connection.query(
								"UPDATE products SET ? WHERE ?",
								[
									{
										stock: data[0].stock - answers.quantity,
										sales: data[0].sales + (data[0].price * answers.quantity)
									},
									{
										id: answers.itemId
									}
								],
								function (err, data) {
									console.log("Order placed!");
									connection.end();
								}
							);
						}
					}
				);
			});
		}
	);
});
