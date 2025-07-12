import { WebRequestHelper } from "./modules/web-request-helper.js";

browser?.webRequest?.onBeforeRequest?.addListener(
	(details) => {
		if (WebRequestHelper.isHostBlocked(details.url)) {
			console.log(`blocked: ${details.url}`);
			return { cancel: true };
		}
	},
	{ urls: ["<all_urls>"] },
	["blocking"],
);
