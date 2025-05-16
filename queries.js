import express from "express";
import bodyParser from "body-parser";
import mysql from "mysql";



var jsonParser = bodyParser.json();

const connection = mysql.createConnection({
  connectionLimit: 10,
  password: "",
  user: "root",
  database: "accommodations",
  host: "localhost",
  port: 3306,
});

const router = express.Router();


//*get first query
router.get("/query1" , jsonParser, async(req , res)=>{

 var q_result = await new Promise((resolve, reject) => {
        connection.query("select * from room where price = (select min(room.price) from room)" , (err , result) =>{
            if (err) {
                reject(err)
            }
            else{ 
                resolve(result) 
        }})
    })

    res.send(q_result)
    res.status(200)
})

//* GET second query
router.get("/query2" , jsonParser , async(req , res) =>{

     var q_result =    await new Promise((resolve, reject) => {
            connection.query("select * from accomodation order by luxury desc" , (err , result) =>{
                if(err)
                    reject(err)
                else{
                    resolve(result)
                }

            })
        })

        res.send(q_result)
        res.status(200)

})


//* GET third query
router.get("/query3" , jsonParser , async(req , res) =>{

  var q_result =   await new Promise((resolve, reject) => {
        connection.query("select id_accomodation,review,stars from room "+
         "join room_review_reservation on room.id_room=room_review_reservation.id_room "+
         "join review on review.review_num where review.review_num=room_review_reservation.id_review" ,
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
            }

        })
    })
    res.send(q_result)
    res.status(200)

})

//* GET fourth query
router.get("/query4" , jsonParser , async(req , res) =>{

   var q_result =  await new Promise((resolve, reject) => {
        connection.query("select id_accomodation,avg(stars) as avg from room "+
        "join room_review_reservation on room.id_room=room_review_reservation.id_room "+
        "join review on review.review_num where review.review_num=room_review_reservation.id_review "+
        "group by id_accomodation "+
        "order by avg desc" ,
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
            }

        })
    })

    res.send(q_result)
     res.status(200)
})


//* GET fifth query
router.get("/query5/:location" , jsonParser , async(req , res) =>{

    var location  =  req.params.location

  var q_result =  await new Promise((resolve, reject) => {
        connection.query(`
        select accomodation.name as ac_name , accomodation.type as type ,  accomodation.av_rooms as av_rooms ,  accomodation.luxury as luxury, accomodation.services_description,
        accomodation.location as location  , location.area as area 
        from accomodation
        join location on location.name=accomodation.location
        where location=?
        ` ,[location] , 
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
        }

        })
    })

    res.send(q_result)
    res.status(200)
})


//* GET sixth query
router.get("/query6/:location" , jsonParser , async(req , res) =>{

    var location =  req.params.location


 var q_result =   await new Promise((resolve, reject) => {
        connection.query(`select count(*)as Πλήθος,type from accomodation
        join location on location.name=accomodation.location
        where location=?
        group by type` , [location],
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
            }

        })
    })

    res.send(q_result)
    res.status(200)
})


//* GET seventh query
router.get("/query7" , jsonParser , async(req , res) =>{

    var q_result = await new Promise((resolve, reject) => {
        connection.query(`select * from room
        where price>(select avg(price) from room)` ,
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
            }

        })
    })
res.send(q_result)
res.status(200)

})

//* GET eighth query
router.get("/query8" , jsonParser , async(req , res) =>{

   var q_result =  await new Promise((resolve, reject) => {
        connection.query(`select id_accomodation,avg(review.stars) as avg from room
        join room_review_reservation on room_review_reservation.id_room=room.id_room
        join review on review.stars where review.review_num=room_review_reservation.id_review and 
        review.stars>(select avg(stars) from review)
        group by id_accomodation` ,
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
            }

        })
    })

    res.send(q_result)
    res.status(200)
})


//* GET nineth query
router.get("/query9" , jsonParser , async(req , res) =>{

 var q_result =   await new Promise((resolve, reject) => {
        connection.query(`select * from reservation where submission_date>"2023-07-01"` ,
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
            }

        })
    })

    res.send(q_result)
    res.status(200)
})


//* GET tenth query
router.get("/query10" , jsonParser , async(req , res) =>{

  var q_result =   await new Promise((resolve, reject) => {
        connection.query(`select * from room
        order by price;` ,
             (err , result) =>{
            if(err)
                reject(err)
            else{
                resolve(result)
            }

        })
    })
    res.send(q_result)
    res.status(200)
})


export default router