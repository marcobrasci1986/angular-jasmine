/**
 * Created by MBSAI80 on 17/10/2015.
 */
describe('ordinal', function () {
    var $filter, filterOrdinal;

    beforeEach(function () {
        module('myApp');

        inject(function ($injector) {
            $filter = $injector.get('$filter');
            filterOrdinal = $filter('ordinal');
        });

    });

    it('Should return value if not a number', function () {

        var value = "marco5";
        expect(filterOrdinal(value)).toBe(value);

    });

});