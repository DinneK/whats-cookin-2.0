// Use this file to connect all other files
// No functionality or manipulation will happen here\
// Will need to import all files


import './styles.css';
import apiCalls from './apiCalls';
import './images/turing-logo.png';
import ingredientsData from './data/ingredients';
import { findRecipeIngredients } from './recipes';
import { displayRecipes } from './domUpdates';

console.log(ingredientsData);
findRecipeIngredients("Dirty Steve's Original Wing Sauce");
displayRecipes();