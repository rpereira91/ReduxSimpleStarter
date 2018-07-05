import React, {Component} from 'react';

class SearchBar extends Component {
    //constructor is called by default at every instance
    constructor(props){
        //calls the parent method
        super(props);
        //create a new object and assignt it to this.state, this records the search term to state
        //state will only be changed like this in the constructor
        this.state = { term: ''};
    }
    render() {
        //whenever the user interacts with this input bar it emits a change method
        //to envoke JS code write "on" then th name then the name of the function
        //state is set to the term
        return <input onChange={event => this.setState({term: event.target.value})} />;

        //this is the old way to use the event, calling the onInputChange method
        // return <input onChange={this.onInputChange} />;
    }
    //either handle or on then the name of the event, is the naming convention
    //it's passed an event object because of the event change
    //dep
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }
}

export default SearchBar;