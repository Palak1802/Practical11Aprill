import color from '@theme/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  searchContainerStyle: {
    marginTop: 0,
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
    // backgroundColor: color.lightGrey,
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    zIndex: 1,
  },
  modalMainContainer: {
    zIndex: 1111,
    backgroundColor: color.white,
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  filterText: {
    fontSize: 22,
    color: color.black,
  },
  unSelectSliderStyle: {
    flex: 1,
    height: 2,
    backgroundColor: color.lightGrey,
  },
  selectSliderStyle: {
    flex: 1,
    height: 3,
    backgroundColor: color.primary,
  },
  thumbStyleView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: color.offWhite,
    shadowColor: color.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  priceLabelLowViewStyle: {
    marginTop: 25,
    position: 'absolute',
    left: -18,
    width: 60,
    alignItems: 'center',
    backgroundColor: color.offWhite,
  },
  priceLabelViewStyle: {
    marginTop: 25,
    position: 'absolute',
    right: -8,
    width: 60,
    alignItems: 'center',
    backgroundColor: '#00000000',
  },
  labelSliderText: {
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '400',
    color: color.black,
  },
  rowViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    fontSize: 16,
    color: color.black,
    flex: 1,
  },
  multiSliderView: {
    marginTop: 18,
    paddingHorizontal: 2,
  },
});

export default styles;
