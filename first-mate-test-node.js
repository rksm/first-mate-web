const first_mate = require("@pnidem/first-mate");

(async function() {
    let registry = new first_mate.GrammarRegistry(),
	grammarURL = "./javascript.cson",
	grammar = await new Promise((resolve, reject) =>
				    registry.loadGrammar(grammarURL, (err, g) => err ? reject(err) : resolve(g))),
	tokenized = grammar.tokenizeLine('var x = 123;', null),
	tokens = registry.decodeTokens(tokenized.line, tokenized.tags);
    console.log(tokens);
})();
