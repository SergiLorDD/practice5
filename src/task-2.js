import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: '',
            valueOne: '',
            valueSecond: '',
        };
    }

    handleOnChange = (input) => (event) => {
        const value = event.target.value;
        if (Number.isNaN(value)) return;
        this.setState({ [input]: value });
    };

    handleOnClickClear = () => {
        console.log('click')
        this.setState({
            result: '',
            valueOne: '',
            valueSecond: '',
        });
    };

    handleOnClickMath = (math) => () => {
        if(!this.isValidValue()) return;
        const valueOne = Number(this.state.valueOne),
              valueSecond = Number(this.state.valueSecond);
        switch (math) {
            case 'add':
                this.setState({
                    result: valueOne + valueSecond
                });
                break;
            case 'subtract':
                this.setState({
                    result: valueOne - valueSecond
                });
                break;
            case 'multiply':
                this.setState({
                    result: valueOne * valueSecond
                });
                break;
            case 'divide':
                this.setState({
                    result: (valueOne / valueSecond).toFixed(3)
                });
                break;
        }
    };

    isValidValue = () => {
        if(this.state.valueOne == null || this.state.valueSecond == null) return false
        return true
    }

    render() {
        const { result, valueOne, valueSecond } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Input
                            type="number"
                            placeholder="Operand 1"
                            value={valueOne}
                            onChange={this.handleOnChange("valueOne")}
                        />
                    </div>
                    <div className="col-3">
                        <Input
                            type="number"
                            placeholder="Operand 2"
                            value={valueSecond}
                            onChange={this.handleOnChange("valueSecond")}
                        />
                    </div>
                    <Button
                        className={"btn-danger"}
                        text={"Clear"}
                        onClick={this.handleOnClickClear}
                    />
                </div>
                <div className="row my-3">
                    <Button
                        className={"btn-secondary"}
                        text={"Add"}
                        onClick={this.handleOnClickMath("add")}
                    />
                    <Button
                        className={"btn-secondary"}
                        text={"Subtract"}
                        onClick={this.handleOnClickMath("subtract")}
                    />
                    <Button
                        className={"btn-secondary"}
                        text={"Multiply"}
                        onClick={this.handleOnClickMath("multiply")}
                    />
                    <Button
                        className={"btn-secondary"}
                        text={"Divide"}
                        onClick={this.handleOnClickMath("divide")}
                    />
                </div>
                <div className="row">
                    <div className="col-4">
                        <Input
                            type="text"
                            placeholder="Result"
                            value={result}
                            disabled
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;
