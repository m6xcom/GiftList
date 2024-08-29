const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

const ListMerkleTree = new MerkleTree(niceList);

async function main(name) {
  const proof = ListMerkleTree.getProof(niceList.indexOf(name));

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    proof: proof,
    name: name,
  });

  console.log({ gift });
}

main("Anna Stehr");