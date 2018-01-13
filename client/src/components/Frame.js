import React, { Component } from 'react';
import Screen from './Screen';
import Button from './Button';

class Frame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            calculation: '',
            response: '',
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const selection = event.target.value;
        switch (selection) {
            case '=':
                const response = eval(this.state.calculation).toString();
                this.setState({ response, calculation: '' });
                break;
            case 'AC':
                this.setState({ calculation: '', response: '' });
                break;
            default:
                this.setState({ calculation: this.state.calculation += selection });
                break;
        }
    }

    render() {
        return (
            <div className="frame">
                <div className="title">Calculator</div>
                <Screen calculation={this.state.calculation} response={this.state.response} />
                <div className="buttons">
                    <Button label={'1'} handleClick={ this.handleClick } type='input' />
                    <Button label={'2'} handleClick={ this.handleClick } type='input' />
                    <Button label={'3'} handleClick={ this.handleClick } type='input' />
                    <Button label={'4'} handleClick={ this.handleClick } type='input' />
                    <Button label={'-'} handleClick={ this.handleClick } type='action' />
                    <Button label={'+'} handleClick={ this.handleClick } type='action' />
                </div>
                <div className="buttons">
                    <Button label={'5'} handleClick={ this.handleClick } type='input' />
                    <Button label={'6'} handleClick={ this.handleClick } type='input' />
                    <Button label={'7'} handleClick={ this.handleClick } type='input' />
                    <Button label={'8'} handleClick={ this.handleClick } type='input' />
                    <Button label={'*'} handleClick={ this.handleClick } type='action' />
                    <Button label={'/'} handleClick={ this.handleClick } type='action' />
                </div>
                <div className="buttons">
                    <Button label={'9'} handleClick={ this.handleClick } type='input' />
                    <Button label={'0'} handleClick={ this.handleClick } type='input' />
                    <Button label={'.'} handleClick={ this.handleClick } type='input' />
                    <Button label={'AC'} handleClick={ this.handleClick } type='input' />
                    <Button label={'%'} handleClick={ this.handleClick } type='input' />
                    <Button label={'='} handleClick={ this.handleClick } type='action' />
                </div>
            </div>

        );
    };
}

export default Frame;