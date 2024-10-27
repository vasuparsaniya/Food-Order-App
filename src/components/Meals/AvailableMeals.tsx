import React, { useEffect, useState } from 'react';
import availableMealsCss from '../../assets/css/Meals/AvailableMeals.module.css';
import { AvailableDummyMeals } from '../../data/AvailableMeals';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import useHandleGetFoodItems from '../../hook/foodItems/useHandleGetFoodItems.service';
import { auth, signInUser } from '../../helper/firebaseConfig/authentication';
import { onAuthStateChanged } from 'firebase/auth';
import CircularLoader from '../../libs/components/CircularLoader';

const AvailableMeals = () => {
  // ** State **
  const [availableMeals, setAvailableMeals] = useState<AvailableDummyMeals>([]);

  // ** API **
  const { getFoodItemsAPI, isLoading } = useHandleGetFoodItems();

  useEffect(() => {
    const fetchAvailableMeals = async () => {
      try {
        await signInUser();

        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const authToken = await user.getIdToken();
            const meals = await getFoodItemsAPI({
              config: {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              },
              authToken: authToken,
            });
            const mealsArray: AvailableDummyMeals = Object.values(meals.data);
            setAvailableMeals(mealsArray);
          } else {
            console.error('User not authenticated');
          }
        });
      } catch (error: any) {
        console.error(
          'Fetch Available Meals Request Failed:',
          error.response?.data || error.message,
        );
      }
    };

    fetchAvailableMeals();
  }, []);

  console.log('==========availableMeals', availableMeals);
  return (
    <section className={availableMealsCss.meals}>
      <Card>
        {isLoading || !availableMeals.length ? (
          <CircularLoader />
        ) : (
          <ul>
            {availableMeals.map((meals, index) => (
              <MealItem key={index} mealData={meals} />
            ))}
          </ul>
        )}
      </Card>
    </section>
  );
};

export default AvailableMeals;
