var db = require('../models');

module.exports = function (app) {
  //  route to get all workouts
  app.get('/api/workouts', (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  //  route to create a new workout
  app.post('/api/workouts', (req, res) => {
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  //   Route updates the workout
  app.put('/api/workouts/:id', (req, res) => {
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { exercises: req.body },
      }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  // returns workouts by  range
  app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
      .limit(5)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
};
