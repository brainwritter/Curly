const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2));
  const cmd = args._[0];
  const module = args._[1];

  switch (cmd) {
    case 'Domains':
      require('./modules/domains/generateFolder')(module);
      break;
    default:
      console.error(`"${cmd}" is not a valid command!`);
      break;
  }
};
