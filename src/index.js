module.exports = function check(str, bracketsConfig) {

    let arr = Object.values(str.split(''));
    if (arr.length % 2 !== 0) {
        return false;
    }

    let open_sign = [];
    let close_sign = [];
    let stack = [];
    let openIndex;
    let closeIndex;

    bracketsConfig.forEach(([key, value]) => {
        open_sign.push(key);
        close_sign.push(value)
    });

    for (let sign = 0; sign < arr.length; sign++) {

        closeIndex = close_sign.indexOf(arr[sign]);
        if (closeIndex !== -1 && stack.length) {
            let last_el = stack[stack.length - 1];
            if (last_el === open_sign[closeIndex]) {
                stack.pop();
                continue
            }
        }

        openIndex = open_sign.indexOf(arr[sign]);
        if (openIndex !== -1) {
            stack.push(arr[sign]);
        } else {
            return false
        }
    };
    return true
};


