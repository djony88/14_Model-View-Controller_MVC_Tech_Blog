const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "I thought you are talking about coffee... Just kidding... Didn't know that, thanks!",
        post_id: 3,
        user_id: 1 
    },
    {
        comment_text: "Definitely one of the go to for me...",
        post_id: 1,
        user_id: 4
    },
    {
        comment_text: "This is a great one and saved me a lot of time and unnecessary features for sure.",
        post_id: 4,
        user_id: 2
    },
    {
        comment_text: "I am using this one all the time!",
        post_id: 4,
        user_id: 3
    },
    {
        comment_text: "Didn't know about this one. Thank you!!!?",
        post_id: 5,
        user_id: 5
    },
    {
        comment_text: "After testing this one I am using it all the time. It works great for me.",
        post_id: 5,
        user_id: 4
      },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;