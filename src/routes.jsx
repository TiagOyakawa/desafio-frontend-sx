import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import GameList from "./pages/GameList"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/games" element={<GameList />} />
			</Routes>
		</BrowserRouter>
	)
}