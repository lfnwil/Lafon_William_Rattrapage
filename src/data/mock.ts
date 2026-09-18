import type { Recipe } from "../types/recipe";

// Donnees de test au meme format que les recettes normalisees de l'API.
export const mockRecipes: Recipe[] = [
  {
    origin: "India",
    ingredients: [
      {
        name: "Chicken",
        quantity: "1.2 kg",
      },
      {
        name: "Onion",
        quantity: "5 thinly sliced",
      },
      {
        name: "Tomatoes",
        quantity: "2 finely chopped",
      },
      {
        name: "Garlic",
        quantity: "8 cloves chopped",
      },
      {
        name: "Ginger paste",
        quantity: "1 tbsp",
      },
      {
        name: "Vegetable oil",
        quantity: "¼ cup",
      },
      {
        name: "Cumin seeds",
        quantity: "2 tsp",
      },
      {
        name: "Coriander seeds",
        quantity: "3 tsp",
      },
      {
        name: "Turmeric powder",
        quantity: "1 tsp",
      },
      {
        name: "Chilli powder",
        quantity: "1 tsp",
      },
      {
        name: "Green chilli",
        quantity: "2",
      },
      {
        name: "Yogurt",
        quantity: "1 cup",
      },
      {
        name: "Cream",
        quantity: "¾ cup",
      },
      {
        name: "fenugreek",
        quantity: "3 tsp Dried",
      },
      {
        name: "Garam masala",
        quantity: "1 tsp",
      },
      {
        name: "Salt",
        quantity: "To taste",
      },
    ],
    category: "Chicken",
    image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
    id: "52795",
    instructions:
      "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.\r\nThen return the fried onion to the pot and stir. Add ginger paste and sauté well.\r\nNow add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.\r\nNext goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.\r\nAdd the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.\r\nWhen the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.\r\nFinally add the cream and give a final mix to combine everything well.\r\nSprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!",
    title: "Chicken Handi",
  },
  {
    origin: "India",
    ingredients: [
      {
        name: "Chicken",
        quantity: "1",
      },
      {
        name: "Basmati Rice",
        quantity: "2 cups",
      },
      {
        name: "Water",
        quantity: "4 cups",
      },
      {
        name: "Onion",
        quantity: "1 large",
      },
      {
        name: "Garlic",
        quantity: "4 cloves",
      },
      {
        name: "Green Chilli",
        quantity: "2",
      },
      {
        name: "Salt",
        quantity: "1 ½ tsp",
      },
      {
        name: "Oil",
        quantity: "3 tablespoons",
      },
      {
        name: "Turmeric Powder",
        quantity: "1 tablespoon",
      },
      {
        name: "Coriander",
        quantity: "1 teaspoon",
      },
      {
        name: "Cardamom",
        quantity: "½ tbsp",
      },
      {
        name: "Cloves",
        quantity: "¼ teaspoon",
      },
      {
        name: "Cinnamon",
        quantity: "1/2 tsp",
      },
      {
        name: "Pepper",
        quantity: "1 tsp",
      },
      {
        name: "Bay Leaf",
        quantity: "2",
      },
    ],
    category: "Chicken",
    image: "https://www.themealdb.com/images/media/meals/er4d081765186828.jpg",
    id: "53358",
    instructions:
      "1. Clean and cut the chicken; marinate briefly with salt, turmeric and a little oil.\r\n2. Rinse and soak basmati rice 20–30 minutes.\r\n3. In a large pot, heat ghee/oil. Fry chopped onion until golden. Add minced garlic and green chillies and fry 1–2 min.\r\n4. Add whole spices (cardamom, cloves, cinnamon, bay leaves) and ground spices (coriander, cumin). Stir until fragrant.\r\n5. Add chicken pieces, brown lightly and add enough water/chicken stock to cover. Simmer until chicken is nearly cooked.\r\n6. Remove chicken; measure remaining liquid and add soaked rice. Bring to a boil, then reduce heat, cover and cook rice until almost done.\r\n7. Return the chicken to the rice pot on top, cover tightly and steam on low for 10–15 min so flavors meld.\r\n8. (Optional) For authentic smoky aroma: heat a small charcoal until red hot, place it on a small foil cup in the centre of the pot, add a tsp of butter/oil on the coal then cover immediately to trap smoke for 5–10 minutes. Remove coal.\r\n9. Garnish with fried onions, chopped coriander and serve with chutney or raita.\r\n",
    title: "Chicken Mandi",
  },
  {
    origin: "Australian",
    ingredients: [
      {
        name: "Chicken drumsticks",
        quantity: "8",
      },
      {
        name: "Soy Sauce",
        quantity: "2 tblsp",
      },
      {
        name: "Honey",
        quantity: "1 tablespoon",
      },
      {
        name: "Olive Oil",
        quantity: "1 tblsp",
      },
      {
        name: "Tomato Puree",
        quantity: "1 teaspoon",
      },
      {
        name: "Dijon Mustard",
        quantity: "1 tbsp",
      },
    ],
    category: "Chicken",
    image: "https://www.themealdb.com/images/media/meals/cj56fs1762340001.jpg",
    id: "53110",
    instructions:
      "step 1\r\nMake 3 slashes on each of the drumsticks. Mix together the soy, honey, oil, tomato purée and mustard. Pour this mixture over the chicken and coat thoroughly. Leave to marinate for 30 mins at room temperature or overnight in the fridge. Heat oven to 200C/fan 180C/gas 6.\r\n\r\nstep 2\r\nTip the chicken into a shallow roasting tray and cook for 35 mins, turning occasionally, until the chicken is tender and glistening with the marinade.",
    title: "Sticky Chicken",
  },
  {
    origin: "Chinese",
    ingredients: [
      {
        name: "Chicken",
        quantity: "8 oz",
      },
      {
        name: "Salt",
        quantity: "pinch",
      },
      {
        name: "Pepper",
        quantity: "pinch",
      },
      {
        name: "Ginger Cordial",
        quantity: "1 tsp",
      },
      {
        name: "Ginger",
        quantity: "1 tsp",
      },
      {
        name: "Spring Onions",
        quantity: "1 tbs",
      },
      {
        name: "Rice",
        quantity: "1/2 cup",
      },
      {
        name: "Water",
        quantity: "8 cups",
      },
      {
        name: "Coriander",
        quantity: "2 oz",
      },
    ],
    category: "Chicken",
    image: "https://www.themealdb.com/images/media/meals/1529446352.jpg",
    id: "52956",
    instructions:
      "STEP 1 - MARINATING THE CHICKEN\r\nIn a bowl, add chicken, salt, white pepper, ginger juice and then mix it together well.\r\nSet the chicken aside.\r\nSTEP 2 - RINSE THE WHITE RICE\r\nRinse the rice in a metal bowl or pot a couple times and then drain the water.\r\nSTEP 2 - BOILING THE WHITE RICE\r\nNext add 8 cups of water and then set the stove on high heat until it is boiling. Once rice porridge starts to boil, set the stove on low heat and then stir it once every 8-10 minutes for around 20-25 minutes.\r\nAfter 25 minutes, this is optional but you can add a little bit more water to make rice porridge to make it less thick or to your preference.\r\nNext add the marinated chicken to the rice porridge and leave the stove on low heat for another 10 minutes.\r\nAfter an additional 10 minutes add the green onions, sliced ginger, 1 pinch of salt, 1 pinch of white pepper and stir for 10 seconds.\r\nServe the rice porridge in a bowl\r\nOptional: add Coriander on top of the rice porridge.",
    title: "Chicken Congee",
  },
  {
    origin: "Japanese",
    ingredients: [
      {
        name: "Chicken",
        quantity: "450 grams Boneless skin",
      },
      {
        name: "Ginger",
        quantity: "1 tablespoon",
      },
      {
        name: "Garlic",
        quantity: "1 clove",
      },
      {
        name: "Soy sauce",
        quantity: "2 tablespoons",
      },
      {
        name: "Sake",
        quantity: "1 tablespoon",
      },
      {
        name: "Granulated sugar",
        quantity: "2 teaspoon",
      },
      {
        name: "Potato starch",
        quantity: "1/3 cup",
      },
      {
        name: "Vegetable oil",
        quantity: "1/3 cup",
      },
      {
        name: "Lemon",
        quantity: "1/3 cup",
      },
    ],
    category: "Chicken",
    image: "https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg",
    id: "52831",
    instructions:
      "Add the ginger, garlic, soy sauce, sake and sugar to a bowl and whisk to combine. Add the chicken, then stir to coat evenly. Cover and refrigerate for at least 1 hour.\r\n\r\nAdd 1 inch of vegetable oil to a heavy bottomed pot and heat until the oil reaches 360 degrees F. Line a wire rack with 2 sheets of paper towels and get your tongs out. Put the potato starch in a bowl\r\n\r\nAdd a handful of chicken to the potato starch and toss to coat each piece evenly.\r\n\r\nFry the karaage in batches until the exterior is a medium brown and the chicken is cooked through. Transfer the fried chicken to the paper towel lined rack. If you want the karaage to stay crispy longer, you can fry the chicken a second time, until it's a darker color after it's cooled off once. Serve with lemon wedges.",
    title: "Chicken Karaage",
  },
  {
    origin: "France",
    ingredients: [
      {
        name: "Olive Oil",
        quantity: "1 tbs",
      },
      {
        name: "Mushrooms",
        quantity: "300g",
      },
      {
        name: "Chicken Legs",
        quantity: "4",
      },
      {
        name: "Passata",
        quantity: "500g",
      },
      {
        name: "Chicken Stock Cube",
        quantity: "1",
      },
      {
        name: "Black Olives",
        quantity: "100g",
      },
      {
        name: "Parsley",
        quantity: "Chopped",
      },
    ],
    category: "Chicken",
    image: "https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg",
    id: "52920",
    instructions:
      "Heat the oil in a large flameproof casserole dish and stir-fry the mushrooms until they start to soften. Add the chicken legs and cook briefly on each side to colour them a little.\r\nPour in the passata, crumble in the stock cube and stir in the olives. Season with black pepper – you shouldn’t need salt. Cover and simmer for 40 mins until the chicken is tender. Sprinkle with parsley and serve with pasta and a salad, or mash and green veg, if you like.",
    title: "Chicken Marengo",
  },
];
