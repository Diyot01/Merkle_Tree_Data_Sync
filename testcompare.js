const { findDifferences } = require('./utils/compare');

const local = ["h1", "h2", "h3"];
const remote = ["h1", "h2", "h"];

console.log(findDifferences(local, remote));