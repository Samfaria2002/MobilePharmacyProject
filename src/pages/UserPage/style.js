import { StyleSheet } from 'react-native';

exports.styles = StyleSheet.create({

    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    }, 
    imageUser: {
        height: 150,
        width: 150,
        borderRadius: 75
    },
    userName: {
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: '#000'
    },
    aboutUser: {
        fontSize: 17,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
    },
    userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
    },
    userBtn: {
        borderColor: '#7bb7e0',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
    },
    userBtnTxt: {
        color: '#2e64e5',
    },
    userOrdersBox: {
        justifyContent: 'center'
    },
    userOrderTitle: {
        fontSize: 25,
        marginTop: 40,
        color: '#000'
    },
    userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    userInfoItem: {
        justifyContent: 'center',
    },
    userInfoTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
        color: '#000'
    },
    userInfoSubTitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
    },
});

