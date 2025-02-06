import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
const img1 = require('../../assets/img1.png');
const img2 = require('../../assets/img2.png');
const img3 = require('../../assets/img3.png');
const img4 = require('../../assets/img4.png');
const img5 = require('../../assets/img5.png');
const img6 = require('../../assets/img6.png');
const img7 = require('../../assets/img7.png');
const img8 = require('../../assets/img8.png');

export default function MyntraCard() {
  return (
    <View style={styles.container}>
      <Image source={{
        uri: 'https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/JANUARY/11/fn1avydK_9837e0b576384390acc9607b89ed5bfc.jpg'
      }}
        style={styles.titleImage}
        resizeMode="center"
      />
      <View style={styles.imageContainer}>
        <View style={styles.imageCards}>
            <Image source={img1} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Work Wear</Text>
                <Text style={styles.clothOff}>40-70% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
        <View style={styles.imageCards}>
            <Image source={img2} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Western Wear</Text>
                <Text style={styles.clothOff}>40-80% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
        <View style={styles.imageCards}>
            <Image source={img3} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Lounge Wear</Text>
                <Text style={styles.clothOff}>30-60% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
        <View style={styles.imageCards}>
            <Image source={img4} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Men's Ethnic Wear</Text>
                <Text style={styles.clothOff}>UP TO 60% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
        <View style={styles.imageCards}>
            <Image source={img5} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Workwear</Text>
                <Text style={styles.clothOff}>40-70% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
        <View style={styles.imageCards}>
            <Image source={img6} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Sleep Wear</Text>
                <Text style={styles.clothOff}>30-70% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
        <View style={styles.imageCards}>
            <Image source={img7} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Bag and Backpacks</Text>
                <Text style={styles.clothOff}>30-80% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
        <View style={styles.imageCards}>
            <Image source={img8} style={styles.image}/>
            <View style={styles.cardData}>
                <Text style={styles.clothType}>Flip-Flops</Text>
                <Text style={styles.clothOff}>30-70% OFF</Text>
                <Text style={styles.clothCommonText}>Shop Now</Text>
            </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 40,
    },

    titleImage:{
        height: 100,
        width: 800,
    },
    
    imageContainer: {
        flexDirection: "row",
        rowGap: 18,
        columnGap: 25,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },

    imageCards:{
        paddingHorizontal: 6,
        paddingVertical: 6,
        backgroundColor: "darkgreen",
        borderRadius: 4,
        
    },

    image:{
        height: 140,
        width: 130,
    },

    cardData: {
        justifyContent: "space-between",
        alignItems: "center",
    },

    clothType:{
        paddingTop: 4,
        color: "white",
        fontWeight:'600',
    },

    clothOff: {
        color:"white",
        fontWeight:'900',
        fontSize: 18,
    },

    clothCommonText: {
        color: "white",
        fontWeight: "600",
    }

})