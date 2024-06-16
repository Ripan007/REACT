'use strict'
const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

function renderCountry(data, className = '') {
    const html = `
          <article class="country ${className}">
                    <img src=${data.flag} alt="" class="country__img" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row"> <span>😖 </span>${(
                            +data.population / 1000000
                        ).toFixed(1)}</p>
                        <p class="country__row">  <span>
                        🦩</span> ${data.languages[0].name}
                        <p class="country__row"> <span>
                        🪐 </span> ${data.currencies[0].name}
                    </div>
                </article>
 `
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1
}

const countryData = function (country) {
    fetch(`https://restcountries.com/v2/name/${country}`)
        .then(res => res.json())
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]
            if (!neighbour) return
            return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
        })
        .then(res => res.json())
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} ✴️ ✴️ ✴️`)
            renderError(`something went wrong 💥💥💥 ${err}`)
        })
}
btn.addEventListener('click', function () {
    countryData('portugal')
})
