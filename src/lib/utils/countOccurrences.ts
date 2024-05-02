  export function countOccurrences(markdownContent:string, word: string): number {
    const regex = new RegExp("\\b" + word + "\\b", "gi");
    return (markdownContent.match(regex) || []).length;
  }