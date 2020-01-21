'use strict'

class Result {
  get resultElement() {
    return $("div[@class='sg-row']//h2/a")[2]
  }
}

module.exports = new Result()
