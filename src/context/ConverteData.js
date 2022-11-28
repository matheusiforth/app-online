export function ConverteData(data) {   
         return data.substr(8, 2) + '/' + data.substr(5, 2) + '/' + data.substr(0, 4); 
    //0000-00-00 (primeiro a posição que tu quer e depois a quantidade de caracteres)
}