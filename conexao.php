<?php
header('Content-Type: application/json');

$servername = "localhost"; 
$username = "root";
$password = "";  
$dbname = "bdcontatos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(['error' => 'Falha na conexão com o banco de dados: ' . $conn->connect_error]);
    exit();
}
if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $nome = $conn->real_escape_string($_POST['nome']);
    $email = $conn->real_escape_string($_POST['email']);
    $tel = $conn->real_escape_string($_POST['tel']);
    $msg = $conn->real_escape_string($_POST['msg']);
    $sql= "INSERT INTO tbmensagens (nome_usuario, email_usuario, telefone_usuario, msg_usuario) VALUES ('$nome', '$email','$tel','$msg')";

    if ($conn->query($sql)) {
        echo json_encode(['sucesso' => true]);
    } else {
        echo json_encode(['erro' => $conn->error]);
    }
}

else{
    $sql = "SELECT * FROM tbmensagens";
    $result = $conn->query($sql);

    $clientes = [];

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $clientes[] = $row;
        }
    }
    echo json_encode($clientes);
}
$conn->close();






?>