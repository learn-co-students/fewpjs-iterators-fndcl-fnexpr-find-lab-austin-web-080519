const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winningObject = array.find( object => {
    return object.result === "W";
  })
  if (winningObject) {
    return winningObject.year;
  }
}