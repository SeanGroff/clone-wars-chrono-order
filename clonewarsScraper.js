let fs = require('fs')
let fetch = require('node-fetch')
let $ = require('cheerio')

const STAR_WARS_URL =
  'https://www.starwars.com/news/star-wars-the-clone-wars-chronological-episodeorder'

async function scrape() {
  try {
    let response = await fetch(STAR_WARS_URL)
    let html = await response.text()
    let episodes = []

    $('.entry-content > div > table > tbody > tr', html).each(
      (index, element) => {
        if (index === 0) {
          return
        }

        let episodeEl = $(element).find('td')

        episodes.push({
          hasWatched: false,
          order: $(episodeEl[0]).text(),
          airNumber: $(episodeEl[1]).text(),
          title: $('a:nth-child(1)', episodeEl[2]).text(),
        })
      }
    )

    fs.writeFile(
      'clonewars_episodes.json',
      JSON.stringify(episodes),
      'utf8',
      (error) => {
        if (error) {
          console.log(error)
        }
      }
    )
  } catch (error) {
    console.log(error)
  }
}

scrape()
