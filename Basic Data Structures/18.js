const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let polz = 0
for (let user in usersObj) {
  if (usersObj[user].online === true) {
   polz++
  }
  
} return polz
  // Only change code above this line
}

console.log(countOnline(users));