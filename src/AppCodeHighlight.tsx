import React, { useEffect, useRef } from 'react';
// @ts-ignore
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';

const AppAppCodeHighlight = (props: any) => {
    const codeElement = useRef(null);

    useEffect(() => {
        if (Prism) {
            Prism.highlightElement(codeElement.current);
        }
    }, []);

    return (
        <pre style={props.style}>
            <code ref={codeElement} className={`language-${props.lang}`}>
                {props.children}&nbsp;
            </code>
        </pre>
    );
};

AppAppCodeHighlight.defaultProps = {
    lang: 'jsx',
    style: null
};

export default AppAppCodeHighlight;
