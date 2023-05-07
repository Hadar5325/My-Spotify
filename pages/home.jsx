import { FavoriteListSongs } from "../cmps/FavoriteListSongs.jsx"
import { List } from "../cmps/list.jsx"
import { Search } from "../cmps/search.jsx"
import { frontEndService } from "../services/front-end-service.js"

const { Outlet, Link } = ReactRouterDOM
const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

export function Home() {
    const [data, setData] = useState(null)
    const [searchToUpdate, setSearchToUpdate] = useState('')
    const [field, setField] = useState('')

    const [favoriteSongs, setFavoriteSongs] = useState([])


    useEffect(() => {
        frontEndService.query(searchToUpdate, field).then((item) => {
            setData(item)
        })
    }, [searchToUpdate, field])

    useEffect(() => {
        if (favoriteSongs.length <= 0) return
        console.log(favoriteSongs)
        // frontEndService.query(favoriteSongs).then((item) => {
        //     console.log(item)
        // })
        // frontEndService.query(id)
        console.log('favorite!')
    }, [favoriteSongs])


    function updateSearch(value) {
        setSearchToUpdate(value)
        setField('artist')
    }

    function updateFavSongs(id, operation) {
        setFavoriteSongs(prevArr => {
            if (operation === 'add') return [id, ...prevArr]
            else {
                return prevArr.filter(item => {
                    return item !== id
                })
            }
        })
    }

    return <section className="app">
        {!data && <div>"loading..." </div>}

        {data && <section className="home-page">
            <section className="left-nav">
                <div>Home</div>
                <div>Search</div>
                <div>Your Library</div>
                <div>Create Playlist</div>
                <div>Liked Songs</div>
            </section>
            <section className="main-data">
                <Link to="/dashboard">Show dashboards</Link>
                <div>Focus</div>
                <Search updateSearch={updateSearch} />
                <List data={data} updateFavSongs={updateFavSongs} />
                {favoriteSongs.length > 0 && <FavoriteListSongs favoriteSongs={favoriteSongs} />}
            </section>
        </section>}
    </section>
}
