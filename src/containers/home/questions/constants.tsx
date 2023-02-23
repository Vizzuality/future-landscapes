export const COLORS = [
  {
    id: 1,
    name: 'a',
    bgColor: 'bg-blue',
  },
  {
    id: 2,
    name: 'b',
    bgColor: 'bg-purple',
  },
  {
    id: 3,
    name: 'c',
    bgColor: 'bg-red',
  },
  {
    id: 4,
    name: 'd',
    bgColor: 'bg-green-100',
  },
  {
    id: 5,
    name: 'e',
    bgColor: 'bg-black',
  },
];

export const QUESTIONS = [
  {
    id: 1,
    name: 'a',
    question: (
      <p className="font-sans text-3xl">
        Which sustainability <b className="font-bold italic">approach</b> do you feel more drawn to?
      </p>
    ),
    options: [
      {
        label: <>Understanding the problem</>,
        value: 0,
      },
      {
        label: <>Taking action</>,
        value: 1,
      },
    ],
  },
  {
    id: 2,
    name: 'b',
    question: (
      <p className="font-sans text-3xl">
        Which sustainability <b className="font-bold italic">measure</b> are you more interested in?
      </p>
    ),
    options: [
      {
        label: <>Ability to adapt</>,
        value: 0,
      },
      {
        label: <>Mitigating the problem</>,
        value: 1,
      },
    ],
  },
  {
    id: 3,
    name: 'c',

    question: (
      <p className="font-sans text-3xl">
        What area do you feel more connected to <b className="font-bold italic">improving</b>?
      </p>
    ),
    options: [
      {
        label: (
          <div className="flex flex-col items-center">
            <p>Life</p>
            <p>fauna, flora, humans</p>
          </div>
        ),
        value: 0,
      },
      {
        label: (
          <div className="flex flex-col items-center">
            <p>Elements</p>
            <p>geology, air, climate, water</p>
          </div>
        ),
        value: 1,
      },
    ],
  },
  {
    id: 4,
    name: 'd',
    question: (
      <p className="font-sans text-3xl">
        What would you prioritise for <b className="font-bold italic">investment</b>?
      </p>
    ),
    options: [
      {
        label: <>Improving nature</>,
        value: 0,
      },
      {
        label: <>Human systems</>,
        value: 1,
      },
    ],
  },
];
