const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Header } from './cmps/header.jsx'
import { About } from './pages/about.jsx'
import { City } from './pages/city.jsx'
import { Home } from './pages/home.jsx'

export function App() {
    return <Router>
        <section className="app">
            <Header />
            <main>
                <Routes>
                    <Route element={<Home />} path="/" />
                </Routes>
            </main>
        </section>
    </Router>

}