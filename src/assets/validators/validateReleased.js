const releasedPattern = require("../releasedPattern.js");

const validateReleased = released => {
  const error0 = new Error("If provided, 'released' format must be 'yyyy-mm-dd'.", {cause: 400});
  const error1 = new Error("If provided, 'released' cannot be later than current date.", {cause: 400});
  if(released === "") return;
  if(!releasedPattern.test(released)) throw error0;
  if(Date.parse(released) > Date.now()) throw error1;
};

module.exports = validateReleased;