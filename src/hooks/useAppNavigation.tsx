import {AuthStackParams} from '@navigation/stack/authStackParams';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const useAuthNavigation = <
  T extends keyof AuthStackParams = keyof AuthStackParams,
>(
  values?: T,
): NativeStackNavigationProp<AuthStackParams, T> => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParams, T>>();
  return navigation;
};

export const useAuthRoute = <
  T extends keyof AuthStackParams = keyof AuthStackParams,
>(
  values?: T,
): RouteProp<AuthStackParams, T> => {
  const route = useRoute<RouteProp<AuthStackParams, T>>();
  return route;
};
