const { Post } = require('../models');

const postData = [
    {
        title: "10 Essential JavaScript Concepts Every Developer Should Know",
        post_content: "This post covers ten fundamental JavaScript concepts that every web developer should be familiar with, including variables, functions, loops, and objects. It provides clear explanations and practical examples to help beginners grasp these essential concepts",
        user_id: 1
    },
    {
        title: "A Guide to Building Responsive Web Designs with CSS Grid",
        post_content: "In this tutorial, we explore the power of CSS Grid to create responsive web layouts. The post walks through the basics of CSS Grid, demonstrates how to create flexible grid structures, and showcases examples of modern and responsive web designs.",
        user_id: 2
    },
    {
        title: "Mastering SEO: Tips to Boost Your Website's Search Ranking",
        post_content: "This comprehensive guide delves into the world of Search Engine Optimization (SEO) and shares actionable tips to improve your website's search ranking. It covers keyword research, on-page optimization, link building, and other effective SEO strategies.",
        user_id: 3

    },
    {
        title: "Tech Blog has been released!",
        post_content: "We created a CMS-style blog platform akin to WordPress, where developers can publish their blog posts and engage in discussions by commenting on each other's posts. This website will be developed from the ground up and hosted on Heroku. The application will adhere to the MVC architectural pattern, utilizing Handlebars.js for templating, Sequelize as the ORM for database interactions, and the express-session npm package for secure authentication.",
        user_id: 4
    },
    {
        title: "The Future of Artificial Intelligence: Trends and Applications",
        post_content: "Exploring the exciting field of Artificial Intelligence (AI), this post discusses the latest trends and breakthroughs in AI technology. It highlights real-world applications, such as natural language processing, image recognition, and AI-driven automation.",
        user_id: 5
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;