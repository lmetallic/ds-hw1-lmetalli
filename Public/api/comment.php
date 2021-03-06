<?php
require '../../app/common.php';
// 1. Go to the database and get all teams
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  require 'commentPost.php';
  exit;
}

$commentArr = [];
$commentArr = Comment::fetchAll();
// 2. Convert to JSON
$json = json_encode($commentArr, JSON_PRETTY_PRINT);
// 3. Print
header('Content-Type: application/json');
echo $json;
