// index2.js

const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTimes = (flyovers) => {
  for (let flyover of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
