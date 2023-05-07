import { Preview } from "./preview.jsx"


export function List({ data, updateFavSongs }) {
    console.log(data)
    return <section className="list">
        {data.map((item, index) => {
            return <Preview key={index} item={item} updateFavSongs={updateFavSongs} />
        })}
    </section>
}