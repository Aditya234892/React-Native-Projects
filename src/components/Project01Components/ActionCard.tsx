import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            Hello!! Aditya here, how are you?
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
          resizeMode='stretch'
        />
        <View>
          <Text numberOfLines={3} style={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            earum id neque nostrum nulla, ducimus sunt excepturi aliquid
            placeat. Sunt dolor optio deleniti quam similique corrupti ad
            tempora eos corporis, officia, magni atque ex unde ut iure minima
            amet eaque rem nisi nam architecto sint odio. Impedit minima iusto
            illum.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.pexels.com/')}
            style={styles.socialLinks}>
            <Text style={styles.footerText}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://github.com/Aditya234892')}
            style={styles.socialLinks}>
            <Text style={styles.footerText}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 8,
  },
  card: {
    flex:1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "darkorange",
    padding:8,
    marginHorizontal: 8,
    marginVertical: 8,
    overflow: 'hidden',
    borderRadius: 12,
  },
  elevatedCard: {
    elevation: 4,
    shadowOffset: {
        width: 4,
        height: 4,
    },
    shadowColor: "red",

  },
  headingContainer: {
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 350,
    height: 180,
    marginVertical: 16,

  },
  text: {
    color:"#ffffff",

  },
  footerContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    columnGap: 22
  },
  socialLinks: {
    backgroundColor: "white",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 6,
},
footerText:{
    color: "#000000",
    fontWeight: 'bold', 
  }
});
