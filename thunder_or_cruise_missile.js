console.log('Hello!');

for (i = 0; i < 10; i++) {
  console.log(i);
 
}

const p = document.getElementById('text');
p.style.fontSize = '25px';

const boxes = document.querySelector('#boxes');

function thunderImage() {
  const newImage = document.createElement('img');
  newImage.setAttribute('class', 'img');
  newImage.setAttribute('src', 'thunder.png');
  newImage.setAttribute('alt', 'error');
  newImage.style.width = '40%';

  return newImage;
}


function bumImage() {
  const div = document.createElement('div');
  
  const newImage = document.createElement('img');
  newImage.setAttribute('class', 'img');
  newImage.setAttribute('src', 'bum.png');
  newImage.setAttribute('alt', 'error');
  newImage.style.width = '60%';

  const text = document.createElement('h2');
  text.innerText = 'BUM!!\nclick to image';
  text.style.color = 'red'

  div.appendChild(newImage);
  div.appendChild(text);

  return div;
}

function winImage() {
  const div = document.createElement('div');
  
  const newImage = document.createElement('img');
  newImage.setAttribute('class', 'img');
  newImage.setAttribute('src', 'https://pngimg.com/uploads/hurricane/hurricane_PNG20.png');
  newImage.setAttribute('alt', 'error');
  newImage.style.width = '80%';

  const text = document.createElement('h2');
  text.innerText = 'YOU WIN!!\nclick to image';
  text.style.color = 'rgb(200, 200, 200)';

  div.appendChild(newImage);
  div.appendChild(text);

  return div;
}

function createBox() {
  const box = document.createElement('div');

  boxes.appendChild(box);
  box.style.backgroundColor = 'rgb(30, 30, 30)';
  box.classList.add('box');

  box.number = `${i}`;

  return box;
}

function delAll() {
  const allDivs = boxes.querySelectorAll('div');

  for (div of allDivs) {
    boxes.removeChild(div);
  }
}

function ifFalse(box) {        
  if (box.number != randomNumber) {
    box.appendChild(thunderImage());
    box.style.backgroundColor = 'rgb(25, 25, 25)';
  }
  else {
    delAll();
    boxes.appendChild(bumImage());
    
    const img = document.querySelector('.img');
    img.addEventListener('click', function() {
      delAll();
      createGame();
      randomNumber = Math.floor(Math.random() * 9) + 1;
      console.log(randomNumber);
    })
  };
}

function ifTrue(box) {
  box.style.backgroundColor = 'rgb(30, 30, 30)';
  box.innerHTML = null;
}


let randomNumber = Math.floor(Math.random() * 9) + 1;
console.log(randomNumber)

function createGame() {
  let score = 0;

  for (i = 1; i < 10; i++) {
    
    let flag = false;

    const box = createBox();

    box.addEventListener('click', function() {
      if (!flag) {
        score += 1;
        flag = true;

        ifFalse(box);
      } else { 
        score -= 1;
        flag = false;

        ifTrue(box);
      }

      if (score === 8) {
        delAll();
        boxes.appendChild(winImage());
        
        const img = document.querySelector('.img');
        img.addEventListener('click', function() {
          delAll();
          createGame();
          randomNumber = Math.floor(Math.random() * 9) + 1;
          console.log(randomNumber);
        });
      }    
    }); 
  }
}

createGame();
