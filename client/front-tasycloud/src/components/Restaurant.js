import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
    getRestaurant
} from '../redux/actions/actions'
import PropTypes from 'prop-types'
const mapStateToProps = state => {
    return {
        _restaurant: state.restaurants.restaurant
    }
}
class ArticleView extends Component {
    componentDidMount() {
        document.body.className = 'posts show'
    }
    componentWillMount() {
        this.props.getRestaurant(this.props.match.params.id)
    }    
    componentWillUnmount() {
        document.body.className = ''
    }
    render() {
        const { info, address, products } = this.props._restaurant
        return ( 
            <div>
                <div className="container-fluid main-container">
                    <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
                        <div id="main-post" className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content">
                            
                            <h3 className="title">{info.name}</h3>
                            <div className="body">
                                <p>{address}</p>
                                <p className=""dangerouslySetInnerHTML={{__html: info.name}}>
                                </p>
                                <p>{products}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
ArticleView.propTypes = {
    params: PropTypes.object.isRequired
}
export default connect(mapStateToProps, { 
    getRestaurant,
})(ArticleView);