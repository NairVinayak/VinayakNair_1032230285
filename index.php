<link rel="stylesheet" href="style.css">
<?php include 'db.php'; ?>

<h2>Student Form</h2>

<form method="POST">
    Name: <input type="text" name="name"><br><br>
    Email: <input type="text" name="email"><br><br>
    Mobile: <input type="text" name="mobile"><br><br>
    Department: <input type="text" name="department"><br><br>
    <input type="submit" name="submit" value="Add">
</form>

<?php
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    mysqli_query($conn, "INSERT INTO student (name,email,mobile,department) 
    VALUES ('$name','$email','$mobile','$department')");
}
?>

<h2>Student Records</h2>

<table border="1">
<tr>
<th>ID</th><th>Name</th><th>Email</th><th>Mobile</th><th>Department</th><th>Action</th>
</tr>

<?php
$result = mysqli_query($conn, "SELECT * FROM student");

while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
    <td>{$row['id']}</td>
    <td>{$row['name']}</td>
    <td>{$row['email']}</td>
    <td>{$row['mobile']}</td>
    <td>{$row['department']}</td>
    <td>
        <a href='edit.php?id={$row['id']}'>Edit</a> |
        <a href='delete.php?id={$row['id']}'>Delete</a>
    </td>
    </tr>";
}
?>
</table>