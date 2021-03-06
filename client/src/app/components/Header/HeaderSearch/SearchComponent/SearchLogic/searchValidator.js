const keyWords = {
  global: [
    "seedra",
    "seeds",
    "planting",
    "outdoors",
    "indoors",
    "home",
    "garden",
    "seed",
    "variety",
    "pack",
    "non",
    "gmo",
    "mix",
    "heirloom",
    "cucumber"
  ],
  cocrette: [
    "beets",
    "530",
    "5",
    "120",
    "cucumber",
    "999",
    "marigold",
    "petite",
    "herb",
    "15",
    "4500+",
    "wildflower",
    "8",
    "onions",
    "200",
    "sprouting",
    "9",
    "radishes",
    "2500",
    "yellow",
    "red",
    "white",
    "green",
    "onion",
    "watermelon",
    "daikon",
    "french",
    "breakfa",
    "specific",
    "chioggia",
    "cylindra",
    "detroit",
    "dark",
    "red",
    "ruby",
    "queen",
    "bu",
    "300",
    "okra",
    "cilantro",
    "4",
    "beans",
    "125",
    "red",
    "yellow",
    "green",
    "beans",
    "bush",
    "sprouting",
    "dill",
    "11",
    "sweet",
    "hot",
    "pepper",
    "730",
    "cayenne",
    "anaheim",
    "cherry",
    "habanero",
    "hydroponic",
    "gardening",
    "basil",
    "germination",
    "more",
    "90%",
  ],
};

export default function searchValidator() {
    const validCases = {
        concreteKeyWords: (str) => str.test(keyWords.cocrette.join(" "))
    };
    return validCases
};
