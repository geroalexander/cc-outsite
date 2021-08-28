const { properties } = require('../outsite-server/mock-data/properties.json');

const root = {
  hello: () => {
    return 'Hello world!';
  },
  bye: () => {
    return 'Bye world';
  },
  getAllProperties: () => {
    return properties;
  },
};

module.exports = root;
