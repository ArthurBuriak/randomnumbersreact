import React, { Component } from 'react'
import './Gym.css'
export class Gym extends Component {

    constructor(props){
        super(props);

        this.state = {
            from: null,
            to: null,
            random: null,
            error: false
        }

    }

    getFrom = (event) => {
        this.setState({from: event.target.value});
    }

    getTo = (event) => {
        this.setState({to: event.target.value});
    }

    getRandom = () => {
        if(this.state.from === null || this.state.to === null){
            this.setState({ error: true })
        }else{
            this.setState({
                random: Math.random() * (+this.state.from - +this.state.to) + +this.state.to,
                error: false,
            }, () => {
                console.log(Math.ceil(this.state.random));
            });
        }
    }

    render() {
        return (
            <div className="random">
                <div className="random-inputs">
                    <input type="text" className="random-input" onChange={this.getFrom} placeholder="Min" />
                    <input type="text" className="random-input" onChange={this.getTo} placeholder="Max" />
                    <button type="button" onClick={this.getRandom}>Random</button>
                </div>
                { this.state.error ?
                    <div className="error">
                        Enter numbers
                    </div> : null
                }
                <div className="random-output">
                    { Math.ceil(this.state.random) }
                </div>
            </div>
        )
    }
}

export default Gym
