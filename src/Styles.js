import {StyleSheet} from 'react-native';

export default  styles = StyleSheet.create({
    likeContainer: {
        flexDirection: 'row'
    },
    likeButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 5,
        flex: 1,
        margin: 8,
        padding: 8,
        height:40
    },
    likeText: {
        flex: 1,
        fontSize: 18,
        alignSelf: 'center'
    },
    buttonDisabled: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    button: {
        flex: 1,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray'
    },
    buttonText: {
        color: 'white'
    },
    progressBarContainer: {
        height: 10,
        margin: 10,
        borderColor: '#eeeeee',
        borderWidth: 2
    },
    progressBar: {
        alignSelf: 'flex-start',
        flex: 1,
        backgroundColor: '#0011ff'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewPage: {
        flex: 1,
    },
    image: {
        width: 300,
        height: 200,
        padding: 20
    },
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    scrollStateText: {
        color: '#99d1b7',
    }
});
