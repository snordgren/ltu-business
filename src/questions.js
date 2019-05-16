const questions = [
  {
    title: 'Är era ägare långsiktiga "företagsbyggare"?',
    subjectIndex: 0,
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
    title: 'Har en ägare röstmajoritet?',
    subjectIndex: 0,
    answers: [
      {
        text: 'En ägare har mer än 50%, och har visat sig kunna fatta snabba beslut utan ägarkonflikter',
        score: 3
      },
      {
        text: 'Ett fåtal ägare har kontrollen, är rimligt överens',
        score: 2,
      },
      {
        text: 'Nej, jämnt spritt ägande, flera ägare som förlamar beslut',
        score: 1
      }
    ]
  },
  {
    title: 'Ställer externa långivare eller riskkapitalbolag upp med kapital om ni behöver?',
    subjectIndex: 1,
    answers: [
      {
        text: 'Ja, har flera kontakter, utöver banken',
        score: 3
      },
      {
        text: 'Troligen, Ja men med begränsande villkor',
        score: 2,
      },
      {
        text: 'Nej, ingen kontakt utöver banken',
        score: 1
      }
    ]
  },
  {
    title: 'Räcker lönsamheten för egenfinansierad tillväxt?',
    subjectIndex: 1,
    answers: [
      {
        text: 'Ja, lönsamma och positiv cash-flow',
        score: 3
      },
      {
        text: 'Knappt, neutral cash-flow. Lönsamma, men ökad tillväxt ger negativ cash-flow',
        score: 2,
      },
      {
        text: 'Nej, inte alls. Negativt cash-flow',
        score: 1
      }
    ]
  },
  {
    title: 'Finns det några verkligt starka kundbehov, som kunden svär över, och som inte tillfredsställs idag?',
    subjectIndex: 2,
    answers: [
      {
        text: 'Ja, en majoritet av kunderna har samma problem och inflytelserika kunder är villiga att pröva nyheter',
        score: 3
      },
      {
        text: 'Ja, men inte något som det enkelt går att bygga en affärsidé på.',
        score: 2,
      },
      {
        text: 'Inga kända svordomar.',
        score: 1
      }
    ]
  },
  {
    title: 'Är er bransch konservativ eller dynamisk? Finns gamla sanningar som är på väg att omprövas? Finns det affärer att göra för den som bryter ny mark?',
    subjectIndex: 2,
    answers: [
      {
        text: 'Ja, branschen är konservativ men definitvt mogen för en ny branschlogik.',
        score: 3
      },
      {
        text: 'Ja, det går att distribuera produkter på nya sätt.',
        score: 2,
      },
      {
        text: 'Nej, branschen är konservativ och inte mogen för några banbrytande modeller',
        score: 1
      }
    ]
  },
  {
    title: 'Erbjuder ni kunderna ett lyft, något de inte ens väntat sig? T.ex. Nytt synsätt? Kombination av teknik som ger en helt ny upplevelse, och nytt distributionssätt?',
    subjectIndex: 3,
    answers: [
      {
        text: 'Ja, det är vi ensamma om',
        score: 3
      },
      {
        text: 'Ja, men flera konkurrenter gör något liknande.',
        score: 2,
      },
      {
        text: 'Nej. Pratar i innovationstermer om sin "fantastiska" produkt.',
        score: 1
      }
    ]
  },
  {
    title: 'Har ni ett tidsförsprång före konkurrenterna i att erbjuda lyftet?',
    subjectIndex: 3,
    answers: [
      {
        text: 'Ja vi upplevs av kunderna som den som driver marknaden.',
        score: 3
      },
      {
        text: 'Nej, vi kanske har gett lyftet, men nu springer konkurrenterna om oss.',
        score: 1
      }
    ]
  },
  {
    title: 'Vad är ert fokus? Vilka kundbehov löser ni och i vilka kundsegment?',
    subjectIndex: 4,
    answers: [
      {
        text: 'Tillfredsställer kundbehov som logiskt faller inom ett avgänsat område',
        score: 3
      },
      {
        text: 'Finns biverksamheter som inte stödjer huvuderbjudandet',
        score: 2,
      },
      {
        text: 'Flera ben',
        score: 1
      }
    ]
  },
  {
    title: 'Hur skall ni växa i framtiden - genom fördjupning och geografisk spridning eller breddning',
    subjectIndex: 4,
    answers: [
      {
        text: 'Vidareutveckling inom dagens fokus, till närliggande segment/produkter och geografisk spridning',
        score: 3
      },
      {
        text: 'Kombination',
        score: 2,
      },
      {
        text: 'Går in i verksamheter man inte behärskar',
        score: 1
      }
    ]
  },
  {
    title: 'Bryer ni ny mark, t.ex. med nya applikationer, ny kvalitetsstandard, nya försäljningskanaler eller distributionssätt?',
    subjectIndex: 5,
    answers: [
      {
        text: 'Ja, genom att bryta branschlogiken, ge kunden en helt annan kostnads/intäktskalkyl, med nyskapande lösningar som oftast är inspirerade av andra företag',
        score: 3
      },
      {
        text: 'Delvis, vissa mindre faktorer är nya för vår marknad',
        score: 2,
      },
      {
        text: 'Nej, erbjudandet är snarlikt konkurrenternas.',
        score: 1
      }
    ]
  },
  {
    title: 'Bearbetas föreskrivande led, t.ex. Myndigheter, Arkitekter, Forskare, aktiv, Kunds kund med mera...',
    subjectIndex: 5,
    answers: [
      {
        text: 'Ja, vi lyckas ändra attityder och synsätt efter våra idéer',
        score: 3
      },
      {
        text: 'Något mera än konkurrenterna',
        score: 2,
      },
      {
        text: 'Nej, vi försöker.',
        score: 1
      }
    ]
  },
  {
    title: 'Kontrollerar ni inriktning och prioritering produktutvecklingen själva?',
    subjectIndex: 6,
    answers: [
      {
        text: 'Ja, helt',
        score: 3
      },
      {
        text: 'Viss påverkan.',
        score: 2,
      },
      {
        text: 'Nej, inte alls',
        score: 1
      }
    ]
  },
  {
    title: 'Har ni kontroll över distributionskanalerna?',
    subjectIndex: 6,
    answers: [
      {
        text: 'Ja, stark kontroll som säkerställer att budskapet når ända till slutkund i alla länder.',
        score: 3
      },
      {
        text: 'Bara kontroll över kanalerna på hemmamarknaden.',
        score: 2,
      },
      {
        text: 'Helt oberoende återförsäljare och/eller distributörer med svag styrning.',
        score: 1
      }
    ]
  },
  {
    title: 'Arbetar ni konsekvent med att skapa effektivare och snabbare rutiner, flöden och affärsprocesser för att bli bättre än era konkurrenter?',
    subjectIndex: 7,
    answers: [
      {
        text: 'Vi ser frekvent över effektiviteten i våra system och rutiner.',
        score: 3
      },
      {
        text: 'Som andra eller något bättre.',
        score: 2,
      },
      {
        text: 'Nej.',
        score: 1
      }
    ]
  },
  {
    title: 'Har ni rutiner, flöden och strukturer som både ger bra kontroll och klarar av det höga tempot?',
    subjectIndex: 7,
    answers: [
      {
        text: 'Flexibla, enkla system och rutiner',
        score: 3
      },

      {
        text: 'Rigida, byråkratiska system.',
        score: 1
      }
    ]
  },
  {
    title: 'Vilken är ledstjärnan: "Hur gör vi nytta för kunden, och varför finns vi till", som kan ge vägledning i beslutsfattande?',
    subjectIndex: 8,
    answers: [
      {
        text: 'Ger faktiskt ledning för utvecklingen och i besluten.',
        score: 3
      },
      {
        text: 'Finns men är otydlig',
        score: 2,
      },
      {
        text: 'Finns inte.',
        score: 1
      }
    ]
  },
  {
    title: 'Hur många av de anställda har en bra känsla för hur ni tjänar pengar? Exempelvis kunder, produkter, er konkurrensfördel, etc.',
    subjectIndex: 8,
    answers: [
      {
        text: 'Alla!',
        score: 3
      },
      {
        text: 'De flesta av dem som möter kunden.',
        score: 2,
      },
      {
        text: 'Bara ledningen och säljarna.',
        score: 1
      }
    ]
  },
  {
    title: 'Beskriv organisationen och sättet att arbeta i den?',
    subjectIndex: 9,
    answers: [
      {
        text: 'Alla hjälps åt.',
        score: 3
      },
      {
        text: 'Blandning.',
        score: 2,
      },
      {
        text: 'Många nivåer, strikta beslutsvägar.',
        score: 1
      }
    ]
  },
  {
    title: 'Vilka uppgifter görs i samarbete över gränserna i organisationen, t.ex. projekt eller att folk från andra avdelningar rycker in vid behov.',
    subjectIndex: 9,
    answers: [
      {
        text: 'Projekten har hög status, Arbetar aktivt med blodbyte mellan avdelningar.',
        score: 3
      },

      {
        text: 'Förekommer sällan.',
        score: 1
      }
    ]
  },
  {
    title: 'Är ledarna synliga i vardagen och agerar de som de lär?',
    subjectIndex: 10,
    answers: [
      {
        text: 'Ja, Alla!',
        score: 3
      },
      {
        text: 'Bara ledningen eller vissa chefer.',
        score: 2,
      },
      {
        text: 'Nej.',
        score: 1
      }
    ]
  },
  {
    title: 'I vilka frågor engagerar ledarna sig aktivt i på detaljnivå?',
    subjectIndex: 10,
    answers: [
      {
        text: 'Man engagerar sig i de vid varje tidpunkt vikgigaste i frågorna även när det är svårt/tufft.',
        score: 3
      },
    ]
  },
  {
    title: 'I hur hög grad har ledningen erfarenhet från snabbväxande företag?',
    subjectIndex: 11,
    answers: [
      {
        text: 'Två tredjedelar eller fler.',
        score: 3
      },
      {
        text: 'Någon/några.',
        score: 2,
      },
      {
        text: 'Ingen, få.',
        score: 1
      }
    ]
  },
  {
    title: 'I hur hög grad har ledningen, ledningsgruppen, eller affärsrelaterad chefserfarenhet?',
    subjectIndex: 11,
    answers: [
      {
        text: 'Två tredjedelar eller fler, sammanlagt > 20 år.',
        score: 3
      },
      {
        text: 'Någon/några.',
        score: 2,
      },
      {
        text: 'Ingen, få.',
        score: 1
      }
    ]
  }
];

export default questions;
