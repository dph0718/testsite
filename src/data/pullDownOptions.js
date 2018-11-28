let PullDownOption = class {
    constructor(
        name,
        link
    ) {
        this.name = name;
        this.link = link;
    }
}

let pullDownOptions= [
    new PullDownOption('Home', 'home'),
    new PullDownOption('Portfolio', 'portfolio'),
    new PullDownOption('About Me', 'aboutme'),
    new PullDownOption('Contact', 'contact'),
    new PullDownOption('Other lives', 'extra'),
    //and any others...
]

export default pullDownOptions;