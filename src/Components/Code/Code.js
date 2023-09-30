import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula, a11yDark, atomDark, atomOneDark, github, solarizedDark, solarizedLight, tomorrow, twilight, xcode, xonokai, vs, xonokaiDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';
import React from 'react';

const Code = ({ code ,lang }) => {
    const [code1, setCode] = useState('');

    const handleChange = (event) => {
        setCode(event.target.value);
    };

    return (
        <>
            {/* <textarea value={code1} onChange={handleChange} rows={10} cols={50} /> */}

            <SyntaxHighlighter language={lang} style={atomDark}>
                {code}
            </SyntaxHighlighter>
        </>
    );
};

export default Code;
