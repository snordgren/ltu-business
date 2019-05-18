import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { ProgressBar } from 'react-bootstrap';
import questions from './questions';

const max = 10;
const values = {};
let answerCount = 0;

const generateData = values => [
  {
    subject: 'Tillväxtstarka ägare', A: sumObjects(0)
  },
  {
    subject: 'Tillväxtfinansiering', A: sumObjects(1)
  },
  {
    subject: 'Tillväxtutrymmet', A: sumObjects(2)
  },
  {
    subject: 'Tidsmonopolet', A: sumObjects(3)
  },
  {
    subject: 'Fokus', A: sumObjects(4)
  },
  {
    subject: 'Marknadsskapande', A: sumObjects(5)
  },
  {
    subject: 'Internationell kraft', A: sumObjects(6)
  },
  {
    subject: 'Dynamisk effektivitet', A: sumObjects(7)
  },
  {
    subject: 'Hårdmjuk styrning', A: sumObjects(8)
  },
  {
    subject: 'Tältorganisation', A: sumObjects(9)
  },
  {
    subject: 'Tillväxtledarskapet', A: sumObjects(10)
  },
  {
    subject: 'Ledningskraften', A: sumObjects(11)
  }
];

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

// Applies 
const applyAnswer = (question, answer, reRender, questionIndex) => {
  const previous = values[question.subjectIndex];
  const toUse = (previous) ? previous : {};

  if (!previous) {
    values[question.subjectIndex] = toUse;
  }

  if (!toUse[questionIndex]) {
    answerCount += 1;
  }
  toUse[questionIndex] = answer.score;

  console.log(values);
  reRender();
};

const Question = (question, reRender, questionIndex) => {
  return (
    <div className="question-container">
      <h2 className="question-title">{question.title}</h2>
      <form className="question-form">
        {question.answers.map((answer, answerIndex) => {
          const radioBtnName = "question-num-" + questionIndex;
          const radioBtnId = 'answer-' + questionIndex + '-' + answerIndex;
          return (<div>
            <input type="radio" name={radioBtnName} id={radioBtnId}
              onClick={() => applyAnswer(question, answer, reRender, questionIndex)} />
            <span onClick={() => {
              applyAnswer(question, answer, reRender, questionIndex);
              document.getElementById(radioBtnId).checked = true;
            }}>{answer.text}</span>
          </div>);
        })}
      </form>
    </div>
  );
}

function App(reRender) {
  const basePct = 15; // initial percentage, required so we can see the percentage

  return (
    <>
      <div className="ltu-container">
        <h1 className="ltu-business-title">LTU Business</h1>
        <div className="progress-container">
          <ProgressBar
            now={basePct + (100 - basePct) * answerCount / questions.length}
            label={answerCount + "/" + questions.length} />
        </div>
      </div>
      <div className="question-col">
        {questions.map((question, questionIndex) => Question(question, reRender, questionIndex))}
        {<Chart />}
      </div>
      <footer>
        <div>Copyright &copy; 2019</div>
        <div>Martin, Mattias, Ruslan, Seán, Silas, Valdemar vid LTU</div>
      </footer>
    </>
  )
}

function Chart() {
  var radius = 200;
  var width = 3.5 * radius;
  var height = 2.5 * radius;

  return (
    <div className="chart-container">
      <RadarChart outerRadius={radius} width={width} height={height}
        data={generateData(values)} >

        <PolarGrid />
        <PolarRadiusAxis domain={[0, max]} />
        <PolarAngleAxis dataKey="subject" />
        <Radar name="Result" dataKey="A" stroke="#7874c8" fill="#8884d8" fillOpacity={0.8} />
      </RadarChart>
    </div>
  );
}

export default App;
