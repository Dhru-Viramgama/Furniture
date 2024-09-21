import React from 'react'

const RightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={13}
            height={10}
            viewBox="0 0 13 10"
            fill="none"
            {...props}
        >
            <path
                d="M1 5.4212L5.08638 8.5L12 1.5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </svg>
    )
}

export default RightIcon