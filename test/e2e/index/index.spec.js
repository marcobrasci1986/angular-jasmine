describe('hello protractor', function () {

    describe('index', function () {
        it('should display the correct title', function () {
            protractor.get("/#");
            expect(browser.getTitle()).toBe("Angular test");

        });
    });
});