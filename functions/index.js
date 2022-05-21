const functions = require('firebase-functions');

let appServer;
exports.app = functions.region('us-central1').https.onRequest(async (request, response) => {
	if (!appServer) {
		functions.logger.info('Initialising SvelteKit SSR entry');
		appServer = require('./app/index').default;
		functions.logger.info('SvelteKit SSR entry initialised!');
	}
	functions.logger.info('Requested resource: ' + request.originalUrl);
	return appServer(request, response);
});
