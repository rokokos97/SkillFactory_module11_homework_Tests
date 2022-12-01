function getPercents(percent, number) {
    if(percent<0 ||typeof percent !== "number" || typeof number !== "number"){
        return "Введенные значения вне допустимого диапазона"}
    return number*(percent/100)
}
module.exports = getPercents