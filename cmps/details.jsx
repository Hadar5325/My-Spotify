
export function Details({ info }) {

    return <section className="details">
        <img className="details-image" src={`${info.image}`} />
        <div className="info">
            <h1>{info.heading}</h1>
            <h1>{info.subHeading}</h1>
        </div>
        <div className="buttom-info">
            <div><span>&#x20AA;</span>{info.price}</div>
            <div>*</div>
            <div>{info.value}</div>
            <svg className="smiley" viewBox="0 0 24 24">
                <path d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0zm0 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.7 12.2c.4.3.6.8.3 1.3-1.2 1.9-2.8 3-5 3.1-2.2-.1-3.8-1-4.8-2.9-.2-.5-.2-.9.1-1.3.2-.3.6-.4 1-.3.4.1.5.4.7.7.7 1.3 1.9 1.9 3.3 1.7 1.2-.1 2-.7 2.8-1.6.1-.2.2-.4.4-.5.2-.4.7-.5 1.2-.2zM16 7c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9c-1 0-1.9-.8-1.9-1.9 0-1.1.8-1.9 1.9-1.9zM8 7c1 0 1.9.8 1.9 1.9s-.8 1.8-1.9 1.8c-1.1 0-1.9-.8-1.9-1.9C6.1 7.8 7 7 8 7z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"></path>
            </svg>
            <div>$$</div>
            <div>&#xFF04;&#xFF04;&#xFF04;&#xFF04;</div>
        </div>
    </section>
}