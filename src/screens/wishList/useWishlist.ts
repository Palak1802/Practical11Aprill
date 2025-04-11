import {useAuthNavigation} from '@hooks/useAppNavigation';
import useAppState from '@hooks/useAppState';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {productsWishlist} from '@redux/user/userSlice';
import {useEffect} from 'react';

const useWishlist = () => {
  const navigation = useAuthNavigation();
  const dispatch = useAppDispatch();
  const {wishlistProducts} = useAppSelector(state => state.userReducer);
  const [value, setValue] = useAppState<ProductsState>({
    products: undefined,
    liked: undefined,
  });
  useEffect(() => {
    if (wishlistProducts?.length > 0) {
      setValue('products', wishlistProducts);
      setValue(
        'liked',
        wishlistProducts?.map(item => item?.title),
      );
    }
  }, [wishlistProducts]);
  const onItemPress = (item: ProductsList) => {};
  const onPressWishlist = (item: ProductsList) => {
    const isInWishlist =
      wishlistProducts?.length > 0 &&
      wishlistProducts?.some(product => product?.id === item?.id);

    if (isInWishlist) {
      const filteredList = wishlistProducts?.filter(
        product => product?.id !== item?.id,
      );
      dispatch(productsWishlist(filteredList));
    } else {
      const updatedList = [...(wishlistProducts || []), item];
      dispatch(productsWishlist(updatedList));
    }
  };
  return {value, onItemPress, onPressWishlist};
};

export default useWishlist;
