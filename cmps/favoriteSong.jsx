export function FavoriteSong({song}) {
    return <section className="favorite-song">
        <div>
            {song.title}
        </div>
        <div>
            {song.duration}
        </div>
        <div>
            {song.releaseYear}
        </div>
    </section>
}