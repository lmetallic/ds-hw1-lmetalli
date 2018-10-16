var commentTable = new Vue({
  el: '#commentMain',
  data: {
    Comment: {
      comment_id: 0,
      comment: '',
    },
    commentArr: [],
    commentForm: { },   // populated by this.getEmptyCommentForm()
  },

  methods: {
    handleCommmentForm(e) {

      e.preventDefault();
      const s = JSON.stringify(this.commentForm);
      console.log("comment form");
      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s
      })
      .then( response => response.json() )
      .then( json => {this.commentArr.push(json)})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })
      // Reset commentForm
      this.commentForm = this.getEmptyCommentForm();
    },
    getEmptyCommentForm() {
      return {
        comment: null
      }
    },
  },


  created () {

    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentTable.commentArr = json} )
    .catch( err => {
      console.error('COMMENT FETCH ERROR:');
      console.error(err);
    })
    this.commentForm = this.getEmptyCommentForm();
  }
});
