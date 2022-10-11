const mongoose = require('./connection')
const Ingredient = require('./ingredients')

const db = mongoose.connection

db.on('open', () => {
    const startIngredients = [
        {name:'salt'}
    ]

    Ingredient.deleteMany({})
    .then(deleteIngredient => {
        console.log('testing this function')
        Ingredient.create(startIngredients)
            .then((data) => {
                console.log('new seeded ingredients', data)
                db.close()
            })
    .catch(error => {
        console.log(error)
        db.close()
         })
    }) 
})  