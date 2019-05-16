var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    bamazon();
});

function bamazon() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        // connection.end();
        for (var i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + " " + "Product Name: " + res[i].product_name);

        }
        inquirer
            .prompt({
                name: "Item_ID",
                type: "number",
                message: "What is the product ID of the item would you like to buy?"
            }).then(function (itemChoice) {
                console.log(itemChoice);
                inquirer
                    .prompt({
                        name: "itemQuantity",
                        type: "number",
                        message: "How many of this item would you like to buy?"
                    }).then(function (itemQuan) {
                        console.log(itemQuan);

                        //console.log(itemQuan);
                        //console.log(itemChoice.Item_ID);


                        connection.query("SELECT * FROM products WHERE item_id = ? ", [itemChoice.Item_ID], function (err, itemFromDb) {
                            if (err) {
                                console.log(err);
                            }
                            console.log(itemFromDb);
                            console.log(itemFromDb[0].stock_quantity);
                            var newStockQuan;
                            if (itemQuan.itemQuantity <= itemFromDb[0].stock_quantity) {
                                newStockQuan = itemFromDb[0].stock_quantity - itemQuan.itemQuantity;
                                console.log(newStockQuan);

                                //updating database
                                connection.query("UPDATE products SET ? WHERE ?",
                                    [{
                                        stock_quantity: newStockQuan
                                    },
                                    {
                                        item_id: itemChoice.Item_ID
                                    }
                                    ],
                                    function (error, result) {
                                        if (error) throw err;
                                        console.log("Order quantity updated");
                                        console.log(result);
                                        console.log();

                                        // console.log(itemFromDb);
                                        connection.query("SELECT * FROM products", function (err, updatedRes) {
                                            if (err) throw err;
                                            console.log(updatedRes);
                                            console.log("Your order is one the way!");

                                        });
                                    }

                                );

                            }
                            else {
                                console.log("Insufficient quantity!");
                                
                            }

                        })
                    })

            })
    });

}
