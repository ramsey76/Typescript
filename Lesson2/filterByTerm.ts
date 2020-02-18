interface Link {
  url: string;
}

function filterByTerm(input: Link[], searchTerm: string) {
    if (!searchTerm) throw Error("searchTerm cannot be empty");
    if (!input.length) throw Error("inputArr cannot be empty");
    const regex = new RegExp(searchTerm, "i");
    return input.filter(function(arrayElement) {
      return arrayElement.url.match(regex);
    });
  }
  
  console.log(filterByTerm([{url: "input"}, {url: "string"}, {url:"java"}], "java"));