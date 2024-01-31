import { StyleSheet, Text, TextInput, View } from 'react-native'
import Boton from './Boton'

const AddBook = ({ titulo, handlerIitulo, descripcion, handlerDescripcion, autor, handlerAutor, agregarLibros }) => {
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder='Título del libro'
                placeholderTextColor="#FFB996"
                maxLength={25}
                value={titulo}
                onChangeText={handlerIitulo}
            />

            <TextInput
                style={styles.input}
                placeholder='Autor del libro'
                placeholderTextColor="#FFB996"
                maxLength={25}
                value={autor}
                onChangeText={handlerAutor}
            />

            <TextInput
                style={styles.input}
                placeholder='Reseña del libro'
                placeholderTextColor="#FFB996"
                multiline
                numberOfLines={2}
                maxLength={80}
                value={descripcion}
                onChangeText={handlerDescripcion}
            />

            <Boton
                title={"Guardar libro"}
                onPress={agregarLibros}
            />

        </View>
    )
}

export default AddBook

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FDFFAB",
        justifyContent: "center",
        padding: 5
    },

    input: {
        fontWeight: 'bold',
        width: "94%",
        borderWidth: 2,
        borderColor: "#FFCF81",
        fontSize: 16,
        borderRadius: 10,
        textAlignVertical: "center",
        marginHorizontal: 10,
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
    }
})