import i18n, { InitOptions } from "i18next";
import CustomCallbackBackend from "i18next-callback-backend";

i18n
	.use(CustomCallbackBackend)
	.init({
		// keys as strings
		defaultNS: "translation",
		fallbackNS: false,
		fallbackLng: false,
		keySeparator: false,
		lowerCaseLng: true,
		nsSeparator: false,

		// initial namespaces to load
		ns: ["translation"],

		// not required using i18next-react
		interpolation: {
			escapeValue: false,
		},

		// CustomCallbackBackend
		customLoad: async (language, namespace, callback) => {
			setTimeout(() => {
				callback(null, {
					"not yet loaded": "has loaded",
				});
			}, 1000);
		},
	});

export default i18n;

