var total = 0;
var monthly = 0;
var percentAdd
function NewCard(){
    var amount =parseFloat(document.getElementById('manat').value)
    var month = Number(document.getElementById('ay').value)
    var percent = parseFloat(document.getElementById('fayz').value)


    var percentAdd = (amount * percent)/100 ;
    var total = amount + percentAdd;
    var monthly = Math.round(total/month)

    document.getElementById('monthly').innerHTML = `Aylıq ödəniş : ${monthly} AZN`
    document.getElementById('sum').innerHTML = `Kredit məbləği : ${total} AZN`
}