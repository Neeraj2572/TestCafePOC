import { Selector } from 'testcafe';
import page from './page-model';
import pageMain from './page-Main';
fixture ('My fixture')
.page ('https://www.advantageonlineshopping.com/#/');

test('Verify the Contact Us Text is present', async t => {
        await t
            .maximizeWindow()
            .wait(3000)
            .click(page.contactUs)
            .expect(Selector(pageMain.contactUsText).innerText).eql('CONTACT US');            
 });

 test('Verify the speaker product is present', async t => {
    await t
        .maximizeWindow()
        .click(pageMain.speakerimage)
        .expect(Selector(page.boseBluetoothSpkText).innerText).eql('Bose Soundlink Bluetooth Speaker III');
       });
   test('Verify the speaker product is not present', async t => {
        await t
            .maximizeWindow()
            .click(pageMain.speakerimage)
            .expect(Selector(page.boseBluetoothSpkText).innerText).notMatch('Bose Soundlink Bluetooth Speaker III');
           });

// test('Text typing basics', async t => {
//     await t
//         .typeText(page.nameInput, 'Peter')
//         .typeText(page.nameInput, 'Paker', { replace: true })
//         .typeText(page.nameInput, 'r', { caretPos: 2 })
//         .expect(page.nameInput.value).eql('Parker');
// });

// test('Click check boxes and then verify their state', async t => {
//     for (const feature of page.featureList) {
//         await t
//             .click(feature.label)
//             .expect(feature.checkbox.checked).ok();
//     }
// });