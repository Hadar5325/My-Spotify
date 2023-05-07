import { Details } from "./details.jsx"


export function List({ data }) {


    function gatherCategory(categoryName) {
        const arrName = data.filter(item => {
            if (Array.isArray(item.category)) {
                for (let i = 0; i < item.category.length; i++) {
                    if (item.category[i] === categoryName) {
                        return item.category[i] === categoryName
                    }
                }
            } else {
                return item.category === categoryName
            }
        })
        return arrName
    }
    const categorysOpt = ['פופולרי עכשיו', 'מצרכים שאוהבים', 'אוהבי ירקות']

    // const popularArr = data.filter(item => item.category === 'פופולרי עכשיו')
    // const likableArr = data.filter(item => item.category === 'מצרכים שאוהבים')
    // const loveMeatArr = data.filter(item => item.category === 'אוהבי בשר')

    // console.log(popularArr)
    // console.log(likableArr)
    // console.log(loveMeatArr)

    // return <section className="list-data">

    //     <div>פופלרי עכשיו</div>
    //     {popularArr.map(info => {
    //         console.log(info.information)
    //         return <Details key={info.information.id} info={info.information} />
    //     })}
    //     <div>מצרכים שאוהבים</div>
    //     {likableArr.map(info => {
    //         return <Details key={info.information.id} info={info.information} />
    //     })}
    //     <div>אוהבי בשר</div>
    //     {loveMeatArr.map(info => {
    //         return <Details key={info.information.id} info={info.information} />
    //     })}

    // </section>

    // console.log(data)
    const popularArr = gatherCategory('פופולרי עכשיו')
    const likableArr = gatherCategory('מצרכים שאוהבים')
    const loveMeatArr = gatherCategory('אוהבי בשר')

    // const popularArr = data.filter(item => {
    //     if (Array.isArray(item.category)) {
    //         for (let i = 0; i < item.category.length; i++) {
    //             if (item.category[i] === 'פופולרי עכשיו') {
    //                 return item.category[i] === 'פופולרי עכשיו'
    //             }
    //         }
    //     } else {
    //         return item.category === 'פופולרי עכשיו'
    //     }
    // })
    // const likableArr = data.filter(item => {
    //     if (Array.isArray(item.category)) {
    //         for (let i = 0; i < item.category.length; i++) {
    //             if (item.category[i] === 'מצרכים שאוהבים') {
    //                 return item.category[i] === 'מצרכים שאוהבים'
    //             }
    //         }
    //     } else {
    //         return item.category === 'מצרכים שאוהבים'
    //     }
    // })

    // const loveMeatArr = data.filter(item => {
    //     if (Array.isArray(item.category)) {
    //         for (let i = 0; i < item.category.length; i++) {
    //             if (item.category[i] === 'אוהבי בשר') {
    //                 return item.category[i] === 'אוהבי בשר'
    //             }
    //         }
    //     } else {
    //         return item.category === 'אוהבי בשר'
    //     }
    // })

    console.log(popularArr, "populare")
    console.log(likableArr, "liable")
    console.log(loveMeatArr, "love meet")
    return <section className="list-data">

        <div>פופלרי עכשיו</div>
        {popularArr.map(info => {
            console.log(info.information)
            return <Details key={info.information.id} info={info.information} />
        })}
        <div>מצרכים שאוהבים</div>
        {likableArr.map(info => {
            return <Details key={info.information.id} info={info.information} />
        })}
        <div>אוהבי בשר</div>
        {loveMeatArr.map(info => {
            return <Details key={info.information.id} info={info.information} />
        })}

    </section>
}



// if (Array.isArray(categoryItem)) {
//     console.log('an array')
//     categoryItem.forEach(item => {
//         for (let i = 0; i < categorysOpt.length; i++) {
//             console.log(categorysOpt[i])
//             console.log(item)
//             console.log(item === categorysOpt[i])
//             if (item === categorysOpt[i]) {
//                 console.log('inside')
//                 return <Details key={info.id} info={info} />
//             }
//         }
//     })
// }

