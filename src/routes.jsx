import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GameList from "./pages/GameList"
import GameDetail from "./pages/GameDetail"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<GameList />} />
				<Route path="/games/detail/:id" element={<GameDetail />} />
			</Routes>
		</BrowserRouter>
	)
}