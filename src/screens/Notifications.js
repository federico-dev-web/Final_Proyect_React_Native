import { StyleSheet, Text, View, FlatList } from 'react-native'
import Head from '../components/Head.js'

import { colors } from '../theme/colors.js'

import { useSelector } from 'react-redux'

const Notifications = () => {

    const notifications = useSelector((state) => state.notificationsSlice.notificationsList);

    return (
    <View>
        <Head title="Notificaciones" />
        <View style={ styles.container }>
            {notifications[0] ? (
                <FlatList
                    style={styles.list}
                    data={ [...notifications] }
                    keyExtractor={ (key) => Math.random() }
                    renderItem={ ( { item } ) =>  ( <ItemNotifications item={ item } /> )  }
                />
            ) : (
                <Text style={styles.emptyContainer}>No hay notificaciones para mostrar</Text>
            ) }
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: 20
    },
    emptyContainer: {
        height: 100,
        margin: 10,
        fontSize: 20
    },
    list: {
        borderColor: colors.verdeOscuro,
        borderRadius: 20,
        borderWidth: 2,
        width: "80%"
    },
    text: {
        alignSelf: 'center',
        marginVertical: 15
    }
})

export default Notifications
