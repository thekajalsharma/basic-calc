import React from 'react';

class CalcForm extends React.Component {

    sendDetails(e) {
        e.preventDefault();
        this.props.updateState(this.operand1.value, this.operand2.value, this.operator.value);
        this.form.reset();
    }

    render() {
        return (
            <div>
                <form ref={(input) => this.form = input} onSubmit={(e) => this.sendDetails(e)}>
                    <input ref={(input) => this.operand1 = input} type="text" required placeholder="Operand1" />
                    <select ref={(input) => this.operator = input}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">/</option>
                    </select>
                    <input ref={(input) => this.operand2 = input} type="text" required placeholder="Operand1" />
                    <button type="submit">=</button>
                </form>
            </div>
        );
    }
}

export default CalcForm;