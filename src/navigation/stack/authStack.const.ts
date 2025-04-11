import screenName from '@navigation/screenName';
import FilterScreen from '@screens/filterScreen/FilterScreen';
import ProductDetail from '@screens/productDetail/ProductDetail';
import Products from '@screens/products/Products';
import WishList from '@screens/wishList/WishList';

export const authStackData = [
  {
    name: screenName.products,
    component: Products,
  },
  {
    name: screenName.wishlist,
    component: WishList,
  },
  {
    name: screenName.productDetail,
    component: ProductDetail,
  },
  {
    name: screenName.filterScreen,
    component: FilterScreen,
  },
];
