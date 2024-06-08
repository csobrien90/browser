import Gateway from '../components/Gateway'
import { getScreenshotFromLocalStorage } from '../assets/utils/getScreenshot'
import { Url } from '../types'
import styles from './Choose.module.css'

function Choose({ onChoose, tabs }: {
	onChoose: (url: Url | null) => void,
	tabs: Url[]
}) {
	return (
		<div className={styles['choose-wrapper']}>
			{tabs.map((tab) => {
				// Get screenshot from localStorage
				const screenshot = getScreenshotFromLocalStorage(tab)
				
				return (
					<Gateway
						key={tab}
						onClick={() => onChoose(tab)}
						url={tab}
						screenshot={screenshot}
					/>
				)
			})}
		</div>
	)
}

export default Choose