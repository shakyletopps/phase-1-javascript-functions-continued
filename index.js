function saturdayFun(event = 'roller-skate'){
if(event==='roller-skate'){
return 'This Saturday, I want to roller-skate!'
}
return `This Saturday, I want to ${event}!`
}

const mondayWork = function (work = 'go to the office'){
    if( work ==='go to the offcie'){
        return 'This Monday, I will go to the office.'
    } else {
        return `This Monday, I will ${work}.`
    }
}

function wrapAdjective(word = "*") {
return function innerFun() {
    if( word === "*") {
return `You are ${word}a hard worker${word}!`
    } else if(word ==="||"){
        return `You are ${word}a dedicated programmer${word}!`
    }
}
}

