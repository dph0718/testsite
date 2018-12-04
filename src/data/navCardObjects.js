import compy from '../images/portfolioCompy.png';
import david from '../images/david.png';
import telefono from '../images/oldTelefono.png';
import meetpie from '../images/meetpie.png';

let navCardObject = class {
    constructor(title,
        text,
        backgroundImage,
        link,
        id

    ) {
        this.title = title;
        this.text = text;
        this.backgroundImage = backgroundImage;
        this.link = link;
        this.id = id;
        // and others... ?
    }

};

//export all of them.
export default [
    new navCardObject("Portfolio", "See all the great <br> relevant things <br> I've done.", compy , "portfolio", "card01"),
    new navCardObject("About Me", 'Who is this<br><span> "<em>David</em>" <br>character?', david, 'aboutme', "card02"),
    new navCardObject("Contact", "Give me a holler.", telefono, "card03"),
    new navCardObject("Other lives", "See all the great<br>irrelevant things<br>I've done.", meetpie, "otherlives", "card04"),
];