<?php  header('Access-Control-Allow-Origin: *');

// Check for empty fields
if (empty($_POST['name'])) {
    $errors[] = 'No name provided';
 }

 if (empty($_POST['email'])) {
     $errors[] = 'No email provided';
 }

 if (!filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
     $errors[] = 'Email format wrong';
 }

 if (empty($_POST['phone'])) {
     $errors[] = 'No phone provided';
 }

 if (empty($_POST['message'])) {
     $errors[] = 'No message provided';
 }

 if (count($errors)) {
   echo json_encode($errors);
   return false;
}


$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

// Create the email and send the message
$to = '4face.studio@gmail.com';
$email_subject = "Website Contact Form:  $name";
$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: noreply@4face.studio\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
return true;
?>
