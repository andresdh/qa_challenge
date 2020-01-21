const Home = require('../pages/home')
const Result = require('../pages/search_result')
const Product = require('../pages/product')
const assert = require('assert')


describe('Alexa', () => {
    it('search Alexa products', () => {
        browser.url('https://amazon.com')
        Home.searchBox.setValue('Alexa')
        Home.searchSubmitBtn.click()
    })
    it('select the third product listed', () => {
        element = Result.resultElement(3)
        elementText = element.getText()
        element.click()
    })
    it('verify the correct item selected', () => {
        assert.equal(elementText, Product.productTitle.getText())
    })
})

