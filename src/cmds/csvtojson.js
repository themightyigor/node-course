const fs = require('fs');
const path = require('path');
const program = require('commander');
const generateJson = require('../utils/generatejson');

module.exports = (inputFileName, outputFileName) => {
  if (inputFileName && outputFileName) {
    inputFileName = `${inputFileName}.csv`;
    const inputFilePath = path.join('input', inputFileName);
    if (!fs.existsSync(inputFilePath)) {
      console.error('Cannot find file', inputFileName);
      return;
    }
    generateJson(inputFileName, outputFileName);
    return;
  }

  if (inputFileName || outputFileName) {
    program.help(() => 'Missing one of required params (--file or --name)');
  }

  fs.readdir('input', (err, files) => {
    if (err) {
      throw new Error('Unable to read directory');
    }

    files.forEach(file => generateJson(file));
  });
};
