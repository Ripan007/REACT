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
}

const renderError = function (msg) {
    countriesContainer.insertAdjacentHTML('beforeend', msg)
    countriesContainer.style.opacity = 1
}

const getJSON = function (url, errorMsg = 'something went wrong') {
    return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg}(${response.status})`)
        return response.json()
    })
}

const getCountryData = function (country) {
    getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
        .then(data => {
            renderCountry(data[0])
            const neighbour = data[0].borders[0]
            if (!neighbour) throw new Error('no neighbour found')
            return getJSON(
                `https://restcountries.com/v2/alpha/${neighbour}`,
                'country not found'
            )
        })
        .then(res => res.json())
        .then(data => renderCountry(data, 'neighbour'))
        .catch(err => {
            console.error(`${err} ✴️ ✴️ ✴️`)
            renderError(`something went wrong 💥💥💥 ${err.message} .try again`)
        })
        .finally(() => {
            countriesContainer.style.opacity = 1
        })
}
btn.addEventListener('click', function () {
    getCountryData('portugal')
})

// getCountryData('hhhhhhh')
