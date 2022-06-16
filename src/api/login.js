const express = require("express");
const users = require("../models/users");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { id_pegawai, password } = req.body;

  const usersWithIdPegawai = await users.findOne({ where: { id_pegawai } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!usersWithIdPegawai)
    return res
      .status(400)
      .json({ message: "Id Pegawai atau Password Salah!" });

  if (usersWithIdPegawai.password !== password)
    return res
      .status(400)
      .json({ message: "Id Pagawai atau Password Salah!" });

  // if (usersWithIdPegawai) {
  //     // check user password with hashed password stored in the database
  //     const validPassword = await bcrypt.compare(body.password, usersWithIdPegawai.password);
  //     if (validPassword) {
  //       res.status(200).json({ message: "Password Salah" });
  //     } else {
  //       res.status(400).json({ error: "Password Salah" });
  //     }
  //   } else {
  //     res.status(401).json({ error: "User does not exist" });
  // }

  const jwtToken = jwt.sign(
    { id: usersWithIdPegawai.id_pegawai, password: usersWithIdPegawai.password },
    process.env.JWT_SECRET
  );

  res.json({ message: "selamat Datang", status: true, token: jwtToken, data: req.query});
});

module.exports = router;
