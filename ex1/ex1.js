//add row at first table
$(document).ready(function(){
    let count =  1;
    $("#btn-add").click(function(){
        count++;
        $("tbody").prepend(
        '<tr>'+
            '<td scope="row">'+
                '<button type="button" class="btn btn-danger deleted mx-2"><i class="bi bi-trash-fill mx-1"></i>Delete</button>'+
                '<button type="button" class="btn btn-primary clone mx-2"><i class="bi bi-sticky-fill mx-1"></i>clone</button>'+
            '</td>'+
            '<td>'+
                '<input type="number" class="form-control input-check" id="inputNumber" name="number">'+
            '</td>'+
            '<td>'+
                '<input type="text" class="form-control input-check" id="inputText" name="text">'+
            '</td>'+
            '<td>'+
                '<input class="form-check-input label-new" value="0" type="radio" name="status-' + count + '" id="typeNew">'+
                '<label class="form-check-label me-4" for="typeNew">New</label>'+
                '<input class="form-check-input label-new" value="1" type="radio" name="status-' + count + '" id="typeInprogess">'+
                '<label class="form-check-label me-4" for="typeInprogess">In progess</label>'+
                '<input class="form-check-input label-confirmed" value="2" type="radio" name="status-' + count + '" id="typeConfirmed">'+
                '<label class="form-check-label me-4" for="typeConfirmed">Confirmed</label>'+
            '</td>'+
        '</tr>');
        updateRow(1);
        notConfirmed();
    });


    $(document).on('click', ".deleted", function () {
        $(this).closest('tr').remove();
        updateRow(-1);
        notConfirmed();
    });


    $(document).on('click', ".clone", function (e) {
        let rowToClone = $(this).closest('tr').clone();
        let typeRadioes = $(rowToClone).find("input[type=radio]");
        count++;
        for (let item of typeRadioes)
        {
            $(item).attr('name', 'status-' + count);
        }
        $(this).closest('tr').after(rowToClone);
        updateRow(1);
        notConfirmed();
    });


    let counter = 1
    function updateRow(number) {
        counter = counter + number
        $("#numAll").html(counter)
    }


    $(document).on('click', '.label-confirmed', function () {
        $(this).parents('tr').find('.input-check').attr('disabled', true);
        notConfirmed();
    });
    $(document).on('click', '.label-new', function () {
        $(this).parents('tr').find('.input-check').removeAttr('disabled');
        notConfirmed();
    });


     let countconfirmed=1;
     $("#nymNotConfrimed").html(countconfirmed);

    function notConfirmed () {
        const rowTable = $("tbody tr");
        countconfirmed = 0;
        for (let item of rowTable)
        {
            let typeConfrimed = $(item).find("input[type=radio][value=2]").is(":checked");
            if (!typeConfrimed)
            {
                countconfirmed++;
            }
        }
        $("#nymNotConfrimed").html(countconfirmed)
    }
}); 

