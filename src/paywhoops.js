import {Resolver} from "./modules/resolver.js";

const waitForDocumentReady = () =>
  new Promise((resolve) => {
    document.addEventListener('readystatechange', (event) => {
      if (event.target.readyState === 'complete') {
        resolve(Resolver.resolvers)
      }
    });
  });

waitForDocumentReady().then((resolvers) => resolvers.forEach(fn => fn()))