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
    new navCardObject("Portfolio", "See all the great <br> relevant things <br> I've done.", "images/portfolioCompy.png","portfolio", "card01"),
    new navCardObject("About Me", 'Who is this<br><span> "<em>David</em>" <br>character?', "images/david.png", 'aboutme', "card02"),
    new navCardObject("Contact", "Give me a holler.", "images/oldTelefono.png", "card03"),
    new navCardObject("Other lives", "See all the great<br>irrelevant things<br>I've done.", "images/meetpie.png", "otherlives", "card04"),
];