/* eslint no-param-reassign: off */
const fs = require('fs');
// const common = require('../../helper/common');

module.exports = (name) => {
  // name = common.capitalizeFirstLetter(name);

  fs.mkdirSync(`../App/Domains/${name}`, '0777', () => {
    console.log('success');
  });

  fs.mkdirSync(`../App/Domains/${name}/Models`, '0777', () => {
    console.log('success');
  });

  fs.mkdirSync(`../App/Domains/${name}/Screens`, '0777', () => {
    console.log('success');
  });

  fs.mkdirSync(`../App/Domains/${name}/Snippets`, '0777', () => {
    console.log('success');
  });
};
