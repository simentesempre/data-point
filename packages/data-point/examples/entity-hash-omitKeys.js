const assert = require("assert");
const dataPoint = require("../").create();

dataPoint.addEntities({
  "hash:omitKeys": {
    omitKeys: ["name"]
  }
});

// notice how name is no longer in the object
const expectedResult = {
  url: "https://github.com/ViacomInc/data-point"
};

const input = {
  name: "DataPoint",
  url: "https://github.com/ViacomInc/data-point"
};

dataPoint.resolve("hash:omitKeys", input).then(output => {
  assert.deepStrictEqual(output, expectedResult);
  // eslint-disable-next-line no-console
  console.log(output);
});
