import color from '@theme/color';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 31,
    marginBottom: 17,
  },
  textInputView: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: color.offWhite,
  },
  searchIcon: {
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  clearIcon: {
    height: 18,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  icon: {
    height: 25,
    width: 25,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 16,
    color: color.black,
    height: 45,
  },
  filterButton: {
    height: 36,
    width: 36,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redDot: {
    height: 10,
    width: 10,
    backgroundColor: color.error,
    borderRadius: 10,
    position: 'absolute',
    zIndex: 111,
    top: -3,
    right: -3,
  },
  folderButton: {
    height: 36,
    width: 36,
    backgroundColor: color.primary,
    marginLeft: 12,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
