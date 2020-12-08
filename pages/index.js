import Head from 'next/head'

import clonewarsEpisodes from '../clonewars_episodes'

function Home() {
  return (
    <div>
      <main>
        <h1>Star Wars: The Clone Wars Chronological Order</h1>
        <table>
          <tbody>
            <td>Watched</td>
            <td>Order</td>
            <td>Air #</td>
            <td>Title</td>
            {clonewarsEpisodes.map((episode) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" value={episode.hasWatched} />
                  </td>
                  <td>{episode.order}</td>
                  <td>{episode.airNumber}</td>
                  <td>{episode.title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </main>
    </div>
  )
}

export default Home
