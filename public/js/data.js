const questions = [
    {
        id: 1,
        question: 'What does SQL stand for?',
        choices: [
            'Structured Question Language',
            'Structured Query Language',
            'Strong Question Language'
        ],
        answer: 'Structured Query Language'
    },

    {
        id: 2,
        question: 'Which SQL statement is used to extract data from a database?',
        choices: [
            'OPEN',
            'GET',
            'SELECT',
            'EXTRACT'
        ],
        answer: 'SELECT'  
    },

    {
        id: 3,
        question: 'Which SQL statement is used to update data in a database?',
        choices: [
            'MODIFY',
            'UPDATE',
            'SAVE',
            'SAVE AS'
        ],
        answer: 'UPDATE'  
    },

    {
        id: 4,
        question: 'Which SQL statement is used to delete data from a database?',
        choices: [
            'REMOVE',
            'COLLAPSE',
            'DELETE'
        ],
        answer: 'DELETE'  
    },

    {
        id: 5,
        question: 'Which SQL statement is used to insert new data in a database?',
        choices: [
            'INSERT NEW',
            'ADD NEW',
            'INSERT INTO',
            'ADD RECORD'
        ],
        answer: 'INSERT INTO'  
    },

    {
        id: 6,
        question: 'With SQL, how do you select a column named "FirstName" from a table named "Persons"?',
        choices: [
            'EXTRACT FirstName FROM Persons',
            'SELECT Persons.FirstName',
            'SELECT FirstName FROM Persons'
        ],
        answer: 'SELECT FirstName FROM Persons'  
    },

    {
        id: 7,
        question: 'With SQL, how do you select all the columns from a table named "Persons"?',
        choices: [
            'SELECT * FROM Persons',
            'SELECT [all] FROM Persons',
            'SEELECT Persons'
        ],
        answer: 'SELECT * FROM Persons'  
    },

    {
        id: 8,
        question: 'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" is "Peter"?',
        choices: [
            'SELECT [all] FROM Persons WHERE FirstName="Peter"',
            'SELECT * FROM Persons WHERE FirstName<>"Peter"',
            'SELECT [all] FROM Persons WHERE FirstName LIKE "Peter"',
            'SELECT * FROM Persons WHERE FirstName="Peter"'
        ],
        answer: 'SELECT * FROM Persons WHERE FirstName="Peter"'  
    },

    {
        id: 9,
        question: 'With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "a"?',
        choices: [
            'SELECT * FROM Persons WHERE FirstName LIKE "a%"',
            'SELECT * FROM Persons WHERE FirstName LIKE "%a"',
            'SELECT * FROM Persons WHERE FirstName="%a%"',
            'SELECT * FROM Persons WHERE FirstName="a"'
        ],
        answer: 'SELECT * FROM Persons WHERE FirstName LIKE "a%"'  
    },

    {
        id: 10,
        question: 'The OR operator displays a record if ANY conditions listed are true. The AND operator displays a record if ALL of the conditions listed are true',
        choices: [
            'true',
            'false'
        ],
        answer: 'True'  
    }

    // {
    //     id: 2,
    //     question: 'What does SQL stand for?',
    //     choices: [
    //         'Structured Question Language',
    //         'Structured Query Language',
    //         'Strong Question Language'
    //     ],
    //     answer: 'Structured Query Language'  
    // },

    // {
    //     id: 2,
    //     question: 'What does SQL stand for?',
    //     choices: [
    //         'Structured Question Language',
    //         'Structured Query Language',
    //         'Strong Question Language'
    //     ],
    //     answer: 'Structured Query Language'  
    // },

    // {
    //     id: 2,
    //     question: 'What does SQL stand for?',
    //     choices: [
    //         'Structured Question Language',
    //         'Structured Query Language',
    //         'Strong Question Language'
    //     ],
    //     answer: 'Structured Query Language'  
    // }
]

export default questions