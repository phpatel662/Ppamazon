var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

//read database password from .env
require("dotenv").config();

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: process.env.ROOT_PASSWORD,
	database: "Ppamazon_db"
});

inquirer.prompt([
	{
		name: "action",
		message: "What action would you like to take?",
		type: "list",
		choices: ["View Product Sales by Department", "Create New Department"]
	}
]).then(function(answers) {
	switch (answers.action) {
		case "View Product Sales by Department":
			connection.connect(function(error) {
				if (error) throw error;

				var query = connection.query(
					//SELECT STATEMENT
					//Selects id, name, and overhead from departments tabel
					//Selects sales from products table
					//Finds sum of sales in each dept and aliases as "sales"
					//Finds sales - overhead per dept and aliases as "profit"
					//Orders results by department ID
					"SELECT departments.id, departments.name, departments.overhead, SUM(products.sales) AS sales, SUM(products.sales)-departments.overhead AS profit FROM departments INNER JOIN products ON products.department = departments.name GROUP BY department ORDER BY id",
					function(err, data) {
						//Array to hold table of result objects
						var table = [];
						for (var i = 0; i < data.length; i++) {
							//build each result into an object
							var newRow = {
								id: data[i].id,
								department: data[i].name,
								overhead: "$" +data[i].overhead,
								sales: "$" +data[i].sales,
								profit: "$" +data[i].profit
							};
							//push new object into table
							table.push(newRow);
						}
						//log result table
						console.table(table);
						connection.end();
					}
				);
			});
			break;

		case "Create New Department":
			inquirer.prompt([
				{
					name: "name",
					message: "Enter the name of the new department."
				},
				{
					name: "overhead",
					message: "Enter the overhead costs of the new department."
				}
			]).then(function(answers) {
				connection.connect(function(error) {
					if (error) throw error;

					var query = connection.query(
						"INSERT INTO departments SET ?",
						{
							name: answers.name,
							overhead: answers.overhead
						},
						function(err, data) {
							console.log("Department added!");
							connection.end();
						}
					);
				});
			});
			break;
	}
})