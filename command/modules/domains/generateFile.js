const fs = require('fs');

module.exports = (name) => {
  fs.mkdirSync(`../App/Domains/${name}`, '0777', () => {
    console.log(`Module ${name} has successfully write in Domains`);
  });

  fs.mkdirSync(`../App/Domains/${name}/Models`, '0777', () => {
    console.log(`Module ${name}/Models has successfully write`);
  });

  fs.mkdirSync(`../App/Domains/${name}/Routes`, '0777', () => {
    console.log(`Module ${name}/Routes has successfully write`);
  });

  fs.mkdirSync(`../App/Domains/${name}/Screens`, '0777', () => {
    console.log(`Module ${name}/Screens has successfully write`);
  });

  fs.mkdirSync(`../App/Domains/${name}/Snippets`, '0777', () => {
    console.log(`Module ${name}/Snippets has successfully write`);
  });
};
