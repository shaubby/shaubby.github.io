import React from 'react';

// AI GENERATED

interface Props {
  text: string,
  link: string,
}


export const JuiceLinker = (props: Props) => {
  const parts = props.text.split(/(<[^<>]+>)/g);

  return (
    <p>
      {parts.map((part, index) => {
        if (part.startsWith('<') && part.endsWith('>')) {
          return (
            <a href={props.link}  target="_blank" key={index} >
              {part.slice(1, -1)}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
};

export default JuiceLinker;