var delayTimer;

function thousandSep(id) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
        const value = document.getElementById(id).value;
        const regx = /[0-9,]+/g;
        const cleanVal = (value.match(regx) || []).join('');
        const splitCommas = cleanVal.split(',')
        let returnVal = '';
        if (splitCommas.length > 1) {
            let actualVal = splitCommas[0]
            let decVal = splitCommas[1]
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

    returnVal = '';
    for (let i = 0; i < arr.length; i++) {
        returnVal += arr[i].join('')
        if (i != (arr.length - 1)) {
            returnVal += '.'
        }
    }
    return returnVal;
}