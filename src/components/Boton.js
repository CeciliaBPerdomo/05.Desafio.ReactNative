import { Pressable, StyleSheet, Text, View } from 'react-native'

const Boton = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.boton}>
        <Text style={styles.texto}>Guardar libro</Text>
      </Pressable>
    </View>
  )
}

export default Boton

const styles = StyleSheet.create({

    container: {
        backgroundColor: "#FDFFAB",
        padding: 5, 
    },

    boton: {
        backgroundColor: "#FDFFAB",
        width: "50%",
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: "#FFCF81",
        fontSize: 16,
        borderRadius: 10,
        alignSelf:"flex-end",
        justifyContent: "center",
        alignItems: "center"
    },

    texto: {
        fontSize: 16, 
        color: "#872FF5"
    }
    
})