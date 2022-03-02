import Validator from 'validatorjs';

export const getUsers = (req, res) => {
    // example output
    res.json({
        data: [
            {
                userId: 5,
                hobbies: ['football', 'reading'],
                pets: ['Fluffy'],
                favoriteFood: 'Pizza',
                favoriteMovie: 'Matrix 1',
            },
            {
                userId: 7,
                hobbies: ['movies'],
                favoriteFood: 'Popcorn',
                favoriteMovie: 'Taxi Driver',
                favoriteSeries: 'The Wire'
            },
            {
                userId: 10,
                hobbies: ['Dancing', 'Programming'],
                pets: ['Tiger', 'Drops'],
                favoriteSeries: 'Friends'
            }
        ]
    });
}

export const addProfile = (req, res) => {
    // validate input
    // Here you have to check the data
    const data = req.body;

    const success = true; // <- replace this

    if (success) {
        res.json({
            message: "Success"
        });
    } else {
        res.status(406).json({
            message: "Invalid Input",
            errors: [], // <- insert errors here
        })
    }
}