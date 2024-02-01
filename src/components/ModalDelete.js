import { StyleSheet, Text, Button, Modal, View } from 'react-native'
import Imagen from './Imagen'


const ModalDelete = ({ modalVisible, libroSelected, handlerModal, deleteBook }) => {
    return (
        <>
            <Modal visible={modalVisible}
                animationType='fade'
                onRequestClose={() => handlerModal({})} //cuando se cierra con la flecha de atras del celu
            >
                <Imagen />

                <Text style={styles.texto}>Estas seguro que deseas borrar el libro titulado: {libroSelected.titulo} del autor: {libroSelected.autor}. </Text>


                <View style={styles.botones}>
                    <Button
                        title='Si'
                        onPress={deleteBook}
                        color='#D9EDBF'
                    />

                    <Button
                        title='No'
                        onPress={() => { handlerModal({}) }}
                        color='#D9EDBF'
                    />
                </View>
            </Modal>
        </>
    )
}

export default ModalDelete

const styles = StyleSheet.create({

    texto: {
        fontSize: 16,
        padding: 5,
        alignSelf: "center",
        backgroundColor: '#D9EDBF',
    },

    botones: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 130,
        marginVertical: 15
    }
})