const validSectionName = (sectionName) => {
  //return true only if sectionName contains small letters separated by hyphen
  return /^[a-z]+(-[a-z]+)*$/.test(sectionName);
};

module.exports = {
  validSectionName,
};
