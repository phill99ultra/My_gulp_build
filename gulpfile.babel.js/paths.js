const src = './src/',
	dest = './public/',

	html = {
		watch: `${src}html/**/*.pug`,
		src: `${src}html/*.pug`,
		dest: dest
	},

	css = {
		watch: `${src}css/**/*.styl`,
		src: `${src}css/*.styl`,
		dest: `${dest}css/`
	},

	js = {
		watch: `${src}js/**/*.js`,
		src: `${src}js/*.js`,
		dest: `${dest}js/`
	},

	img = {
		watch: [
			`${src}img/**`,
			`!${src}img/sprite{,/**/*}`,
		],
		src: [
			`${src}img/**`,
			`!${src}img/sprite{,/**/*}`,
		],
		dest: `${dest}img/`
	},

	sprite = {
		watch: `${src}img/sprite/*.svg`,
		src: `${src}img/sprite/*.svg`,
		dest: `${dest}img/`
	},

	assets = {
		watch: `${src}assets/**/*`,
		src: `${src}assets/**`,
		dest: dest
	};

export {src, dest, html, css, js, img, sprite, assets};
