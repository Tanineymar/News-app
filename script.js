
const API_KEY = '17e088f522e94ee5924dc5608f1f67b2';
const url = 'https://newsapi.org/v2/everything?q=';

const menuBtn = document.getElementById('menu-btn')
const categories = document.getElementById('categories')
const navLink = document.querySelectorAll('.nav-link')

const cardContainer = document.getElementById('card-container')


// Fetch news from api
async function fetchNews(query){
    try {
        const response = await fetch(`${url}${query}&apiKey=${API_KEY}`);
        const data = await response.json()
        displayNews(data.articles)
        console.log(data.articles);
        
    } catch (error) {
        console.error("API Error" , error)
        cardContainer.innerHTML =`<p>could not fetch news your 100 requests are complete`
    }
    
}

// Load default news
window.addEventListener('load' , ()=>{
     fetchNews("India")
})

// handle navbar links onclick
const sports = document.getElementById('sports')
sports.addEventListener("click" , ()=>{
    fetchNews("sports")
    console.log("sports")
})






function displayNews(articles){
cardContainer.innerHTML =''

articles.forEach((article)=>{
    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML=`
    <div class="card-img">
    <img src="${article.urlToImage || 'https://res.cloudinary.com/dv3qbj0bn/image/upload/v1692554275/zznyjn4yp53ybxakqcas.jpg'}" alt = "No Image"/>
    </div>
        <div class="card-text">
          <h6 class="title">
          ${article.title}
          </h6>
          <p class="description">
          ${article.description || 'No description available.'}
          </p>
          <a href="${article.url}" target="_blank" class="read-more">
          Read More
        </a>
        </div>
        `;
        cardContainer.appendChild(card)
})
  
}


// Handle Hamburger

menuBtn.addEventListener('click' , ()=>{
    categories.classList.toggle('show')
})

navLink.forEach((link)=>{
    link.addEventListener('click' , ()=>{
        categories.classList.remove('show')
    })
})

// dark and light theme
