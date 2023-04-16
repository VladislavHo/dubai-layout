export const survey_db = [
  {
    id: 1,
    question: "С какой целью вы планируете приобрести недвижимость?",
    multiple: false,
    answers: [
      {
        id: 1,
        a: "Для комфортной и безопасной жизни",
        imgID: 2,
        name: "target",
        checked: true,
      },
      {
        id: 2,
        a: "Для инвестиций с доходностью до 10%",
        imgID: 4,
        name: "target",
        checked: false,
      },
    ],
  },
  {
    id: 2,
    question: "Какой тип жилья вы рассматриваете для покупки?",
    multiple: true,
    answers: [
      {
        id: 1,
        a: "Квартира",
        imgID: 1,
        name: "type",
        checked: false,
      },
      {
        id: 2,
        a: "Дом",
        imgID: 3,
        name: "type",
        checked: false,
      },
      {
        id: 3,
        a: "Пентхаус",
        imgID: 5,
        name: "type",
        checked: true,
      },
      {
        id: 4,
        a: "Вилла",
        imgID: 6,
        name: "type",
        checked: true,
      },
    ],
  },
  {
    id: 3,
    question: "Какой у вас бюджет на покупку?",
    multiple: false,
    answers: [
      {
        id: 1,
        a: "Любые варианты",
        imgID: null,
        name: "finace",
        checked: false
      },
      {
        id: 2,
        a: "Менее 10 000 000 рублей",
        imgID: null,
        name: "finace",
        checked: false
      },
      {
        id: 3,
        a: "10 000 000 - 20 000 000 рублей",
        imgID: null,
        name: "finace",
        checked: true
      },
      {
        id: 4,
        a: "20 000 000 - 50 000 000 рублей",
        imgID: null,
        name: "finance",
        checked: false
      },
      {
        id: 5,
        a: "10 000 000 - 70 000 000 рублей",
        imgID: null,
        name: "finance",
        checked: false
      },
      {
        id: 6,
        a: "Более 70 000 000 рублей",
        imgID: null,
        name: "finance",
        checked: false
      },
    ],
  },
  {
    id: 4,
    question: "Сколько комнат должно быть в апартаментах?",
    multiple: true,
    answers: [
      {
        id: 1,
        a: "Апартаменты-студия",
        imgID: null,
        name: 'numberOfRooms',
        checked: false
      },
      {
        id: 2,
        a: "Апартаменты с 1 комнатой",
        imgID: null,
        name: 'numberOfRooms',
        checked: true
      },
      {
        id: 3,
        a: "Апартаменты с 2 комнатами",
        imgID: null,
        name: 'numberOfRooms',
        checked: false
      },
      {
        id: 4,
        a: "Апартаменты с 3 комнатами",
        imgID: null,
        name: 'numberOfRooms',
        checked: false
      },
      {
        id: 5,
        a: "Апартаменты с 4 комнатами",
        imgID: null,
        name: 'numberOfRooms',
        checked: true
      },
      {
        id: 6,
        a: "Апартаменты с 4+ комнатами",
        imgID: null,
        name: 'numberOfRooms',
        checked: false
      },
    ],
  },
  {
    id: 5,
    question: "Какова цель приобретения недвижимости?",
    multiple: false,
    answers: [
      {
        id: 1,
        a: "Для личного проживания в Дубае",
        imgID: null,
        name: 'target',
        checked: false
      },
      {
        id: 2,

        a: "Для личного отдыха и получения пассивного дохода",
        imgID: null,
        name: 'target',
        checked: false
      },
      {
        id: 3,
        a: "Только для инвестиций и получения дохода",
        imgID: null,
        name: 'target',
        checked: true
      },
    ],
  },
  {
    id: 6,
    question: "Когда Вы планируете приобрести недвижимость в Дубае?",
    multiple: false,
    answers: [
      {
        id: 1,
        a: "В течении этого месяца",
        imgID: null,
        name: 'when',
        checked: false
      },
      {
        id: 2,
        a: "В течении 2023 года",
        imgID: null,
        name: 'when',
        checked: false
      },
      {
        id: 3,
        a: "Пока определяюсь, планирую покупку в ближайшие годы",
        imgID: null,
        name: 'when',
        checked: true
      },
      {
        id: 1,
        a: "Просто интересуюсь, еще не планирую покупку",
        imgID: null,
        name: 'when',
        checked: false
      },
    ],
  },
  {
    id: 7,
    question: "Вариант готовности",
    multiple: false,
    answers: [
      {
        id: 1,
        a: "Любые варианты",
        imgID: null,
        name: 'readinessOption',
        checked: false
      },
      {
        id: 2,
        a: "Не знаю застройщика",
        imgID: null,
        name: 'readinessOption',
        checked: true
      },
      {
        id: 3,
        a: "Готовый вариант",
        imgID: null,
        name: 'readinessOption',
        checked: false
      },
    ],
  },
];
