const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arrayOfObjects) {
  let win = arrayOfObjects.find( team => team.result === "W")
  
  if (win) {
    return win.year
  } else {
    return undefined
  }
}