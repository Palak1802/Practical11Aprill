import {useAuthRoute} from '@hooks/useAppNavigation';

const useProductDetail = () => {
  const {params} = useAuthRoute('productDetail');
  const onLeftClick = () => {};
  return {params, onLeftClick};
};

export default useProductDetail;
