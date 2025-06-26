

// AI GENERATED

interface Props {
  text: string
}


export const BoldWrapper = (props: Props) => {
  const parts = props.text.split(/(<[^<>]+>)/g);

  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith('<') && part.endsWith('>')) {
          return (
            <span key={index} className="text-plink">
              {part.slice(1, -1)}
            </span>
          );
        }
        return <span className='' key={index}>{part}</span>;
      })}
    </p>
  );
};

export default BoldWrapper;