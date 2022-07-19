export const Catalog = (harvestedFood) => {
    let HTMLformat = ""
    for (const i of harvestedFood) {
        HTMLformat += `<section class="plant">${i.type}</section>`
    }
    return HTMLformat
}