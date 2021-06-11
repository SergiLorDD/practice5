import React from "react";
import Input from "./components/Input";

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: null,
            valueOne: null,
            valueSecond: null
        }
    }

    render() {
        const {result, valueOne, valueSecond} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Input type="number" placeholder="Operand 1" value={valueOne} onChange={()=>{}}/>
                        </div>
                    <div className="col-3">
                        <Input type="number" placeholder="Operand 2" value={valueSecond} onChange={()=>{}}/>
                        </div>
                    <div className="col-2"><button className="btn btn-block btn-danger">Clear</button></div>
                </div>
                <div className="row my-3">
                    <div className="col-2"><button className="btn btn-block btn-secondary">Add</button></div>
                    <div className="col-2"><button className="btn btn-block btn-secondary">Subtract</button></div>
                    <div className="col-2"><button className="btn btn-block btn-secondary">Multiply</button></div>
                    <div className="col-2"><button className="btn btn-block btn-secondary">Divide</button></div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <Input type="text" placeholder="Result" value={result} disabled/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;