const fortunePromts = {
    feeling: ['happy', 'angry', 'sad', 'depressed', 'joyful', 'scared'],
    action: ['seek out', 'ponder', 'talk about', 'do not stop', 'stop', 'cherish'],
    resolve: ['whats inside of yourself', 'the way you view the world', 'what friendship you have with your friends']
}

function generateNumber(num) {
    return Math.floor(Math.random() * num);
}

let fortuneGiven = [];

function giveFortune() {
  let personalIndex = generateNumber(fortunePromts.feeling.length);
  let personalFeeling = fortunePromts.feeling[personalIndex];

  let actionIndex = generateNumber(fortunePromts.action.length);
  let personalAction = fortunePromts.action[actionIndex];

  let resolveIndex = generateNumber(fortunePromts.resolve.length);
  let personalResolve = fortunePromts.resolve[resolveIndex];
}

console.log(giveFortune());