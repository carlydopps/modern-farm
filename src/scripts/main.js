import { createPlan } from './plan.js'
import { usePlants } from './field.js'
import { plantSeeds } from './tractor.js'
import { harvestPlants } from './harvester.js'
import { Catalog } from './catalog.js'

console.log("Welcome to the main module")


// Invoke the individual seed functions to create a seed object and store return value in a variable
// const asparagusSeed = createAsparagus()
// const cornSeed = createCorn()

// Test output of individual seed files by logging to console
// console.log(asparagusSeed)
// console.log(cornSeed)

// Invoke the addPlant function to create the plant object
// addPlant(asparagusSeed)
// addPlant(cornSeed)

// Invoke usePlants to get the array of plants to be planted in the field and store return value in variable
// const plantsInField = usePlants()

// Invoke the function that creates a planting plan and store the return value in a variable
const yearlyPlan = createPlan()

// Invoke function that plants all of the seeds
plantSeeds(yearlyPlan)

// Get plants array from fields.js and store return value in a variable
const plantsInField = usePlants()

// Invoke the function that harvests the plants using the array of plants planted in the field as its argument
const harvestedPlants = harvestPlants(plantsInField)
// console.log(harvestedPlants)

const HTMLformat = Catalog(harvestedPlants)
const parentHTMLElement = document.querySelector(".container")
parentHTMLElement.innerHTML = HTMLformat

/* Mentally running through code beginning with line 26:
    1. The variable yearlyPlan stores the return variable of the createPlan function
        - the createPlan function creates a planting plan in the form of an array
        - so its return value is an array of arrays of individual plants (now stored within the variable yearlyPlan)
    2. the plantSeeds function is called with the yearlyPlan variable
        - So the yearlyPlan variable (array of arrays) is passed into the plantSeeds function
            - the plantSeeds function goes through each array in the main array
            - And for each array, it goes through each plant within the array
            - And for each plant, it calls the addPlant function with the return value of the create`PlantsSpecificName` function (read below)
                -- createPlantsSpecificName function is invoked first and returns an individual object of that specific plant
                -- the individual plant object (return value of the createPlantsSpecificName function) is then passed into the addPlant function as its argument
                -- the addPlant function adds the individual plant object into an ARRAY of plants to be planted in the field
                -- (Reminder that these three steps above are repeadted for each plant within each array within the main array because of the for loop - see lines 47-49)
            - So once each plant within each array of the main array has been passed through the for loop
                -- the ARRAY of plants to be planted in the field now contains all of those individual plant objects
    3. Now the plantsInField variable is assigned to the return value of the usePlants function
        - the usePlants function returns a copy of the ARRAY of plants to be planted in the field (Reminder - the array of plants was added to/completed during step 2 above)
    4.  The harvestedPlants variable is assigned to the return value of the harvestPlants function with the variable plantsInField passed in as the argument
        - the variable plantsInField is a copy of the ARRAY of plants to be planted in the field (return value of the usePlants function)
        - the harvestPlants function iterates through each plant object in the copy of the ARRAY 
        - the plant object is added to an array of harvested plants multiple times
            -- the number of times it's added is equal to the value of the output property of the plant object (corn is an exception)
        - the harvestPlants function returns an array of the objects added a certain amount of times
        - So the value of the harvestedPlants variable is equal to an array of the harvested plants after the plant objects were added x amount of times equal to their output property
    5. the HTMLformat variable is set equal to the Catalog function with the harvestedPlants variable passed in as the argument
        - the Catalog function iterates over the array of harvested plants
        - and for each plant object in the harvested plants array, adds an HTML section tag to the full HTML format string
        - the Catalog function returns an HTML representation of the array of plant objects in one string
        - so the value of the HTMLformat variable is equal to a string of HTML

        */