import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';
import {useCallback, useEffect} from 'react';

const useFilterScreen = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('filterScreen');
  const [value, setValue] = useAppState({
    lowPrice: 0,
    highPrice: 0,
    maxPrice: 0,
  });
  useEffect(() => {
    if (params) {
      setValue('lowPrice', params?.lowPrice);
      setValue('highPrice', params?.highPrice);
      setValue('maxPrice', params?.maxPrice);
    }
  }, [params]);
  const onFilterPress = () => {
    navigation.navigate('products', {
      highPrice: value?.highPrice,
      lowPrice: value?.lowPrice,
    });
  };
  const onValueChangePrice = useCallback(
    (low: number, high: number) => {
      setValue('lowPrice', low);
      setValue('highPrice', high);
    },
    [value],
  );
  return {value, onFilterPress, onValueChangePrice};
};

export default useFilterScreen;
