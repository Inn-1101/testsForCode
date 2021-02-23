(function () {
    const MIN = 10;
    const MAX = 999;
    const NUMBER = 150;
    var targetArray = [];
  
    function randomNum(min, max, number) {
      let result = [];
  
      for (let i = 0; i < number; i++) {
        result.push(Math.floor(Math.random() * max) + min);
      }
  
      return result;
    }
  
    targetArray = randomNum(MIN, MAX, NUMBER);
  
    console.log(targetArray);
  
    function isIncreasingDigit(num) {
      if (num < 100) {
        let secondN = num % 10;
        let firstN = (num - secondN) / 10;
        if (firstN < secondN) {
          return num;
        }
      } else {
        let secondNN = num % 100;
        let firstN = (num - secondNN) / 100;
        let secondN = secondNN % 10;
        let thirdN = (secondNN - secondN) / 10;
        if (firstN < secondN && secondN < thirdN) {
          return num;
        }
      }
  
      return false;
    }
  
    function isIncreasingDigits(num) {
      let result = [];
  
  
      for (var i = 0; i < num.length; i++) {
        let tmp = isIncreasingDigit(num[i]);
        if (tmp) {
          result.push(tmp);
        }
      }
  
      console.log(result);
  
      for (var k = 0; k < result.length - 1; k++) {
        if (result[k].length < result[k + 1].length) {
          console.log('true');
        } else {
          console.log('false');
          break;
        }
      }
    }
  
    is_increasing_digits(targetArray);
  
  })()