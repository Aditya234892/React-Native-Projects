import { Image, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const InstagramClone = () => {
  const [likes, setLikes] = useState(Array(9).fill(123));
  const [liked, setLiked] = useState(Array(9).fill(false));

  const handleLike = (index: number) => {
    const newLikes = [...likes];
    const newLiked = [...liked];
    
    if (newLiked[index]) {
      newLikes[index] -= 1;
    } else {
      newLikes[index] += 1;
    }
    newLiked[index] = !newLiked[index];
    
    setLikes(newLikes);
    setLiked(newLiked);
  };

  const images = [
    {
      url: 'https://t4.ftcdn.net/jpg/08/54/19/09/240_F_854190981_2TymuvvY7qtN11EIH0S7xBSA1LMtVs9c.jpg',
      userName: 'Pearrr011',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/09/86/21/23/240_F_986212361_s3WCYWAYnO9sohw7Z3pr2Us9SbMgMB19.jpg',
      userName: 'Tooth554',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/09/72/03/25/240_F_972032562_rdLz04wBAHTppywwJXXDIfLN2GeXfMKe.jpg',
      userName: 'xolo85',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/07/98/47/04/240_F_798470400_Hj3vFax01q6gHw7ijcSvZzpOjsyeSxlv.jpg',
      userName: 'Jaqu428',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/06/81/33/17/240_F_681331734_ui2IYanRIm3JowmTQkWBXa5jZd3WlPuZ.jpg',
      userName: 'Lemon212',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/09/02/65/69/240_F_902656959_d47oQ52vbYT5RBblMnXbqwdAQgDt46HC.jpg',
      userName: 'LionKing87',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/07/82/00/92/240_F_782009266_XenPgdpArTTNUSgv5B3nYEzr4M5VGWhp.jpg',
      userName: 'Jumbo55',
    },
    {
      url: 'https://t4.ftcdn.net/jpg/08/09/66/21/240_F_809662196_QQgR1onSFHd9oxJ0tU3Zti5DMdGBmMmF.jpg',
      userName: 'Mr.Potato92',
    },
    {
      url: 'https://t3.ftcdn.net/jpg/07/10/19/92/240_F_710199214_m8MazKuiP8WbgaVPOP5lSI5CbZDZGU6z.jpg',
      userName: 'Coco88',
    },
  ];

  const renderHeader = () => (
    <View>
      <View style={styles.header}>
        <Text style={styles.logoText}>Instagram</Text>
        <View style={styles.iconsContainer}>
          <Icon name="search" size={25} color="black" style={styles.icon} />
          <Icon name="ios-add-circle-outline" size={30} color="black" style={styles.icon} />
          <Icon name="heart-outline" size={30} color="black" style={styles.icon} />
          <Icon name="person-outline" size={30} color="black" style={styles.icon} />
        </View>
      </View>
      <FlatList
        horizontal
        data={images}
        keyExtractor={(item, index) => `story-${index}`}
        renderItem={({ item }) => (
          <View style={styles.stories}>
            <Image style={styles.storyImages} source={{ uri: item.url }} />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesContainer}
      />
    </View>
  );

  return (
    <FlatList
      data={images}
      renderItem={({ item, index }) => (
        <View style={styles.userImageContainer}>
          <View style={styles.userIdContainer}>
            <Image style={styles.userIdImage} source={{ uri: item.url }} />
            <Text style={styles.userId}>{item.userName}</Text>
          </View>
          <Image style={styles.userImage} source={{ uri: item.url }} />
          <View style={styles.iconsBar}>
            <TouchableOpacity onPress={() => handleLike(index)}>
              <Icon name={liked[index] ? "heart" : "heart-outline"} size={25} color={liked[index] ? "red" : "black"} style={styles.icon} />
            </TouchableOpacity>
            <Icon name="chatbubble-outline" size={25} color="black" style={styles.icon} />
            <Icon name="paper-plane-outline" size={25} color="black" style={styles.icon} />
          </View>
          <Text style={styles.likeCount}>{likes[index]} likes</Text>
          <Text style={styles.comments}>View all 10 comments</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default InstagramClone;


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 54,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  logoText: {
    fontSize: 25,
    fontWeight: '700',
  },
  iconsContainer: {
    flexDirection: 'row',
    columnGap: 20,
  },
  icon: {
    paddingHorizontal: 10,
  },
  storiesContainer: {
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  stories: {
    marginHorizontal: 5,
  },
  storyImages: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'pink',
  },
  userImageContainer: {
    marginBottom: 15,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#dbdbdb',
    borderWidth: 1,
  },
  userIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
  },
  userIdImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  userId: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
  userImage: {
    width: '100%',
    height: 300,
  },
  iconsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  likeCount: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  comments: {
    color: '#999',
    paddingHorizontal: 10,
  },
});
