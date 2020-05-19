const fs = require('fs');
const path = require('path');
const csvToJson = require('csvtojson');

module.exports = (file, outputFileName) => {
  if (!isCSV(file)) {
    throw new Error('Specified file should be a CSV');
  }
  const newFileName = outputFileName || file.split('.')[0];

  const csvFilePath = path.join('input', file);
  const jsonFilePath = path.join('output', `${newFileName}.json`);

  const writeStream = fs.createWriteStream(jsonFilePath);

  csvToJson()
    .fromFile(csvFilePath)
    .then(res => {
      writeStream.write(JSON.stringify(res));
      writeStream.end();
    });

  writeStream.on('finish', () => {
    console.log(`Converted ${csvFilePath} -> ${jsonFilePath}`);
  });
};

const isCSV = file => /\.csv$/.test(file);
