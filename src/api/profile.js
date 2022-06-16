const express = require("express");
const passport = require("passport");
const User = require("../models/users");
const { route } = require("./register");
const mysql = require('mysql');

const router = express.Router();

// router.get('/profile'),(req, res) {
//   Employee.findAll(function(err, employee) {
//     console.log('')
//     if (err)
//     res.send(err);
//     console.log('res', employee);
//     res.send(employee);
//   });
// };


// exports.create = function(req, res) {
//     const new_employee = new Employee(req.body);

//     //handles null error 
//    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Please provide all required field' });
//     }else{
//         Employee.create(new_employee, function(err, employee) {
//             if (err)
//             res.send(err);
//             res.json({error:false,message:"Employee added successfully!",data:employee});
//         });
//     }
// };


// exports.findById = function(req, res) {
//     Employee.findById(req.params.id, function(err, employee) {
//         if (err)
//         res.send(err);
//         res.json(employee);
//     });
// };


// exports.update = function(req, res) {
//     if(req.body.constructor === Object && Object.keys(req.body).length === 0){
//         res.status(400).send({ error:true, message: 'Please provide all required field' });
//     }else{
//         Employee.update(req.params.id, new Employee(req.body), function(err, employee) {
//             if (err)
//             res.send(err);
//             res.json({ error:false, message: 'Employee successfully updated' });
//         });
//     }
  
// };


// exports.delete = function(req, res) {
//   Employee.delete( req.params.id, function(err, employee) {
//     if (err)
//     res.send(err);
//     res.json({ error:false, message: 'Employee successfully deleted' });
//   });
// };

router.get('/profile' ,passport.authenticate("jwt", { session: false }),
 (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err)
        res.send(rows);
        else
        console.log(err);
        })
    } );

// router.get("/profile/:id_pegawai",
//     passport.authenticate("jwt", { session: false }), 
//     (req, res) => {
//     const {id_pagawai} = req.params;
//     const sql = `SELECT * FROM users WHERE id_pegawai = ${id_pagawai}`;
//     connection.query(sql, (err, results) => {
//         if (err) throw error;
//         if (results.length > 0) {
//             res.json(results);
//         } else {
//             res.send('No users found')
//         }
// })});

// // app.post('/profile/add', (req,res) => {
// //     const sql = `INSERT INTO users SET ?`;
// //     const userObj = {
// //         user_name: req.body.user_name,
// //         email: req.body.email,
// //         password: req.body.password
// //     }
// //     connection.query(sql, userObj, err => {
// //         if (err) throw err;
// //         res.send('User added');
// //     });
// // });

// /**
//  * update a link
//  */
//  router.post("/profile/update/:id_pegawai",
//  passport.authenticate("jwt", { session: false }), (req, res) => {
//     if(req.user.id_pagawai) {
//         const {id} = req.params;
//         const updateUsers= { name, email, posisi, divisi, id_pegawai} = req.body;  
//         pool.query("UPDATE users SET ? WHERE id = ? AND id_pegawai=?", [updateUsers, id, req.user.id_pegawai]);
//         res.json({status:true});
//     }
//     else {
//         res.json({status:"no session"});
//     } 
//  })

// /**
//  * delete a link
//  */

//  router.get("/profile/delete/:id_pegawai",
//  passport.authenticate("jwt", { session: false }), (req, res) => {
//     if(req.user.id_pegawai) {
//         const {id} = req.params;
//         pool.query("DELETE FROM links WHERE ID=? AND user_id=?", [id, req.user.id_pegawai]);
//         res.json({status:true});
//     }
//     else {
//         res.json({status:"no session"});
//     } 

// })
module.exports = router;
