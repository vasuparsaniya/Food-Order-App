import { GetRequestFunctionParametersType } from '../../types/requestType';
import useAxiosHandle from '../useAxiosHandle';

const useHandleGetFoodItems = () => {
  const { getRequest } = useAxiosHandle();

  const getFoodItemsAPI = async ({
    config,
    authToken,
  }: GetRequestFunctionParametersType) => {
    const getFoodItems: any = await getRequest(
      `/food-items.json?auth=${authToken}`,
      config,
    );
    return getFoodItems;
  };
  return { getFoodItemsAPI };
};

export default useHandleGetFoodItems;
