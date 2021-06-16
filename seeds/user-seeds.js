const { User } = require('../models');

const userData = [
    {
    username: "Nikola",
    email: "nikola1@gmail.com",
    password: "password1234"
    },
    {
    username: "John",
    email: "john1@gmail.com",
    password: "password1234"   
    },
    {
    username: "Stephen",
    email: "stephen1@gmail.com",
    password: "password1234"
    },
    {
    username: "Maria",
    email: "maria1@gmail.com",
    password: "password1234"
    },
    {
    username: "Anna",
    email: "anna1@gmail.com",
    password: "password1234"
    },
    {
    username: "Cora",
    email: "cora1@gmail.com",
    password: "password1234"   
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
