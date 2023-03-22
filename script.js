function Run(title){
  const cards_container = document.getElementById("cards-container")
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1017cc393fmshefde6b4c774e42cp16dc34jsn72f8fcc20de7',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=${title}&limit=5&sortArg=moviemeter%2Casc`, options)
	.then(response => response.json())
	.then(response =>{
    console.log(response.results)
    let res = response.results
    res.forEach(element => {
      const card = document.createElement('div')
      card.className = 'card'
      const card_image = document.createElement("img")
      card_image.src = element.image.url
      const title_div = document.createElement("div")
      title_div.id = "div1"
      const cardTitle = document.createElement('h2');
      cardTitle.innerText = element.title;
      const cardDescription = document.createElement('p');
      cardDescription.innerText = element.year;
      
      title_div.appendChild(cardTitle);
      title_div.appendChild(cardDescription);
      card.appendChild(card_image)
      card.appendChild(title_div)
      cards_container.appendChild(card);
    });
  })
	// .catch(err => console.error(err));

  
}
Run('baahubali')
Run("RRR")
Run("game of")
Run("ala vaikuntapuramlo")
Run("vikram")

function fetching(){
  document.getElementById("cards-container").innerHTML = ""
  const movies_list = document.getElementById("cards-container")
  var x = document.getElementById("input").value
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1017cc393fmshefde6b4c774e42cp16dc34jsn72f8fcc20de7',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  
  fetch(`https://imdb8.p.rapidapi.com/title/v2/find?title=${x}&limit=40&sortArg=moviemeter%2Casc`, options)
    .then(response => response.json())
    .then(response => {
      var result = response.results
             
      result.forEach(element => {
        const card = document.createElement('div')
        card.className = 'card'
        const card_image = document.createElement("img")
        card_image.src = element.image.url
        const title_div = document.createElement("div")
        title_div.id = "div1"
        const cardTitle = document.createElement('h2');
        cardTitle.innerText = element.title;
        const cardDescription = document.createElement('p');
        cardDescription.innerText = element.year;
        
        title_div.appendChild(cardTitle);
        title_div.appendChild(cardDescription);
        card.appendChild(card_image)
        card.appendChild(title_div)
        movies_list.appendChild(card);
      });
      
    })
    .catch(err => console.error(err));
}
