<?php 
$x = 5;
$p = 5;
	function test1(){
			global $p;
			$y = 6;
			$z = $x + $y;
			echo "<span>这是一个没有使用global关键词的全局变量x：$x</span><br>"; /*由于x是全局变量，所以在函数内无法进行访问*/
			echo "<span>这是一个使用global关键词的全局变量p:$p</span><br>"; 
			echo "<span>这只是一个局部变量y：$y</span>";
};

	test1();

echo "<div>这是一个全局变量x:$x</div>";

	function test2(){
		$GLOBALS['p'] = $GLOBALS['x'] + $GLOBALS['p'] ;
};
	test2();
		echo $p; /*PHP 将所有全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。*/
		
?>
