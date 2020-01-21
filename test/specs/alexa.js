const Home = require('../pages/home')
const Result = require('../pages/search_result')

describe('Alexa', () => {
    it('search Alexa products', () => {
        browser.url('https://amazon.com')
        Home.searchBox.setValue('Alexa')
        Home.searchSubmitBtn.click()
    })
    it('select the 3er product listed', () => {
        element = Result.resultElement(3)
        elementText = element.getText()
        element.click()
    })
})

