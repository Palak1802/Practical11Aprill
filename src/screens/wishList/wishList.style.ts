import color from '@theme/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  flatlistContainer: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  itemContainer: {
    marginLeft: 20,
    marginTop: 12,
    borderWidth: 1,
    borderColor: color.lightGrey,
    borderRadius: 12,
    width: '42%',
  },
  wishlistIconTouch: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 5,
    zIndex: 1,
    backgroundColor: color.lightGrey,
    borderRadius: 20,
  },
  wishlistIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  itemImage: {
    height: 120,
    width: '100%',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    resizeMode: 'contain',
    backgroundColor: color.lightGrey,
  },
  titlePriceContainer: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  itemTitle: {
    fontSize: 20,
    color: color.black,
    lineHeight: 24,
  },
  itemPrice: {
    fontSize: 16,
    color: color.black,
    lineHeight: 20,
    marginTop: 10,
  },
});

export default styles;
