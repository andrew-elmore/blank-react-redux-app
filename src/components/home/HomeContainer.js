import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class HomeContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    render(){
        return (
            <div className='HomeContainer'>
                This is the Home Container
            </div>
        )
    }
}

const mstp = (state, ownProps) => {
    return ({

    })
};

const mdtp = (dispatch) => ({

})

export default HomeContainer
