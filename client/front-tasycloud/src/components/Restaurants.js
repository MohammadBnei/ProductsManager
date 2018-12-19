import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    loadRestaurants
} from '../redux/actions/actions'
const mapStateToProps = state => {
    return {
        restaurants: state.restaurants
    }
}
class Restaurants extends Component {
    componentWillReceiveProps(nextProps) {
        
    }
        
    componentWillMount() {
        this.props.restaurants = loadRestaurants()
    }
    
    render() {
    const restaurants = this.props.restaurants.reverse().map((restaurant)=>
                <div className="post-panel">
                    <div className="post-metadata">
                        <div className="post-info">
                            <div data-react-className="PopoverLink">
                            <span className="popover-link" data-reactroot=""><a href={`/restaurant/${restaurant.id}`}>{restaurant.info.name}</a></span></div>
                            <small>{restaurant.info.description}</small>
                        </div>
                    </div>
                </div>
            )
        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="col-md-6 col-md-offset-1 dashboard-main-content">
                        <div className="posts-wrapper animated fadeInUp" data-behavior="endless-scroll" data-animation="fadeInUp-fadeOutDown">
                            {restaurants}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect(mapStateToProps, { loadRestaurants })(Restaurants);