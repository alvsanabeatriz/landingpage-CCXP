const day=document.getElementById('day')
const hour=document.getElementById('hour')
const minute=document.getElementById('minute')
const second=document.getElementById('second')

const lancamento="01 dec 2023"

function countdown(){
    const lancamentoDia=new Date(lancamento)
    const hoje=new Date()
    const totalSegundo=(lancamentoDia-hoje)/1000
    const dayFinal=Math.floor(totalSegundo/60 /60 /24)
    const hourFinal=Math.floor(totalSegundo/60 /60) %24
    const minuteFinal=Math.floor(totalSegundo/60) %60
    const secondFinal=Math.floor(totalSegundo) %60


    day.innerHTML=dayFinal +"D"
    hour.innerHTML=formatTime(hourFinal) +"H"
    minute.innerHTML=formatTime(minuteFinal) +"M"
    second.innerHTML=formatTime(secondFinal) +"S"
}

function formatTime(time){
    return time < 10 ? `0${time}`:time
}

countdown();

setInterval(countdown,1000)
    



