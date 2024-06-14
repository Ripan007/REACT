'use strict'
const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

const request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v2/name/portugal')
request.send()

request.addEventListener('load', function () {
    // console.log(this.responseText)
    const [data] = JSON.parse(this.responseText)
    console.log(data)
    const html = `
          <article class="country">
                    <img src=${data.flags} alt="" class="country__img" />
                    <div class="country__data">
                        <h3 class="country__name">${data.name}</h3>
                        <h4 class="country__region">${data.region}</h4>
                        <p class="country__row">😖<span>${(
                            +data.population / 1000000
                        ).toFixed(1)}</span></p>
                        <p class="country__row">🦩<span>${
                            data.languages[0].name
                        }</span></p>
                        <p class="country__row">🪐<span>${
                            data.currencies[0].name
                        }</span></p>
                    </div>
                </article>


    `
    countriesContainer.insertAdjacentHTML('beforeend', html)
    countriesContainer.style.opacity = 1
})
