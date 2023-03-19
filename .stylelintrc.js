module.exports = {
	extends: ['stylelint-config-standard', 'stylelint-config-css-modules'],
	plugins: [
		'stylelint-no-unsupported-browser-features',
		'stylelint-order',
		'stylelint-config-rational-order/plugin',
	],
	rules: {
		'function-url-scheme-disallowed-list': [
			'/^data/',
			{
				message: "Don't use data:image.",
				severity: 'warning',
			},
		],
		/**
		 * Запрещает использование Nesting Rules
		 */
		'max-nesting-depth': 0,
		'value-no-vendor-prefix': true,
		'property-no-vendor-prefix': true,
		'selector-no-vendor-prefix': true,
		'media-feature-name-no-vendor-prefix': true,
		'at-rule-no-vendor-prefix': true,
		indentation: 'tab',
		/**
		 * Composes может быть несколько, чтобы была возможность подключать их из разных файлов
		 * @see https://github.com/css-modules/css-modules#composing-from-other-files
		 */
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignoreProperties: ['composes'],
			},
		],
		// Добавляет возможность делать composes: camelCaseClass
		'value-keyword-case': [
			'lower',
			{
				ignoreProperties: ['composes'],
			},
		],
		'declaration-block-no-duplicate-custom-properties': true,

		// disable for plugin/rational-order and order/properties-order
		// to add lines before groups of properties
		// https://github.com/constverum/stylelint-config-rational-order/blob/master/config/configCreator.js#L22
		'declaration-empty-line-before': null,

		'plugin/no-unsupported-browser-features': [
			true,
			{
				// NOTE: следить за возможными проблемами из-за ignore
				ignore: ['multicolumn', 'intrinsic-width'],
				severity: 'warning',
			},
		],
		'order/properties-order': [],
		'plugin/rational-order': [
			true,
			{
				'empty-line-between-groups': true,
			},
		],

		/**
		 * NOTE: Переопределяем правила, которые приехали с stylelint-config-standard@23.0.0
		 * https://github.com/stylelint/stylelint-config-standard/blob/main/CHANGELOG.md#2300
		 */

		/**
		 * tokens.json в @fe/ods не соответствует и не будет соответствовать дефолтному kebab-case
		 */
		'custom-property-pattern': null,

		/**
		 * NOTE: Правило влияет и на attributes в соответствии с правилом selector-attribute-quotes: 'always'
		 *
		 * Согласно спецификации кавычки могут быть одинарными
		 * https://www.w3.org/TR/CSS2/syndata.html#strings
		 *
		 * Отсутствие кавычек плохо согласно статье https://mathiasbynens.be/notes/unquoted-attribute-values
		 *
		 * NOTE: Отключаем, так как cssesc используемый под капотом ескейпит кириллицу.
		 * TODO: оформить issue в stylelint (возможное решение - поменять cssesc на css.escape пакет)
		 */
		'string-quotes': null,

		/**
		 * Ссылки в комментариях могут быть любого размера, поэтому игнорируем комментарии
		 */
		'max-line-length': [
			120,
			{
				ignore: 'comments',
				ignorePattern: ['/composes\\.*/', '/unicode-range\\.*/'],
			},
		],
		'shorthand-property-no-redundant-values': null,
		'declaration-block-no-redundant-longhand-properties': null,

		/**
		 * Разрешает имена классов только в camelCase
		 */
		'selector-class-pattern': [/^[a-z][a-zA-Z]*$/],
		'selector-id-pattern': [
			/^([a-z][a-z0-9]*)(-[a-z0-9]+)*$|^__layout$|^__nuxt$/,
		],
	},
}
