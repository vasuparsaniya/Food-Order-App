import React, { useEffect, useState } from 'react';
import availableMealsCss from '../../assets/css/Meals/AvailableMeals.module.css';
import {
  AVAILABLE_DUMMY_MEALS,
  AvailableDummyMeals,
} from '../../data/AvailableMeals';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import useHandleGetFoodItems from '../../hook/foodItems/useHandleGetFoodItems.service';
import { getAuthToken } from '../../helper/firebaseConfig/authentication';

const AvailableMeals = () => {
  // ** State **
  const [availableMeals, setAvailableMeals] = useState<AvailableDummyMeals>([]);

  // ** API **
  const { getFoodItemsAPI } = useHandleGetFoodItems();

  useEffect(() => {
    const fetchAvailableMeals = async () => {
      const authToken = await getAuthToken();
      const meals = await getFoodItemsAPI({
        headers: {
          Authorization: `Bearer ${authToken}`, // Include the auth token
          'Content-Type': 'application/json',
        },
      });
      setAvailableMeals(meals);
    };
    fetchAvailableMeals();
  }, []);

  console.log('==========availableMeals', availableMeals);
  return (
    <section className={availableMealsCss.meals}>
      <Card>
        <ul>
          {AVAILABLE_DUMMY_MEALS.map((meals, index) => (
            <MealItem key={index} mealData={meals} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
