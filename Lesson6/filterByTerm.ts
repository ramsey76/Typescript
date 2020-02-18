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
  

  const translatedLink : TranslatedLink = {url: "anUrl", id:3, language: "german"}
  let links: Link[] = [{url: "input", id: 1}, {url: "string"}, {url:"java"}]
  links.push(translatedLink);

  let aLink = filterByTerm(links, "java");  
  console.log(aLink[0].url);
  console.log(filterByTerm(links, "anUrl"));