
fixture `My fixture`
    .page `http://example.com`
    .beforeEach( async t => {
        await t
            .useRole(admin)
            .click('#open-management-console');
    })
    .afterEach( async t => {
        await t.click('#delete-data');
    });



