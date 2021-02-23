

const getUniqueTypes = ({ list }) => {
    console.log(list)
    if (list) {
        const typesList = []
        list.forEach(pokemon => {
            pokemon.types.forEach(({ type }) => {
                if (!typesList.includes(type.name)) {
                    typesList.push(type.name)
                }
            })
        })
        return typesList
    } else {
        return null
    }
}



export default getUniqueTypes

