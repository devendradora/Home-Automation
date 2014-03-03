<html>
<head>
	<title>glass</title>
	<style type="text/css">

	</style>
</head>
<body>
<button  style="border-radius:10px;"><a href="172.30.200.40/hackathon/indexs.html" style="text-decoration:none">Back</a></button>
<?php
$host="localhost";
$port=3306;
$socket="";
$user="root";
$password="";
$dbname="test";

$con=new mysqli($host,$user,$password,$dbname,$port,$socket)
or die('Could not connect to db server'.mysqli_connect_error());

$query="create table if not exists GLASS (name varchar(30),value varchar(4),time TIMESTAMP)";

$result=(@mysqli_query($con,$query));
if(isset($_POST['tube']))
$quer="insert into GLASS values('tubelight','ON',now())";
else
$quer="insert into GLASS values('tubelight','OFF',now())";
$result=(@mysqli_query($con,$quer));
if(isset($_POST['fan']))
$quer="insert into GLASS values('Fans','ON',now())";
else
$quer="insert into GLASS values('Fans','OFF',now())";
$result=(@mysqli_query($con,$quer));
if(isset($_POST['tv']))
$quer="insert into GLASS values('Television','ON',now())";
else
$quer="insert into GLASS values('Television','OFF',now())";
$result=(@mysqli_query($con,$quer));
if(isset($_POST['ac']))
$quer="insert into GLASS values('AirConditioner','ON',now())";
else
$quer="insert into GLASS values('AirConditioner','OFF',now())";
$result=(@mysqli_query($con,$quer));

$query="select * from glass";
$result=(@mysqli_query($con,$query));
echo '<table>
<tr>
<td>name</td>
<td>value</td>
<td>time</td>
</tr>
';
while($row = mysqli_fetch_array($result,MYSQLI_ASSOC)){
	echo '
	<tr>
	<td >'.$row['name'].'</td>
	<td >'.$row['value'].'</td>
	<td >'.$row['time'].'</td>
	</tr>';
}
?>
<?php echo '</table>'; ?>
</body>
</html>