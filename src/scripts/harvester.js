
export const harvestPlants = (plantsArray) => {
    let harvestedPlants = []
    for (const i of plantsArray) {
        let max = i.output
        if (i.type === "Corn") {
            max /= 2
        }
        for (let x = 0; x < max; x++) {
            harvestedPlants.push(i)
        // --- Question: why won't it accept that count is already defined above?   
        // Double check that it's running the max /= 2 for corn
        }   
    }
    return harvestedPlants
}