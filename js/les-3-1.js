// for([начало]; [условие]; [шаг]) {действие}

var num = prompt("Введите число элементов массива")

// создаём пустой массив
var arr = []

for (i = 0; i < num; i++) {
    arr.push(prompt("Введите " + Number(i + 1) + " Элемент"))
}

alert(arr)