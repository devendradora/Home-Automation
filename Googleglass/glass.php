<html>
<head>
	<title>glass</title>
</head>
<body>
<?php
$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="dev@9347";
$dbname="test";

$con=new mysqli($host,$user,$password,$dbname,$port,$socket)
or die('Could not connect to db server'.mysqli_connect_error());

$query="create table if not exists GLASS (name varchar(30),value int)";

$result=(@mysqli_query($con,$query));
if(isset($_POST['tube']))
$quer="insert into GLASS values('tubelight',".$_POST['tube'].")";
else
$quer="insert into GLASS values('tubelight','0')";
$result=(@mysqli_query($con,$quer));
if(isset($_POST['fan']))
$quer="insert into GLASS values('Fans',".$_POST['fan'].")";
else
$quer="insert into GLASS values('Fans','0')";
$result=(@mysqli_query($con,$quer));
if(isset($_POST['tv']))
$quer="insert into GLASS values('Television',".$_POST['tv'].")";
else
$quer="insert into GLASS values('Television','0')";
$result=(@mysqli_query($con,$quer));
if(isset($_POST['ac']))
$quer="insert into GLASS values('AirConditioner',".$_POST['ac'].")";
else
$quer="insert into GLASS values('AirConditioner','0')";
$result=(@mysqli_query($con,$quer));

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