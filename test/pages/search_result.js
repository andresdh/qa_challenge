'use strict'

class Result {
  resultElement(x) {
    return $$("//div[@class='sg-row']//h2/a")[x]
  }
}

module.exports = new Result()
