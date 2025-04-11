import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './wishList.style';
import {CustomStatusBar, Header} from '@componentIndex';
import imageIndex from '@imageIndex';
import useWishlist from './useWishlist';

const WishList: React.FC = () => {
  const {value, onItemPress, onPressWishlist} = useWishlist();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header back />
      <FlatList
        data={value?.products}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatlistContainer}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onItemPress(item)}
              style={styles.itemContainer}
              key={index}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => onPressWishlist(item)}
                style={styles.wishlistIconTouch}>
                <Image
                  source={
                    !value?.liked?.includes(item?.title)
                      ? imageIndex.heartEmpty
                      : imageIndex.heartFill
                  }
                  style={styles.wishlistIcon}
                />
              </TouchableOpacity>
              <Image source={{uri: item?.image}} style={styles.itemImage} />
              <View style={styles.titlePriceContainer}>
                <Text style={styles.itemTitle} numberOfLines={1}>
                  {item?.title}
                </Text>
                <Text style={styles.itemPrice}>{item?.price}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default WishList;
