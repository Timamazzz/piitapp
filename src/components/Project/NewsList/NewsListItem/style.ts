import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        margin: 15,
        padding: 10,
        borderRadius: 30
    },
    images: {
        flex: 1,
        justifyContent: 'center',
    },
    avatar: {
        width: 33,
        height: 33,
        borderRadius: 50,
        marginRight: 10
    },
    newsImage: {
        width: '100%',
        height: 250,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 23,
        resizeMode: 'cover'
    }
});

export default styles;
