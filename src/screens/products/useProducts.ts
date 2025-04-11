import {useEffect} from 'react';
import useAppState from '@hooks/useAppState';
import axios from 'axios';
import {useAuthNavigation, useAuthRoute} from '@hooks/useAppNavigation';
import {useAppDispatch, useAppSelector} from '@hooks/useRedux';
import {productsWishlist} from '@redux/user/userSlice';

const useProducts = () => {
  const navigation = useAuthNavigation();
  const {params} = useAuthRoute('products');
  const dispatch = useAppDispatch();
  const {wishlistProducts} = useAppSelector(state => state.userReducer);
  const [value, setValue] = useAppState<ProductsState>({
    products: undefined,
    liked: undefined,
    searchText: undefined,
    maxPrice: 0,
    lowPrice: 0,
    highPrice: 0,
    filterModal: false,
  });
  useEffect(() => {
    getProductList();
  }, []);
  useEffect(() => {
    if (wishlistProducts?.length > 0) {
      wishlistData();
    }
  }, [wishlistProducts]);
  const wishlistData = () => {
    setValue(
      'liked',
      wishlistProducts?.map(item => item?.title),
    );
  };
  const getProductList = async () => {
    try {
      const {data} = await axios.get('https://fakestoreapi.com/products');
      setValue('products', data);
      let maxPrice = Math.max(
        ...data.flatMap((item: ProductsList) => item.price),
      );
      setValue('maxPrice', maxPrice);
      setValue('highPrice', maxPrice);
    } catch (error: any) {}
  };
  const onItemPress = (item: ProductsList) => {
    navigation.navigate('productDetail', {
      category: item?.category,
      description: item?.description,
      id: item?.id,
      image: item?.image,
      price: item?.price,
      rating: item?.rating,
      title: item?.title,
    });
  };
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
  const onWishlist = () => {
    navigation.navigate('wishlist');
  };
  const onFilterPress = () => {
    setValue('filterModal', true);
  };
  const onSearch = (text: string) => {
    setValue('searchText', text);
    const filteredList = value?.products?.filter(item => {
      const textData = text?.toLowerCase();
      const fieldsToCheck = [item?.title];
      return fieldsToCheck.some(field =>
        field
          ?.toLowerCase()
          .split(/\s+/)
          .some(word => word.startsWith(textData)),
      );
    });
    if (text?.length > 0) {
      setValue('products', filteredList);
    } else {
      getProductList();
    }
  };
  const onPriceLowToHigh = () => {
    value?.products?.sort((a, b) => a.price - b.price);
    setValue('filterModal', false);
  };
  const onPriceHighToLow = () => {
    value?.products?.sort((a, b) => b.price - a.price);
    setValue('filterModal', false);
  };
  const onSortbyRating = () => {
    value?.products?.sort((a, b) => b.rating.rate - a.rating.rate);
    setValue('filterModal', false);
  };
  return {
    value,
    onItemPress,
    onPressWishlist,
    onWishlist,
    onFilterPress,
    onSearch,
    onPriceLowToHigh,
    onPriceHighToLow,
    onSortbyRating,
  };
};

export default useProducts;
