function censors( texto ){
    let censor = texto.toLowerCase() || prompt("Digite o texto que você quer censurar.");

    let alpha = "abcdefghijklmnopqrstuvwxyzçãáàéêíîóõôúû";

    for(var i = 0; i < censor.length; i++){
        if(alpha.includes(censor[i]) == true){
            censor = censor.replace(censor[i], "*");
        }
    }
    document.getElementById("result").innerHTML = censor;
}