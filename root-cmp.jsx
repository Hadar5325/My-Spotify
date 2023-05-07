const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Home } from './pages/home.jsx'

export function App() {
    return <Router>
        <section className="app">
            <main>
                <Routes>
                    <Route element={<Home />} path="/" />
                </Routes>
            </main>
        </section>
    </Router>

}