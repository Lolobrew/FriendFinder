
var friendsData = require("../data/friends");

function compare(newFriend) {
    var difference = [];

    for (var i = 0; i < friendsData.length; i++) {
        var val = 0
        
        for (var j = 0; j < newFriend.scores.length; j++) {
            val += Math.abs(parseInt(newFriend.scores[j]) - parseInt(friendsData[i].scores[j]));
        }
        difference.push(val);
        // console.log(val);
    }

    friendsData.push(newFriend);
     return friendsData[difference.indexOf(Math.min(...difference))];
}

module.exports = function(app) {


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


  app.post("/api/friends", function(req, res) {
      var newFriend = req.body
      res.send(compare(newFriend));
      res.json(true);
  });
}
