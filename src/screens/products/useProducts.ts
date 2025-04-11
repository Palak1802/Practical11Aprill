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
  });
  useEffect(() => {
    getProductList();
  }, []);
  // useEffect(() => {
  //   if (params?.highPrice! > 0) {
  //     let tempProducts = value?.products?.map((val: ProductsList) => {
  //       const highPrise = Number(params?.highPrice);
  //       const lowPrise = Number(params?.lowPrice);
  //       const matchesPrice = val?.price >= lowPrise && val?.price <= highPrise;
  //       console.log('matchesPrice', matchesPrice);
  //       return matchesPrice;
  //     });
  //     // setValue('products', tempProducts);
  //   }
  // }, [params?.highPrice, params?.lowPrice]);
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
    navigation.navigate('filterScreen', {
      maxPrice: value?.maxPrice,
      lowPrice: value?.lowPrice,
      highPrice: value?.highPrice,
    });
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
  return {
    value,
    onItemPress,
    onPressWishlist,
    onWishlist,
    onFilterPress,
    onSearch,
  };
};

export default useProducts;
