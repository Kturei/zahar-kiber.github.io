var animals = [" Cat", " Dog", " Cow", " Fish"]

// .indexOf - определяет индекс элемента в массива
// alert(animals.indexOf(" Cow"))

alert("Исходный список" + animals)

// .splice - удаляет элементы массива с заданного индекска и в опр. кол.
newAnimals = animals.splice(2, 1)
alert("Изменённый список" + animals)
alert("Вырезанные элементы из списка" + newAnimals)