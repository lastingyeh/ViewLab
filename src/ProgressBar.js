import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import styles from './Styles';
import {PAGES} from './Utility';

class ProgressBar extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {};

    static propTypes = {
        progress: React.PropTypes.shape({
            position: React.PropTypes.number,
            offset: React.PropTypes.number
        }).isRequired,
        size: React.PropTypes.number.isRequired,
    };

    render() {
        const {position, offset} = this.props.progress;

        let fractionalPosition = position + offset;
        let progressBarSize = (fractionalPosition / (PAGES - 1)) * this.props.size;

        console.log('progressBarSize',progressBarSize);

        return (
            <View style={[styles.progressBarContainer,{width:this.props.size}]}>
                <View style={[styles.progressBar,{width:progressBarSize}]}/>
            </View>
        );
    }
}

export default ProgressBar;
