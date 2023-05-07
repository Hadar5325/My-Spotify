
export function Song({ song }) {
    return <div className="song">
        <div>
            {song.id}
        </div>
        <div>
            {song.title}
        </div>
        <div>
            {song.duration}
        </div>
        <div>
            {song.releaseYear}
        </div>
    </div>
}