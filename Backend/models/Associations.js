module.exports = (db) => {
    db.Account.hasMany(db.Transaction, { foreignKey: 'userId', as: 'transactions' });
    db.Transaction.belongsTo(db.Account, { foreignKey: 'userId', as: 'account' });
};
