function descuento()
{
    var mt = parseFloat(document.getElementById("mt").value);
    var psj = mt*15/100
    var final;

    final = mt - psj;
    document.getElementById("psj").innerHTML = "Su descuento total es de $" + psj;
    document.getElementById("final").innerHTML = " y el precio final es de $" + final;
}