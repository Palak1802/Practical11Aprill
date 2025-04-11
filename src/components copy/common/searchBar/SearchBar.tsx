import color from '@theme/color';
import React, {FC, memo} from 'react';
import {
  Image,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './searchBar.style';
import imageIndex from '@imageIndex';
interface SearchBarProps {
  containerStyle?: ViewStyle;
  textInputViewStyle?: ViewStyle;
  placeholder?: string;
  placeholderTextColor?: string;
  value?: string;
  setValue?: (value: string) => void;
  onSubmitEditing?: () => void;
  onEndEditing?: () => void;
  selectionColor?: string;
  inputStyle?: TextStyle;
  inputProps?: TextInputProps;
  showFilterIcon?: boolean;
  showPlusIcon?: boolean;
  showFolderIcon?: boolean;
  onPressFilter?: () => void;
  onPressPlus?: () => void;
  onPressFolder?: () => void;
  filterButtonStyle?: ViewStyle;
  plusButtonStyle?: ViewStyle;
  folderButtonStyle?: ViewStyle;
  plusIconHeight?: number;
  plusIconWidth?: number;
  searchIcon?: React.JSX.ElementType;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  autoFocus?: boolean;
  searchClear?: () => void;
  showRedDot?: boolean;
}
const SearchBar: FC<SearchBarProps> = ({
  containerStyle,
  textInputViewStyle,
  placeholder,
  placeholderTextColor,
  value,
  setValue,
  onSubmitEditing,
  onEndEditing,
  selectionColor,
  inputStyle,
  inputProps,
  showFilterIcon,
  showPlusIcon,
  showFolderIcon,
  onPressFilter,
  onPressPlus,
  onPressFolder,
  filterButtonStyle,
  plusButtonStyle,
  folderButtonStyle,
  plusIconHeight,
  plusIconWidth,
  searchIcon,
  searchClear,
  showRedDot,
}) => {
  const SearchIcon = searchIcon;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.textInputView, textInputViewStyle]}>
        {SearchIcon && (
          <View style={styles.searchIcon}>
            <SearchIcon />
          </View>
        )}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={onSubmitEditing}
          onEndEditing={onEndEditing}
          allowFontScaling={false}
          selectionColor={selectionColor}
          style={[styles.searchInputStyle, inputStyle]}
          {...inputProps}
        />
        {value?.length!! > 0 && (
          <TouchableOpacity
            onPress={searchClear}
            activeOpacity={0.9}
            style={styles.clearIcon}>
            <Image source={imageIndex.back} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      {showFilterIcon && (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.filterButton, filterButtonStyle]}
          onPress={onPressFilter}>
          <Image source={imageIndex.filter} style={styles.icon} />
          {showRedDot && <View style={styles.redDot} />}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(SearchBar);
