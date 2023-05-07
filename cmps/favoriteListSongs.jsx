import { FavoriteSong } from "./favoriteSong.jsx"


export function FavoriteListSongs({ favoriteSongs }) {
    return <section>
        <div>Favorite songs</div>
        <section className="favorite-list-songs">
            {favoriteSongs.map(song => {
                console.log(song)
                return <FavoriteSong key={song.id} song={song} />
                // return <Song key={song.id} song={song} />
            })}
        </section>
    </section>
}