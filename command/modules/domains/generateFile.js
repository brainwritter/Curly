/* eslint no-param-reassign: off */
const fs = require('fs');
const common = require('../../helper/common');

module.exports = (name) => {
  name = common.capitalizeFirstLetter(name);

  fs.mkdirSync(`../App/Domains/${name}/${name}Routes.ts`, '0777', () => {
    return true;
  });

  fs.mkdirSync(`../App/Domains/${name}/Models/${name}Model.ts`, '0777', () => {
    return true;
  });

  fs.mkdirSync(`../App/Domains/${name}/Screens/${name}Screen.tsx`, '0777', () => {
    return true;
  });

  fs.mkdirSync(`../App/Domains/${name}/Snippets/${name}Snippet.tsx`, '0777', () => {
    return true;
  });
};
