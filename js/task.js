const horses = [
    'Fox',
    'Maya',
    'West',
    'Tiger',
];
function run(horse) {
    return new Promise((resolve, reject) => {
        const time = getRandomTime(1000, 2000)
        setTimeout(() => {
            resolve({ horse, time });
        }, time);
    });
}
  
run('Fox').then(x => console.log(x));

const promise = horses.map(run);
console.log(promise);

// Promise.race(promise).then(({ horse, time }) => {
//     console.log(
//         `Победил ${ horse }, финишировал за ${ time } времени.`);
// });

Promise.all(promise).then(() => {
    console.log(
        `Заезд закончен.`);
});

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}