import color from '@theme/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  itemImage: {
    height: 450,
    width: '100%',
    resizeMode: 'contain',
  },
  itemTitle: {
    fontSize: 20,
    color: color.black,
    marginHorizontal: 20,
    marginTop: 15,
  },
  itemPrice: {
    fontSize: 16,
    color: color.black,
    marginHorizontal: 20,
    marginTop: 15,
  },
  itemDescription: {
    fontSize: 16,
    color: color.black,
    marginHorizontal: 20,
    marginTop: 15,
  },
  itemCategory: {
    fontSize: 16,
    color: color.black,
    marginHorizontal: 20,
    marginTop: 15,
  },
});
export default styles;
