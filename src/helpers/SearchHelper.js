import {coordinates} from './Suggestions';
  export  function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  
  export  function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') {
      return [];
    }
  
    const regex = new RegExp('^' + escapedValue, 'i');
  
    return coordinates.filter(coordinate => regex.test(coordinate.city));
  }
  
  export  function getSuggestionValue(suggestion) {
    return suggestion.city;
  }
  