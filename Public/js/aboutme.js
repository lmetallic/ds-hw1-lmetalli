var RandomUser = new Vue ({
    el: '#bio',
    data: {
      person: {
            "name": '',
            "origin": '',
            "dob": '',
            "gender": '',
            "img": '',
            "email":''
          },
      },

methods: {
  prettyDate: function (d) {
    return moment(d).format('l')
  },

  calculateAge(thiswouldbeeasierifwepulledAgefromRandomUser) {
    return moment().diff(thiswouldbeeasierifwepulledAgefromRandomUser, 'years');
  },

  fetchRandomUser () {
    fetch('https://randomuser.me/api')
    .then( response => response.json() )
    .then( json =>
      {RandomUser.person.name = json.results[0].name.first+" "+json.results[0].name.last,
        RandomUser.person.gender=json.results[0].gender,
        RandomUser.person.origin=json.results[0].nat,
        RandomUser.person.dob=json.results[0].dob.date,
        RandomUser.person.img=json.results[0].picture.large,
        RandomUser.person.email=json.results[0].email
        } )
    .catch( err => {
      console.log('TASK FETCH ERROR:');
      console.log(err);
    })
  },
},
created()
{
  this.fetchRandomUser();
}
});
