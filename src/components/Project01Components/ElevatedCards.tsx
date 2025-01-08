import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
      <View style={[styles.card, styles.cardEvelvated]}>
        <Text>Tap</Text>
      </View>
      <View style={[styles.card, styles.cardEvelvated]}>
        <Text>Me</Text>
      </View>
      <View style={[styles.card, styles.cardEvelvated]}>
        <Text>To</Text>
      </View>
      <View style={[styles.card, styles.cardEvelvated]}>
        <Text>Scroll</Text>
      </View>
      <View style={[styles.card, styles.cardEvelvated]}>
        <Text>Now</Text>
      </View>
      <View style={[styles.card, styles.cardEvelvated]}>
        <Text>😎</Text>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold"
    },
    container:{
        flexDirection: 'row',
        backgroundColor: "lightblue",
        padding: 8,
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 8,
        margin: 8,
    },
    cardEvelvated:{
        backgroundColor: "yellow",
        elevation: 4,
        shadowOffset:{
            width: 12,
            height: 11,
        },
        shadowColor: "red",
        shadowRadius: 40,
    },

})