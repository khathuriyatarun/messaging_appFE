import { useState } from 'react';

const Default = ({width = 49, height = 49, name}) => {
    const [textColor, setTextColor] = useState('#33333')
    var colors = [ "#ffcccc", "#ffd9cc", "#ffe6cc", "#fff2cc", "#ffffcc", "#f2ffcc", "#e6ffcc", "#ccffcc", "#ccffe6", "#ccfff2",  "#ccffff",  "#ccf2ff",  "#cce6ff",  "#ccccff",  "#e6ccff",  "#f2ccff",  "#ffccff",  "#ffccf2",  "#ffcce6",  "#ffcccc", "#330000", "#4c0000", "#663300", "#804d00", "#996633", "#b36600", "#cc6600", "#e67300", "#ff8000", "#ff9933", "#ffb366", "#ffcc99", "#ffcccc", "#ff99cc", "#ff66b3", "#ff3399", "#ff0066", "#e6005c", "#cc0052", "#b30047" ];

    const setRandomColorScheme = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        console.log('random index is', randomIndex)
        if(randomIndex < 20) setTextColor('#ffffff');
        return colors[randomIndex];
    }

    const getInitials = fullName => fullName.trim().split(" ").map(name => name.charAt(0).toUpperCase()).join("");

    return (
        <span 
            style={{
                backgroundColor : setRandomColorScheme(),
                color: textColor
            }}
            className={`flex w-[${width}px] h-[${height}px] rounded-full font-bold items-center justify-center`}
        >
            {getInitials(name)}
        </span>
    )
}

export default Default;