import {View, Text, Image} from 'react-native';
import React from 'react';
import useProductDetail from './useProductDetail';
import styles from './productDetail.style';
import {CustomStatusBar, Header} from '@componentIndex';
import imageIndex from '@imageIndex';

const ProductDetail: React.FC = () => {
  const {params, onLeftClick} = useProductDetail();
  return (
    <View style={styles.container}>
      <CustomStatusBar />
      <Header back />
      <Image source={{uri: params?.image}} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{params?.title}</Text>
      <Text style={styles.itemPrice}>{params?.description}</Text>
      <Text style={styles.itemPrice}>{params?.category}</Text>
      <Text style={styles.itemPrice}>{params?.price}</Text>
    </View>
  );
};

export default ProductDetail;
