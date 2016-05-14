var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    development: {
        db: 'postgres://xgnoosjanczkch:Xg6hI-ioy94Ug75xFy_EPc4gSN@ec2-54-243-249-144.compute-1.amazonaws.com:5432/dfsgqqa1pdqo93',
        root: rootPath,
        port: 27017,
        app: {
            name: 'Job Hunt App'
        },
        schema: {
            currentVersion: 1
        }
    }
};
