var express = require('express');
var router = express.Router();
var path = require('path');

// var jsonfile = require('jsonfile');
var friendsInfo = require('../data/friends.json');
var file = './app/data/friends.js';

// Show all friends
router.get('/api/friends', function(req, res) {
    res.json(jsonfile.readFileSync(file));
})

router.post('/api/friends', function(req, res) {
    console.log(req.body)
    console.log('hellowordl')
    var selfInfo = req.body
    var match = findFriend(selfInfo, friendsInfo);
    res.json(match);
    // var friends = jsonfile.readFileSync(file);
  
    // var index = findFriend(req.body, friends);
  
    // friends.push(req.body);
    // jsonfile.writeFileSync(file, friends, { spaces: 2 });

    // res.json({
    //     name: friends[index].name,
    //     photo: friends[index].photo,
    // });
})
function findFriend(self, friends) {
    var friend = {};
    for (var i in friends) {
        var diff = 0; 
        for (var j in friends[i].scores) {
            diff += Math.abs(Number(self.scores[j]) - Number(friends[i].scores[j]));
        }
        if (friend.diff === undefined) {
            friend.diff = diff;
            friend.index = i;       
        } else {
            if (diff < friend.diff) {
                friend.diff = diff;
                friend.index = i;
            }
        }
    }
    console.log(friend);
    return friends[friend.index];
}

module.exports = router;