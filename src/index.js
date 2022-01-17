const init = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const userInput = e.target.searchByID.value;
      

    fetch(`http://localhost:3000/movies/${userInput}`)
        .then(res => {return res.json()})
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.textContent = data.title;
            summary.textContent = data.summary;
        })
  })
}

document.addEventListener('DOMContentLoaded', init);