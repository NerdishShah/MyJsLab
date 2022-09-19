const pets = { "Pets":[ { "Breed":"Dingo", "IsFixed":false, "Name":"Fido", "Source":"Australia Kennel Network", "Type":"Dog" }, { "Breed":"Siamese", "IsFixed":true, "Name":"Fluffy", "Source":"Lost and Found", "Type":"Cat" }, { "Breed":"Rotweiler", "IsFixed":true, "Name":"Sasha", "Source":"Lost and Found", "Type":"Dog" }, { "Breed":"Calico", "IsFixed":false, "Name":"Merl", "Source":"Cats Anonymous", "Type":"Cat" }, { "Breed":"Bernese", "IsFixed":true, "Name":"Alpen", "Source":"Adoption Center", "Type":"Dog" }, { "Breed":"Calico", "IsFixed":true, "Name":"Garfield", "Source":"Cat Lady", "Type":"Cat" }, { "Breed":"Rotweiler", "IsFixed":true, "Name":"Damian", "Source":"Security Trainers", "Type":"Dog" } ] }
const animals = pets.Pets;
const map1 = new Map();
const result = [];
animals.forEach(a => {
  let i =1;
  if(map1.has(a.Breed)){
    map1.set(a.Breed, map1.get(a.Breed)+1);
  }else{
    map1.set(a.Breed, i);
  }
});
map1.forEach((values,key) => {
const a ={};
a.Type = animals.filter( a => a.Breed === key)[0].Type;
a.Breed = key;
a.Count = values;
result.push(a);
});
result.sort((a, b) => b.Type.localeCompare(a.Type) || b.Breed.localeCompare(a.Breed));
result.sort().reverse();
result.forEach(r => {
console.log(r.Type+" "+r.Breed+" "+r.Count);
});
