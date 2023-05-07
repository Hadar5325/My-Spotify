import { backendService } from "./back-end-service.js"
import { utilService } from "./util.service.js"

const DATA_KEY = 'spotifyDB'
_getLocalJson()

export const frontEndService = {
    query
}

function query(filterBy, field) {
    console.log(filterBy)
    console.log(field)
    return backendService.query(DATA_KEY, filterBy, field).then((data) => {
        return data
    })
}

// function _createALotData() {
//     let data = utilService.loadFromStorage(DATA_KEY)
//     if (!data || !data.length) {
//         data = []
//         data.push(_createOneData('Rehovot', 'פופולרי עכשיו', 'glida1', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))

//         utilService.saveToStorage(DATA_KEY, data)
//     }
// }
// function _createOneData(city, category, heading, subHeading, price, value, image) {
//     const id = utilService.makeId()
//     return {
//         city,
//         category,
//         information: { heading, subHeading, price, value, id, image }
//     }
// }

function _getLocalJson() {
    const json = [{
        "artist": "CHVRCHES",
        "songs": [
            {
                'id': '11',
                "title": "Science/Visions",
                "duration": "3:58",
                "releaseYear": "2013"
            },
            {
                'id': '12',
                "title": "Mothers We Share",
                "duration": "3:54",
                "releaseYear": "2015"
            },
            {
                'id': '13',
                "title": "We Sink",
                "duration": "3:34",
                "releaseYear": "2013"
            }
        ]
    },
    {
        "artist": "Weezer",
        "songs": [
            {
                'id': '21',
                "title": "Buddy Holly",
                "duration": "2:40",
                "releaseYear": "1994"
            },
            {
                'id': '22',
                "title": "Don't Let Go",
                "duration": "3:00",
                "releaseYear": "2001"
            },
            {
                'id': '23',
                "title": "Beverly Hills",
                "duration": "3:17",
                "releaseYear": "2005"
            }
        ]
    },
    {
        "artist": "R.E.M.",
        "songs": [
            {
                'id': '31',
                "title": "Losing My Religion",
                "duration": "4:28",
                "releaseYear": "1991"
            },
            {
                'id': '32',
                "title": "Everybody Hurts",
                "duration": "5:20",
                "releaseYear": "1992"
            },
            {
                'id': '33',
                "title": "Orange Crush",
                "duration": "3:51",
                "releaseYear": "1988"
            }
        ]
    }]
    utilService.saveToStorage(DATA_KEY, json)

}