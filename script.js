import {Show} from './show.js'

let library = [
    new Show(
        "Placeholder",
        2022,
        "Place",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        2022,
        "Place",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        4444,
        "Place",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        4444,
        "Place",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        4444,
        "Places",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        4444,
        "Places",
        "ahahhahaha",
        "placeholder-image.png"
    ),

    new Show(
        "Placeholder",
        4444,
        "Places",
        "ahahhahaha",
        "placeholder-image.png"
    ),
]

library.forEach(function(show){
    show.addToPage()
})