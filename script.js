import {Show} from './show.js'

let library = [
    new Show(
        "Placeholder",
        2021,
        "Squirrels",
        "This squirrel fat",
        "obese3.jpg"
    ),

    new Show(
        "Placeholder",
        2021,
        "Squirrels",
        "This squirrel fat",
        "obese4.jpg"
    ),

    new Show(
        "Placeholder",
        2021,
        "Squirrels",
        "This squirrel fat",
        "obese.jpeg"
    ),

    new Show(
        "Placeholder",
        2021,
        "Squirrels",
        "This squirrel fat",
        "obese2.jpg"
    ),

    new Show(
        "Placeholder",
        2021,
        "Places",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        2021,
        "Places",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        2021,
        "Places",
        "ahahhahaha",
        "placeholder-image.png"
    ),
]

library.forEach(function(show){
    show.addToPage()
})