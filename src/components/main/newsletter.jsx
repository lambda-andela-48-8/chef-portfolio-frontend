import React, { Fragment } from 'react';

const newsletter = () => {
    return (
    <Fragment>
    <section id="newsletter">
    <div className="container">
    <h1>Get Updates</h1>
    <form>
    <input type="email" placeholder="email" />
    <button type="submit" className="button_1">Subscribe</button>
    </form>
    </div>
    </section>
    </Fragment>
    )
}

export default newsletter;
