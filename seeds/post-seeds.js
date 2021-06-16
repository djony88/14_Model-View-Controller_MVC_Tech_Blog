const { Post } = require('../models');

const postData = [
    {
        title: 'Express NPM package.',
        post_text: 'Express is one of the best NPM packages as it offers a server framework for any type of web application,  be it single-page, multi-page or hybrid. For many developers, Express is the standard framework for creating web applications...',
        user_id: 1,
    },
    {
        title: 'Debug NPM package.',
        post_text: 'Debug NPM package is almost synonymous with simplicity. This NPM package, backed by Node.js, helps you in gathering all your logs in the coding process under a particular module...',
        user_id: 2,
    },
    {
        title: 'Mocha NPM package.',
        post_text: ' Mocha is a JavaScript test framework that is popular among web-developers. Once you conduct a Mocha testing, you’ll understand that such tests take place extremely serially and offer you high flexibility. The reporting with Mocha is also more accurate...',
        user_id: 3,
    },
    {
        title: 'Async.js NPM package.',
        post_text: 'With Async.js, you can get rid of some unnecessary features of JavaScript. One feature that is most difficult about JavaScript is the render-blocking feature. The render-blocking feature easily reduces the performance of your website as it decreases the speed of loading a page...',
        user_id: 4,
    },
    {
        title: 'Moment.js NPM package.',
        post_text: 'Moment.js is one of the most stable & maintained time manipulation libraries you can find. In the whole collection of libraries, created to solve the issues of formatting, parsing, converting and, generally, working with different forms of time, Moment.js is the one that has seen the widest adoption...',
        user_id: 5,
    },
    {
        title: 'Node-notifier NPM package.',
        post_text: 'Node-notifier — Send cross-platform native notifications using Node.js. Notification Center for macOS, notify-osd/libnotify-bin for Linux, Toasters for Windows 8/10, or taskbar balloons for earlier Windows versions. Growl is used if none of these requirements are met...',
        user_id: 6,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;