const express = require("express");
const User = require("../models/users");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { id_pegawai, name, password, password2, email, posisi, divisi } = req.body;

  const alreadyExistsUsers = await User.findOne({ where: { id_pegawai } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );
  if(password !== password2) {
    return res.status(409).json({message: "password tidak cocok"});
  }
  if (alreadyExistsUsers) {
    return res.status(409).json({ message: "Users ini sudah terdaftar" });
  }

  const newUsers = new User({ id_pegawai, name, password, email, posisi, divisi });
  // const salt = await bcrypt.genSalt(10);
  // now we set user password to hashed password
  // user.password = await bcrypt.hash(user.password, salt);
  const savedUsers = await newUsers.save().catch((err) => {
    console.log("Error: ", err);
    res.status(500).json({ error: "Tidak Bisa masuk" });
  });

  if (savedUsers) res.json({ message: "berhasil", status: true, data: req.body});
});

module.exports = router;
