export function GeneralPurposeFunctions() {
  const API = {};
   
     API.capital  = function(string){        
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();    
    }
    return API;
  }