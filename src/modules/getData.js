import { baseUrl, gameId } from './apiUrl.js';

const result = document.querySelector('.result');

const getData = async () => {
  try {
    const response = await fetch(`${baseUrl}/games/${gameId}/scores`);
    const data = await response.json();
    const sortedData = data.result.sort((x, y) => y.score - x.score);
    result.innerHTML = sortedData.map((element, index) => `<p class="score ${index % 2 === 0 ? 'even' : 'odd'}">${element.user}: ${element.score}</p>`).join('');
  } catch (error) {
    console.log(error);
  }
};

export default getData;