let plantsInField = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const i of seedObj) {
            plantsInField.push(i)
        }
    } else { 
        plantsInField.push(seedObj)
    }
}

export const usePlants = () => {
    let plantsInFieldClone = [...plantsInField]
    return plantsInFieldClone
}