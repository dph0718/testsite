import React from 'react';
import NavCard from '../components/NavCard';
import navCardObjects from '../data/navCardObjects';

function stackNavCards() {
    let allNavCards = navCardObjects.map((navCardObject, index) => {
        return <NavCard
            link={navCardObject.link}
            backgroundImage={navCardObject.backgroundImage}
            title={navCardObject.title}
            text={navCardObject.text}
            id={navCardObject.id}
            xDisplace={20 + (20 * index) + '%'}
            hue={index * (90) + 45 + 'deg'}
        />

    })
    return allNavCards;
}

export default stackNavCards;