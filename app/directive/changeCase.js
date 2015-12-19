/**
 *
 * 5000 -> 5000,00
 *
 * 5,25 -> 5,25
 * 5.25 -> 5,25
 *
 * max decimals 2 digits
 */
app.directive('changeCase', function(){
    return{
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attr, ngModel){

            /**
             * On blur we check if the value has 2 decimals. If not we add ',00', if it has 1 decimal we add a '0'.
             */
            element.bind('blur', function() {
                var numberOfDecimals = findDecimalCount(this.value);

                /**
                 * Add decimals if not present of add one if there is only 1 decimal
                 */
                if(numberOfDecimals == 0){
                    this.value = this.value + ",00";
                }else if(numberOfDecimals == 1){
                    this.value = this.value + "0";
                }
            });

            /**
             * Formatters deal with data coming up from the model into the view.
             * They will get called whenever the model changes and has to be rendered.
             *
             * Formatters are only called when the model changes in code.
             */
            ngModel.$formatters.push(function(value){
                if(value == null){
                    value = 0;
                }
                return value;
            });

            /**
             * Parsers change how view values will be saved to the model:
             * Every time you type a letter in the modal it will fire your parsers.
             *
             *
             * Do modifications the value. the returned value will be the model value
             */
            var lastKnownValidValue;
            ngModel.$parsers.push(function(valueEnteredInView){
                //convert to string
                valueEnteredInView = valueEnteredInView.toString();
                // replace . with ,
                valueEnteredInView = valueEnteredInView.replace('.', ",");

                var decimals = findDecimalCount(valueEnteredInView);

                var valueToReturn;
                if(valueEnteredInView < 0 || decimals > 2){
                    // value entered is invalid: reset valueToReturn to last lastKnownValidValue
                    valueToReturn = lastKnownValidValue;
                    ngModel.$setViewValue(lastKnownValidValue); // triggers parser again
                    ngModel.$render();
                } else {
                    valueToReturn = valueEnteredInView;
                    lastKnownValidValue = valueToReturn;

                }

                console.log("Is number " + typeof valueToReturn === 'number');
                console.log("Is String" + typeof valueToReturn === 'string');
                return Number(valueToReturn.replace(',', '.'));
            });

            /**
             * Finds the number of decimals. Value must be with or without ,
             * @param value
             * @returns {number}
             */
            function findDecimalCount(value){
                var split = value.split(",");
                var decimals = 0;
                if(split.length > 1){
                    decimals = split[1].length;
                }
                console.log("decimals %s", decimals);
                return decimals;

            }


        }
    };
});



//var lastKnownValidValue;
//ngModel.$parsers.push(function(valueEnteredInView){
//    console.log("value %s", valueEnteredInView);
//
//    var valueToReturn;
//
//    if(valueEnteredInView.length > 2){
//        // value entered is invalid: reset return_value to last known valid value
//        valueToReturn = lastKnownValidValue;
//        ngModel.$setViewValue(lastKnownValidValue); // triggers parser again
//        ngModel.$render();
//        ngModel.$setValidity('is_valid', false);
//    } else {
//        valueToReturn = valueEnteredInView;
//        lastKnownValidValue = valueToReturn;
//        ngModel.$setValidity('is_valid', true);
//    }
//
//    return valueToReturn;
//});