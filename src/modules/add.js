let ScoresArray = [];

export function addtoLocalStorage() {
  localStorage.setItem('data', JSON.stringify(ScoresArray));
}

export function displayScores() {
  const listItems = document.querySelector('.list-items');
  listItems.innerHTML = '';

  ScoresArray.forEach((item) => {
    const firstItem = document.createElement('li');
    const label = document.createElement('label');
    label.textContent = `${item.name} : ${item.value}`;
    firstItem.appendChild(label);
    listItems.appendChild(firstItem);
    addtoLocalStorage();
  });
}

export function addScores() {
  const person = document.querySelector('#name');
  const score = document.querySelector('#score');
  if ((person !== '') && (score !== '')) {
    const ScoreData = {
      name: person.value,
      value: score.value,
    };
    ScoresArray.push(ScoreData);
    person.value = '';
    score.value = '';
    addtoLocalStorage();
  }
  displayScores();
}

export function loadtoLocalStorage() {
  const dataValue = localStorage.getItem('data');
  if (dataValue) {
    ScoresArray = JSON.parse(dataValue);
    displayScores();
  }
}