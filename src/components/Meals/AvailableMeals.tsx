import React from 'react';
import availableMealsCss from '../../assets/css/Meals/AvailableMeals.module.css';
import { AVAILABLE_DUMMY_MEALS } from '../../data/AvailableMeals';

const AvailableMeals = () => {
  return (
    <section className={availableMealsCss.meals}>
      <ul>
        {AVAILABLE_DUMMY_MEALS.map((meals) => (
          <li key={meals.id}>{meals.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
