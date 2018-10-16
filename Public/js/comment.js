var comment = new Vue({
  el: '#commentMain',
  data: {
    task: {
      comment_id: 0,
      comment: '',
    },
    commentArr: [],
    commentForm: { },   // populated by this.getEmptyCommentForm()
  },

  methods: {
    handleCommmentForm(e) {
      const s = JSON.stringify(this.commentForm);

      console.log(s);

      // POST to remote server
      fetch('http://ec2-34-216-75-76.us-west-2.compute.amazonaws.com/api/comment.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: s // body data type must match "Content-Type" header
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

    fetch('http://ec2-34-216-75-76.us-west-2.compute.amazonaws.com/api/comment.php')
    .then( response => response.json() )
    .then( json => {comment.commentArr = json} )
    .catch( err => {
      console.error('COMMENT FETCH ERROR:');
      console.error(err);
    })
  }
})
