const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define("user", {
	first_name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},

	last_name: {
		type: DataTypes.STRING,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	birthday: {
		type: DataTypes.STRING, // DATEONLY "1999-06-16"
	},
});

module.exports = User;

/*

"first_name": ""
"last_name": ""
"email": ""
"password": ""
"birthday": ""

*/
