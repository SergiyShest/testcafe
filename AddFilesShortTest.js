import { Selector } from 'testcafe';

fixture `chatTests`
    .page `http://localhost/es/ChartForm`;

test('AddFilesTest', async t => {
    await t
        .click(Selector('label').withText('Add Files'))
        .setFilesToUpload(Selector('#file'), [
         'C:\\Program Files (x86)\\Google\\Chrome\\Application\\79.0.3945.130\\chrome.dll',
         'C:\\Program Files (x86)\\Google\\Chrome\\Application\\79.0.3945.130\\chrome.dll.sig',
         'C:\\Program Files (x86)\\Google\\Chrome\\Application\\79.0.3945.130\\chrome.exe.sig'])

});