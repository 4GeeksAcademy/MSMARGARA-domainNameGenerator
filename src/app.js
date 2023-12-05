let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extension = [".com", ".net", ".org", ".edu", ".info", ".biz"];

function generatorDomainName(pronoun, adj, noun, extension) {
  let domain = {};
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          let domainName = pronoun[i] + adj[j] + noun[k] + extension[l];
          if (!domain[extension[l]]) {
            domain[extension[l]] = [];
          }
          domain[extension[l]].push(domainName);
        }
      }
    }
  }
  return domain;
}

function domainHTML(obj, htmlID) {
  let htmlElement = document.getElementById(htmlID);
  htmlElement.innerHTML = obj[htmlID].join("<br>");
}

domainHTML(generatorDomainName, "com");
domainHTML(generatorDomainName, "net");
domainHTML(generatorDomainName, "org");
domainHTML(generatorDomainName, "edu");
domainHTML(generatorDomainName, "info");
domainHTML(generatorDomainName, "biz");
