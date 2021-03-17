const storeItems = [
  {
    picture: './images/barbell-1.jpeg',
    name: 'barbell 1',
    type: 'barbell',
    price: 95,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, laborum.',
  },
  {
    picture: './images/barbell-2.jpeg',
    name: 'barbell 2',
    type: 'barbell',
    price: 115,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, laborum.',
  },
  {
    picture: './images/barbell-3.jpeg',
    name: 'barbell 3',
    type: 'barbell',
    price: 135,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, laborum.',
  },
  {
    picture: './images/barbell-4.jpeg',
    name: 'barbell 4',
    type: 'barbell',
    price: 110,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, laborum.',
  },

  {
    picture: './images/dumbbell-1.jpeg',
    name: 'dumbbell 1',
    type: 'dumbbell',
    price: 15,
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo reprehenderit quaerat numquam nulla sapiente?',
  },
  {
    picture: './images/dumbbell-2.jpeg',
    name: 'dumbbell 2',
    type: 'dumbbell',
    price: 25,
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo reprehenderit quaerat numquam nulla sapiente?',
  },
  {
    picture: './images/dumbbell-3.jpeg',
    name: 'dumbbell 3',
    type: 'dumbbell',
    price: 55,
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo reprehenderit quaerat numquam nulla sapiente?',
  },
  {
    picture: './images/dumbbell-4.jpeg',
    name: 'dumbbell 4',
    type: 'dumbbell',
    price: 30,
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nemo reprehenderit quaerat numquam nulla sapiente?',
  },

  {
    picture: './images/kettlebell-1.jpeg',
    name: 'kettlebell 1',
    type: 'kettlebell',
    price: 110,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tenetur consequatur, voluptates inventore saepe doloribus laborum debitis similique pariatur! Perferendis esse corrupti facere dolorem optio.',
  },
  {
    picture: './images/kettlebell-2.jpeg',
    name: 'kettlebell 2',
    type: 'kettlebell',
    price: 65,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tenetur consequatur, voluptates inventore saepe doloribus laborum debitis similique pariatur! Perferendis esse corrupti facere dolorem optio.',
  },
  {
    picture: './images/kettlebell-3.jpeg',
    name: 'kettlebell 3',
    type: 'kettlebell',
    price: 75,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tenetur consequatur, voluptates inventore saepe doloribus laborum debitis similique pariatur! Perferendis esse corrupti facere dolorem optio.',
  },
  {
    picture: './images/kettlebell-4.jpeg',
    name: 'kettlebell 4',
    type: 'kettlebell',
    price: 35,
    about:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt tenetur consequatur, voluptates inventore saepe doloribus laborum debitis similique pariatur! Perferendis esse corrupti facere dolorem optio.',
  },
  {
    picture: './images/resistanceband-1.jpeg',
    name: 'resistance band 1',
    type: 'band',
    price: 5,
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod animi dicta laudantium repudiandae maiores voluptas reprehenderit vitae officiis minus.',
  },
  {
    picture: './images/resistanceband-2.jpeg',
    name: 'resistance band 2',
    type: 'band',
    price: 15,
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod animi dicta laudantium repudiandae maiores voluptas reprehenderit vitae officiis minus.',
  },
  {
    picture: './images/resistanceband-3.jpeg',
    name: 'resistance band 3',
    type: 'band',
    price: 10,
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod animi dicta laudantium repudiandae maiores voluptas reprehenderit vitae officiis minus.',
  },
];
// Selectors
const container = document.querySelector('.container');
const btn = document.querySelectorAll('.btn');

// Load Items
window.addEventListener('DOMContentLoaded', displayStoreItems(storeItems));

// Filter Items
btn.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const category = e.currentTarget.dataset.id;

    const storeCategory = storeItems.filter(function (storeItem) {
      if (storeItem.type === category) {
        return storeItem;
      }
    });
    if (category === 'all') {
      displayStoreItems(storeItems);
    } else {
      displayStoreItems(storeCategory);
    }
  });
});

// Map over Items
function displayStoreItems(storeItemsList) {
  let displayItems = storeItemsList.map(function (item) {
    return `
    <div id="item-card">
        <img src=${item.picture} alt="" />
        <h2>${item.name}</h2>
        <h3>$${item.price}</h3>
        <p>
          ${item.about}
        </p>
      </div>`;
  });
  displayItems = displayItems.join('');
  container.innerHTML = displayItems;
}
