const newRouter = require('./news');
const stieRouter = require('./site');
function route(app) {
    app.use('/news', newRouter);
    app.use('/', stieRouter);
}

module.exports = route;
