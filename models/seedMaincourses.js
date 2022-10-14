const mongoose = require('./connection')
const Maincourse = require('./maincourse')

const db = mongoose.connection

db.on('open', () => {

    const startMaincourses =[
        { name: 'Cal De Galinga', plantBased: false, vegetarian: false, dairyFree: true, hasMeat: true, glutenFree: true, ingredients: '2 bone in - with skin chicken breasts, 8 bone in - with skin chicken thighs, 3c. long grain white rice, 1 whole peeled onion, lemon to taste, salt to taste', directions:'1. Fill large stock pot with water. 2. Cut the ends of the onion off and add to the water. 3. Bring the pot of water to a boil and add chicken. 4. Boil chicken for 1 hour. 5. Fill a large pot with the broth from the chicken. 6. Rinse rice in strainer and add to the new pot of broth. 7. Simmer the rice uncovered for 20 minutes. 8. remove chicken from pot and put on serving tray. 9. Make individual bowls of the rice, broth and chicken and add lemon and salt to taste.' },
        { name: 'Chicken Continental', plantBased:false, vegetarian:false, dairyFree: false, hasMeat: true, glutenFree:false, ingredients: '6 chicken tenders, 5 10oz cans of cream of chicken soup, 4c. minute rice, 1/4c. flour, 3 TBSP celery flakes, 6 TBSP minced onion, 3 TBSP chopped dried parsely, 2 tsp salt, 1 tsp pepper, 3 TBSP butter, 1 cup water',  directions:'1. Preheat oven to 375 degrees. 2. Role the chicken tenders in flour, brown in butter in frying pan. 3. Remove chicken and stir in soup, parsley, celery, onion, pepper, salt and water to pan. 4. Cook and stir to a soft boil. 5. Spread uncooked rice into a shallow caserole dish. 6. Pour all but 1 cup of soup mixture into the rice, stir to mix. 7. Top with chicken tenders and remaining soup mixture. 8. Bake covered for 30 minutes.' },
        { name: 'Lasagna', plantBased:false, vegetarian:false, dairyFree: false, hasMeat: true, glutenFree:false, ingredients:'1 Box Oven-Ready Lasagna noodles, 2 jars Marinara Sauce, 2 tablespoons extra virgin olive oil, 1 lb lean ground meat of choice, browned,1 15 oz container ricotta cheese, 4 cups mozzarella cheese, shredded and divided, 1/2 cup Parmigiano-Reggiano cheese, grated, 1 egg, 3 TBS dried parsley, Salt and black pepper to taste', directions:'1. Pre-heat oven to 375 degrees F. In a large skillet, heat olive oil and brown meat until cooked through; season with salt and pepper, set aside. 2. In a bowl, combine ricotta, 2 cups mozzarella, egg and Parmigiano cheese. Stir well. 3. Spray a 13 x 9 inch baking dish with non-stick cooking spray. Pour one cup of sauce on the bottom of the dish; spread evenly. Place 3 sheets of no boil lasagna noodles side by side (sheets will expand while baking to the ends of the dish) 4. our 1 cup of sauce and 3/4 cup of cheese mixture on the first layer. Top with ¼ cup mozzarella and 1/3 cup of the cooked meat. Repeat for 3 more layers. 5. For the final layer, top with 3 lasagne sheets, add remaining sauce and top with cheese mixture and mozzarella. 6. Cover with foil and bake for 25 minutes. Remove foil and bake additional 5 minutes to brown the cheese. Let rest 15 minutes before serving' },
        { name: 'Teriyaki Stir Fry', plantBased:false, vegetarian:true, dairyFree: true, hasMeat: false, glutenFree:true, ingredients:'1 bag of frozen mixed vegetables of choice (any preferred vegetables can be added as well), plant based teryaki stirfry sauce to taste, 3c. cooked rice of choice, 1c. chopped and drained pinapple chunks', directions:'In large frying pan mix bag of frozen vegetables and pineapple. once cooked add the teryaki sause and cook for an additional 2 m inutes. Serve over cooked rice' },
        { name: 'Sweet Potato Black Bean Chili', plantBased:true, vegetarian:true, dairyFree: true, hasMeat: false, glutenFree: true, ingredients:'1-2 tablespoons olive oil, 1 medium onion diced small, 2 garlic cloves minced, 1 large sweet potato, peeled and diced, 2 tablespoons mild chili powder, 2 teaspoons cumin, 2 teaspoons smoked paprika, 1 teaspoon salt, 28 ounces diced tomatoes, with their juices, OR fire roasted tomatoes, (2) 15-ounce cans black beans, drained and rinsed, 2 cups water', directions:'1. In a large pot over medium heat, add the olive oil. Saute the diced onion for 3-4 minutes, until translucent, then add in the garlic and sweet potato and cook about 2 more minutes. 2. Next add the chili powder, cumin, smoked paprika and salt. Stir into the vegetable mixture. 3. Pour in the diced tomatoes along with their juices, drained and rinsed black beans and the 2 cups of water. Stir to combine. Simmer the mixture, uncovered, for 20-25 minutes. 4. Use the back of a spoon to mash some of the sweet potatoes for a thicker texture, if desired. 5. Serve with avocado chunks, cilantro, chopped green onions, vegan cornbread or vegan sour cream.'},
        { name: 'Plant-Based Shepherds Pie', plantBased: true, vegetarian: true, dairyFree: true, hasMeat: false, glutenFree: true, ingredients:'4 large russet potatoes (about 2 pounds), peeled and cut into large chunks, Sea salt, 2 large yellow onions, finely diced, 3 large carrots, diced, 3 cups frozen peas, 3 cups frozen corn, 4 cups frozen broccoli florets, 6 tablespoons arrowroot powder, 4 cups unsweetened, unflavored plant milk, 1⁄4 cup nutritional yeast, Freshly ground black pepper, Chopped fresh chives, for serving (optional)', directions:'1. Preheat the oven to 350 degreesF. 2. Place the potatoes in a large pot and add water to cover. Bring to a boil over high heat. Reduce the heat to medium, cover the pot, and cook until the potatoes are tender when pierced with the tip of a sharp knife, 12 to 14 minutes. Remove the pot from the heat and drain off all but 2⁄3 cup of the cooking water. Use a masher to mash the potatoes well. Season with salt to taste, and set aside. 3. Cook the onions and carrots in a large sauté pan over medium-high heat, stirring occasionally, until the onions are translucent and beginning to brown, 8 to 10 minutes. 4. Add water 1 to 2 tablespoons at a time to keep the vegetables from sticking. Add the peas, corn, and broccoli. Cook until heated through, about 5 minutes.' },
        { name: 'Orange Cauliflower', plantBased: false, vegetarian: true, dairyFree: true, hasMeat: false, glutenFree: false, ingredients:'1 head cauliflower (about 5 cups), 1 cup water, 3/4 cup flour (see notes for gluten free), 1 tablespoon garlic powder, 1/4 teaspoon salt, 2 cups panko breadcrumbs (see notes for gluten free) STICKY ORANGE SAUCE: 1 cup orange juice, fresh squeezed preferred, 1/2 cup granulated sugar (see notes for substitutions). 2 tablespoons rice vinegar, 2 tablespoons low sodium soy sauce (or tamari for gluten free), 1/4 teaspoon dried ground ginger, 2 garlic cloves, or 1/4 teaspoon garlic powder, 1 teaspoon Sriracha hot sauce, 2 tablespoons cornstarch, 1/4 cup water, OPTIONAL, FOR SERVING, 4 cups cooked brown or white rice, chopped green onions, sesame seeds', directions:'Preheat the oven to 400 degrees F. Line a large baking sheet with parchment paper. Wash and cut cauliflower into bite sized pieces. In a large bowl, add water, flour, garlic powder and salt. Whisk until well combined. Place the breadcrumbs in a medium sized bowl and set it next to the wet batter bowl. Also place your baking sheet nearby. Add the cauliflower to the bowl with the wet batter and toss to combine, coating all the pieces well. One by one, remove a cauliflower piece, tapping any excess batter off, and roll in the breadcrumbs to coat. Place on the prepared baking sheet and make sure they are not touching each other, or they will all get stuck together as they bake. Bake for about 20-30 minutes until golden brown and crispy. STICKY ORANGE SAUCE In a large pan (large enough to fit the cauliflower and sauce), add all sauce ingredients except the cornstarch and water. Bring to a boil, and cook for a minute or two. Mix the cornstarch and water in a small bowl to combine, and then add to the pot. Stir over medium-high heat constantly for a couple of minutes, until the sauce thickens. TO FINISH Once the cauliflower is done, add it to the pan with the orange sauce and stir to coat. There will not be a lot of extra sauce; if you want more double the sauce. Serve over brown or white rice. Sprinkle with green onions and/or sesame seeds. Serve hot and enjoy.'},
        { name: '30 minute Coconut Curry', plantBased: true, vegetarian: true, dairyFree: true, hasMeat: false, glutenFree: true, ingredients:'1 Tbsp coconut or olive oil, 1 small, onion (diced), 4 cloves garlic (minced // 4 cloves yield ~2 Tbsp or 12 g), 1 Tbsp fresh grated ginger*, 1/2 cup broccoli florets (diced // or sub green bell pepper), 1/2 cup diced carrots, 1/4 cup diced tomato, 1/3 cup snow peas (loosely cut), 1 Tbsp curry powder, 1 pinch cayenne* (optional // for heat), 2 14-ounce cans light coconut milk (sub full-fat for richer texture), 1 cup veggie broth (DIY or store-bought), Sea salt and black pepper (to taste), COCONUT QUINOA, 1 14-ounce can light coconut milk, 1 cup white quinoa (rinsed in a fine mesh strainer*), 1 Tbsp agave nectar (optional)', directions:'If serving with coconut quinoa, begin by washing thoroughly in a fine mesh strainer. Add to a medium saucepan over medium heat and toast for 3 minutes. Add light coconut milk and 1/2 cup water (amount as original recipe is written // adjust if altering batch size). Bring to a boil, then reduce heat to simmer, cover and cook for 15 minutes or until the quinoa is light, fluffy and the liquid is absorbed. Set aside until serving. In the meantime, heat a large saucepan or pot to medium heat and add coconut oil. Add the onion, garlic, ginger, carrot, broccoli and a pinch each salt and pepper and stir. Cook, stirring frequently, until softened, about 5 minutes. Add curry powder, cayenne (or chili pepper), veggie stock, coconut milk, another healthy pinch of salt and stir. Bring to a simmer then reduce heat slightly and continue cooking for 10-15 minutes. Add the snow peas and tomatoes in the last 5 minutes so they do not overcook. Taste and adjust seasonings as needed. I added another pinch or two of salt. Serve over coconut quinoa (see other options below in notes) and garnish with fresh lemon juice and herbs.' },
        { name: 'Slowcooker Vegetable Barley Soup', plantBased: true, vegetarian: true, dairyFree: true, hasMeat: false, glutenFree: false, ingredients:'1 yellow onion chopped, 2 carrots cut into ½-circles, 2 stalks celery chopped, 1 medium sweet potato peeled and cut into ¾-inch pieces, 4 garlic cloves minced, 1 ½ cups frozen green beans, ¾ cup pearl barley, 1 teaspoon paprika, 1 teaspoon dried oregano, ¾ teaspoon dried thyme, ½ teaspoon salt, ½ teaspoon ground pepper, 1 14 ounce can petite diced tomatoes, 6 cups low sodium vegetable broth, 2 cups water,  ¼ cup minced flat-leaf parsley', directions:'Combine all of the ingredients, except for the parsley, in a large (6-quart) slow cooker. Cook on LOW until the barley is tender, about 8 hours. Stir in the parsley. Serve.' },
        { name: 'Slow Cooker Wild Rice Soup', plantBased: false, vegetarian: true, dairyFree: true, hasMeat: false, glutenFree: true, ingredients:'1 medium onion (chopped), 1 cup wild rice or wild rice blend (uncooked) (the cook time listed on the package should be about 45 minutes, rinsed and drained), 1 medium butternut squash (peeled, seeded and cut into ¾-inch pieces (about 4 cups)), 15 ounce can white beans (I used cannellini, rinsed and drained), 4 ribs celery (chopped), ½ teaspoon dried oregano, ½ teaspoon dried thyme, ½ teaspoon garlic powder, ½ teaspoon salt, 1/8 teaspoon black pepper, 1 bay leaf, 6 cups low sodium vegetable broth, 6 cups chopped kale (or fresh spinach, optional)', directions:'Add all ingredients to the slow cooker except for the broth and kale. Pour the broth into the slow cooker, and gently stir to combine. Cook on low setting for about 6 hours, or on high setting for about 3 ½ hours, until the rice is cooked and tender. As all slow cookers vary, cooking time may be different in your slow cooker compared to mine. Near the end of the cook time, check to see if the rice is done. Once the rice is tender, the soup has cooked long enough. Remove the bay leaf. Stir kale into soup. Serve.' },
    ]

Maincourse.deleteMany({})
    .then(deleteMaincourses => {
        console.log('testing this function')
        Maincourse.create(startMaincourses)
            .then((data) => {
                console.log('new seeded maincourses', data)
                db.close()
            })
    .catch(error => {
        console.log(error)
        db.close()
         })
    }) 
})  