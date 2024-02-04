const states = {
    state1: "karnataka",
    state2:"Telangana",
    state3:"Kerala",
    state4:"Andra"
};

const cities = {
    city1: "Bangalore",
    city2 : "Hydrabad",
    city3: "Thiruvananthapuram",
    city4: "Visakhapatnam"
};

for(key in states){
    stateName = states[key];
    cityKey = key.replace('state','city');
    cityName = cities[cityKey];
    console.log(`${stateName}: ${cityName}`);
}