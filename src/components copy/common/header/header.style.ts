import color from '@theme/color';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: color.white,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    marginTop: 5,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBackground: {
    resizeMode: 'cover',
    height: 145,
    width: '100%',
    zIndex: 1,
  },
  backIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 24,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  title: {
    color: color.black,
    fontSize: 20,
    lineHeight: 28,
    flex: 1,
    marginRight: 24,
  },
  gifTouchable: {
    alignSelf: 'flex-start',
    flex: 1,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  searchIcn: {
    paddingHorizontal: 10,
  },
  profileIcn: {
    paddingHorizontal: 10,
  },
  profileImage: {
    height: 35,
    width: 35,
    borderRadius: 10,
  },
});

export default style;
