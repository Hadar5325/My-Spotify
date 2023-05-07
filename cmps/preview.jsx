import { Song } from "./song.jsx"

export function Preview({ item, updateFavSongs }) {
    return <div>
        <div>{item.artist}</div>
        <div className="preview">
            {item.songs.map(song => {
                return <Song key={song.id} song={song} updateFavSongs={updateFavSongs} />
            })}
        </div>
    </div>
}