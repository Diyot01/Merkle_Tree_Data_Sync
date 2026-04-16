const hashData = require('./utils/hash');
const buildMerkleTree = require('./utils/merkle');

const data = ["A", "B", "C", "X"];


const hashes = data.map(item => hashData(item));


const root = buildMerkleTree(hashes);

console.log("Hashes:", hashes);
console.log("Merkle Root:", root[0]);