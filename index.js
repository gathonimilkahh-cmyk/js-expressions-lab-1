//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    // tot_temperature_in_fahrenheit,
    // tot_temperature_in_celsius,
    // avg_temperature_in_fahrenheit,
    // avg_temperature_in_celsius
};

/*const day1TempF = 32(0)
const day2TempC = 25 (77)
const day3TempF = 70(21)
const day4TempC = 18 (64)
const day5TempF = 80(27)
const day6TempC = 15(59)
const day7TempF = 72(22)
const day8TempC = 28 (82)
const day9TempF = 68(20)
const day10TempC = 20 (68)
const day11TempF = 75(24)
const day12TempC = 23 (73)
const day13TempF = 82(28)
const day14TempC = 30 (86)
const day15TempF = 65(18)
const day16TempC = 22 (72)
const day17TempF = 77(25)
const day18TempC = 26 (79)
const day19TempF = 78(26)
const day20TempC = 24 (75)
const day21TempF = 73(23)
const day22TempC = 21 (70)
const day23TempF = 79 (26)
const day24TempC = 27 (81)
const day25TempF = 71 (22)
const day26TempC = 19 (66)
const day27TempF = 74 (23)
const day28TempC = 17 (63)
const day29TempF = 76 (24)
const day30TempC = 29 (84) */

const day1TempF = 32
const day2TempF = 77
const day3TempF = 70
const day4TempF = 64.4
const day5TempF = 80
const day6TempF = 59
const day7TempF = 72
const day8TempF = 82.4
const day9TempF = 68
const day10TempF = 68
const day11TempF = 75
const day12TempF = 73.4
const day13TempF = 82
const day14TempF = 86
const day15TempF = 65
const day16TempF = 71.6
const day17TempF = 77
const day18TempF = 78.8
const day19TempF = 78
const day20TempF = 75.2
const day21TempF = 73
const day22TempF = 69.8
const day23TempF = 79
const day24TempF = 80.6
const day25TempF = 71
const day26TempF = 66.2
const day27TempF = 74
const day28TempF = 62.6
const day29TempF = 76
const day30TempF = 84.2

tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF
avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30
console.log(tot_temperature_in_fahrenheit)
console.log(avg_temperature_in_fahrenheit)


const day1TempC = 0
const day2TempC = 25
const day3TempC = 21.11111111111111
const day4TempC = 18
const day5TempC = 26.6666666667
const day6TempC = 15
const day7TempC = 22.2222222222
const day8TempC = 28
const day9TempC = 20
const day10TempC = 20
const day11TempC = 23.8888888889
const day12TempC = 23
const day13TempC = 27.7777777778
const day14TempC = 30
const day15TempC = 18.3333333333
const day16TempC = 22
const day17TempC = 25
const day18TempC = 26
const day19TempC = 25.5555555556
const day20TempC = 24
const day21TempC = 22.7777777778
const day22TempC = 21
const day23TempC = 26.1111111111
const day24TempC = 27
const day25TempC = 21.6666666667
const day26TempC = 19
const day27TempC = 23.3333333333
const day28TempC = 17
const day29TempC = 24.4444444444
const day30TempC = 29

tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC
avg_temperature_in_celsius = tot_temperature_in_celsius / 30
console.log(tot_temperature_in_celsius)
console.log(avg_temperature_in_celsius)

/*function celsiusTemps(fahrenheitTemperature) {
    let temperature = (fahrenheitTemperature - 32) * 5 / 9
    return temperature
}

let unity = celsiusTemps(70)



console.log(unity)

//0, 21, 27, 22, 20, 24, 28, 18, 25, 26, 23, 26, 22, 23, 24

/*function fahrenheitTemps(celsiusTemperature) {
    let temperature = (celsiusTemperature * 9 / 5) + 32
    return temperature
}

let union = fahrenheitTemps(29)

console.log(union)*/