import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/8112557/pexels-photo-8112557.jpeg?auto=compress&cs=tinysrgb&w=600'
        }}
        style={styles.cardImage} 
        resizeMode='stretch'
        />
        <View style={styles.cardBody}>  
            <Text style={styles.cardTitle}>Kashi Vishwanath Temple</Text>
            <Text style={styles.cardLabel}>Kashi Vishwanath Temple</Text>
            <Text style={styles.cardDesc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius optio minima distinctio tempore eveniet fuga impedit, laboriosam vel magnam minus.
                 Cum neque magni tempore a sunt esse laboriosam dolore unde vero minima hic voluptatibus, dolorem at consectetur repellendus nostrum nesciunt</Text>
        <Text style={styles.cardFooter}>Uttar Pradesh, Banars</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        color: "#ffffff",
        fontWeight: "bold",
        padding: 8,
    },
    card:{
        width: 350,
        height: 380,
        borderRadius: 12,
        marginVertical: 12,
        marginHorizontal: 6,

    },
    cardElevated:{
        backgroundColor: "beige",
        elevation: 4,
        shadowColor: "green",
        shadowOffset: {
            width: 4,
            height: 4,
        }
    },
    cardImage:{
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle:{
        color: "#000000",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 6,
    },
    cardLabel:{
        color: "#000000",
        fontSize: 16,
    },
    cardDesc:{
        color: "#000000",
        fontSize: 14,
        marginTop: 6,
    },
    cardFooter: {
        color: "#000000",
    },
})