module.exports = {
	"extends": ["airbnb", "eslint:recommended"],
	"plugins": [
		"react",
		"jsx-a11y",
		"import"
	],
	
	"globals": {
		"document": true,
		"window": true
	}, 
	"rules": {
		"linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "unix"],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/prefer-stateless-function": [0],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/prop-types": 0,
		"react/require-default-props": 0,
		"comma-dangle": 0,
		"no-plusplus": 0,
		"import/newline-after-import": 0,
		"no-useless-escape": 0,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"no-tabs": 0,
		"no-trailing-spaces": [2, { "skipBlankLines": false }],
		"class-methods-use-this": 0,
		"no-console":0,
	}
};