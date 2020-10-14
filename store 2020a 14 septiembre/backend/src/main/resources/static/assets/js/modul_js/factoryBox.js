import { FactoryTag } from "./factoryTag.js";

export function FactoryBox() {
  const factoryTag = new FactoryTag();

  const d = document;
  const API = {};
  let params = {};

  API.error = function () {
    params.id = "errorBox";
    params.class = "box-error none";
    return factoryTag.div(params);
  };
API.littleImgBox = function(){    
    var littleImgBox = document.createElement("img");
    littleImgBox.style.width = "2em";
    littleImgBox.style.height = "1.5em";
    return littleImgBox;
}
API.informationPanel = function(){    
    var informationBox = document.createElement("div");
    informationBox.id = "informationPanel";
    informationBox.className = "infoColor";
    return informationBox;
};
  return API;
}