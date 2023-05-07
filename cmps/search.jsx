const { useEffect, useState } = React


export function Search({updateSearch}) {
    const [artist, setArtist] = useState({ artistName: '' })

    function handleChange({ target }) {
        const { name: field, value } = target
        // Update home page
        updateSearch(value)
        setArtist((prev) => {
            return { ...prev, [field]: value }
        })
    }

    return <section>
        <form>
            <label id="artist" />
            <input
                onChange={handleChange}
                value={artist.artistName}
                name="artistName"
                placeholder="Find the artist" />
        </form>
    </section>
}