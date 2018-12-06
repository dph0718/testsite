//Returns a PortfolioCard Component for each item in the array.
//Takes an argument for the row - "front" or "back"

import React from 'react';
import PortfolioCard from "../components/PortfolioCard.js";
import portfolioItems from "../data/portfolioObjects"



function makeCarousel(row) {
    let allPortfolioItems = portfolioItems.map(pfItem => {
        return <PortfolioCard
            title={pfItem.title}
            githubLink={pfItem.githubLink}
            deployedLink={pfItem.deployedLink}
            alt={pfItem.alt}
            stackOverflowLink={pfItem.stackOverflowLink}
            portfolioImage={pfItem.portfolioImage}
            key={pfItem.id}
            position={pfItem.position}
            row={row}
        />
    })
    return allPortfolioItems;
}

export default makeCarousel;