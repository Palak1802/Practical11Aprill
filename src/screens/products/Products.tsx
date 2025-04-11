import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import useProducts from './useProducts';
import styles from './products.style';
import imageIndex from '@imageIndex';
import {CustomStatusBar, Header, SearchBar} from '@componentIndex';
import color from '@theme/color';

const Products: React.FC = () => {
  const {
    value,
    onItemPress,
    onPressWishlist,
    onWishlist,
    onFilterPress,
    onSearch,
    onPriceLowToHigh,
    onPriceHighToLow,
    onSortbyRating,
  } = useProducts();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header leftIcon leftClick={onWishlist} />
      <SearchBar
        placeholder={`Search products`}
        placeholderTextColor={color.black}
        showFilterIcon
        containerStyle={styles.searchContainerStyle}
        textInputViewStyle={{marginLeft: 20}}
        filterButtonStyle={{marginRight: 15}}
        value={value?.searchText}
        setValue={(text: string) => onSearch(text)}
        onPressFilter={onFilterPress}
      />
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
                <View style={styles.rowViewStyle}>
                  <Text style={styles.itemPrice}>{item?.price}</Text>
                  <Text style={styles.itemRating}>{item?.rating?.rate} </Text>
                  <Image source={imageIndex.star} style={styles.starIcon} />
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Modal visible={value?.filterModal} transparent statusBarTranslucent>
        <View style={styles.modalContainer}>
          <View style={styles.modalMainContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.lowToHighTouch}
              onPress={onPriceLowToHigh}>
              <Text style={styles.optionText}>Low to High Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.lowToHighTouch}
              onPress={onPriceHighToLow}>
              <Text style={styles.optionText}>High To Low Price</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.lowToHighTouch}
              onPress={onSortbyRating}>
              <Text style={[styles.optionText, {borderBottomWidth: 0}]}>
                Sort by Rating
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Products;
