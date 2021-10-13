import { Selector, t } from 'testcafe';

const label = Selector('label');

class Feature {
    constructor (text) {
        this.label    = label.withText(text);
        this.checkbox = this.label.find('input[type=checkbox]');
    }
}

class Page {
    constructor () {
        this.nameInput = Selector('#menuSearch');
       
        this.featureList = [ 
            new Feature('Support for testing on remote devices'),
            new Feature('Re-using existing JavaScript code for testing'),
            new Feature('Easy embedding into a Continuous integration system')
        ];

        this.submitButton = Selector('#submit-button');
        this.contactUs=Selector('body>header>nav>ul>li:nth-child(5)>a');
           
        this.ourProductHeading=Selector('.nav-li-Links:nth-child(8)>.menu');
        this.specialOffer=Selector('.nav-li-Links:nth-child(7) > .menu');
        this.speakerimage=Selector('#speakersImg');
        this.boseBluetoothSpkText=Selector('.ng-scope:nth-child(1) > p > .productName');
    }

    async submitName (name) {
        await t
            .typeText(this.nameInput, name)
            .click(this.submitButton);
    }
}

export default new Page();