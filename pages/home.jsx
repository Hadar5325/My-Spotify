import { List } from "../cmps/list.jsx"
import { frontEndService } from "../services/front-end-service.js"

const { Outlet, Link } = ReactRouterDOM
const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM

export function Home() {
    const [data, setData] = useState(null)

    useEffect(() => {
        frontEndService.query().then((item) => {
            setData(item)
        })
    }, [])

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
                <div>Focus</div>
                <List data={data} />
            </section>
        </section>}
    </section>
}
