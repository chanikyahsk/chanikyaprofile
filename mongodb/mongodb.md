Roll no | Hindi | English |
    1   |   80  |         |
    2   |       |   90    |
    3   |   87  |         |

    [
        {
            "roll no":1,
            "hindi":80
        },
        {
            "roll no":2,
            "english":90
        },
        {
            "roll no":3,
            "hindi":87
        }
    ]

  db.collections.insert()
  db.user.insert({name:"Chanu", city:"Delhi"})

  db.users.insert( [ {name:"Chanu",city:"Delhi"}, {name:"Hari",city:"Canada"} ])

  db.users.insert({_id:1,name:"Chanu",city:"Delhi"}) 
  db.users.insert({_id:2,name:"Hari",city:"Canada"})

  _id> ObjectId(unique value, cannot be duplicated) 
  12 bytes 
  5 bytes > RandomNumber 
  3 bytes > Series 
  4 bytes > TimeStamp

  ///find with condition 
  db.user.find({city:"Delhi"}) db.user.find({city:"Canada"})
  db.user.find({city:"Delhi","state":"abc"})

  db.zomato.find({"mealTypes.mealtype_id":1}).pretty()

db.zomato.find({condition},{projection})

db.zomato.find({"mealTypes.mealtype_id":1},{restaurant_name:1,_id:0,mealTypes:1}).pretty()

db.restaurants.find({},{restaurant_name:1,_id:0}).pretty()


db.zomato.find({$and:[{cost:{$gt:500,$lt:1000}}]},{restaurant_name:1,_id:0,cost:1}).pretty()

db.menu.find({menu_id:{$in:[4,20,32]}}).pretty()

db.menu.find({}).limit(5).skip(15).pretty()

db.zomato.find({},{restaurant_name:1,_id:0,cost:1}).pretty()

db.zomato.find({},{restaurant_name:1,_id:0,cost:1}).sort({cost:1})

db.zomato.find({},{restaurant_name:1,_id:0,cost:1}).sort({cost:-1})

/////remove 
db.collection.remove({}) ///remove all records db.collection.remove({id:1}) // remove specific records

//update

db.col('orders).updateOne( {condition}, {updatevalue} )

db.col('orders).updateOne( {orderId:1}, { $set:{ "status":"delivered" } } )