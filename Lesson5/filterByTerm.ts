interface Link {
  url: string;
  id?: number;
}

interface TranslatedLink extends Link {
  language: string;
}

function filterByTerm(input: Link[], searchTerm: string): Link[] {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  
  let translatedLink : TranslatedLink = {url: "anUrl", id:3, language: "german"}
  
  let aLink = filterByTerm([{url: "input", id: 1}, {url: "string"}, {url:"java"}, translatedLink], "java");
  console.log(aLink[0].url);
  console.log(filterByTerm([{url: "input", id: 1}, {url: "string"}, {url:"java"}, translatedLink], "anUrl"));