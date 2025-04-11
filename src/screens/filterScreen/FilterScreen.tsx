import {View, Text} from 'react-native';
import React from 'react';
import styles from './filterScreen.style';
import RangeSlider from 'rn-range-slider';
import useFilterScreen from './useFilterScreen';
import {CustomStatusBar, Header} from '@componentIndex';

const FilterScreen: React.FC = () => {
  const {onFilterPress, value, onValueChangePrice} = useFilterScreen();
  const renderPriceThumb = (item: string) => (
    <>
      <View style={styles.thumbStyleView} />
      <View
        style={[
          item == 'low'
            ? styles.priceLabelLowViewStyle
            : styles.priceLabelViewStyle,
        ]}>
        <Text allowFontScaling={false} style={styles.labelSliderText}>
          {item == 'low' ? value?.lowPrice : value?.highPrice}
        </Text>
      </View>
    </>
  );
  const renderRail = () => <View style={styles.unSelectSliderStyle} />;
  const renderRailSelected = () => <View style={styles.selectSliderStyle} />;
  return (
    <View style={styles.modalMainContainer}>
      <CustomStatusBar />
      <Header back title="Filter" leftText="Done" leftClick={onFilterPress} />
      <View style={styles.rowViewStyle}>
        <Text allowFontScaling={false} style={styles.labelStyle}>
          Price
        </Text>
      </View>
      <View style={styles.multiSliderView}>
        <RangeSlider
          min={0}
          max={value?.maxPrice}
          step={1}
          renderThumb={renderPriceThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          onValueChanged={onValueChangePrice}
          low={value?.lowPrice}
          high={value?.highPrice}
        />
      </View>
    </View>
  );
};

export default FilterScreen;
