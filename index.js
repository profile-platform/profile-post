'use strict';

const lotion = require('lotion');
const schema = require('./schema');
const pkg = require('./package');

const app = lotion({
    initalstate: schema
});

app.use(function(state, tx) {
    // Append to chain
});

app.listen(3000);

console.log('Profile Postal Service (' + pkg.version +')\n')
console.log(' * Listening on port 3000...');
