import { Details } from "./details.jsx"


export function List({ data }) {

    const categorysOpt = ['פופולרי עכשיו', 'מצרכים שאוהבים', 'אוהבי ירקות']

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

    const popularArr = gatherCategory(categorysOpt[0])
    const likableArr = gatherCategory(categorysOpt[1])
    const loveMeatArr = gatherCategory(categorysOpt[2])

    return <section className="list-data">


        <section className="category">
            <div className="category-heading">
                <div className="more">
                    <div>עוד</div>
                    <div>next</div>
                    <div>before</div>
                </div>
                <div className="category-name">פופלרי עכשיו</div>
            </div>
            <div className="data-representation-1">
                {popularArr.map(info => {
                    return <Details key={info.information.id} info={info.information} />
                })}
            </div>
        </section>

        <section className="category">
            <div className="category-heading">
                <div className="more">
                    <div>עוד</div>
                    <div>next</div>
                    <div>before</div>
                </div>
                <div className="category-name">מצרכים שאוהבים</div>
            </div>
            <div className="data-representation-1">
                {likableArr.map(info => {
                    return <Details key={info.information.id} info={info.information} />
                })}
            </div>
        </section>

        <section className="category">
            <div className="category-heading">
                <div className="more">
                    <div>עוד</div>
                    <div>next</div>
                    <div>before</div>
                </div>
                <div className="category-name">אוהבי ירקות</div>
            </div>
            <div className="data-representation-1">
                {loveMeatArr.map(info => {
                    return <Details key={info.information.id} info={info.information} />
                })}
            </div>
        </section>

        {/* <div>מארחים בחג</div>
        <div>ארוחות צהריים בסביבה</div>
        <div>תורמים מארזי מזון לחג</div>
        <div>בא לי לאכול</div> */}

    </section>
}

