const { nextISSTimesForMyLocation } = require("./iss");

nextISSTimesForMyLocation((error, flyovers) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  logAllFlyovers(flyovers);
});

const logAllFlyovers = (flyovers) => {
  for (let flyover of flyovers) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(flyover.risetime);
    const duration = flyover.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};
