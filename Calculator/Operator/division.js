const SphinxDivision = require('@sphinx-software/division-operator');
function createSphinxDivision() {
    let sphinxDiv = new SphinxDivision(false);
    sphinxDiv.setMessageWhenFailed('Khong duoc chia cho 0');
    return sphinxDiv;
}

class Division {

    constructor() {
        this.sphinxDiv = createSphinxDivision();
    }

    operate(firstNum, secondNum) {
        return this.sphinxDiv.runDivide(firstNum, secondNum);
    }
}
module.exports = Division;