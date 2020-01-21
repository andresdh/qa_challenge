const Home = require('../pages/home')
const Result = require('../pages/search_result')

describe('Alexa', () => {
    it('search Alexa products', () => {
        browser.url('https://amazon.com')
        Home.searchBox.setValue('Alexa')
        Home.searchSubmitBtn.click()
    })
})

