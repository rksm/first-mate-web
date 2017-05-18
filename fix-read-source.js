$_mod.ready();
first_mate.GrammarRegistry.prototype.readGrammar = async function(grammarPath, callback) {
  try {
    let res = await fetch(grammarPath, {cors: true});
    if (!res.ok) throw new Error("fetch failed, " + res.statusText);
    let content = await res.text(),
        _ = console.log(content),
        grammar = grammarPath.endsWith(".json") ?
          JSON.parse(content) :
          csonParser.parse(content);
    if (typeof grammar.scopeName !== "string" || grammar.scopeName.length == 0)
      throw new Error("Grammar missing required scopeName property: " + grammarPath);
    callback(null, this.createGrammar(grammarPath, grammar));
  } catch (err) {
    callback(err);
  }
};
