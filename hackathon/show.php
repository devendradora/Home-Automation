<html>
<head>
	<title>Show Appliances</title>
	
</head>
<body>
<?php 
$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="test";

$con=new mysqli($host,$user,$password,$dbname,$port,$socket)
or die('Could not connect to db server'.mysqli_connect_error());

$query="select * from glass";
$result=(@mysqli_query($con,$query));
echo '<table>';
while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
	echo '
	<tr>
	<td >'.$row['name'].'</td>
	<td >'.$row['value'].'</td>
	</tr>';
}
?>
<?php echo '</table>'; ?>
</body>
</html>