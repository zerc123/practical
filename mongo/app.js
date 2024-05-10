//mongod (mongo for db)
// nom i mongoose
// show dbs
// use dbs_name
// show collections
// db.show.find()
//

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({

    name: String,

    rating: Number,

    review: String

});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({

    name: "Apple",

    rating: 7,

    review: "Pretty solid as a fruit."

});


//fruit.save();


const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({

    name: "Banna",

    score: 3,

    review: "Weird texture"

});

Fruit.insertMany([orange, banana], function (err) {

    if (err) {

        console.log(err);

    } else {

        console.log("Succesfully saved all the fruits to fruitsDB");

    }

});




//READ****
//Just run node again will show names


Fruit.find(function(err, fruits) {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
        fruits.forEach(function(fruit) {
            console.log(fruit.name);
        });
    }
});



//†update ****

    Fruit.updateOne({ _id: "5bc0854dd6ec7ad010738bc7" }, { name: "Peach" }, function (err) {

        if (err) {

            console.log(err);

        } else {

            console.log("Succesfully updated the document.");

        }
    });

//***** Delete *******

    Fruit.deleteOne({ name: "Peach" }, function (err) {
        if (err) {

            console.log(err);

        } else {

            console.log("Succesfully delted the document");
        }
    });