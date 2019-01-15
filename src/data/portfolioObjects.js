//there must  a better way to import these images. But this will work for now.

import fishygif from '../images/fishygif-small.png';
import week4 from '../images/week4-small.png';
import tikitrivia from '../images/tikitrivia-small.png';
import frender from '../images/frender-small.png';
import amiga from '../images/amiga.png';
import hangman from '../images/hangman-small.png';
import liri from '../images/liri.png';
import karmadillo from '../images/karmadillo-small.png';
import meetpie from '../images/meetpie-small.png';
import buddpuckers from '../images/buddpuckers-small.png';
import spousefinder from '../images/spousefinder-small.png';



let PortfolioObject = class {
    constructor(title,
        githubLink,
        deployedLink,
        alt,
        stackOverflowLink,
        portfolioImage,
        id,
        arrayposition,
    ) {

        this.title = title;
        this.githubLink = githubLink;
        this.deployedLink = deployedLink;
        this.alt = alt;
        this.stackOverflowLink = stackOverflowLink;
        this.portfolioImage = portfolioImage;
        this.id = id;
        this.arrayposition = arrayposition;
        // and others... ?
    }

};

//export all of them.
export default [
    new PortfolioObject('Gif Fisher', 'https://github.com/dph0718/fishy-gif','https://dph0718.github.io/fishy-gif/', 'Gif Fisher', 'blah',fishygif, "1"),
    new PortfolioObject('Desktop Fighter', 'https://github.com/dph0718/The-Weak-Four' ,'https://dph0718.github.io/The-Weak-Four/', 'Desktop Fighter', 'blah', week4, "2"),
    new PortfolioObject('Tiki Trivia','https://github.com/dph0718/Tiki-Trivia', 'https://dph0718.github.io/Tiki-Trivia/', 'Tiki Trivia', 'blah', tikitrivia, "3"),
    new PortfolioObject('Frender', 'https://github.com/dph0718/frender', 'https://frender-app.herokuapp.com/', 'Frender', 'blah', frender, "4"),
    new PortfolioObject('Commodore Amiga Photo Carousel', 'https://github.com/dph0718/portfolio-react','current', "You're lookin' at it, bud.", 'blah', amiga, "5"),
    new PortfolioObject('Hangman',"https://github.com/dph0718/Hangman-Game", 'https://dph0718.github.io/Hangman-Game/', 'Hangman', 'blah', hangman, "6"),
    new PortfolioObject('LIRI, the Cable Guy', 'https://github.com/dph0718/liri-node-app', "unavailable",'Liri, the Cable Guy', 'blah', liri, "7"),
    new PortfolioObject('Karmadillo', 'https://github.com/dph0718/Karmadillo', 'unavailable','Karmadillo', 'blah', karmadillo, "8"),
    new PortfolioObject('MeetPie', 'https://github.com/tspatek/Project-1', 'unavailable','Meetpie', 'blah', meetpie, "9"),
    new PortfolioObject('Buddpuckers', 'https://github.com/dph0718/sql-buddpuckers', 'https://buddpuckers-burger-database.herokuapp.com/','Mmm, Gourmet burgers.', 'blah', buddpuckers, "10"),
    new PortfolioObject('Spouse Finder', 'https://github.com/dph0718/friend-finder', 'https://spouse-finder-10001.herokuapp.com/','Spouse Finder', 'blah', spousefinder, "11"),
    
    // new PortfolioObject('Shaq Fu', 'http://github.com', 'The ultimate fighter for SNES', 'blah', 'images/shaqfu.png', "10"),
    // new PortfolioObject('Home Alone II', 'http://github.com', 'Lost in New York', 'blah', 'images/shaqfu.png', "11"),
    // new PortfolioObject('Harry & the Hendersons', 'http://github.com', "John Lithgow's finest performance.", 'blah', 'images/shaqfu.png', "12"),
];