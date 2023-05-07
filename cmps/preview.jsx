import { Song } from "./song.jsx"

export function Preview({ item }) {
    return <div>
        <div>{item.artist}</div>
        <div className="preview">
            {item.songs.map(song => {
                return <Song key={song.id} song={song} />
            })}
        </div>
    </div>
}