const { properties } = require('../outsite-server/mock-data/properties.json');

const root = {
  getAllProperties: () => {
    return properties;
  },
};

module.exports = root;
