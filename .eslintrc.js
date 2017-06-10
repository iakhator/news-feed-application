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
		"linebreak-style": ["error", "unix"],
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"react/prefer-stateless-function": [0],
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/require-default-props": 0,
		"react/prop-types": 0,
		"comma-dangle": 0,
		"no-plusplus": 0,
		"no-useless-escape": 0,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"no-trailing-spaces": [2, { "skipBlankLines": false }],
		"class-methods-use-this": 0,
		"no-console": 0,
	}
};