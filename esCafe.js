import { Selector } from 'testcafe';

fixture`A set of examples that illustrate how to use TestCafe API`
    .page`http://localhost/es/ChartForm/index`;


const messageArea = Selector('#messageArea');
const scroll    = Selector('#scroll');
//const sliderHandle  = Selector('#slider').child('span');
const sendBtn  = Selector('#sendBtn');

test('How to type text into an input (t.typeText user action)', async t => {
    await t
        .typeText(messageArea, 'Peter')
        .click(sendBtn)
       // .typeText(developerName, 'r', { caretPos: 2 })
        .expect(messageArea.value).eql('');
});

// test('How to click check boxes and then verify their states (t.click user action and ok() assertion)', async t => {
//     await t
//         .click(Selector('label').withText('Support for testing on remote devices'))
//         .click(Selector('label').withText('Re-using existing JavaScript code for testing'))
//         .expect(Selector('#remote-testing').checked).ok()
//         .expect(Selector('#reusing-js-code').checked).ok();
// });
