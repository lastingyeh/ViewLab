import React, {Component} from 'react';
import {
    View,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';
import styles from './Styles';

class Button extends Component {

    static propTypes = {

        enabled: React.PropTypes.bool.isRequired,
        text: React.PropTypes.string.isRequired,
        onPress: React.PropTypes.func
    }

    _handlePress = () => {
        if (this.props.enabled && this.props.onPress) {
            this.props.onPress();
        }
    }

    render() {
        let stylesEnable = this.props.enabled ? {} : styles.buttonDisabled;

        return (
            <TouchableWithoutFeedback onPress={this._handlePress}>
                <View style={[styles.button,stylesEnable]}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </View>

            </TouchableWithoutFeedback>
        );
    }
}

export default Button;
