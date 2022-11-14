import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    images: {
        flex: 1,
        justifyContent: 'center',
        zIndex: -1
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderTopRightRadius: 50
    }
});

export default styles;
