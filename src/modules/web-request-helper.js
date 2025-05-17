import { blockUrls } from "../assets/hosts.json";

export const WebRequestHelper = (() => {
	if (!blockUrls) {
		console.warn(
			"Paywhoops! extension doesn't have the list of domains to block. Nothing will be blocked.",
		);
		return;
	}

	console.log("blocklist domains:", blockUrls);
	const blockRegexps = blockUrls.map((urls) => new RegExp(urls));

	const isHostBlocked = (url) => {
		if (!blockRegexps) {
			return;
		}

		return blockRegexps.find((regexp) => regexp.test(url));
	};

	return {
		isHostBlocked,
	};
})();
