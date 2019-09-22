const testVar = {}

function superbowlWin(arr) {
  let win = arr.find(o => o.result === 'W')
  if(!(typeof win === 'undefined')) {
    return win.year;
  }
  else {
    return win;
  }
}
