import { Preview } from "./preview.jsx"
import { Song } from "./song.jsx"


export function Favorite({ favoriteSongs }) {
    return <section>
        {favoriteSongs.map(song => {
            console.log(song)
            return <Song key={song.id} song={song} />
        })}
    </section>
}