const router = require('express').Router();
const { challenge } = require('../controllers');
const { users } = require('../controllers');

// GET localhost:8080/users => Ambil data semua users
router.get('/users', users.getDatausers);

// GET localhost:8080/users => Ambil data semua users
router.get('/login', users.loginDataUsers);

// GET localhost:8080/users/2 => Ambil data semua users berdasarkan id = 2
router.get('/users/:id', users.getDatausersByID);

// POST localhost:8080/users/add => Tambah data users ke database
router.post('/users/add', users.addDatausers);

// POST localhost:8080/users/2 => Edit data users
router.post('/users/edit', users.editDatausers);

// POST localhost:8080/users/delete => Delete data users
router.post('/users/delete/', users.deleteDatausers);

// GET localhost:8080/challenge => Ambil data semua challenge
router.get('/challenge', challenge.getDatachallenge);

// GET localhost:8080/challenge/2 => Ambil data semua challenge berdasarkan id = 2
router.get('/challenge/:id', challenge.getDatachallengeByID);

// POST localhost:8080/challenge/add => Tambah data challenge ke database
router.post('/challenge/add', challenge.addDatachallenge);

// POST localhost:8080/challenge/2 => Edit data challenge
router.post('/challenge/edit', challenge.editDatachallenge);

// POST localhost:8080/challenge/delete => Delete data challenge
router.post('/challenge/delete/', challenge.deleteDatachallenge);

module.exports = router;