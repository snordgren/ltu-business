import React from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
} from 'recharts';

const max = 6;
const data = [
  {
    subject: 'Tillväxtstarka ägare', A: 0, fullMark: max,
  },
  {
    subject: 'Tillväxtfinansiering', A: 3, fullMark: max,
  },
  {
    subject: 'Tillväxtutrymmet', A: 2, fullMark: max,
  },
  {
    subject: 'Tidsmonopolet', A: 2, fullMark: max,
  },
  {
    subject: 'Fokus', A: 2, fullMark: max,
  },
  {
    subject: 'Marknadsskapande', A: 2, fullMark: max,
  },
  {
    subject: 'Internationell kraft', A: 2, fullMark: max,
  },
  {
    subject: 'Dynamisk effektivitet', A: 2, fullMark: max,
  },
  {
    subject: 'Hårdmjuka stårning', A: 2, fullMark: max,
  },
  {
    subject: 'Tältorganisation', A: 2, fullMark: max,
  },
  {
    subject: 'Tillväxtledarskapet', A: 2, fullMark: max,
  },
  {
    subject: 'Ledningskraften', A: 2, fullMark: max,
  }
];

function App() {
  return (
    <div>
      <h1>LTU Business</h1>
      <h2>Är era era ägare långsiktiga "företagsbyggare"?</h2>
      <form className="question-form">
        <div>
          <input type="radio" name="q0" /> 
          Ja, erfaren ägare av att bygga tillväxtbolag (= förstår vad framtiden kräver)
        </div>
        <div>
          <input type="radio" name="q0" /> 
          Vissa, men de är ej i majoritet
        </div>
        <div>
          <input type="radio" name="q0" />
          Nej, ägandet kortsiktigt, "exitfokus"
        </div>
      </form>
      <Chart />
    </div>
  )
}

function Chart() {
  var radius = 200;
  var width = 3.5 * radius;
  var height = 2.5 * radius;

  return (
    <RadarChart outerRadius={radius} width={width} height={height} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <Radar name="Result" dataKey="A" stroke="#7874c8" fill="#8884d8" fillOpacity={0.8} />
    </RadarChart>
  );
}

export default App;
