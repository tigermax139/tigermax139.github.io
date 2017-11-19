var form = document.getElementsByTagName("form");
var add = document.getElementById("add");
var remove = document.getElementById("remove");
var parent = document.getElementById("new");
var runnerNumber = 1;
var runner = [];

var objPallet = {
    type: 'pallet',
    Number: 0,
    Height: 0,
    Weight: 0,
}
var objParcel = {
    type: 'parcel',
    Weight:  0,
    Length:  0,
    Width:  0,
    Height: 0,
}
var submit = document.getElementById("submit");

add.onclick = function() {
    var newElem = document.createElement('div');
    newElem.setAttribute('id',runnerNumber)

    newElem.innerHTML = '<fieldset>\n' +
        '        <div class="row check">\n' +
        '            <input type="checkbox" id="runner'+ runnerNumber +'" checked>\n' +
        '            <label class="col-md-2 runner" for="runner'+ runnerNumber +'" onclick="resetBlock('+ runnerNumber +')">\n' +
        '                <span class="runner-content" data-parcel="PARCEL" data-pallet="PALLET"></span>\n' +
        '            </label>\n' +
        '            <div class="parcel col-md-10 row">\n' +
        '                <div class="parcel-item col-md-3 col-sm-6 col-xs-12">\n' +
        '                    <label data-units="Kg">Weight: <input type="number"></label>\n' +
        '                </div>\n' +
        '                <div class="parcel-item col-md-3 col-sm-6 col-xs-12">\n' +
        '                    <label data-units="Cm">Length: <input type="number"></label>\n' +
        '                </div>\n' +
        '                <div class="parcel-item col-md-3 col-sm-6 col-xs-12">\n' +
        '                    <label data-units="Cm"> Width: <input type="number"></label>\n' +
        '                </div>\n' +
        '                <div class="parcel-item col-md-3 col-sm-6 col-xs-12">\n' +
        '                    <label data-units="Cm">Height: <input type="number"></label>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pallet col-md-10 row">\n' +
        '                <div class="pallet-item col-md-offset-2 col-md-3 col-sm-5 col-xs-12">\n' +
        '                    <label data-units="Pcs">\n' +
        '                        Number:\n' +
        '                        <input type="number">\n' +
        '                    </label>\n' +
        '                </div>\n' +
        '                <div class="pallet-item col-md-3 col-sm-5 col-xs-12">\n' +
        '                    <label data-units="Cm">\n' +
        '                        Height:\n' +
        '                        <input type="number">\n' +
        '                    </label>\n' +
        '                </div>\n' +
        '                <div class="pallet-item col-md-3 col-sm-5 col-xs-12">\n' +
        '                    <label data-units="Kg">\n' +
        '                        Weight:\n' +
        '                        <input type="number">\n' +
        '                    </label>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>\n' +
        '    </fieldset>';

    parent.appendChild(newElem);
    runnerNumber++;
    return runnerNumber;
}
remove.onclick = function () {
    var lastNumber = runnerNumber - 1;
    var lastChild = document.getElementById(lastNumber);
    // console.log(lastChild);
    parent.removeChild(lastChild);

    runnerNumber--;
    return runnerNumber;
}
submit.onclick = function () {
    var sender = document.getElementById('sender').value;
    var recipient = document.getElementById('recipient').value;
    var senderClass = document.getElementsByClassName('sender');
    var recipientClass = document.getElementsByClassName('recipient');
    var senderZip = senderClass[0].getElementsByTagName('input')[0].value;
    var recipientZip = recipientClass[0].getElementsByTagName('input')[0].value;

    console.log('Senders country: ' + sender);
    console.log('Senders ZIP: ' + senderZip);
    console.log('Recipients country: ' + recipient);
    console.log('Recipients ZIP: ' + recipientZip);

    for(var i = 0; i < runnerNumber; i++){
        var row = document.getElementById(i);
        var input = row.getElementsByTagName('input');
        var arr = [];
     //   console.log(input);

        for(var j = 0; j < input.length; j++){
            var value = input[j].value;
            //console.log(value);
            if(value > 0 ) {
                arr[j] = value;
            //    console.log(arr + '<-value / length-> ' + arr.length);
            }
            if(j == 7 ) {
                if(arr.length == 5){
                    objParcel.type = 'parcel';
                    objParcel.Weight = arr[1];
                    objParcel.Length = arr[2];
                    objParcel.Width = arr[3];
                    objParcel.Height = arr[4];
                    console.log(objParcel);
                }else if(arr.length == 8){
                    objPallet.type = 'pallet';
                    objPallet.Number = arr[5];
                    objPallet.Height = arr[6];
                    objPallet.Weight = arr[7];
                    console.log(objPallet);
                }
            //     else {
            //         console.log('WTF!');
            //     }
             }
        }
    }
}

function resetBlock(num) {
    var row = document.getElementById(num);
    var input = row.getElementsByTagName('input');
    for (var j = 0; j < input.length; j++) {
        input[j].value = null;
    }
}