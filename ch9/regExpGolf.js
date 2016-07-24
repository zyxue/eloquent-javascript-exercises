// Fill in the regular expressions

verify(/\ [mc]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/\W/,
       ["pop culture", "mad props"],
       ["plop"]);

verify(/^ferr[eya]/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

// lost interest to do the following

// verify(/.../,
//        ["how delicious", "spacious room"],
//        ["ruinous", "consciousness"]);

// verify(/.../,
//        ["bad punctuation ."],
//        ["escape the dot"]);

// verify(/.../,
//        ["hottentottententen"],
//        ["no", "hotten totten tenten"]);

// verify(/.../,
//        ["red platypus", "wobbling nest"],
//        ["earth bed", "learning ape"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function(s) {
    if (!regexp.test(s))
      console.log("Failure to match '" + s + "'");
  });
  no.forEach(function(s) {
    if (regexp.test(s))
      console.log("Unexpected match for '" + s + "'");
  });
}
