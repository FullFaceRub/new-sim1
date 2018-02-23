import React, { Component } from 'react';
import axios from 'axios';
import NewBin from './NewBin';

export default class Shelf extends Component {
    constructor() {
        super();

        this.state = {
            bins: []
        }
        this.newBin = this.newBin.bind(this);
    }

    newBin() {
        let newId = this.state.bins.length + 1
        let shelf = this.props.match.params.id
        axios.post('/api/newbin', { binName: newId, binContent: '', binPrice: 0, shelfId: shelf }).then(bin => {
            this.setState({
                bins: [...this.state.bins, bin]
            })
        })
    }

    componentDidMount() {
        let shelf = this.props.match.params.id
        axios.get('/api/shelf/' + shelf).then(shelfData => {
            this.setState({
                bins: shelfData
            })
        })
    }
    render() {
        let list = this.state.bins.map((e, i) => {
            return (
                <div key={i} className="bin">
                    Bin {e.bin_id}
                </div>
            )
        })
        return (
            <div>
                {list}
                <NewBin
                    newBin={this.newBin}
                />

                <p>This text is inside of a p tag</p>
                <span>This text is inside of a span tag</span>
                <div>The whole thing is in a div</div>

                <ol>
                    <li>Dan</li>
                    <li>Dano</li>
                    <li>DanV</li>
                </ol>

                <article>
                    <header>
                        <h1>This is an article</h1>
                    </header>
                    <p>And this is the text of the article</p>
                </article>
                <img src="" alt="images are self closing tags"/>
                <input type="text" placeholder="Enter name here" value="John"/>
            </div>
        )
    }
}