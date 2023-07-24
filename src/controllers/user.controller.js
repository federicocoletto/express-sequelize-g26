const User = require("../models/User");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
	// guardamos y retornamos todo el json
	const user = await User.findAll();
	return res.json(user);
});

module.exports = {
	getAll,
};
