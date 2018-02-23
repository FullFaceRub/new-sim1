import React, {Component} from 'react';
import axios from 'axios';
import NewBin from './NewBin';

export default class Shelf extends Component {
    constructor(){
        super();

        this.state = {
            bins: []
        }
        this.newBin=this.newBin.bind(this);
    }

    newBin(){
        let newId = this.state.bins.length+1
        let shelf = this.props.match.params.id
        axios.post('/api/newbin', {binName: newId, binContent: '', binPrice: 0, shelfId: shelf}).then(bin=>{
            this.setState({
                bins: [...this.state.bins, bin]
            })
        })
    }

    componentDidMount(){
        let shelf = this.props.match.params.id
        axios.get('/api/shelf/'+shelf).then(shelfData => {
            this.setState({
                bins: shelfData
            })
        })
    }
    render(){
        let list = this.state.bins.map((e,i)=>{
            return (
                <div key={i}>
                    Bin {e.bin_id}
                </div>
            )
        })
        return(
            <div>
                {list}
                <NewBin
                    newBin={this.newBin}
                />
            </div>
        )
    }
}