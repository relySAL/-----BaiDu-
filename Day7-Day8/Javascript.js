//task 1
function capitalize(str) {
    let lowerCase = str.toLowerCase();
    let firstUpperCase = str.slice(0, 1);
    let word = lowerCase.replace(firstUpperCase, firstUpperCase.toUpperCase());
    return word
}


//task 2
function getLastCharacter(str) {
    let lastChar = str.slice(str.length - 1, str.length);
    return lastChar
}


//task 3
function skipFirstCharacter(str, num) {
    let word = str.slice(num, str.length);
    return word
}



//task 4
function concatString(firstStr, lastStr) {
    let word = `${firstStr} ${lastStr}`
    return word
}



//task 5
function sayHi(name) {
    let hello = `Hello ${name}`
    return hello
}


//task 6
function diyTrim(str) {
    let word = str.trim();
    return word
}


//task 7
function removeRepetition(str) {

    var result = "";
    len = str.length; //一定要现将str的长度先取出来，因为在循环的时候每次切割字符串是会改变字符串长度的

    for (var i = 0; i < len; i++) {

        if (str[0] == str[1]) {
            str = str.slice(1);

        } else {
            result = result + str[0];
            str = str.slice(1);
        }
    }
    return result;
}

//task 8
function isPalindromicString(str) {
    let arr = str.split("");
    let reverseArr = arr.reverse();
    let string = reverseArr.join("");
    if (string == str) {
        return true
    }
    return false
}

// 测试用例
console.log(isPalindromicString("aaa")); // ->true
console.log(isPalindromicString("madam")); // ->true
console.log(isPalindromicString("hello")); // ->false