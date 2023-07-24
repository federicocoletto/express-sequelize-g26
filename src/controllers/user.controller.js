const User = require("../models/User");
const catchError = require("../utils/catchError");

const getAll = catchError(async (req, res) => {
	// guardamos y retornamos todo el json
	const user = await User.findAll();
	return res.json(user);
});

const create = catchError(async (req, res) => {
	// guardamos el body json y creamos el json
	const user = await User.create(req.body);
	return res.json(user);
});

const getOne = catchError(async (req, res) => {
	const { id } = req.params;
	// guardamos y retornamos el json
	const user = await User.findByPk(id);
	return res.json(user);
});

const destroy = catchError(async (req, res) => {
	const { id } = req.params;
	// destruimos el usuario
	const user = await User.destroy({
		where: { id },
	});
	// retornamos solo el error, si hay
	if (!user) return res.sendStatus(400)
});

const update = catchError(async (req, res) => {
	const { id } = req.params;
	// actualizamos el usuario con el body.json mandado
	const user = await User.update(req.body, {
		where: { id },
		returning: true,
	});
	// retornamos el status del error, o el json completo
	user[0] === 0 ? res.sendStatus(400) : res.json(user)
});

module.exports = {
	getAll,
	create,
	getOne,
	destroy,
	update
};
