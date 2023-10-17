import { CSS as BaseCSS } from '@stitches/react';
import type { PropertiesHyphen as CSSPropertiesHyphen } from 'csstype';
import type { StringKeyOf } from 'type-fest';
import * as Font from './font';
export declare const createTransition: (properties: Array<keyof CSSPropertiesHyphen>, duration?: number) => string;
export declare type CSS = BaseCSS<typeof config>;
declare type Token<T extends Record<string, any>> = `$${StringKeyOf<T>}`;
export interface FontOptions {
    size?: BaseCSS['fontSize'] | Token<typeof Font['SIZES']>;
    weight?: BaseCSS['fontWeight'] | Token<typeof Font['WEIGHTS']>;
    height?: BaseCSS['lineHeight'] | Token<typeof Font['LINE_HEIGHTS']>;
}
export declare const styled: <Type extends import("react").ComponentType<any> | keyof JSX.IntrinsicElements | import("@stitches/react/types/util").Function, Composers extends (string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function | {
    [name: string]: unknown;
})[], CSS_1 = import("@stitches/react/types/css-util").CSS<{
    mobile: "(max-width: 768px)";
}, {
    colors: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        primary: string;
        darkPrimary: string;
        fadedPrimary: string;
        black: string;
        white: string;
        lightGrey: string;
        medGrey: string;
        darkGrey: string;
        blue: string;
        warn: string;
        darkWarn: string;
    };
    shadows: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    fonts: {
        default: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    fontWeights: {
        1: number;
        2: number;
    };
    lineHeights: {
        1: string;
        2: string;
        3: string;
    };
    radii: {
        1: string;
        2: string;
        round: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    anim: (animations: {
        (): string;
    }[]) => {
        animation: string;
    };
    trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
        transition: string;
    };
    typo: ({ size, weight, height }: FontOptions) => {
        fontFamily: string;
        fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
        fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
        lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
    };
}>>(type: Type, ...composers: { [K in keyof Composers]: string extends Composers[K] ? Composers[K] : Composers[K] extends string | import("react").ComponentType<any> | import("@stitches/react/types/util").Function ? Composers[K] : import("@stitches/react/types/stitches").RemoveIndex<CSS_1> & {
    variants?: {
        [x: string]: {
            [x: string]: CSS_1;
            [x: number]: CSS_1;
        };
    };
    compoundVariants?: (("variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T ? { [Name in keyof T]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name]>; } : never : import("@stitches/react/types/util").WideObject) & {
        css: CSS_1;
    })[];
    defaultVariants?: "variants" extends keyof Composers[K] ? Composers[K][keyof Composers[K] & "variants"] extends infer T_1 ? { [Name_1 in keyof T_1]?: import("@stitches/react/types/util").String | import("@stitches/react/types/util").Widen<keyof Composers[K][keyof Composers[K] & "variants"][Name_1]>; } : never : import("@stitches/react/types/util").WideObject;
} & CSS_1 & (Composers[K] extends infer T_2 ? { [K2 in keyof T_2]: K2 extends "compoundVariants" | "defaultVariants" | "variants" ? unknown : K2 extends keyof CSS_1 ? CSS_1[K2] : unknown; } : never); }) => import("@stitches/react/types/styled-component").StyledComponent<Type, import("@stitches/react/types/styled-component").StyledComponentProps<Composers>, {
    mobile: "(max-width: 768px)";
}, import("@stitches/react/types/css-util").CSS<{
    mobile: "(max-width: 768px)";
}, {
    colors: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
        primary: string;
        darkPrimary: string;
        fadedPrimary: string;
        black: string;
        white: string;
        lightGrey: string;
        medGrey: string;
        darkGrey: string;
        blue: string;
        warn: string;
        darkWarn: string;
    };
    shadows: {
        shadow1: string;
        shadow2: string;
        shadow3: string;
        shadow4: string;
        shadow6: string;
        shadow8: string;
        shadow12: string;
        shadow16: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    sizes: {
        xxs: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
    };
    fonts: {
        default: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    fontWeights: {
        1: number;
        2: number;
    };
    lineHeights: {
        1: string;
        2: string;
        3: string;
    };
    radii: {
        1: string;
        2: string;
        round: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    anim: (animations: {
        (): string;
    }[]) => {
        animation: string;
    };
    trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
        transition: string;
    };
    typo: ({ size, weight, height }: FontOptions) => {
        fontFamily: string;
        fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
        fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
        lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
    };
}>>, config: {
    prefix: "";
    media: {
        mobile: "(max-width: 768px)";
    };
    theme: {
        colors: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            primary: string;
            darkPrimary: string;
            fadedPrimary: string;
            black: string;
            white: string;
            lightGrey: string;
            medGrey: string;
            darkGrey: string;
            blue: string;
            warn: string;
            darkWarn: string;
        };
        shadows: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        sizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        fonts: {
            default: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        fontWeights: {
            1: number;
            2: number;
        };
        lineHeights: {
            1: string;
            2: string;
            3: string;
        };
        radii: {
            1: string;
            2: string;
            round: string;
        };
    };
    themeMap: import("@stitches/react/types/config").DefaultThemeMap;
    utils: {
        anim: (animations: {
            (): string;
        }[]) => {
            animation: string;
        };
        trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
            transition: string;
        };
        typo: ({ size, weight, height }: FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    };
}, keyframes: (style: {
    [offset: string]: import("@stitches/react/types/css-util").CSS<{
        mobile: "(max-width: 768px)";
    }, {
        colors: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
            primary: string;
            darkPrimary: string;
            fadedPrimary: string;
            black: string;
            white: string;
            lightGrey: string;
            medGrey: string;
            darkGrey: string;
            blue: string;
            warn: string;
            darkWarn: string;
        };
        shadows: {
            shadow1: string;
            shadow2: string;
            shadow3: string;
            shadow4: string;
            shadow6: string;
            shadow8: string;
            shadow12: string;
            shadow16: string;
        };
        space: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
            6: string;
        };
        sizes: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
        };
        fonts: {
            default: string;
        };
        fontSizes: {
            1: string;
            2: string;
            3: string;
        };
        fontWeights: {
            1: number;
            2: number;
        };
        lineHeights: {
            1: string;
            2: string;
            3: string;
        };
        radii: {
            1: string;
            2: string;
            round: string;
        };
    }, import("@stitches/react/types/config").DefaultThemeMap, {
        anim: (animations: {
            (): string;
        }[]) => {
            animation: string;
        };
        trans: (properties: Array<keyof CSSPropertiesHyphen>) => {
            transition: string;
        };
        typo: ({ size, weight, height }: FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>;
}) => {
    (): string;
    name: string;
};
interface ThemeOverrides {
    color?: string | undefined;
}
export declare const createCustomTheme: ({ color }: ThemeOverrides) => string & {
    className: string;
    selector: string;
} & import("@stitches/react/types/stitches").ThemeTokens<{
    colors: {};
}, "">;
export {};
