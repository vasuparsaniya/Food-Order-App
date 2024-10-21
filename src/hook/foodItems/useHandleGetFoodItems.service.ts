import { GetRequestFunctionParametersType } from '../../types/requestType';
import useAxiosHandle from '../useAxiosHandle';

const useHandleGetFoodItems = () => {
  const { getRequest } = useAxiosHandle();

  const getFoodItemsAPI = async ({
    config,
  }: GetRequestFunctionParametersType) => {
    const getFoodItems: any = await getRequest(`/food-items.json`, config);
    console.log('============getFoodItems', getFoodItems);
    return getFoodItems;
  };
  return { getFoodItemsAPI };
};

export default useHandleGetFoodItems;
