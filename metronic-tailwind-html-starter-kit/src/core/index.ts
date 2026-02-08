/*
 * Metronic
 * @author: Keenthemes
 * Copyright 2024 Keenthemes
 */

import KTDom from './helpers/dom';
import KTUtils from './helpers/utils';
import KTEventHandler from './helpers/event-handler';
import { KTMenu } from './components/menu';
import { KTDatePicker } from './components/date-picker';
import { KTColorPicker } from './components/color-picker';
import { KTSortable } from './components/sortable';
import { KTDropzone } from './components/dropzone';

// Import vanilla-calendar-pro styles
import 'vanilla-calendar-pro/styles/index.css';

export { KTMenu } from './components/menu';
export { KTDatePicker } from './components/date-picker';
export { KTColorPicker } from './components/color-picker';
export { KTSortable } from './components/sortable';
export { KTDropzone } from './components/dropzone';

const KTComponents = {
	/**
	 * Initializes all KT components.
	 * This method is called on initial page load and after Livewire navigation.
	 */
	init(): void {
		try {
			KTMenu.init();
		} catch (error) {
			console.warn('KTMenu initialization failed:', error);
		}

		try {
			KTDatePicker.init();
		} catch (error) {
			console.warn('KTDatePicker initialization failed:', error);
		}

		try {
			KTColorPicker.init();
		} catch (error) {
			console.warn('KTColorPicker initialization failed:', error);
		}

		try {
			KTSortable.init();
		} catch (error) {
			console.warn('KTSortable initialization failed:', error);
		}

		try {
			KTDropzone.init();
		} catch (error) {
			console.warn('KTDropzone initialization failed:', error);
		}
	},
};

declare global {
	interface Window {
		KTUtils: typeof KTUtils;
		KTDom: typeof KTDom;
		KTEventHandler: typeof KTEventHandler;
		KTMenu: typeof KTMenu;
		KTDatePicker: typeof KTDatePicker;
		KTColorPicker: typeof KTColorPicker;
		KTSortable: typeof KTSortable;
		KTDropzone: typeof KTDropzone;
		KTComponents: typeof KTComponents;
	}
}

window.KTUtils = KTUtils;
window.KTDom = KTDom;
window.KTEventHandler = KTEventHandler;
window.KTMenu = KTMenu;
window.KTDatePicker = KTDatePicker;
window.KTColorPicker = KTColorPicker;
window.KTSortable = KTSortable;
window.KTDropzone = KTDropzone;
window.KTComponents = KTComponents;

export default KTComponents;

KTDom.ready(() => {
	KTComponents.init();
});
