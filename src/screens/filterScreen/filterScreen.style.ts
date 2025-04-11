import color from '@theme/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalMainContainer: {
    flex: 1,
    backgroundColor: color.white,
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
    backgroundColor: color.white,
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
