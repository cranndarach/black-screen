import {darken} from "./functions";
import * as _ from "lodash";
import {ColorCode} from "../../Interfaces";

export const colors = {
    black: "#16181c",
    red: "#d73737",
    white: "#d7dae0",
    green: "#67d241",
    yellow: "#dad330",
    blue: "#2184e0",
    magenta: "#e628c8",
    cyan: "#1bcdcd",

    brightBlack: "#101114",
    brightRed: "#e31608",
    brightWhite: "#f5f9ff",
    brightGreen: "#43b819",
    brightYellow: "#fbf336",
    brightBlue: "#0386fb",
    brightMagenta: "#f224d1",
    brightCyan: "#1ddbdb",
};

const colorIndex = [
    colors.black,
    colors.red,
    colors.green,
    colors.yellow,
    colors.blue,
    colors.magenta,
    colors.cyan,
    colors.white,

    colors.brightBlack,
    colors.brightRed,
    colors.brightGreen,
    colors.brightYellow,
    colors.brightBlue,
    colors.brightMagenta,
    colors.brightCyan,
    colors.brightWhite,

    ...generateIndexedColors(),
    ...generateGreyScaleColors(),
];

function toRgb(colorComponent: number) {
    if (colorComponent === 0) {
        return 0;
    }

    return 55 + colorComponent * 40;
}

function generateIndexedColors() {
    return _.range(0, 216).map(index => {
        const red = Math.floor(index / 36);
        const green = Math.floor((index % 36) / 6);
        const blue = Math.floor(index % 6);

        return `rgb(${toRgb(red)}, ${toRgb(green)}, ${toRgb(blue)})`;
    });
}

function generateGreyScaleColors() {
    return _.range(0, 24).map(index => {
        const color = index * 10 + 8;
        return `rgb(${color}, ${color}, ${color})`;
    });
}

export function colorValue(color: ColorCode, options = {isBright: false}) {
    if (Array.isArray(color)) {
        return `rgb(${color.join(", ")})`;
    } else {
        if (options.isBright && color < 8) {
            return colorIndex[color + 8];
        } else {
            return  colorIndex[color];
        }
    }
}

export const background = colors.black;
export const panel = darken(background, 3);
