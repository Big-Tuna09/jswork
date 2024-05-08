const _ = {
    clamp(num, numMin, numMax){
      const lowerClampedValue = Math.max(num, numMin);
      const clampedValue = Math.min( lowerClampedValue, numMax);
      return clampedValue;
    },
  
    inRange(num, start, end) {
      if (typeof end === 'undefined') {
        end = start;
        start = 0;
      }
      if (start > end) {
        let temp = start;
        start = end;
        end = temp;
      }
      let isInRange = false
      if (num >= start && num < end) {
        isInRange = true;
      }
      return isInRange;
    },
  
    words (str) {
      arr = str.split(' ');
      return arr;
    },

    pad (str, length) {
      if (str.length > length) {
        return str;
      } else {
      let paddingNeeded = 0;
     const space = ' '
  
      paddingNeeded = Math.floor((length- str.length)/2);
  
      const endPad = length - paddingNeeded- str.length;
  
       let paddedstr =(`${space.repeat(paddingNeeded)}${str}${space.repeat(endPad)}` )
  
        return paddedstr;
      }
    },

    has (obj,key) {
      if (typeof obj[key] === 'undefined'){
        return false;
      } else {
        return true;
      }
    },
    
    invert (obj) {
      const invertObj = {};
      for (const key in obj) {
        let originalValue = obj[key];
        invertObj[originalValue]=key;
      }
      return invertObj;
    },
    findKey (obj, predicate) {
      for (const key in obj) {
        const value = obj[key];
        const predicateReturn = predicate(value);
        if (predicateReturn) {
          return key;
  
        }
      }
      return undefined;
    },
    drop (arr, num) {
      if (typeof num === 'undefined') {
        num = 1;
      }
      const newArr =[];
      for (i = 0; i < arr.length; i++) {
        if (i < num) {
        } else {
          newArr.push(arr[i]);
        }
      }
      return newArr;
    },
    dropWhile (arr, predicate) {
      const newArr = [];
      let i = 0
      while (predicate(arr[i],i,arr)) {
        i++;
  
      }
      for (i = i; i < arr.length; i++) {
        newArr.push(arr[i]);
      }
      return newArr;
    },
    chunk (arr, size) {
      if (typeof size === undefined) {
        size = 1;
      }
      const newArr = [];
      let k = 0;
      numOfArrays = Math.ceil(arr.length / size);
    
      for (i = 0; i < numOfArrays; i++) {
        let subArr = [];
        for (j = 0 ; j < size; j++) {
          if (k >= arr.length) {
          } else {
            subArr.push(arr[k]);
          }
          k++;
  
        }
        newArr.push(subArr);
      }
      return newArr;
    }
  }; 