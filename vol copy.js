var surveyValueChanged = function (sender, options) {
    var el = document.getElementById(options.name);
    if (el) {
        el.value = options.value;
    }
};

var json = {
    questions: [
        {
            type: "text",
            name: "name",
            title: "Your name:"
        }, {
            type: "text",
            name: "email",
            title: "Your e-mail"
        }, {
            type: "checkbox",
            name: "location",
            title: "What location would you volunteer for?",
            isRequired: true,
            colCount: 4,
            choices: [
                "Haymarket",
                "South End",
                "Roslindale"
            ]
        },{
            type: "checkbox",
            name: "person",
            title: "Who are you?",
            isRequired: true,
            colCount: 4,
            choices: [
                "Student",
                "Organization",
                "Business",
                "Other"
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });

survey.data = {
    name: '',
    email: '',
    location: ['']
};

$("#surveyElement").Survey({model: survey, onValueChanged: surveyValueChanged});
