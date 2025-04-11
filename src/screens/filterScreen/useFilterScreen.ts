import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';

const useFilterScreen = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('filterScreen');
  const [value, setValue] = useAppState({
    lowPrice: params?.lowPrice,
    highPrice: params?.highPrice,
    maxPrice: params?.maxPrice,
  });
  const onFilterPress = () => {
    navigation.navigate('products', {
      highPrice: value?.highPrice,
      lowPrice: value?.lowPrice,
    });
  };
  const onValueChangePrice = (low: number, high: number) => {
    setValue('lowPrice', low);
    setValue('highPrice', high);
  };
  return {value, onFilterPress, onValueChangePrice};
};

export default useFilterScreen;
