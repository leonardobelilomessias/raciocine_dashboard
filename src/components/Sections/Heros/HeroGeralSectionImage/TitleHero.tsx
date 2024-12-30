
 export  const TitleHero = ({ title, highlightPink, highlightBlue }: { title: string, highlightPink: string, highlightBlue: string }) => {
    // const title = "A maior empresa software de marketing digital de Belo Horizonte, Minas Gerais.";
    const highlights = [
      { text: highlightBlue, color: "blue" },
      { text: highlightPink, color: "pink" },
    ];
  
    return ( <HighlightedTitles title={title} highlights={highlights} />);
  };
  const HighlightedTitles = ({ title, highlights }: { title: string, highlights: { text: string, color: string }[] }) => {
    const renderHighlightedTitle = () => {
      const parts: JSX.Element[] = [];
      let lastIndex = 0;
  
      highlights.forEach(({ text, color }, index) => {
        const startIndex = title.indexOf(text, lastIndex);
        if (startIndex === -1) return;
  
        if (startIndex > lastIndex) {
          parts.push(<span key={`normal-${index}-${lastIndex}`}>{title.slice(lastIndex, startIndex)}</span>);
        }
  
        parts.push(
          <span
            key={`highlight-${index}-${startIndex}`}
            className={color === "pink" ? "inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text" : "inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#0064e9] text-transparent bg-clip-text"}
          >
            {text}
          </span>
        );
  
        lastIndex = startIndex + text.length;
      });
  
      if (lastIndex < title.length) {
        parts.push(<span key={`remaining-${lastIndex}`}>{title.slice(lastIndex)}</span>);
      }
  
      return parts;
    };
  
    return <h1 className="text-4xl md:text-6xl font-bold">{renderHighlightedTitle()}</h1>;
  };
  