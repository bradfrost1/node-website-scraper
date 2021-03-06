'use strict';
const config = {
	filenameGenerator: 'byType',
	defaultFilename: 'index.html',
	prettifyUrls: false,
	sources: [
		{ selector: 'style' },
		{ selector: '[style]', attr: 'style' },
		{ selector: 'img', attr: 'src' },
		{ selector: 'img', attr: 'srcset' },
		{ selector: 'input', attr: 'src' },
		{ selector: 'object', attr: 'data' },
		{ selector: 'embed', attr: 'src' },
		{ selector: 'param[name="movie"]', attr: 'value' },
		{ selector: 'script', attr: 'src' },
		{ selector: 'link[rel="stylesheet"]', attr: 'href' },
		{ selector: 'link[rel*="icon"]', attr: 'href' },
		{ selector: 'svg *[xlink\\:href]', attr: 'xlink:href' },
		{ selector: 'svg *[href]', attr: 'href' },
		{ selector: 'picture source', attr: 'srcset' },
		{ selector: 'meta[property="og\\:image"]', attr: 'content' },
		{ selector: 'meta[property="og\\:image\\:url"]', attr: 'content' },
		{ selector: 'meta[property="og\\:image\\:secure_url"]', attr: 'content' },
		{ selector: 'meta[property="og\\:audio"]', attr: 'content' },
		{ selector: 'meta[property="og\\:audio\\:url"]', attr: 'content' },
		{ selector: 'meta[property="og\\:audio\\:secure_url"]', attr: 'content' },
		{ selector: 'meta[property="og\\:video"]', attr: 'content' },
		{ selector: 'meta[property="og\\:video\\:url"]', attr: 'content' },
		{ selector: 'meta[property="og\\:video\\:secure_url"]', attr: 'content' },
		{ selector: 'video', attr: 'src' },
		{ selector: 'video source', attr: 'src' },
		{ selector: 'video track', attr: 'src' },
		{ selector: 'audio', attr: 'src' },
		{ selector: 'audio source', attr: 'src' },
		{ selector: 'audio track', attr: 'src' },
		{ selector: 'frame', attr: 'src' },
		{ selector: 'iframe', attr: 'src' }
	],
	subdirectories: [
		{ directory: 'images', extensions: ['.png', '.jpg', '.jpeg', '.gif', '.webp'] },
		{ directory: 'js', extensions: ['.js'] },
		{ directory: 'css', extensions: ['.css'] },
		{ directory: 'fonts', extensions: ['.ttf', '.woff', '.woff2', '.eot', '.svg'] }
	],
	request: {
		encoding: 'binary',
		strictSSL: false,
		jar: true,
		gzip: true
	},
	urlFilter: null,
	recursive: false,
	maxRecursiveDepth: null,
	maxDepth: null,
	ignoreErrors: true,
	httpResponseHandler: null,
	onResourceSaved: null,
	onResourceError: null,
	resourceSaver: null
};

module.exports = config;
