const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Dashboard } from './pages/dashboard.jsx'
import { Home } from './pages/home.jsx'

export function App() {
    return <Router>
        <section className="app">
            <main>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Dashboard />} path="/dashboard" />
                </Routes>
            </main>
        </section>
    </Router>

}