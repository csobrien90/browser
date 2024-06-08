import styles from "./FixedWindow.module.css"
import { PropsWithChildren } from "react"

function FixedWindow({ children }: PropsWithChildren<{}>) {
	return (
		<div className={styles['fixed-window']}>
			{children}
		</div>
	)
}

export default FixedWindow
