import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {getGifs} from '../actions/getGifs';

class SearchBox extends Component {
    constructor() {
        super();
        this.state = {
            field: ''
        }
    }
    onHandleChangeField = (e) => {
        this.props.getGifs(e.target.value);
        this.setState({
            field: e.target.value
        });
    }

    render() {
        return (
            <div className="search-box">
                <h1>Giphy Search</h1>
                <div id="custom-search-input">
                    <div className="input-group col-md-12">
                        <input type="text" className="form-control input-lg"
                               value={this.state.field}
                               onChange={this.onHandleChangeField}
                               placeholder="Please input something..."/>
                    </div>
                </div>
             </div>
        )
    }
}

function mapStateToProps(state) {
    return{gifs: state.gifs.gifs };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getGifs: getGifs
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);