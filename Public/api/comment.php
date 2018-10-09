<?php
require '../../app/common.php';
// 1. Go to the database and get all teams
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $work = new Work($_POST);
  $work->create();
  echo json_encode($work);
  exit;
}
$comments = Comment::fetchAll();
// 2. Convert to JSON
$json = json_encode($comments, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;

//change work to comment
