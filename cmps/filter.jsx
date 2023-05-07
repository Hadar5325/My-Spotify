
const { useState, useEffect } = React
export function Filter({onSubmit}) {

    const [filterBy, setFilterBy] = useState({ text: '' })

    useEffect(() => {
        console.log(filterBy)
    }, [filterBy])


    function handleChange({ target }) {
        const { value, name: field } = target
        setFilterBy((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    return <section className="filter">
        <form onSubmit={onSubmit}>
            <input
                placeholder="בחירת כתובת משלוח"
                onChange={handleChange}
                type="text"
                value={filterBy.txt}
                name="text"
            >
            </input>
            <button>Select</button>
        </form>
    </section>
}