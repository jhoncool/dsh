import React from 'react';

export function DeleteIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
            fill="currentColor"
            {...props}
        >
            <g>
                <path d="M13.29 1.605h-2.857V.522A.522.522 0 0 0 9.91 0H6.089a.522.522 0 0 0-.522.522v1.083H2.71a.522.522 0 0 0-.521.522v1.605a.52.52 0 0 0 .521.521h.159L3.345 15.5c.012.28.242.5.521.5h8.268c.28 0 .51-.22.521-.5l.477-11.247h.159a.522.522 0 0 0 .521-.521V2.127a.522.522 0 0 0-.521-.522zm-6.679-.562h2.778v.562H6.611v-.562zm5.023 13.914H4.366L3.912 4.253h8.176l-.454 10.704zM12.769 3.21H3.23v-.562h9.538v.562z" />
                <path d="M5.901 5.853a.522.522 0 0 0-.522.522v6.46a.522.522 0 0 0 1.044 0v-6.46a.522.522 0 0 0-.522-.522zm2.099 0a.522.522 0 0 0-.522.522v6.46a.522.522 0 1 0 1.044 0v-6.46A.522.522 0 0 0 8 5.853zm2.099 0a.522.522 0 0 0-.522.522v6.46a.522.522 0 0 0 1.044 0v-6.46a.522.522 0 0 0-.522-.522z" />
            </g>
        </svg>
    );
}