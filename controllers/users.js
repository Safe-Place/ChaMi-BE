const config = require('../configs/chamidb');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={
    // Ambil data semua users
    getDatausers(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM users;
                `
            , function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil ambil data!',
                    data: results 
                });
            });
            connection.release();
        })
    },
    // Ambil data users berdasarkan ID
        getDatausersByID(req,res){
            let id = req.params.id;
            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `
                    SELECT * FROM users WHERE id_pegawai = ?;
                    `
                , [id],
                function (error, results) {
                    if(error) throw error;  
                    res.send({ 
                        success: true, 
                        message: 'Berhasil ambil data!',
                        data: results
                    });
                });
                connection.release();
            })
        },
    // Simpan data users
        addDatausers(req,res){
            let users = {
                id_pegawai : req.body.id_pegawai,
                name : req.body.name,
                password : req.body.password,
                email : req.body.email,
                posisi : req.body.posisi,
                devisi : req.body.devisi,
                image_path : req.body.image_path
            }

            pool.getConnection(function(err, connection) {
                if (err) throw err;
                connection.query(
                    `
                    INSERT INTO users SET ?;
                    `
                , [users],
                function (error, results) {
                    if(error) throw error;  
                    res.send({ 
                        success: true, 
                        message: 'Berhasil tambah data!',
                        data: req.body
                    });
                });
                connection.release();
            })
        },

    loginDataUsers(req, res){
        let login = {
            name : req.body.name,
            password : req.body.password,
        }
    
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM users WHERE name = ?;
                `
              //  'SELECT * FROM users WHERE name = ?;
    
            ,[login],
            function (err, result) {
            if (err) throw err;
                return res.status(400).send({
                msg: err
                });
            });
            connection.release();
        })
    },
    
    // Update data users
    editDatausers(req,res){
        let usersEdit = {
            id_pegawai : req.body.id_pegawai,
            name : req.body.name,
            password : req.body.password,
            email : req.body.email,
            posisi : req.body.posisi,
            devisi : req.body.devisi,
            image_path : req.body.image_path
        }
        let id = req.body.id_pegawai
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE users SET ? WHERE id_pegawai = ?;
                `
            , [usersEdit, id],

            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                });
            });
            connection.release();
        })
    },
    // Delete data users
    deleteDatausers(req,res){
        let id = req.body.id_pegawai
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM users WHERE id_pegawai = ?;
                `
            , [id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}