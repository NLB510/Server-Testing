const express = require("express");

db = require("../../data/models/usersModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await db.getUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "There was an error retrieving users from the database"
    });
  }
});

// router.post("/", async (req, res) => {
//   const user = req.body;

//   if (!user.name) {
//     res.status(400).json({
//       message: "Please add a name"
//     });
//   } else {
//     try {

//       const newUser = await db.addUser(user);

//       res.status

//     } catch (error) {}
//   }
// });

module.exports = router;
