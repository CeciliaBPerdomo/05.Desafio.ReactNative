import { StyleSheet, Switch, Text, View } from 'react-native'
import React from 'react'
import Boton from './Boton'

const Cards = ({ item, updateLectura, handlerModal }) => {
    return (
        <View
            key={item.id}
            style={styles.container}
        >
            <Text style={styles.texto}>
                Agregado: {item.agregado}
            </Text>

            <Text style={styles.texto}>
                Título: {item.titulo}
            </Text>

            <Text style={styles.texto}>
                Autor: {item.autor}
            </Text>

            <Text style={styles.texto}>
                Reseña: {item.descripcion}
            </Text>

            <View style={styles.leido}>
                <Text style={styles.textoLeido}>
                    Leído:
                </Text>
                <Switch
                    value={item.leido}
                    onValueChange={() => updateLectura(item.id)}
                />

                <Text style={styles.textoLeido}>
                    {item.leido ? "Finalizado" : "Pendiente"}
                </Text>
            </View>

            <Boton
                title={"Eliminar libro"}
                onPress={() => handlerModal(item)}
            />

        </View>
    )
}

export default Cards

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FDFFAB",
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        gap: 20,
        borderWidth: 2,
        borderColor: "#FFCF81",
    },

    texto: {
        width: "100%",
        color: "#FFB996",
        fontSize: 16,
    },

    textoLeido: {
        color: "#FFB996",
        fontSize: 16,
        marginTop: 13,
    },

    leido: {
        flexDirection: "row",
        width: "50%",
        marginTop: -15
    }
})