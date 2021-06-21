// const delayTask = document.querySelector('.task-1')

const delay = ms => {
    // return Promise.resolve(ms);
    return new Promise(resolve => {
        setTimeout(() => {
                resolve(ms);
        }, ms);
    });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
// delayTask.addEventListener('click', () => {
    delay(2000).then(logger); // Resolved after 2000ms
    delay(1000).then(logger); // Resolved after 1000ms
    delay(1500).then(logger); // Resolved after 1500ms
// });

