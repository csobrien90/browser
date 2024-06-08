import { Url } from '../types'
import styles from './Gateway.module.css'

function Gateway ({ onClick, screenshot, url }: {
	onClick: () => void,
	screenshot: string | null,
	url?: Url
}) {
	console.log({ screenshot, url })
	return (
		<div onClick={onClick} className={styles.gateway}>
			{
				screenshot ? (
					<img src={screenshot} alt='screenshot' />
				) : (
					<iframe src={url} title='gateway' />
				)
			}
		</div>
	)
}

export default Gateway