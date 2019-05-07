import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

const max = 10;
const values = {};

const sumObjects = ix => {
  const defaultValue = 1;
  const obj = values[ix];

  if (!obj) {
    values[ix] = {};
    return defaultValue;
  }

  let result = defaultValue;  
  Object.values(obj).forEach(value => {
    result += value;
  });
  return result;
};

const generateData = values => [
  {
    subject: 'Tillväxtstarka ägare', A: sumObjects(0), fullMark: max,
  },
  {
    subject: 'Tillväxtfinansiering', A: sumObjects(1), fullMark: max,
  },
  {
    subject: 'Tillväxtutrymmet', A: sumObjects(2), fullMark: max,
  },
  {
    subject: 'Tidsmonopolet', A: sumObjects(3), fullMark: max,
  },
  {
    subject: 'Fokus', A: sumObjects(4), fullMark: max,
  },
  {
    subject: 'Marknadsskapande', A: sumObjects(5), fullMark: max,
  },
  {
    subject: 'Internationell kraft', A: sumObjects(6), fullMark: max,
  },
  {
    subject: 'Dynamisk effektivitet', A: sumObjects(7), fullMark: max,
  },
  {
    subject: 'Hårdmjuka stårning', A: sumObjects(8), fullMark: max,
  },
  {
    subject: 'Tältorganisation', A: sumObjects(9), fullMark: max,
  },
  {
    subject: 'Tillväxtledarskapet', A: sumObjects(10), fullMark: max,
  },
  {
    subject: 'Ledningskraften', A: sumObjects(11)
  }
];

const questions = [
  {
    title: 'Är era ägare långsiktiga "företagsbyggare"?',
    subjectIndex: 0,
    formName: 'q0',
    answers: [
      {
        text: 'Ja, erfaren ägare av att bygga tillväxtbolag (= förstår vad framtiden kräver)',
        score: 3
      },
      {
        text: 'Vissa, men de är ej i majoritet',
        score: 2,
      },
      {
        text: 'Nej, ägandet kortsiktigt, "exitfokus"',
        score: 1
      }
    ]
  },
  {
    title: 'Är era ägare långsiktiga "företagsbyggare"?',
    subjectIndex: 1,
    formName: 'q1',
    answers: [
      {
        text: 'Ja, erfaren ägare av att bygga tillväxtbolag (= förstår vad framtiden kräver)',
        score: 3
      },
      {
        text: 'Vissa, men de är ej i majoritet',
        score: 2,
      },
      {
        text: 'Nej, ägandet kortsiktigt, "exitfokus"',
        score: 1
      }
    ]
  }
];

// Applies 
const applyAnswer = (question, answer, reRender) => {
  const previous = values[question.subjectIndex];
  const toUse = (previous) ? previous : {};
  if (!previous) {
    values[question.subjectIndex] = toUse;
  }
  toUse[answer.formName] = answer.score;
  console.log(values);
  reRender();
};

const Question = (question, reRender) => {
  return (
    <div>
      <h2>{question.title}</h2>
      <form className="question-form">
        {question.answers.map(answer => (
          <div>
            <input type="radio" name={question.formName} 
              onClick={() => applyAnswer(question, answer, reRender)}/> 
            {answer.text}
          </div>
        ))}
      </form>
    </div>
  );
}

function App(reRender) {
  return (
    <div>
      <h1>LTU Business</h1>
      {questions.map(question => Question(question, reRender))}
      <Chart />
    </div>
  )
}

function Chart() {
  var radius = 200;
  var width = 3.5 * radius;
  var height = 2.5 * radius;

  return (
    <RadarChart outerRadius={radius} width={width} height={height} 
      data={generateData(values)} >

      <PolarGrid />
      <PolarRadiusAxis domain={[0, max]} />
      <PolarAngleAxis dataKey="subject" />
      <Radar name="Result" dataKey="A" stroke="#7874c8" fill="#8884d8" fillOpacity={0.8} />
    </RadarChart>
  );
}

export default App;
