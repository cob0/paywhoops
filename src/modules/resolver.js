import { config } from "./config.js";
import { DOM } from "./dom.js";

export const Resolver = () => {
	const didomi = () => {
		const resolve = () => {
			DOM.removeElements(
				DOM.getElementsByIds(document.body.children, config.didomi.element.ids),
			);
			DOM.removeElementClassNames(
				document.body,
				DOM.getElementClassNamesByClassNames(
					document.body,
					config.didomi.element.classNames,
				),
			);
		};

		return { resolve };
	};

	const expansion = () => {
		const resolve = () => {
			setTimeout(
				DOM.removeElements(
					DOM.getElementsByClassNames(
						document.body.children,
						config.expansion.element.classNames,
					),
				),
				1500,
			);
		};

		return { resolve };
	};

	const huffpost = () => {
		const resolve = () => {
			setTimeout(
				DOM.removeElementStyleProperties(
					document.body,
					config.huffpost.element.styleProperties,
				),
				3000,
			);
		};

		return { resolve };
	};

	const lavozdegalicia = () => {
		const resolve = () => {
			DOM.removeElementClassNames(
				document.body,
				DOM.getElementClassNamesByClassNames(
					document.body,
					config.lavozdegalicia.element.classNames,
				),
			);
		};

		return { resolve };
	};

	const pmw = () => {
		DOM.removeElementClassNames(
			document.body,
			DOM.getElementClassNamesByClassNames(
				document.body,
				config.pmw.element.classNames,
			),
		);
	};

	const vocento = () => {
		const resolve = () => {
			setTimeout(
				DOM.removeElements(
					DOM.getElementsByIds(
						document.body.children,
						config.vocento.element.ids,
					),
				),
				1500,
			);
			DOM.removeElementsByClassNamesStyleProperties([
				{ ...config.vocento.element },
			]);
		};

		return { resolve };
	};

	return {
		resolvers: [didomi, expansion, huffpost, lavozdegalicia, pmw, vocento],
		didomi,
		expansion,
		huffpost,
		lavozdegalicia,
		pmw,
		vocento,
	};
};
