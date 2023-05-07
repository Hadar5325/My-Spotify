
export const backendService = {
    query
}

function query(dbName, filterBy, delay = 500) {
    let data = JSON.parse(localStorage.getItem(dbName)) || []
    const dataFiltered = data.filter(item => item.city === filterBy)
    return new Promise(resolve => setTimeout(() => resolve(dataFiltered), delay))
}
