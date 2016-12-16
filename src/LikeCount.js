import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './Styles';

class LikeCount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: 7
        }
    }

    //As click to plus one state-likes
    onClick = () => this.setState({likes: this.state.likes + 1});

    render() {
        let thumbsUp = '\uD83D\uDC4D';

        return (
            <View style={styles.likeContainer}>
                <TouchableOpacity onPress={this.onClick.bind(this)} style={styles.likeButton}>
                    <Text style={styles.likeText}>
                        {thumbsUp + ' like'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.likeText}>
                    {this.state.likes + ' Likes'}
                </Text>
            </View>
        );
    }
}

export default LikeCount;
