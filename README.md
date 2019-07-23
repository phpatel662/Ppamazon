# Bamazon

Ppamazon is a simulated online marketplace that runs on the command line using Node.js.

## How to Use

The Ppamazon application comes with three distinct "Views", Customer, Manager, and Supervisor. The Customer can order items from Ppamazon, the Manager can restock items and add new items for sale, and the Supervisor can check each department's profits and add new departments.

_________

## Customer View

To enter the Customer View, run `node customer` from the application's root directory.

This will display all items that are avilable for purchase, and then prompt the user to choose an item and state how many of that item they intend to purchase.

If there is enough of that item in stock, the purchase will go through. If there is not enough, the user will be told that the stock is insufficient.

![Customer View](https://i.imgur.com/RcioBQV.gif)

## Manager View

To enter the Manager View, run `node manager` from the application's root directory.

The Manager View provides 4 different actions:

* ### View All Products

	This command displays all available products in the store: their IDs, names, prices, and remaining stock.

	![View All Products](https://i.imgur.com/PMjrVSH.gif)

* ### View Low Inventory

	This command displays all items with less that 5 stock remaining.

	![View Low Inventory](https://i.imgur.com/QdZRnle.gif)

* ### Add to Inventory

	This command allows the Manager to add to the stock of any existing item, to restock items that are low.

	![Add to Inventory](https://i.imgur.com/grB4nJS.gif)

* ### Add New Product

	This command allows the Manager to add an entirely new product to the store.

	![Add New Product](https://i.imgur.com/CQHQrId.gif)

## Supervisor View

To enter the Supervisor View, run `node supervisor` from the application's root directory.

The Supervisor View provides 2 different actions:

* ### View Product Sales by Department

	This command prints a table that lists each department's name and ID, along with its total sales, overhead costs, and total profit (sales - overhead).

	![View Product Sales by Department](https://i.imgur.com/DF5kar1.gif)

* ### Create New Department

	This command allows the supervisor to create an entirely new department.

	![Create New Department](https://i.imgur.com/zSQ3Pjj.gif)

## Credits

All application code written by me. The following NPM modules were used:

* [dotenv](https://www.npmjs.com/package/dotenv)
* [mysql](https://www.npmjs.com/package/mysql)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [console.table](https://www.npmjs.com/package/console.table)
