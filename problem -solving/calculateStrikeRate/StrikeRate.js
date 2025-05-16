function calculateStrikeRate(runs, balls){
    if (balls === 0){
        return 0;
    }const strikerate = (runs / balls) * 100;
    return parseFloat(strikerate.toFixed(2));
}
console.log(calculateStrikeRate(45,30));
console.log(calculateStrikeRate(100,60));
console.log(calculateStrikeRate(25,40));


