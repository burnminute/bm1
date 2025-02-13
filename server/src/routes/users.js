const router = require("express").Router();
const User = require("../modules/user/model");

router.route("/").get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
	const { username } = req.body;

	const newUser = new User({ username });

	newUser
		.save()
		.then(() => res.json(`User ${username} has been added!`))
		.catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
