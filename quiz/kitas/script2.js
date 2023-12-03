let questions = [
    {
      prompt: 'What is the capital of France?\n(a) Berlin\n(b) London\n(c) Paris',
      answer: 'c'
    },
    {
      question: 'How many continents are there on Earth?\n(a) 5\n(b) 7\n(c) 6',
      answer: 'b'
    },
    {
      question: 'Which planet is known as the Red Planet?\n(a) Mars\n(b) Jupiter\n(c) Saturn',
      answer: 'a'
    },
    {
      question: 'What gas do plants breathe in that humans and animals breathe out?\n(a) Oxygen\n(b) Carbon Dioxide\n(c) Nitrogen',
      answer: 'b'
    },
    {
      question: 'What is the largest mammal in the world?\n(a) Elephant]\n(b) Blue Whale\n(c)Giraffe',
      answer: 'b'
    }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let response = window.prompt(questions[i].prompt)
    if(response === questions[i].answer) {
        score++;
        alert('Correct')
    }else {
        alert('Wrong!');
    }
    
}
alert(`you got ${score}/${questions.length}`)