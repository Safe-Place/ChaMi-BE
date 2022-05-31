const config = require('../configs/chamidb');
const mysql = require('mysql');
const pool = mysql.createPool(config);

pool.on('error',(err)=> {
    console.error(err);
});

module.exports ={

    // Ambil data semua challenge
    getDatachallenge(req,res){
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM challenge;
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
    // Ambil data challenge berdasarkan ID
    getDatachallengeByID(req,res){
        let id = req.params.id_challenge;
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                SELECT * FROM challenge WHERE id_challenge = ?;
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
    // Simpan data challenge
    addDatachallenge(req,res){
        let create_challenge = 
        {
            challenge_id : req.body.challenge_id,
			title: req.body.title,
			description: req.body.description,
            reward: req.body.reward,
            due_date: req.body.due_date
        }

        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                INSERT INTO challenge SET ?;
                `
            , [create_challenge],
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

    // Update data challenge
    editDatachallenge(req,res){
        let challengeEdit = {
            id_challenge : req.body.id_challenge,
			title: req.body.title,
			description: req.body.description,
            reward: req.body.reward,
            due_date: req.body.due_date
        }

        let id = req.body.id_challenge
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                UPDATE challenge SET ? WHERE id_challenge = ?;
                `
            , [challengeEdit, id],
            function (error, results) {
                if(error) throw error;  
                res.send({ 
                    success: true, 
                    message: 'Berhasil edit data!',
                    data: req.body

                });
            });
            connection.release();
        })
    },

    // Delete data challenge
    deleteDatachallenge(req,res){
        let id = req.body.id_challenge
        pool.getConnection(function(err, connection) {
            if (err) throw err;
            connection.query(
                `
                DELETE FROM challenge WHERE id_challenge = ?;
                `
            , [id],
            (error, results) => {
                if (error)
                    throw error;
                res.send({
                    success: true,
                    message: 'Berhasil hapus data!'
                });
            });
            connection.release();
        })
    }
}