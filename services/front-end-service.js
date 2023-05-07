import { backendService } from "./back-end-service.js"
import { utilService } from "./util.service.js"

const DATA_KEY = 'dataDB'
_createALotData()

export const frontEndService = {
    query
}

function query(filterBy) {
    return backendService.query(DATA_KEY, filterBy).then((data) => {
        return data
    })
}

function _createALotData() {
    let data = utilService.loadFromStorage(DATA_KEY)
    if (!data || !data.length) {
        data = []
        data.push(_createOneData('Rehovot', 'פופולרי עכשיו', 'glida1', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Rehovot', ['פופולרי עכשיו', 'מצרכים שאוהבים'], 'glida2', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Rehovot', 'אוהבי ירקות', 'glida3', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Rehovot', ['אוהבי ירקות', 'מצרכים שאוהבים'], 'glida4', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Rehovot', 'פופולרי עכשיו', 'glida4', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Rehovot', 'מצרכים שאוהבים', 'glida5', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Rehovot', 'אוהבי ירקות', 'glida6', 'glida-sub', 20, 9.2, "../assets/style/images/breakfast.avif"))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida7', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida8', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida9', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida10', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida11', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida12', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida13', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida14', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida15', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida16', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida17', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida18', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida19', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Rehovot','מצרכים שאוהבים', 'glida20', 'glida-sub', 20, 9.2))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel1', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel2', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel3', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel4', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel5', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel6', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel7', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel8', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel9', 'falafel the best!', 14, 8.6))
        // data.push(_createOneData('Tel-Aviv', 'מצרכים שאוהבים','falafel10', 'falafel the best!', 14, 8.6))
        data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות', 'hamburger1', 'hamburger the best best!!', 22, 7.3, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות', 'hamburger2', 'hamburger the best best!!', 22, 7.3, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות', 'hamburger3', 'hamburger the best best!!', 22, 7.3, "../assets/style/images/breakfast.avif"))
        data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות', 'hamburger4', 'hamburger the best best!!', 22, 7.3, "../assets/style/images/breakfast.avif"))
        // data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות','hamburger5', 'hamburger the best best!!', 22, 7.3))
        // data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות','hamburger6', 'hamburger the best best!!', 22, 7.3))
        // data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות','hamburger7', 'hamburger the best best!!', 22, 7.3))
        // data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות','hamburger8', 'hamburger the best best!!', 22, 7.3))
        // data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות','hamburger9', 'hamburger the best best!!', 22, 7.3))
        // data.push(_createOneData('Tel-Aviv', 'אוהבי ירקות','hamburger10', 'hamburger the best best!!', 22, 7.3))

        utilService.saveToStorage(DATA_KEY, data)
    }
}
function _createOneData(city, category, heading, subHeading, price, value, image) {
    const id = utilService.makeId()
    return {
        city,
        category,
        information: { heading, subHeading, price, value, id, image }
    }
}
