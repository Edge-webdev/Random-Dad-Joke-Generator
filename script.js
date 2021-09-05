const dadJoke = document.querySelector('.joke');
const button = document.querySelector('generate-joke');

async function generateJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await res.json();

  dadJoke.innerHTML = data.joke;
}

generateJoke();
