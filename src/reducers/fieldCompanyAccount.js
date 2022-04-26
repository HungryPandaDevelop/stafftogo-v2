export default function(){
  return {
    order: [
      "typeCabinet",
      "titleOne",
      "name","email",
      "education",
      "typeEmployer",
      "name_company",
      "site_company",
      "typeJob",
      "description_company",
      "imgsCompany",
      "num_workers",
      "titleTwo", 
      "legalNameCompany",
      "centralOffice",
      "how_get",
      "phones",
      "inn_company",
      "kpp",
      "bank",
      "bik",
      "kc",
      "pc",
      "legal_address", 
      "closeDoc",
      "videoCompany"
    ],
    name: { 
      type:"text" ,
      name: "name", 
      label: "Имя пользователя", 
      placeholder: "Имя пользователя", 
      
    },
    name_company: { 
      type:"text", 
      name: "name_company", 
      label: "Наименование компании", 
      labelSecond:"(Так наименование компании будет отображатся в вакансиях)", 
      placeholder: "Наименование компании", 
      
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      disabled: 0
    },
    education: {
      name: "education", 
      label:"Образование", 
      type: "select", 
      options: [
        {label:"ООО", value:"ooo"}, 
        {label:"ЗАО", value:"zao"} , 
        {label:"ИП", value:"ip"}] 
      },
    site_company: { 
      type:"text",  
      name: "site_company", 
      label: "Сайт компании", 
      placeholder: "Доменное имя вашего сайта ", 
    },
    description_company: { 
      type:"textarea", 
      name: "description_company", 
      label: "Краткое описание компании", 
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
      maxLength: 500
    },
    num_workers: { 
      type:"text", 
      name: "num_workers", 
      label: "Количество сотрудников", 
      labelSecond:"(Указывается число сотрудников в цифровом эквиваленте)", 
      placeholder: "Введите цифру от 1", 
      typeField: "number"
    },
    how_get: { 
      type:"textarea", 
      name: "how_get", 
      label: "Как добраться до офиса", 
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
      
      maxLength: 500
    },
    kpp: { 
      type:"text",
      name: "kpp", 
      label: "КПП компании", 
      placeholder: "Кпп",  
    },
    inn_company: { 
      type:"text", 
      name: "inn_company", 
      label: "ИНН компании", 
      placeholder: "ИНН компании", 
    },
    bank: { 
      type:"text",
      name: "bank", 
      label: "Банк", 
      placeholder: "Банк", 
    },
    bik: { 
      type:"text", 
      name: "bik", 
      label: "БИК",
      placeholder: "БИК", 
    },
    kc: { 
      type:"text", 
      name: "kc", 
      label: "К/С", 
      placeholder: "К/С", 
      
    },
    pc: { 
      type:"text",  
      name: "pc", 
      label: "Р/С", 
      placeholder: "Р/С", 
    },
    closeDoc: { 
      type:"checkbox", 
      name: "closeDoc",
      label: "Закрывающие документы",
      options: [
        { label: 'По почте', value: 'to_mail' },
        { label: 'По электронной почте', value: 'to_email' },
        { label: 'Документы не нужны', value: 'not' }
      ]
    },
    typeEmployer: { 
      type:"checkbox", 
      name: "typeEmployer", 
      label: "Тип работодателя", 
      options: [
        { label: 'Прямой работодатель', value: 'direct' },
        { label: 'Кадровое агентство', value: 'agency' }
      ] }
      ,
    legal_address: { 
      type:"text", 
      name: "legal_address", 
      label: "Юридический адрес", 
      placeholder: "Юридический адрес", 
    },
    titleOne: {
      type:"title",
      label:"Основная информация", 
      
    },
    titleTwo: {
      type:"title",
      label:"Реквизиты компании",
    },
    typeCabinet: {
      type:"typeCabinet" ,
      typeName: "company",  
    },
    typeJob: {
      type: "list", 
      name: "typeJob", 
      label:"Тип компании", 
      options:[
        {label: "Бар", value:"type_1"},
        {label: "Вендинг", value:"type_2"},
        {label: "Винная", value:"type_3"},
        {label: "Винодельня", value:"type_4"},
        {label: "Гостиница", value:"type_5"},
        {label: "Кейтеринг", value:"type_6"},
        {label: "Кондитерская", value:"type_7"},
        {label: "Кофейня", value:"type_8"},
        {label: "Отель", value:"type_9"},
        {label: "Пекарня", value:"type_10"},
        {label: "Вендинг", value:"type_11"},
        {label: "Пивная", value:"type_12"},
        {label: "Пищевой завод", value:"type_13"},
        {label: "Пиццерия", value:"type_14"},
        {label: "Развлечения", value:"type_15"},
        {label: "Реклама", value:"type_16"},
        {label: "Ресторан", value:"type_17"},
        {label: "Сыроварня", value:"type_18"},
        {label: "Фаст Фуд", value:"type_19"},
        {label: "Франчайзинг", value:"type_20"},
        {label: "Частная ферма", value:"type_21"},
      ]
    },
    phones: {
      type: "additional", 
      name: "phones", 
      label:"Телефоны", 
      btnTextAdd:"+ Добавить еще один телефон", 
      typeInner: "phone"
    },
    legalNameCompany: {
      type: "coupleInput", 
      mainname: "legalNameCompany", 
      label:"Юридическое наименование организации",  
      allFields: [
        { name: "priceTo",  type:"text", placeholder: "Наименование компании", length: "col-6" },
        { name: "priceType",  type:"select", length: "col-6", placeholder: "Общество с ограниченной ответственностью",
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
    centralOffice: { 
      type: "coupleInput", 
      mainname: "centralOffice", 
      label:"Центральный офис компании",  
      allFields: [
        { name: "priceTo",  type:"text", placeholder: "Наименование компании", length: "col-6" },
        { name: "priceType",  type:"select", length: "col-6", label: "Город", placeholder: "Город",
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
    imgsCompany: {
      type: "file", 
      name: "imgCompany", 
      label:"Загрузите логотип компании", 
      labelSecond:"(JPG или PNG, вес не более 1 Mb, ширина/высота логотипа не менее 320 px)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 1000000, 
      textEmpty: "На данный момент логотип не выбран"
    },
    videoCompany: {
      type: "file",
      name: "videoCompany",
      label:"Загрузите видеоприветствие", 
      typeFile: "video", 
      textEmpty:"На данный момент видео не выбрано"
    },
    typeCompany: {
      type: "select",
      name: "typeCompany", 
      label:"Тип компании",
      labelSecond:"выберете тип", 
      options: [
        {label:"ООО", value:"ooo"}, 
        {label:"ЗАО", value:"zao"} ,
        {label:"ИП", value:"ip"}
      ]
    }
  }
}