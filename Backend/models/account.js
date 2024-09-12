'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt');  

module.exports = (sequelize, DataTypes) => {
    class Account extends Model {
    }

Account.init({
    account_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts',
    timestamps: false
})

  // Adding a hook to hash the password before saving it to the database
  {
    beforeCreate; async (account) => {
        if (account.password) {
            const salt = await bcrypt.genSalt(10);  // Generate salt
            account.password = await bcrypt.hash(account.password, salt);  // Hash password
        }
    },
    beforeUpdate; async (account) => {
        if (account.password) {
            const salt = await bcrypt.genSalt(10);
            account.password = await bcrypt.hash(account.password, salt);
        }
    }
}
return Account
}

