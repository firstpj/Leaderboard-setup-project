import './style.css';
import { addScores, loadtoLocalStorage, displayScores } from '../modules/add.js';

document.addEventListener('DOMContentLoaded', () => {
  loadtoLocalStorage();
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    addScores();
  });
  displayScores();
});
