import Color from 'colorjs.io';

type TextColor = 'black' | 'white';

export function calculateTextColor(colorString: string): TextColor {
    const onWhite = Math.abs(new Color(colorString).contrast('white', 'APCA'));
    const onBlack = Math.abs(new Color(colorString).contrast('black', 'APCA'));
    const textColorString = onWhite > onBlack ? 'white' : 'black';
    return textColorString;
}

export const sharedColors = {
    error: 'red',
    inProgress: 'dodgerblue',
    codeOwner: 'dodgerblue',
    primary: 'orange',
    success: 'green',
};
