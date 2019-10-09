module.exports = function check(str, bracketsConfig) {
    let b0, b1, sumCheck,
        sum = 0,
        a = [],
        aa = [];
    for (let i = 0; i < bracketsConfig.length; i++) {//INIT ARRAYS
        aa.push([]);
        a[i] = 0;
    }
    for (let i = 0; i < str.length; i++) {
        if (str.length % 2) {//NO PAIR == FALSE
            return false;
        }
        for (let i1 = 0; i1 < bracketsConfig.length; i1++) {
            b0 = bracketsConfig[i1][0];
            b1 = bracketsConfig[i1][1];
            if (str[i] === b1) {
                if (a[i1] > 0) {
                    sumCheck = 0;
                    for (let i2 = 0; i2 < bracketsConfig.length; i2++) {
                        i2 !== i1 ? sumCheck += Math.abs(a[i2]) : null;
                    }
                    if (!sumCheck) {
                        a[i1]--;
                        aa[i1].pop();
                        break;//break second loop "brackets"
                    } else {
                        console.log("condition: " + aa[i1][aa[i1].length - 1] + "/" + (i - 1));
                        if (check(str.substring(aa[i1][aa[i1].length - 1], i -1), bracketsConfig)) {
                            a[i1] --;
                            aa[i1].pop();
                            break;//break second loop "brackets"
                        } else {
                            return false;
                        }
                    }
                } else {
                    if (b0 !== b1) {
                        return false;
                    }
                }
            }
            if (str[i] === b0) {
                if (!(a[i1] < 0)) {
                    a[i1]++;
                    aa[i1].push(i);
                    break;//break second loop "brackets"
                } else {
                    return false;
                }
            }
        }
    }
    //for (let i = 0; i < bracketsConfig.length; (sum += a[i], i++)) {}
    return true;
}
