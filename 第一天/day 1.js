function BMI(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}
var bmi = BMI(52, 1.7);
console.log(bmi);

function calculateSum(price, vip) {
  if (price >= 300 && vip === true) {
    var sum = price * 0.98;
    if (sum > 300) {
      sum -= 30;
    } else if (sum > 200) {
      sum -= 10;
    } else if (sum > 100) {
      sum -= 5;
    }
    return sum;
  } else if (price >= 300) {
    price -= 30;
    return price;
  } else if (price >= 200) {
    price -= 20;
    return price;
  } else if (price >= 100) {
    price -= 5;
    return price;
  }
}
console.log(calculateSum(300, false));
console.log(calculateSum(300, true));

function isNumeric(num) {
  if (typeof num === "number") {
    return true;
  } else {
    return false;
  }
}
console.log(isNumeric("0"));
console.log(isNumeric(0));
console.log(isNumeric(null));
console.log(isNumeric(""));
console.log(isNumeric(" "));

function isUndefined(arg) {
  if (typeof arg === "undefined") {
    return true;
  } else {
    return false;
  }
}
function isNull(arg) {
  if (!arg && typeof arg !== "undefined" && arg !== 0) {
    return true;
  } else {
    return false;
  }
}
var expUndefined = undefined;
var expNull = null;
var expZero = 0;
var a;
var o = new Object();
console.log(isUndefined(expUndefined)); // ->true
console.log(isUndefined(expNull)); // ->false
console.log(isUndefined(a)); // ->true
console.log(isUndefined(o)); // ->true
console.log(isNull(expUndefined)); // ->false
console.log(isNull(expNull)); // ->true
console.log(isNull(expZero)); // ->false
console.log(isNull(a)); // ->false
console.log(isNull(o)); // ->false
