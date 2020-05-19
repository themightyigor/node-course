const program = require('commander');

module.exports = () => {
  program
    .command('csvtojson')
    .description('Convert CSV files to JSON files')
    .option(
      '-n, --json-name <json-file-name>',
      'Specify an output JSON file name'
    )
    .option('-f, --file <csv-file-name>', 'Pick a CSV file from input folder')
    .action(options => {
      require('./cmds/csvtojson')(options.file, options.jsonName);
    });

  program
    .command('reverse <string>')
    .description('Reverse the string')
    .option('-l, --length <text_length>', 'Set an output string length')
    .action((string, options) => {
      require('./cmds/reverse')(string, options.length);
    });

  program.parse(process.argv);
};
