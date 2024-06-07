const recipes = [
  {
    name: "Saag Aloo",
    ingredients: [
      "chilli",
      "mango chutney",
      "potato",
      "spinach",
      "tomato paste",
      "solid creamed coconut",
      "peas",
      "ginger & garlic paste",
      "turmeric",
      "veg stock",
      "Pittas",
      "cumin seeds",
      "Curry powder",
    ],
  },
  {
    name: "Black bean & sweet potato tortilla pockets",
    ingredients: [
      "leaf salad",
      "sweet potato",
      "tomato paste",
      "black beans",
      "paprika",
      "veg stock",
      "cumin-ground",
      "tortillas",
      "mayo",
    ],
  },
  {
    name: "Sticky onion burger",
    ingredients: [
      "onion",
      "tomato",
      "lettuce",
      "potato",
      "ketchup",
      "cheese slice",
      "burger patties",
      "relish",
      "onion marmalade",
      "Burger buns",
    ],
  },
  {
    name: "Chick'n Dopiaza",
    ingredients: [
      "onion",
      "onion",
      "tomato",
      "tomato paste",
      "naan",
      "Veg stock",
      "Cumin-ground",
      "chick'n",
      "cultured coconut",
      "corriander-ground",
      "curry powder",
    ],
  },
  {
    name: "Cauliflower korma",
    ingredients: [
      "onion",
      "cauliflower",
      "garlic",
      "flaked almonds",
      "solid creamed coconut",
      "ginger paste",
      "rice",
      "turmeric",
      "veg stock",
      "cumin-ground",
      "curry powder",
    ],
  },
  {
    name: "Roasted cauliflower curry bake",
    ingredients: [
      "onion",
      "cauliflower",
      "cashews",
      "mango chutney",
      "spinach",
      "potato",
      "solid creamed coconut",
      "turmeric",
      "veg stock",
      "fenugreek-ground",
      "curry powder",
    ],
  },
  {
    name: "Cocunut curry dal",
    ingredients: [
      "onion",
      "pepper-red",
      "solid creamed coconut",
      "lentils",
      "ginger & garlic paste",
      "green beans",
      "veg stock",
      "rice",
      "finely chopped tomatoes",
      "curry powder",
    ],
  },
  {
    name: "Butternut & cashew saag",
    ingredients: [
      "onion",
      "garlic",
      "cashews",
      "corriander",
      "spinach",
      "tomato paste",
      "solid creamed coconut",
      "peas",
      "rice",
      "ginger",
      "butternut",
      "veg stock",
      "curry powder",
    ],
  },
  {
    name: "Black bean & Corn Tacos",
    ingredients: [
      "onion",
      "onion",
      "chilli",
      "tomato",
      "lime",
      "corriander",
      "tomato paste",
      "sweetcorn",
      "black beans",
      "chipotle paste",
      "veg stock",
      "tortillas",
      "guac",
    ],
  },
  {
    name: "Oven baked coconut veg curry",
    ingredients: [
      "cherry tomatoes",
      "corriander",
      "sweet potato",
      "tomato paste",
      "peas",
      "ginger paste",
      "turmeric",
      "green beans",
      "veg stock",
      "pittas",
      "cultured coconut",
      "curry powder",
    ],
  },
  {
    name: "Sweet potato & chickpea stew",
    ingredients: [
      "onion",
      "garlic",
      "sweet potato",
      "chickpeas",
      "couscous",
      "veg stock",
      "cumin-ground",
      "finely chopped tomatoes",
    ],
  },
  {
    name: "Tofu pakoras with fries",
    ingredients: [
      "mango chutney",
      "corriander",
      "tofu",
      "chilli",
      "potato",
      "ginger",
      "turmeric",
      "veg stock",
      "mayo",
      "coleslaw",
      "curry powder",
      "cornflour",
    ],
  },
  {
    name: "Sweet potato & cashew coconut curry",
    ingredients: [
      "onion",
      "garlic",
      "cashews",
      "green beans",
      "ginger paste",
      "veg stock",
      "thai curry paste",
      "rice",
      "cultured coconut",
      "sweet potato",
    ],
  },
  {
    name: "spicy noodle soup with Korean-style tofu",
    ingredients: [
      "spring onion",
      "tofu",
      "soy sauce",
      "toasted sesame seeds",
      "rice noodles",
      "veg stock",
      "gochujang paste",
      "coleslaw",
      "cornflour",
      "pho broth paste",
      "garlic",
    ],
  },
  {
    name: "Hoisan noodle stir fry",
    ingredients: [
      "onion",
      "pepper-red",
      "broccoli",
      "garlic",
      "spring onion",
      "cashews",
      "hoisan sauce",
      "soy sauce",
      "chilli flakes",
      "ginger",
      "udon noodles",
      "toasted sesame oil",
      "cornflour",
    ],
  },
  {
    name: "Tofu with yellow thai curry",
    ingredients: [
      "courgette",
      "cherry tomatoes",
      "curry powder",
      "corriander",
      "tofu",
      "soy sauce",
      "tomato paste",
      "solid creamed coconut",
      "turmeric",
      "veg stock",
      "thai curry paste",
      "rice",
      "garam masala",
      "cornflour",
    ],
  },
  {
    name: "Thai style coconut udon noodles",
    ingredients: [
      "onion",
      "pepper-yellow",
      "lime",
      "garlic",
      "soy sauce",
      "roasted peanuts",
      "green beans",
      "solid creamed coconut",
      "ginger",
      "udon noodles",
      "veg stock",
      "sriracha",
    ],
  },
  {
    name: "Korean mince bulgogi",
    ingredients: [
      "garlic",
      "spring onion",
      "soy sauce",
      "ginger",
      "green beans",
      "sesame oil",
      "rice",
      "mince",
    ],
  },
  {
    name: "Lime tofu with sticky ginger",
    ingredients: [
      "onion",
      "lime",
      "garlic",
      "spinach",
      "tofu",
      "agave",
      "soy sauce",
      "black sesame seeds",
      "rice",
      "ginger",
      "veg stock",
      "cornflour",
    ],
  },
  {
    name: "korean style bulgogi rice salad",
    ingredients: [
      "lettuce",
      "mangetout",
      "tofu",
      "sauce",
      "sesame seeds",
      "ginger & garlic paste",
      "gochujang paste",
      "rice",
      "cornflour",
    ],
  },
  {
    name: "Smoky tofu & herby rice bowl",
    ingredients: [
      "cucumber",
      "rocket",
      "coriander",
      "carrot",
      "tofu",
      "soy sauce",
      "harissa paste",
      "paprika",
      "mayo",
      "rice",
      "cornflour",
    ],
  },
  {
    name: "Hoisin mince & mushroom bowl",
    ingredients: [
      "chilli",
      "lettuce",
      "hoisin sauce",
      "soy sauce",
      "sesame seeds",
      "ginger & garlic paste",
      "mince",
      "rice",
    ],
  },
  {
    name: "Sichuan-style spicy black bean tofu",
    ingredients: [
      "onion",
      "garlic",
      "soy sauce",
      "spring onion",
      "spinach",
      "tofu",
      "chilli flakes",
      "ginger",
      "black bean paste",
      "toasted sesame oil",
      "rice",
      "cornflour",
      "sriracha",
    ],
  },
  {
    name: "sweet chilli tofu with veg rice",
    ingredients: [
      "garlic",
      "carrots",
      "tofu",
      "agave",
      "soy sauce",
      "sesame seeds",
      "toasted sesame seeds",
      "peas",
      "rice",
      "chilli relish",
      "cornflour",
    ],
  },
  {
    name: "Tofu burger & chips",
    ingredients: [
      "spring onion",
      "carrot",
      "spiced chutney",
      "tofu",
      "hoisin sauce",
      "soy sauce",
      "toasted sesame seeds",
      "potato",
      "cabbage-shredded-red",
      "cornflour",
      "brioche buns",
    ],
  },
  {
    name: "Chilli bean cheeseburger",
    ingredients: [
      "chilli",
      "lettuce",
      "red wine vineger",
      "tomato paste",
      "potato",
      "cheese slice",
      "burger patties",
      "black beans",
      "paprika",
      "burger buns",
      "cumin-ground",
    ],
  },
  {
    name: "Paella with crispy tofu",
    ingredients: [
      "lemon",
      "onion",
      "pepper",
      "saffron",
      "garlic",
      "tofu",
      "soy sauce",
      "tomato paste",
      "peas",
      "paprika",
      "veg stock",
      "cumin",
      "paella rice",
    ],
  },
  {
    name: "Lentil enchiladas with cashew crema",
    ingredients: [
      "onion",
      "pepper-green",
      "lime",
      "garlic",
      "corriander",
      "cherry tomatoes",
      "cashews",
      "soy sauce",
      "tomato paste",
      "chilli flakes",
      "paprika",
      "cumin",
      "tortillas",
      "lentils",
    ],
  },
  {
    name: "Marinara Tacos",
    ingredients: [
      "Onion",
      "garlic",
      "rocket",
      "tomato paste",
      "burger patties",
      "bread crumbs",
      "basil-dried",
      "tortillas",
    ],
  },
  {
    name: "Chilli con tofu and crispy tortillas",
    ingredients: [
      "soy sauce",
      "corriander",
      "tofu",
      "avo",
      "black beans",
      "chipotle paste",
      "chilli flakes",
      "paprika",
      "veg stock",
      "cumin-ground",
      "nachos",
      "finely chopped tomatoes",
    ],
  },
  {
    name: "Oven baked chilli jacket potatoes",
    ingredients: [
      "garlic",
      "corriander",
      "chilli",
      "potato",
      "black beans",
      "butter beans",
      "chipotle paste",
      "paprika",
      "veg stock",
      "cumin seeds",
      "kidney beans",
      "finely chopped tomatoes",
    ],
  },
  {
    name: "Beany chilli salsa and rice",
    ingredients: [
      "onion",
      "pepper-red",
      "lime",
      "garlic",
      "corriander",
      "tomato paste",
      "chipotle paste",
      "paprika",
      "veg stock",
      "cumin-ground",
      "rice",
      "guac",
      "kidney beans",
    ],
  },
  {
    name: "Nachos",
    ingredients: [
      "tortillas chips",
      "salsa",
      "cheese",
      "guac",
      "soy mince",
      "onion",
      "cucumber",
      "tomato",
    ],
  },
  {
    name: "Lentil risotto",
    ingredients: [
      "onion",
      "pepper-red",
      "garlic",
      "rocket",
      "lentils",
      "oregano-dried",
      "veg stock",
      "creamy single oat",
      "finely chopped tomatoes",
    ],
  },
  {
    name: "Gnocchi",
    ingredients: [
      "onion",
      "gnocchi",
      "pepper",
      "spinach",
      "nooch",
      "soy chunks",
      "pesto",
    ],
  },
  {
    name: "Butternut grain bowl",
    ingredients: [
      "onion",
      "butternut",
      "pumpkin seeds",
      "tender stem broccoli",
      "kale",
      "agave",
      "tahini",
      "bulgar wheat",
      "chilli flakes",
      "oregano-dried",
      "white miso paste",
      "toasted sesame oil",
      "lentils",
    ],
  },
  {
    name: "chilli roasted squash",
    ingredients: [
      "onion",
      "lime",
      "basil",
      "roasted peanuts",
      "rocket",
      "corriander",
      "bulgar wheat",
      "soy sauce",
      "chickpeas",
      "chilli flakes",
      "ginger",
      "butternut",
      "toasted sesame oil",
    ],
  },
];

