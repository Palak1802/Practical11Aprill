interface ProductsList {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductsState {
  products?: ProductsList[];
  liked?: string[];
  searchText?: string;
  maxPrice: number;
  lowPrice: number;
  highPrice: number;
}
