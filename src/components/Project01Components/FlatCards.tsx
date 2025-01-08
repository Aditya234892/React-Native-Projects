import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>
                Green
            </Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>
                Blue
            </Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>
                Violet
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold"
    },

    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: "pink",
        padding: 8,
    },

    card:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 8,
    },

    cardOne: {
        backgroundColor: 'red',
    },
    cardTwo: {
        backgroundColor: 'lightgreen',
    },
    cardThree: {
        backgroundColor: 'lightblue',
    },
    cardFour:{
        backgroundColor: "violet",
    }
})