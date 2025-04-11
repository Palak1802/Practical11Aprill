import React, {memo} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {HeaderProps} from './headerProps';
import style from './header.style';
import {useAuthNavigation} from '@hooks/useAppNavigation';
import imageIndex from '@imageIndex';

const Header: React.FC<HeaderProps> = ({
  containerStyle,
  backgroundColor,
  title,
  backIcon,
  leftText,
  leftIcon,
  leftClick,
  back,
}) => {
  const navigation = useAuthNavigation();
  return (
    <View
      style={[
        style.mainContainer,
        containerStyle,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      <View style={style.container}>
        <TouchableOpacity
          style={style.backIconContainer}
          activeOpacity={0.5}
          hitSlop={20}
          onPress={() => {
            backIcon ? backIcon() : navigation.goBack();
          }}>
          {back && <Image source={imageIndex.back} style={style.icon} />}
        </TouchableOpacity>
        <Text style={style.title} numberOfLines={1}>
          {title}
        </Text>
        <TouchableOpacity
          style={style.backIconContainer}
          activeOpacity={0.5}
          hitSlop={20}
          onPress={leftClick}>
          {leftText && <Text>{leftText}</Text>}
          {leftIcon && (
            <Image source={imageIndex.heartEmpty} style={style.icon} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(Header);
