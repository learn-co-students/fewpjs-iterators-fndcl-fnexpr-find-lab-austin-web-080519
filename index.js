const testVar = {}

function testFunc() {

  return "hi"
}


function superbowlWin(array) {
  const winYear = array.find(function(season) {
    return season['result'] === 'W'
  })
  if(winYear) {
    return winYear['year']
  } else {
    return undefined
  }
  
}