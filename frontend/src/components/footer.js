import React, {Component} from 'react';
import { ctxConsumer } from '../index';

const context = React.
class Footer extends Component{
    state = {
        name: '',
        age: 23
    }
    
    componentDidMount(){
        this.setState({name: 'Raunak'});
        // hook this to life-cycle events
    }

    changed = (event) => {
        console.log('changed', event);
        console.log('changed', event.target.value);
        console.log(this.state.name);

        this.setState({
            name: event.target.value
        });
    }

    createAlert(){
        alert('You Clicked!');
    }

    render(){
        const animals = ['cat', 'dog', 'horse'];

        return (
            <React.Fragment>
                <h2 onClick={this.createAlert}>Click me</h2>
                <h1>{this.props.trademark}</h1>
                <h6 onClick={this.props.myalert}>
                    {this.props.author}</h6>

                { animals.map( animal => {
                    return (
                        <ctxConsumer>
                            <div key={animal}>
                                <h4>{animal}</h4>
                            </div>
                        </ctxConsumer>
                    );
                })}

                <input value={this.state.name}
                    // onChange={this.changed.bind(this)} type="text"/>
                    onChange={this.changed} type="text"/>
                {this.state.age === 35 ? "yes" : "no"}
            </React.Fragment>
        )
    }
}

export default Footer;