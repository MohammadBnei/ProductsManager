import React, { Component } from 'react';
import { connect } from 'react-redux'
class Header extends Component {
    render() {
        return ( 
            <div>
    <div data-react-className="UserOverlay" data-react-props="{}">
        <div className="overlay overlay-hugeinc " data-reactroot=""><button className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
            <nav className="users-overlay">
                <h2 className="grayed-heading center">Hey</h2>
                <ul>
                    <li className="pagination-button-group"></li>
                </ul>
            </nav>
        </div>
    </div>
</div>
            );
    }
}
const mapStateToProps = state => {
    return {
        lang: state.lang,
    }    
}
const mapDispatchToProps = dispatch => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);