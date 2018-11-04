var inputLabel = document.getElementById('rect');

    function pushBtn(obj) {

        var pushed = obj.innerHTML;

        if (pushed == '=') {
            // Calculate
            inputLabel.innerHTML = eval(inputLabel.innerHTML);

        } else if (pushed == 'AC') {
            // All Clear
            inputLabel.innerHTML = '0';

        }else if (pushed == 'C') {
            // All Clear
            inputLabel.innerHTML = (inputLabel.innerHTML).substr(0,(inputLabel.innerHTML).length-1);

        } else {
            if (inputLabel.innerHTML == '0') {
                inputLabel.innerHTML = pushed;

            } else {
                inputLabel.innerHTML += pushed;

            }
        }
    }
