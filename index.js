


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };
  
  for (let array of args) {
    combinedObject.users.push(...array);
  }
  
  combinedObject.merge_date = new Date().toString("M/d/yyyy");
  
  return combinedObject;
}


