import React, {memo} from 'react';
import {StatusBar, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomStatusBarProps} from './customStatusBarProps';
import color from '@theme/color';

const CustomStatusBar: React.FC<CustomStatusBarProps> = ({
  backgroundColor = color.white,
  barStyle = 'dark-content',
  hidden,
  translucent,
  containerStyle,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        {height: insets.top, backgroundColor: backgroundColor},
        containerStyle,
      ]}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
        translucent={translucent}
        hidden={hidden}
      />
    </View>
  );
};

export default memo(CustomStatusBar);
