const newRouter = require('./news');
const courseRouter = require('./courses');
const stieRouter = require('./site');
function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', courseRouter);
    app.use('/', stieRouter);
}

module.exports = route;
