function menseki(hankei){
    return(hankei*hankei*3.14+"㎠");
}
document.write(menseki(5)+"<br>");
document.write(menseki(7)+"<br>");
document.write(menseki(10)+"<br>");

document.write("<br>");
document.write("<br>");

function nyuenryo(otona,kodomo){
    return(otona*500)+(kodomo*200)+"円です。";
}
function nyuenhyoji(group,otona,kodomo){
    return group+"グループの合計金額"+nyuenryo(otona,kodomo)+"<br>";
}
document.write("Aグループの合計金額"+nyuenryo(2,4)+"<br>");
document.write("Bグループの合計金額"+nyuenryo(1,5)+"<br>");
document.write("Cグループの合計金額"+nyuenryo(3,7)+"<br>");
document.write(nyuenhyoji("D",100,1000));
