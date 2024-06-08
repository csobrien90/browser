import { useState } from 'react'
import './App.css'
import FixedWindow from './components/FixedWindow'
import Choose from './pages/Choose'
import Portal from './pages/Portal'
import { PageSlug, Url } from './types'

function App() {
	const [activePage, setActivePage] = useState<PageSlug>('choose')
	const [activeUrl, setActiveUrl] = useState<Url | null>(null)
	const [tabs, setTabs] = useState<Url[]>(['https://louisvillejazzinitiative.com', 'https://do502.com', 'https://switcherstudio.com'])

	const isValidUrl = (url: string | null) => {
		if (!url) return false
		const urlPattern = /^(http|https):\/\/[^ "]+$/
		return urlPattern.test(url)
	}

	return (
		<main>
			<h1 className='sr-only'>This a Browser?</h1>
			<FixedWindow>
				{activePage === 'choose' && (
					<Choose
						onChoose={(url: Url | null) => {
							if (!url || !isValidUrl(url)) return
							setActiveUrl(url)
							setActivePage('portal')
						}}
						tabs={tabs}
					/>
				)}
				{activePage === 'portal' && (
					<Portal
						onBack={() => setActivePage('choose')}
						url={activeUrl}
					/>
				)}
			</FixedWindow>
		</main>
	)
}

export default App
