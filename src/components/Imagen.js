import { StyleSheet, Image, View, Text } from 'react-native'

const Imagen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5833/5833290.png' }}
            />
            <Text style={styles.texto}>Mis libros</Text>
        </View>
    )
}

export default Imagen

const styles = StyleSheet.create({
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        padding: 10
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }, 

    texto: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    }
})