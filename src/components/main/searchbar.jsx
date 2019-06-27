import React, { Fragment } from 'react';

const newsletter = () => {
    return (
    <Fragment>
    <section id="newsletter">
    <div className="container">
    <h1>Search</h1>
    <form>
    <input type="text" placeholder="search" />
    <input type="text" placeholder="search by" />
    <button type="submit" className="button_1">Search</button>
    </form>
    </div>
    </section>
    </Fragment>
    )
}

export default newsletter;
