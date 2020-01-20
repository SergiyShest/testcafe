const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();
        const da=new Date();
        const daX=da.getDate()+'.'+da.getHours()+'.'+da.getMinutes()+'.'+da.getSeconds()+'.';
        return runner
            .src(['AddFilesShortTest.js'])
            .browsers(['IE'])//chrome
           // .reporter('nunit', 'reports/'+daX+'report.xml')
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    });