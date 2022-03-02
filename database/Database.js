const sequelize = require("../db");

const User = require('../models/User')
const Role = require('../models/Role')
const Coupons = require('../models/Coupons')
const Reviews = require('../models/Reviews')
const UserRole = require('../models/UserRole')
const UserCoupons = require('../models/UserCoupons')
const ReviewsCoupon = require('../models/ReviewsCoupon')


Role.belongsToMany(User, { through: UserRole, foreignKey: "role_id" });
User.belongsToMany(Role, { through: UserRole, foreignKey: "user_id" });

User.belongsToMany(Coupons, {through: UserCoupons, foreignKey: "coupon_id"});
Coupons.belongsToMany(User, {through: UserCoupons, foreignKey: "user_id"});

User.hasMany(Reviews);
Reviews.belongsTo(User);

Reviews.belongsToMany(Coupons, {through: ReviewsCoupon, foreignKey: "coupon_id"});
Coupons.belongsToMany(Reviews, {through: ReviewsCoupon, foreignKey: "review_id"});

sequelize.sync().then(result => {

}).catch(err => console.log(err));

sequelize.authenticate()
    .then(() => console.log('Successful connection to the database'))
    .catch(e => console.log('Failed connection to the database. Exception: ' + e));


module.exports = sequelize