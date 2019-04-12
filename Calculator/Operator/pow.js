class Pow {
    operate(firstNum, secondNum) {
        var pow = 1;
        for (var i = 1 ; i <= secondNum; i++) {
            pow*=firstNum;
        }
        return pow
    }
}
module.exports = Pow;
