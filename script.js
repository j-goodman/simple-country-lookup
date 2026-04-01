const input = document.getElementById('country-input')
const flag = document.getElementById('country-flag')
const card = document.getElementById('country-card')
const nameEl = document.getElementById('country-name')
const populationEl = document.getElementById('country-population')

input.addEventListener('keypress', async event => {
	if (event.key !== 'Enter') {
		return
	}

	const query = input.value.trim()
	const response = await fetch(`https://restcountries.com/v3.1/name/${query}`)
	const countries = await response.json()
	const country = countries.find(countryItem => countryItem.name.common.toLowerCase() === query.toLowerCase()) || countries[0]

	flag.src = country.flags.png
	flag.alt = `Flag of ${country.name.common}.`
	nameEl.textContent = country.name.official
	populationEl.textContent = country.population.toLocaleString()
	flag.hidden = false
	card.hidden = false
})