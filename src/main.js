import {
	createSSRApp
} from "vue";
import App from "./App.vue";

import moment from 'moment';

export function createApp() {
	const app = createSSRApp(App);
	app.moment = moment
	return {
		app,
	};
}
