//https://edabit.com/challenge/FzDAgSR84zeyRa278

// Extract City Facts

const city = [
  {
    name: "Paris",
    population: "2,140,526",
    continent: "Europe"
  },
  {
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
  }
];

function cityFacts() {
  console.log(city[0].name + ' has a population of ' + city[0].population + ' and is statuated in ' + city[0].continent);
  console.log(city[1].name + ' has a population of ' + city[1].population + ' and is statuated in ' + city[1].continent);
}

cityFacts();