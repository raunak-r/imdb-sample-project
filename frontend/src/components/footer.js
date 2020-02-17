import React, {Component} from 'react';

class Footer extends Component{
    state = {
        name: 'raunak',
        age: 23
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
        return (
            <React.Fragment>
                <h2 onClick={this.createAlert}>Click me</h2>
                <h1>{this.props.trademark}</h1>
                <h6 onClick={this.props.myalert}>
                    {this.props.author}
                </h6>
                <input value={this.state.name}
                    // onChange={this.changed.bind(this)} type="text"/>
                    onChange={this.changed} type="text"/>
            </React.Fragment>
        )
    }
}

export default Footer;