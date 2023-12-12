import "bootstrap";
import "./style.css";

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

window.onload = () => {
  let domainObject = generatorDomainName(pronoun, adj, noun, extension);
  let domainString = "";

  for (let ext in domainObject) {
    domainString += `<h4>${ext}</h4>`;
    domainObject[ext].forEach(domain => {
      domainString += `<p>${domain}</p>`;
    });
  }

  document.querySelector("#domain").innerHTML = domainString;
};
