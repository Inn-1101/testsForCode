(function () {
    let aObj = [1, 
      3, 
      [8, 
        [3, 6], 
      9], 
      19, 4, 5];
  
    function myFunc(array) {
      var resultArray = [];
      
      var currentArray = array;
  
      var i = 0;
  
      var stackI = [];
      var stackCurrent = [];
      var stackResults = [];
  
      while (true) {
        if (!stackI.length) {
          if (i > currentArray.length - 1) {
            break;
          }
        }
  
        if (Array.isArray(currentArray[i])) {
          stackI.push(i);
          stackCurrent.push(currentArray);
          stackResults.push(resultArray);
  
          currentArray = currentArray[i];
          i = -1; 
          resultArray = null;
          resultArray = [];
        } else {
          resultArray.push(currentArray[i]);
        }
        
        i++;
        if (i > currentArray.length - 1) {
          if (!stackI.length) {
            break;
          }
          i = stackI.pop();
          currentArray = stackCurrent.pop();
          let tmp = resultArray;
          resultArray = stackResults.pop();
          resultArray.push(tmp);
          i++;
        }
      }
  
      return resultArray;
    }
  
    console.log(aObj);
    console.log(myFunc(aObj));
  
  })()