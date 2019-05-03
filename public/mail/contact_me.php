<?php  header('Access-Control-Allow-Origin: *'); header('Content-type: application/json');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

// Check for empty fields
if (empty($_POST['name'])) {
    $missingFields[] = 'No name provided';
}
if (empty($_POST['email'])) {
    $missingFields[] = 'No email provided';
}
if (!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
    $missingFields[] = 'Email format wrong';
}
if (empty($_POST['message'])) {
    $missingFields[] = 'No message provided';
}

/** @noinspection PhpUndefinedVariableInspection */
if (count($missingFields)) {
    http_response_code(400);
//    echo json_encode($missingFields);
    echo json_encode(file_get_contents('php://input'));
    return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
// Create the email and send the message
$to = 'mail@4face.studio';
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@4face.studio\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
echo json_encode('success');
return true;
?>