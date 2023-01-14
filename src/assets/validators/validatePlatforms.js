const validatePlatforms = (platforms, allPlatforms) => {
  const allPlatformNames = allPlatforms.map(platform => platform.name);
  const error0 = new Error("At least one value must be provided for 'platforms'.", {cause: 400});
  const error1 = new Error("All values must be valid gaming platforms.", {cause: 400});
  if(platforms.length < 1) throw error0;
  if(!platforms.every(platform => allPlatformNames.includes(platform))) throw error1;
};

module.exports = validatePlatforms;