import { FlatList, StyleSheet, Text, View } from 'react-native'
import Cards from './Cards'

const BookList = ({ libros, updateLectura, handlerModal }) => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal={true}
                pagingEnabled={true}

                data={libros}
                keyExtractor={libros => libros.id}
                renderItem={({ item }) => (
                    <Cards
                        item={item}
                        updateLectura={updateLectura}
                        handlerModal={handlerModal}
                    />
                )}
            />
        </View>
    )
}

export default BookList

const styles = StyleSheet.create({

    container: {
        gap: 20,
        padding: 10,
        justifyContent : "center",
        alignItems: "center"
    },
})