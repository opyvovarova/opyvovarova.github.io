<?php
# 1. Создать несортированный массив $randArray, с 20 случайными числами от 1 до 20
$randArray = array();
# 2. Отсортировать массив с помощью алгоритма сортировки пузырьком
# 3. Найти минимальное и максимальное значение массива
# 4. Вывести на экран:
# 4.1 Несортированный массив
# 4.2 Сортированный массив
# 4.3 Минимальное значение
# 4.4 Максимальное значение
?>
<h1><strong>Несортированный массив </strong></h1>
<?php

function printArray($randArray ){
	#Выводим содержимое массива
	foreach($randArray as $value)
		echo $value . '<br>';
}

	#Массив
	$randArray = array();
    #В цикле формируем массив
	for($i = 0; $i <= 20; $i++){

		//Получаем случайное число
		$value = rand( 0, 20 );

		$randArray[] = $value;
	}

	//Выводим содержимое массива
	printArray($randArray);


?>
<hr>
<h1><strong>Cортировка пузырьком </strong></h1>
<?php

	//перебираем массив
	for($j = 0; $j < count($randArray) - 1; $j++){
		for($i = 0; $i < count($randArray) - $j -1; $i++){
			//eсли текущий элемент больше следующего
			if($randArray[$i] > $randArray[$i + 1]){
				//меняем местами элементы
				$tmp_var = $randArray[$i + 1];
				$randArray[$i + 1] = $randArray[$i];
				$randArray[$i] = $tmp_var;
			}
		}
	}
	//var_dump($randArray);
	echo '<pre>';
	print_r($randArray);
	echo '</pre>';

?>
<hr>
<h1><strong>Минимальное значение </strong></h1>
<?php
$min = $randArray[0];
foreach ($randArray as $val)
	if  ($min > $val)
		$min = $val;

echo "Минимальное число в массиве:" .  "  "  . $min;

?>
<hr>
<h1><strong>Максимальное значение </strong></h1>
<?php
	$max = $randArray[0];
	foreach ($randArray as $val)
		if  ($max < $val)
			$max = $val;

echo "Максимальное  число в массиве:" .  "  "  . $max;

?>
