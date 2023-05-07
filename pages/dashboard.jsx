

const { Outlet, Link } = ReactRouterDOM

export function Dashboard() {
    return <section className="dashboard-container">
        <Link to="/">Back to home page</Link>
        <div>Dashboard</div>
        <section className="dashboard">
            <div>Top 3 most favorable songs</div>
            <div>Top 3 most favorable artists</div>
            <div>Top 3 most favorable songs - ‘90s</div>
            <div>Top 3 most favorable songs - ‘00s</div>
            <div>Top 3 most favorable songs - ‘10s</div>
            <div>Top 3 longest songs</div>
            <div>Top 3 shortest songs</div>
        </section>
    </section>
}