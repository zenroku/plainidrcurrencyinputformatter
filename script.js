var delayTimer;

function thousandSep(id) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
        const value = document.getElementById(id).value;
        const regx = /[0-9,]+/g;
        let cleanVal = (value.match(regx) || []).join('');
        cleanVal = cleanBeginWithZero(cleanVal);
        const splitCommas = cleanVal.split(',')
        let returnVal = '';
        if (splitCommas.length > 1) {
            const actualVal = splitCommas[0]
            const decVal = splitCommas[1]
            if (decVal.trim() !== '') {
                returnVal += (dotSeparator(actualVal) + ',' + decVal)
            } else {
                returnVal += dotSeparator(actualVal)
            }
        } else {
            returnVal += dotSeparator(cleanVal);
        }
        document.getElementById(id).value = returnVal;
    }, 500)
}

function dotSeparator(num) {
    let arr = [];
    let threeNum = []
    for (var i = num.length - 1; i >= 0; i--) {
        threeNum.unshift(num.charAt(i));
        if (threeNum.length == 3) {
            arr.unshift(threeNum);
            threeNum = [];
        }
    }

    if (threeNum.length > 0) arr.unshift(threeNum);

    let returnVal = '';
    for (let i = 0; i < arr.length; i++) {
        returnVal += arr[i].join('')
        if (i != (arr.length - 1)) {
            returnVal += '.'
        }
    }
    return returnVal;
}

function cleanBeginWithZero(cleanStr){
    let isBeginZero = true;
    let newValue = '';
    for (let i = 0; i < cleanStr.length; i++){
        if (cleanStr.charAt(i) == '0'){
            continue
        } 
        isBeginZero = false
        newValue += cleanStr.charAt(i)
    }

    return newValue;
}