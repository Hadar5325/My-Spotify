const { Outlet, Link } = ReactRouterDOM
const { useEffect, useState } = React
const { useParams, useNavigate } = ReactRouterDOM
export function Home() {
    return <section>
        <section className="left-nav">
            <div>Home</div>
            <div>Search</div>
            <div>Your Library</div>
            <div>Create Playlist</div>
            <div>Liked Songs</div>
        </section>
        <section className="main">
            <div>Focus</div>
        </section>
    </section>
}