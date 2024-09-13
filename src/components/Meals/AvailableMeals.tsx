import React from 'react';
import availableMealsCss from '../../assets/css/Meals/AvailableMeals.module.css';
import { AVAILABLE_DUMMY_MEALS } from '../../data/AvailableMeals';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
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
