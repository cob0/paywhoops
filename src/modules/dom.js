export const DOM = (() => {
	const getElementsByIds = (elements, ids) =>
		[...elements].filter((element) => ids.includes(element.id));

	const getElementsByClassNames = (elements, classNames) =>
		[...elements].filter((element) =>
			[...element.classList].filter((className) =>
				classNames.some((filterClassNames) =>
					className.includes(filterClassNames),
				),
			),
		);

	const getElementClassNamesByClassNames = (element, classNames) =>
		[...element.classList].filter((className) =>
			classNames.some((filterClassName) => className.includes(filterClassName)),
		);

	const removeElements = (elements) =>
		elements.forEach((element) => element.remove());

	const removeElementClassNames = (element, classNames) =>
		classNames && classNames.length > 0
			? requestAnimationFrame(() => element.classList.remove(classNames))
			: null;

	const removeElementsByClassNamesStyleProperties = (
		classNamesStyleProperties,
	) =>
		classNamesStyleProperties.forEach((obj) =>
			obj.classNames
				.flatMap((className) => [...document.getElementsByClassName(className)])
				.forEach((element) =>
					obj.styleProperties.forEach(
						// biome-ignore lint/suspicious/noAssignInExpressions: intentional assigment
						(styleProperty) => (element.style[styleProperty] = null),
					),
				),
		);

	const removeElementsStyleProperties = (elements, styleProperties) =>
		[...elements].forEach((element) =>
			removeElementStyleProperties(element, styleProperties),
		);

	const removeElementStyleProperties = (element, styleProperties) =>
		// biome-ignore lint/suspicious/noAssignInExpressions: intentional assigment
		styleProperties.forEach((prop) => (element.style[prop] = null));

	return {
		getElementsByIds,
		getElementsByClassNames,
		getElementClassNamesByClassNames,
		removeElements,
		removeElementClassNames,
		removeElementsByClassNamesStyleProperties,
		removeElementsStyleProperties,
		removeElementStyleProperties,
	};
})();
