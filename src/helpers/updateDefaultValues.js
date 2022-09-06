function updateDefaultValues(obj, keyVal) {
    Object.keys(obj).forEach((key) => {
      let propValue = obj[key]
        
      if(propValue && typeof propValue === 'object') {
          return updateDefaultValues(obj[key], keyVal)
      }
        
      if (propValue === null && keyVal[key] !== undefined) {
        obj[key] = keyVal[key]
      }
    })
    
    return obj
  }
  
  module.exports = updateDefaultValues;
