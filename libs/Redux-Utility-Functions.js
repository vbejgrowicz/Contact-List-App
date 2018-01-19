(function(){
  var reduxUtils = {};

  // Array Functions
  reduxUtils.compact = function(input) {
    if (input instanceof Array) {
      var newArray = [];
      newArray = this.filter(input, function(item) {
        return item;
      });
      return newArray;
    }
    return undefined;
  }

  reduxUtils.drop = function(input, dropNum) {
    if (input instanceof Array) {
      var newArray = [];
      if (typeof dropNum === 'undefined') {
        dropNum = 1;
      }
      newArray = input.slice(dropNum);
      return newArray;
    }
    return undefined;
  }

  reduxUtils.take = function(input, takeNum) {
    if (input instanceof Array) {
      var newArray = [];
      if (typeof takeNum === 'undefined') {
        takeNum = 1;
      }
      newArray = input.slice(0, takeNum);
      return newArray;
    }
    return undefined;
  }

  reduxUtils.min = function(input) {
    if (input instanceof Array && input.length > 0) {
      var min = Math.min.apply(this, input);
      return min;
    }
    return undefined;
  }

  reduxUtils.max = function(input) {
    if (input instanceof Array && input.length > 0) {
      var max = Math.max.apply(this, input);
      return max;
    }
    return undefined;
  }

  reduxUtils.uniq = function(input) {
    if (input instanceof Array) {
      var newArray =  [];
      for (var i = 0; i < input.length; i += 1) {
        if (newArray.indexOf(input[i]) === -1) {
          newArray.push(input[i]);
        }
      }
      return newArray;
    }
    return undefined;
  }

  reduxUtils.chunk = function(input, chunkSize) {
    if (input instanceof Array) {
      var newArray =  [];
      if (typeof chunkSize === 'undefined') {
        chunkSize = 1;
      }
      for (var i = 0; i < input.length; i += chunkSize) {
        newArray.push(input.slice(i, i + chunkSize));
      }
      return newArray;
    }
    return undefined;
  }

  reduxUtils.flatten = function(input) {
    if (input instanceof Array) {
      var newArray = this.reduce(input, function(acc, value) {
        if (value instanceof Array) {
          value = this.flatten(value);
        }
        return acc.concat(value);
      }.bind(this), []);
      return newArray;
    }
    return undefined;
  }

  reduxUtils.remove = function(input, func) {
    if (input instanceof Array && func instanceof Function) {
      var newArray = [];
      this.each(input, function(value, array) {
        if (!func(value, array)) {
          newArray.push(value);
        }
      })
      return newArray;
    }
    return undefined;
  }

  reduxUtils.map = function(input, func) {
    if (input instanceof Array && func instanceof Function) {
      var newArray = [];
      this.each(input, function(value, array) {
        newArray.push(func(value));
      });
      return newArray;
    }
    return undefined;
  }

  reduxUtils.reduce = function(input, func, accumulator) {
    if (input instanceof Array && func instanceof Function) {
      this.each(input, function(value, array) {
        accumulator = func(accumulator, value);
      });
      return accumulator;
    }
    return undefined;
  }

  // Object Functions
  reduxUtils.keys = function(input) {
    if (input instanceof Object && !(input instanceof Array)) {
      var newArray = [];
      this.each(input, function(key, value, object) {
        newArray.push(key);
      });
      return newArray;
    }
    return undefined;
  }

  reduxUtils.values = function(input) {
    if (input instanceof Object && !(input instanceof Array)) {
      var newArray = [];
      this.each(input, function(key, value, object) {
        newArray.push(value);
      });
      return newArray;
    }
    return undefined;
  }

  reduxUtils.findKey = function(input, func) {
    if ((input instanceof Object && !(input instanceof Array)) && func instanceof Function) {
      var foundKey;
      for (var key in input) {
        var result = func(key, input[key], input);
        if (result === true) {
          foundKey = key;
          return foundKey;
        }
      }
      return foundKey;
    }
    return undefined;
  }

  reduxUtils.merge = function(inputOne, inputTwo) {
    if ((inputOne instanceof Object && !(inputOne instanceof Array)) && (inputTwo instanceof Object && !(inputTwo instanceof Array))) {
      var mergedObject = inputOne;
      for (var key in inputTwo) {
        mergedObject[key] = inputTwo[key]
      }
      return mergedObject;
    } else if ((inputOne instanceof Object && !(inputOne instanceof Array)) && inputTwo === undefined) {
      var mergedObject = inputOne;
      return mergedObject;
    }
    return undefined;
  }

  reduxUtils.mapKeys = function(input, func) {
    if ((input instanceof Object && !(input instanceof Array)) && func instanceof Function) {
      var newObject = {};
      this.each(input, function(key, value, object) {
        var newKey = func(key, value, object);
        newObject[newKey] = value;
      });
      return newObject;
    }
    return undefined;
  }

  reduxUtils.mapValues = function(input, func) {
    if ((input instanceof Object && !(input instanceof Array)) && func instanceof Function) {
      var newObject = {};
      this.each(input, function(key, value, object) {
        var newValue = func(key, value, object);
        newObject[key] = newValue;
      });
      return newObject;
    }
    return undefined;
  }

  reduxUtils.pick = function(input, list) {
    if (input instanceof Object && !(input instanceof Array)) {
      if (typeof list === 'undefined') {
        list = [];
      }
      var newObject = {};
      this.each(input, function(key, value, object) {
        if (list.indexOf(key) === -1) {
        } else {
          newObject[key] = value;
        }
      });
      return newObject;
    }
    return undefined;
  }

  reduxUtils.omit = function(input, list) {
    if (input instanceof Object && !(input instanceof Array)) {
      if (typeof list === 'undefined') {
        list = [];
      }
      var newObject = {};
      this.each(input, function(key, value, object) {
        if (list.indexOf(key) !== -1) {
        } else {
          newObject[key] = value;
        }
      });
      return newObject;
    }
    return undefined;
  }

  // Object/Array Functions
  reduxUtils.each = function(input, func) {
    if (input instanceof Array && func instanceof Function) {
      for (var key in input) {
        func(input[key], input);
      }
      return input;
    } else if (input instanceof Object && func instanceof Function) {
      for (var key in input) {
        func(key, input[key], input);
      }
      return input;
    }
    return undefined;
  }

  reduxUtils.every = function(input, func) {
    if (input instanceof Array && func instanceof Function) {
      var result;
      for (var key in input) {
        result = func(input[key], input);
        if (result === false) {
          return result;
        }
      }
      return result;
    } else if (input instanceof Object && func instanceof Function) {
      var result;
      for (var key in input) {
        result = func(key, input[key], input);
        if (result === false) {
          return result;
        }
      }
      return result;
    }
    return undefined;
  }

  reduxUtils.filter = function(input, func) {
    if (input instanceof Array && func instanceof Function) {
      var newArray = [];
      this.each(input, function(value, object) {
        if (func(value, object)) {
          newArray.push(value);
        }
      });
      return newArray;
    } else if (input instanceof Object && func instanceof Function) {
      var newObject = {};
      this.each(input, function(key, value, object) {
        if (func(key, value, object)) {
          newObject[key] = value;
        }
      });
      return newObject;
    }
    return undefined;
  }

  module.exports = reduxUtils;

  console.log('Redux Utility Functions Library Loaded...');
})();
