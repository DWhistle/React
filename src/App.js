import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchField } from './components/searchFIeld/searchfield.component';

class App extends Component {
    state = { loading: false };

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ monsters: json }));
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteted = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div className="App">
                <SearchField
                    placeholder="search"
                    handleChange={e =>
                        this.setState({
                            searchField: e.target.value,
                        })} />
                <CardList monsters={filteted} />

            </div>
        );
    }
}

export default App;
