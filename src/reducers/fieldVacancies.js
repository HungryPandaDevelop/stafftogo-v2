export default function(){
  return {
    order: [
      "titleOne",
      "typeSpecialist",
      "vacancies",
      "typeWork",
      "salary",
      "titleTwo",
      "responsibilities",
      "titleThree",
      "education",
      "courses",
      "wetake",
      "titleFour",
      "rubric",
      "region",
      "settings"
    ],
    vacancies: { 
      mainname: "vacancies", 
      type: "coupleInput", 
      allFields: [
        { 
          name: "name",  
          type:"text", 
          placeholder: "Введите наименование вакансии", 
          label:"Наименование вакансии", 
          length: "col-6"},
        { 
          name: "type",  
          type:"select", 
          length: "col-6", 
          label:"Выбрать наименование из библиотеки вакансий",
          placeholder: "Поисковая выдача для соискателей больше",
          options: [
            {name:"ООО", value:"ooo"}, 
            {name:"ЗАО", value:"zao"}, 
            {name:"ОАО", value:"oao"}, 
            {name:"УП", value:"yp"}  , 
            {name:"ИП", value:"ip"}
          ]
        },
      ]
    },
    responsibilities: { 
      name: "responsibilities",  
      type:"textarea", 
      label: "Основные обязанности",
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)" 
    },
    education: {
      name: "education",
      type: "select", 
      label:"Образование", 
      placeholder:"Выберать образование",
      options: [
        {label:"Высшее", value:"type1"}, 
        {label:"Профессиональное", value:"type2"} ,
        {label:"Среднее специальное", value:"type3"},
        {label:"Неважно", value:"type4"}
      ] 
    },
    typeSpecialist: { 
      name: "typeSpecialist", 
      type:"checkbox", 
      options: [
        { label: 'Мне нужен один специалист', value: 'one_spec' },
        { label: 'Мне нужна команда', value: 'multy_spec' }
      ] 
    },
    typeWork: {
      name: "typeWork", 
      type: "checkbox", 
      label:"Тип работы", 
      options:[
        {label: "Постоянная работа", value:"type_1"},
        {label: "Ночная работа", value:"type_2"},
        {label: "Сдельная работа/Подмена", value:"type_3"},
        {label: "Срочная работа", value:"type_4"},
        {label: "Консалтинг", value:"type_5"},
        {label: "Фриланс", value:"type_6"},
      ]
    },
    settings: {
      name: "settings", 
      type: "checkbox", 
      options:[
        {label: "Включить автоподбор резюме", value:"type_1"},
        {label: "Разместить вакансию анаонимно (скрыть название компании)", value:"type_2"},
      ]
    },
    salary: { 
      mainname: "salary", 
      type: "coupleInput", 
      label:"Зарплата",  
      allFields: [
        { name: "priceFrom",  type:"text", placeholder: "От", length: "col-4"},
        { name: "priceTo",  type:"text", placeholder: "До", length: "col-4" },
        { name: "priceType",  type:"select", length: "col-4",
          options: [
            {name:"ООО", value:"ooo"}, 
            {name:"ЗАО", value:"zao"}, 
            {name:"ОАО", value:"oao"}, 
            {name:"УП", value:"yp"}  , 
            {name:"ИП", value:"ip"}
          ]
        },
      ],
    },
    courses: { 
      mainname: "courses", 
      type: "coupleInput", 
      label:"Оконченные курсы",  
      allFields: [
        { name: "date",  type:"text", placeholder: "мм.гг. - мм.гг.", length: "col-4"},
        { name: "place",  type:"text", placeholder: "Наименование учебного заведения", length: "col-8" },
        { name: "name",  type:"text", placeholder: "Наименование курса", length: "col-12" },
      ],
    },
    wetake:{
      name: "wetake", 
      type:"checkbox", 
      label:"Рассматриваем на вакансию всех, в том числе",
      options: [
        { label: 'Пенсионеров', value: 'type1' },
        { label: 'Соискателей с инвалидностью', value: 'type2' },
        { label: 'Студентов', value: 'type3' },
        { label: 'Иностранных граждан (мигрантов)', value: 'type4' },
      ] 
    },
    rubric: {
      name: "rubric",
      type: "select", 
      label:"Рубрика", 
      placeholder:"Выбрать  (но не более 5)",
      options: [
        {label:"Высшее", value:"type1"}, 
        {label:"Профессиональное", value:"type2"} ,
        {label:"Среднее специальное", value:"type3"},
        {label:"Неважно", value:"type4"}
      ] 
    },
    region: {
      name: "region",
      type: "select", 
      label:"Регион показа", 
      options: [
        {label:"Москва", value:"type1"}, 
        {label:"Профессиональное", value:"type2"} ,
        {label:"Среднее специальное", value:"type3"},
        {label:"Неважно", value:"type4"}
      ] 
    },
    titleOne: {label:"Основная информация", type:"title"},
    titleTwo: {label:"Обязанности", type:"title"},
    titleThree: {label:"Требования", type:"title"},
    titleFour: {label:"Настройка публикации вакансии", type:"title"},
  }
}