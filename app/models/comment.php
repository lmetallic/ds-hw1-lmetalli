<?php
class Comment
{
  public $comment_id;
  public $comment;

//just need id and comment

  public function __construct($row){
    $this->comment_id = isset($row['comment_id']) ? intval($row['comment_id']) : null;
    $this->comment = isset ($row['name']);
  }

  public function create() {
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);

  $sql = 'INSERT INTO Comment (comment_id, comment)
          VALUES (?,?)';

  $statement = $db->prepare($sql);

  $success = $statement->execute([
    $this->comment_id,
    $this->comment,
  ]);
  $this->id = $db->lastInsertId();
}

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Comment';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute();

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theComment =  new Comment($row);
      array_push($arr, $theComment);
    }
    return $arr;
  }
}
