import { getScreenshot } from '../assets/utils/getScreenshot'
import { Url } from '../types'
import styles from './Portal.module.css'

function Portal({ onBack, url }: {
	onBack: () => void,
	url: Url | null
}) {
	getScreenshot(document.querySelector('main > div') as HTMLElement, url as Url)

	if (!url) return null

	return (
		<>
			<iframe src={url} title='portal' className={styles.portal} />
		</>
	)
}

export default Portal