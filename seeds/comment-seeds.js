const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "This is amazing!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Wow, amazing work!"
    },
    {
        user_id: 1,
        post_id: 4,
        comment_text: "Awesome! kudos to everyone who have contributed"
    },
    {
        user_id: 3,
        post_id: 5,
        comment_text: "Cool!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Thank you for the tutorial!"
    },
    {
        user_id: 3,
        post_id: 4,
        comment_text: "Nice"
    },
    {
        user_id: 5,
        post_id: 3,
        comment_text: "Very useful tool!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Nice"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;