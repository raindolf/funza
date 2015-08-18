exports.getLearn = function(req, res) {
  res.render('Learn', {
    title: 'Learn'
  });
};

extends layout

block content
  h1 Learn Feed