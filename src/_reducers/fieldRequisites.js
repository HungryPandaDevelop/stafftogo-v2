export default function(){
  return {
    order: ["titleTwo","inn_company","kpp","bank","bik","kc","pc","legal_address"],
    kpp: { name: "kpp", label: "КПП компании", placeholder: "Кпп",  type:"text", typeBase: "requisites" },
    inn_company: { name: "inn_company", label: "ИНН компании", placeholder: "ИНН компании", type:"text", typeBase: "requisites" },
    bank: { name: "bank", label: "Банк", placeholder: "Банк", type:"text" , typeBase: "requisites"},
    bik: { name: "bik", label: "БИК", placeholder: "БИК", type:"text", typeBase: "requisites" },
    kc: { name: "kc", label: "К/С", placeholder: "К/С", type:"text" , typeBase: "requisites"},
    pc: { name: "pc", label: "Р/С", placeholder: "Р/С", type:"text", typeBase: "requisites" },
    legal_address: { name: "legal_address", label: "Юридический адрес", placeholder: "Юридический адрес", type:"text" , typeBase: "requisites"},
    titleTwo: {label:"Реквизиты компании", type:"title"},
  }
}