import { useEffect } from 'react';
import { Url } from '../../types';

export const getScreenshot = (element: HTMLElement, url: Url): void => {
	useEffect(() => {
		getAndSaveScreenshot(element, url);
	}, [element, url]);
};

export const getScreenshotFromLocalStorage = (url: Url): string | null => {
	return localStorage.getItem(url);
};

const getAndSaveScreenshot = async (element: HTMLElement, url: Url): Promise<string> => {
	let storedScreenshot = localStorage.getItem(url);
	if (storedScreenshot) return storedScreenshot;

	try {
		const screenshot = await takeScreenshot(element);
		saveScreenshotToLocalStorage(element, url);
		return screenshot;
	} catch (error) {
		console.error(error);
		return '';
	}
}

const takeScreenshot = async (element: HTMLElement): Promise<string> => {
	const iframe = element.querySelector('iframe') as HTMLIFrameElement;
	const iframeBody = iframe.contentWindow?.document.body as HTMLBodyElement;

	return '';
	// const canvas = await html2canvas(iframeBody, {
	// 	useCORS: true,
	// 	allowTaint: true,
	// 	scrollX: 0,
	// 	scrollY: 0,
	// 	windowWidth: document.documentElement.scrollWidth,
	// 	windowHeight: document.documentElement.scrollHeight,
	// });

	// return canvas.toDataURL('image/png') ?? '';
};

const saveScreenshotToLocalStorage = (element: HTMLElement, url: Url): void => {
	takeScreenshot(element).then((screenshot) => {
		localStorage.setItem(url, screenshot);
	}).catch((error) => {
		console.error(error);
	});
}
