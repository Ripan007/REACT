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
                    <img src=${data} alt="" class="country__img" />
                    <div class="country__data">
                        <h3 class="country__name">country</h3>
                        <h4 class="country__region">region</h4>
                        <p class="country__row">😖<span>pop people</span></p>
                        <p class="country__row">🦩<span>language</span></p>
                        <p class="country__row">🪐<span>region</span></p>
                    </div>
                </article>

    `
})
