import { PostRequestFunctionParametersType } from '../../types/requestType';
import useAxiosHandle from '../useAxiosHandle';

const useHandleInsertFoodItem = () => {
  const { postRequest } = useAxiosHandle();

  const insertFoodItemAPI = async ({
    data,
    config,
  }: PostRequestFunctionParametersType) => {
    const foodItems = await postRequest(`/food-items`, data, config);
    return foodItems;
  };

  return { insertFoodItemAPI };
};

export default useHandleInsertFoodItem;
