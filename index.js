// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(array) {
  const w = array.find(team => team.result === "W")
  if (w) {
    return w.year
  }
  else {
    return undefined
  }
};
  
