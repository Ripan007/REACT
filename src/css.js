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

function getCountryNeighnbourCountry(country) {
    const request = new XMLHttpRequest()
    request.open('GET', `https://restcountries.com/v2/name/${country}`)
    request.send()

    request.addEventListener('load', function () {
        // console.log(this.responseText)
        const [data] = JSON.parse(this.responseText)
        console.log(data)
        //  render country 1 data
        renderCountry(data)
        //  get neighbour country data
        const [neighbour] = data.borders
        if (!neighbour) return
        const request2 = new XMLHttpRequest()
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`)
        request2.send()

        request2.addEventListener('load', function () {
            const data2 = JSON.parse(this.responseText)
            console.log('🚀 ~ data2:', data2)

            renderCountry(data2, 'neighbour')
        })
    })
}

getCountryNeighnbourCountry('portugal')
