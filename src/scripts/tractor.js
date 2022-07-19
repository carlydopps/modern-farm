import { addPlant } from './field.js'
import { createAsparagus } from './seeds/asparagus.js'
import { createSoybean } from './seeds/soybean.js'
import { createCorn } from './seeds/corn.js'
import { createWheat } from './seeds/wheat.js'
import { createPotato } from './seeds/potato.js'
import { createSunflower } from './seeds/sunflower.js'


// ----- Questions: Do I need all of the individual imports above or is there an easier way to do that?

export const plantSeeds = (plans) => {
    for (const i of plans) {
        for (const x of i) {
            if (x === "Asparagus"){
                addPlant(createAsparagus())
            } else if (x === "Soybean") {
                addPlant(createSoybean())
            } else if (x === "Corn") {
                addPlant(createCorn())
            } else if (x === "Wheat") {
                addPlant(createWheat())
            } else if (x === "Potato") {
                addPlant(createPotato())
            } else if (x === "Sunflower") {
                addPlant(createSunflower())
            }
        }
    }
}

// ----- Question: Is there a more fun way to do the else if's above?
