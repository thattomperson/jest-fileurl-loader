const path = require('path');

module.exports = {
  process(sourceText, sourcePath) {
    const url = `file://${path.resolve(sourcePath)}`;
    return {
      code: `module.exports = ${JSON.stringify(url)};`,
    };
  },
};