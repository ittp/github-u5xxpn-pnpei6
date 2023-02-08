// require csvtojson module
const CSVToJSON = require('csvtojson');
const path = require('path');

const fs = require('fs-extra');

// convert users.csv file to JSON array
export default async function convert(file) {
  let filename = path.basename(file);
  let resolvedFile = path.resolve(file);
  let ext = path.extname(resolvedFile);

  try {
    if (!filename) throw error('Required: file');
    const users = await CSVToJSON().fromFile('users.csv');
    // const users = await CSVToJSON().fromFile(file);

    // log the JSON array
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

// })();
