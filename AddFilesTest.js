import { Selector } from 'testcafe';

fixture `chatTests`
    .page `http://localhost/es/ChartForm`;

test('AddFilesTest', async t => {
    await t
        .click(Selector('label').withText('Добавить файл'))
        .setFilesToUpload(Selector('#file'), [
         'C:\\Program Files (x86)\\Google\\Chrome\\Application\\79.0.3945.130\\chrome.dll',
         'C:\\Program Files (x86)\\Google\\Chrome\\Application\\79.0.3945.130\\chrome.dll.sig',
         'C:\\Program Files (x86)\\Google\\Chrome\\Application\\79.0.3945.130\\chrome.exe.sig'])
        .typeText(Selector('#messageArea'), ';')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('shift+alt')
        .typeText(Selector('#messageArea'), 'жпа')
        .click(Selector('#sendBtn'))
        .rightClick(Selector('span').withText('Превышен максимальный размер 10 Мбт.'))
        .click(Selector('#filesPlace'))
        .click(Selector('[alt="удалить файл"]'));
});