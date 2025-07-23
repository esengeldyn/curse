const calculate = document.getElementById('button').addEventListener('click', function(){
    let height = document.getElementById('height').value
    let weight = document.getElementById('weight').value
    let imt = weight / Math.pow(height, 2)
    let totalImt = Math.round(imt)
    if(totalImt <= 18.5){
        document.getElementById('result').innerHTML = 'Недостаточный вес'
    }else if( totalImt >= 18.5&& totalImt <=24.9 ){
        document.getElementById('result').innerHTML = 'Нормально'
    }else if( totalImt >= 25.9&& totalImt <=29.9 ){
        document.getElementById('result').innerHTML = 'Избыточный вес'
    }else{
        document.getElementById('result').innerHTML = 'Ожирение'
    }
    // console.log(Math.round(imt))
})