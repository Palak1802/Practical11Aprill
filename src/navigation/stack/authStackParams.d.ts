export type AuthStackParams = {
  products: {highPrice?: number; lowPrice?: number} | undefined;
  wishlist: undefined;
  productDetail: ProductsList | undefined;
  filterScreen:
    | {maxPrice: number; highPrice: number; lowPrice: number}
    | undefined;
};

export type AuthNavigationProps = StackNavigationProp<AuthStackParams>;
