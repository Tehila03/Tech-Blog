const { User } = require('../models');

const userData = [
    {
        username: "John Doe",
        twitter: "johndoe2.0",
        github: "johndoe",
        email: "Johndoe@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "Sarah",
        twitter: "sarahNY",
        github: "sarah_22",
        email: "tal@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "James",
        twitter: "jamesss",
        github: "jamesTA",
        email: "ta_bootcamp@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "Bob",
        twitter: "bob223",
        github: "bobbyb",
        email: "bobby@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "Ashley",
        twitter: "ashley03",
        github: "mashley03",
        email: "Ashley@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "Mike",
        twitter: "mike",
        github: "mikeyy",
        email: "mikeyyyy@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;