<?php
require '../../app/common.php';
// 1. Go to the database and get all teams
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $comment = new Comment($_POST);
  $comment->create();
  echo json_encode($comment);
  exit;
}
$comment = Comment::fetchAll();
// 2. Convert to JSON
$json = json_encode($comment, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;

//change work to comment
