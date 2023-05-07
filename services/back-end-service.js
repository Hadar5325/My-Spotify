
export const backendService = {
    query
}

function query(dbName, filterBy, field,  delay = 500 ) {
    let data = JSON.parse(localStorage.getItem(dbName)) || []
    console.log(data)
    console.log(filterBy)
    console.log(field)
    if(filterBy !== ''){
       data = data.filter(item =>{
            let lowerCaseArtist = item.artist.toLowerCase()
            if(lowerCaseArtist.includes(filterBy)){
                console.log('inside!')
                return item
            }
            return item.artist.includes(filterBy)
        })
    }
    return new Promise(resolve => setTimeout(() => resolve(data), delay))
}
