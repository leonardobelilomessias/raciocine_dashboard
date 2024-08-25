export function truncateText(text:string, maxLength:number) {

      if (text.length > maxLength) {
        const truncatedText = text.slice(0, maxLength) + '...';
        return truncatedText;
      }
      return text
  }
  
  truncateText('.truncate', 40);