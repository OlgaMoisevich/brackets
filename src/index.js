module.exports = function check(str, bracketsConfig) {

    if (str.length % 2 !== 0) {
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

    for (let sign = 0; sign < str.length; sign++) {

        closeIndex = close_sign.indexOf(str[sign]);
        if (closeIndex !== -1 && stack.length) {
            let last_el = stack[stack.length - 1];
            if (last_el === open_sign[closeIndex]) {
                stack.pop();
                continue
            }
        }

        openIndex = open_sign.indexOf(str[sign]);
        if (openIndex !== -1) {
            stack.push(str[sign]);
        } else {
            return false
        }
    };

    if (stack.length > 0) {
        return false;
    } else {
        return true;
    }
};


