// script.js
class FormulaEvaluator {
    constructor(container) {
        this.container = container;
        this.inputs = Array.from(container.querySelectorAll('.form-input'));
        this.formulaCard = container.querySelector('.formula-card');
        this.outputElement = container.querySelector('.output');
        this.formula = this.formulaCard.dataset.formula;
        
        this.initialize();
    }

    initialize() {
        this.inputs.forEach(input => {
            input.addEventListener('input', () => this.evaluateFormula());
        });
        this.evaluateFormula();
    }

    getValues() {
        return this.inputs.reduce((acc, input) => {
            acc[input.id.replace(/\d+/g, '')] = parseFloat(input.value) || 0;
            return acc;
        }, {});
    }

    evaluateFormula() {
        try {
            const values = this.getValues();
            const expression = this.formula.replace(
                /[a-zA-Z]+/g, 
                match => values[match] ?? `values.${match}`
            );
            
            const result = new Function('values', `return ${expression}`)(values);
            
            this.outputElement.textContent = result.toFixed(2);
            this.outputElement.classList.remove('error');
        } catch (error) {
            this.outputElement.textContent = 'Invalid Formula';
            this.outputElement.classList.add('error');
        }
    }
}

// Initialize all formula groups
document.querySelectorAll('.formula-group').forEach(container => {
    new FormulaEvaluator(container);
});