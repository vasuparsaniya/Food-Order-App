import { useState } from 'react';
import { GetRequestFunctionParametersType } from '../../types/requestType';
import useAxiosHandle from '../useAxiosHandle';

const useHandleGetFoodItems = () => {
  const { getRequest } = useAxiosHandle();
  const [isLoading, setLoading] = useState<boolean>(false);

  const getFoodItemsAPI = async ({
    config,
    authToken,
  }: GetRequestFunctionParametersType) => {
    setLoading(true);
    const getFoodItems: any = await getRequest(
      `/food-items.json?auth=${authToken}`,
      config,
    );
    setLoading(false);
    return getFoodItems;
  };
  return { getFoodItemsAPI, isLoading };
};

export default useHandleGetFoodItems;
