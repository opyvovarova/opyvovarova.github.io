
const canvas = document.getElementById('game');

//Змейка двухмерная
let conText = canvas.getContext("2d");

//Размер клетки на поле 16px
let grid = 16;

//Служебная переменная- которая отвечает за скорость
let count = 0;

//Сама змейка
let snake = {
    x: 200,
    y: 200,

    //Скорость змейки - в каждом новом кадре смещается по оси X или Y
    dx: grid,
    dy: 0,

    //Тащим за собой хвост, который пуст пока
    cells: [],

    //Стартовая длина змейки 4 клетки
    maxCells: 4
};

//А это еда- яблоко . 
let apple = {
    //Начальные координаты яблока
    x: 320,
    y: 320
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}

function loop () {
    //замедление скорости игры с 60 кадров до 15.
    requestAnimationFrame(loop);

    //если переменная count меньше 4,то код не будет выполнятся
    if(++count < 4) {
        return;
    }

    //Обнуляем переменную скорости
    count = 0;

    //Очищаем игровое поле
    conText.clearRect(0,0, canvas.width, canvas.height);

    //Двигаем змейку с нужной скоростью
    snake.x += snake.dx;
    snake.y += snake.dy;

    //Если змейка достигла края поля по горизонтали - продолжаем ее движение с противоположной стороны
    if(snake.x < 0) {
        snake.x = canvas.width - grid;
    }
    else if (snake.x >= canvas.width) {
        snake.x = 0;
    }

    //Делаем тоже самое для движение по вертикали
    if (snake.y < 0) {
        snake.y = canvas.height - grid;
    }
    else if (snake.y >= canvas.height) {
        snake.y = 0;
    }

    //Продолжаем двигаться в выбранном направлении. Голова всегда впереди
    //, поэтому добавляем ее координаты в начало массива. который отвечает за всю змейку
    snake.cells.unshift({ x: snake.x, y: snake.y});

    //Сразу после этого удаляем последний элемент из массива
    //потому что она движется и постоянно освобождает клетки после себя
     if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
     }

     // Рисуем яблоко
     conText.fillStyle = 'red';
     conText.fillRect(apple.x, apple.y, grid - 1, grid - 1);

     //Окно движение змейки один нарисованный квадратик
     conText.fillStyle = "green";

     // Обрабатываем каждый элемент змейки
     snake.cells.forEach(function(cell, index) {
        //Чтобы создать эффект клеточек, делаем зеленын квадратики меньше, на один пиксель, чтобы
        //вокруг них образовалась черная граница
         conText.fillRect(cell.x, cell.y, grid - 1, grid - 1);

         //Если змейка добралась до яблака
         if (cell.x === apple.x && cell.y === apple.y) {
            //увеличиваем длину змейки
            snake.maxCells++;

            //Рисуем новое яблоко
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
         }

         //Проверяем не столкнулась ли змея сама с собой
         //Для этого перебираем весь массив , и смотрим , есть ли у нас  массиве 
         //змейки две клетки с одинаковыми координатами
         for ( let i = index + 1; i < snake.cells.length; i++) {
            //если такие клетки есть - начинаем игру заново
            if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                //Задаем стартовые параметры основными переменными
                snake.x = 200;
                snake.y = 200;
                snake.cells = [];
                snake.maxCells = 4;
                snake.dx = grid;
                snake.dy = 0;

                //Ставим яблоко в случайное место
                apple.x = getRandomInt(0, 25) * grid;
                apple.y = getRandomInt(0, 25)* grid;
            }
         }
     });

}

document.addEventListener('keydown', function(e) {
    //движемся по горизонтали
    if (e.which === 37 && snake.dx === 0) {
        snake.dx = -grid;
        snake.dy = 0;
    }

    //стрелака вверч
    else if(e.which === 38 && snake.dy === 0) {
        snake.dy = -grid;
        snake.dx = 0;
    }
    //стрелка вправо
    else if (e.which === 39 && snake.dx === 0) {
        snake.dx = grid;
        snake.dy = 0;
    }

    //стрелка вниз
    else if ( e.which === 40 && snake.dy === 0) {
        snake.dy = grid;
        snake.dx = 0;
    } 
})







requestAnimationFrame(loop);
