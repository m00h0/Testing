const stringLength = string => {
    if (string.length > 0 && string.length <11) {
      return string.length
    } else {
      throw new Error('String cant be empty');
    }
  };
  
  module.exports = stringLength