// Aisles object for sorting list
// ******************************
// ******************************
// ******************************

const aisles = {
  freshProduce: [
    "onion",
    "tomato",
    "spinach",
    "lime",
    "pepper-red",
    "pepper-yellow",
    "pepper-green",
    "spring onion",
    "garlic",
    "ginger",
    "cherry tomatoes",
    "corriander",
    "rocket",
    "carrot",
    "cucumber",
    "kale",
    "tender stem broccoli",
    "basil",
    "chilli",
    "potato",
    "leaf salad",
    "sweet potato",
    "lettuce",
    "cauliflower",
    "green beans",
    "butternut",
    "guac",
    "coleslaw",
    "broccoli",
    "courgette",
    "cherry tomatoes",
    "mangetout",
    "coriander",
    "carrots",
    "cabbage-shredded-red",
    "lemon",
    "avo",
  ],
  fridgeyStuff: [
    "tofu",
    "cheese",
    "burger patties",
    "meat balls",
    "chick'n",
    "cheese slice",
    "creamy single oat",
    "gnocchi",
  ],
  pantry: [
    "mango chutney",
    "tomato paste",
    "solid creamed coconut",
    "ginger & garlic paste",
    "turmeric",
    "veg stock",
    "cumin seeds",
    "curry powder",
    "mayo",
    "hoisan sauce",
    "soy sauce",
    "toasted sesame oil",
    "garam masala",
    "sriracha",
    "sesame oil",
    "white miso paste",
    "chipotle paste",
    "black bean paste",
    "basil-dried",
    "paprika",
    "cumin-ground",
    "ketchup",
    "relish",
    "onion marmalade",
    "corriander-ground",
    "flaked almonds",
    "ginger paste",
    "rice",
    "cashews",
    "fenugreek-ground",
    "ginger & garlic paste",
    "couscous",
    "cornflour",
    "thai curry paste",
    "toasted sesame seeds",
    "rice noodles",
    "gochujang paste",
    "pho broth paste",
    "udon noodles",
    "chilli flakes",
    "thai curry paste",
    "roasted peanuts",
    "agave",
    "black sesame seeds",
    "sauce",
    "sesame seeds",
    "harissa paste",
    "hoisin sauce",
    "chilli relish",
    "spiced chutney",
    "pepper",
    "saffron",
    "cumin",
    "paella rice",
    "nachos",
    "tortillas chips",
    "salsa",
    "oregano-dried",
    "nooch",
    "soy chunks",
    "pesto",
    "pumpkin seeds",
  ],
  canned: [
    "black beans",
    "kidney beans",
    "butter beans",
    "sweetcorn",
    "kidney beans",
    "chickpeas",
    "lentils",
    "finely chopped tomatoes",
  ],
  breads: [
    "tortillas",
    "pittas",
    "naan bread",
    "burger buns",
    "brioche buns",
    "pittas",
    "bread crumbs",
  ],
  frozen: ["peas", "mince", "soy mince"],
};

export { recipes, aisles };
