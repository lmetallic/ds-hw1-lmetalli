<?php
class Comment
{
  public $id;
  public $comment;

//just need id and comment
  public function create() {
  $db = new PDO(DB_SERVER, DB_USER, DB_PW);
  $sql = 'INSERT INTO Work (team_id, task_id, start_date, hours, completion_estimate)
          VALUES (?,?,?,?,?)';
  $statement = $db->prepare($sql);
  $success = $statement->execute([
    $this->team_id,
    $this->task_id,
    $this->start,
    $this->hours,
    $this->completion_estimate
  ]);
  $this->id = $db->lastInsertId();
}

  public static function fetchAll() {
    // 1. Connect to the database
    $db = new PDO(DB_SERVER, DB_USER, DB_PW);

    // 2. Prepare the query
    $sql = 'SELECT * FROM Teams';
    $statement = $db->prepare($sql);

    // 3. Run the query
    $success = $statement->execute();

    // 4. Handle the results
    $arr = [];
    while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
      $theTeam =  new Team($row);
      array_push($arr, $theTeam);
    }
    return $arr;
  }
//change Teams to Comment
