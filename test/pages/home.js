class Home {
  get searchBox() {
    return $("//input[@id='twotabsearchtextbox']")
  }
  get searchSubmitBtn() {
    return $("//div[@class='nav-search-submit nav-sprite']//input[@class='nav-input']")
  }
}

module.exports = new Home()
