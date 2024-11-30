import { useState } from 'react';
import { GetRequestFunctionParametersType } from '../../types/requestType';
import useAxiosHandle from '../useAxiosHandle';

const useHandleOrderFoodItems = () => {
  const { postRequest } = useAxiosHandle();
  const [isLoading, setLoading] = useState<boolean>(false);

  const orderFoodItemsAPI = async ({
    data,
    config,
    authToken,
  }: GetRequestFunctionParametersType) => {
    setLoading(true);
    const orderFoodItems = await postRequest(
      `/food-order-items.json?auth=${authToken}`,
      data,
      config,
    );
    setLoading(false);
    return orderFoodItems;
  };
  return { orderFoodItemsAPI, isLoading };
};

export { useHandleOrderFoodItems };
