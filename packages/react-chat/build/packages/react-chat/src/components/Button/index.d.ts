import { ButtonVariant } from './constants';
/**
 * A button with a label.
 *
 * @see {@link https://voiceflow.github.io/react-chat/?path=/story/core-button--primary-info}
 */
declare const _default: import("react").ForwardRefExoticComponent<(Omit<{
    variant?: "primary" | ButtonVariant.PRIMARY;
} & Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
    mobile: "(max-width: 768px)";
}> & {
    css?: import("@stitches/react/types/css-util").CSS<{
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>;
}, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
    mobile: "(max-width: 768px)";
}> & {
    css?: import("@stitches/react/types/css-util").CSS<{
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>;
}, "type" | "css"> & import("@stitches/react/types/styled-component").TransformProps<{
    type?: "warn" | "info" | "subtle";
}, {
    mobile: "(max-width: 768px)";
}> & {
    css?: import("@stitches/react/types/css-util").CSS<{
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>;
}, "ref"> | Omit<{
    variant: ButtonVariant.SECONDARY | "secondary";
} & Omit<Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
    ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
}, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
    mobile: "(max-width: 768px)";
}> & {
    css?: import("@stitches/react/types/css-util").CSS<{
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>;
}, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
    mobile: "(max-width: 768px)";
}> & {
    css?: import("@stitches/react/types/css-util").CSS<{
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>;
}, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
    mobile: "(max-width: 768px)";
}> & {
    css?: import("@stitches/react/types/css-util").CSS<{
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>;
}, "ref">) & import("react").RefAttributes<HTMLElement>> & {
    Variant: typeof ButtonVariant;
    Reset: import("@stitches/react/types/styled-component").StyledComponent<"button", {}, {
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>>;
    Container: import("@stitches/react/types/styled-component").StyledComponent<(props: Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
    }, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
        mobile: "(max-width: 768px)";
    }> & {
        css?: import("@stitches/react/types/css-util").CSS<{
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
            anim: (animations: (() => string)[]) => {
                animation: string;
            };
            trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
                transition: string;
            };
            typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
                fontFamily: string;
                fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
                fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
                lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
            };
        }>;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, {}, {
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>>;
    Primary: import("@stitches/react/types/styled-component").StyledComponent<(props: Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
    }, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
        mobile: "(max-width: 768px)";
    }> & {
        css?: import("@stitches/react/types/css-util").CSS<{
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
            anim: (animations: (() => string)[]) => {
                animation: string;
            };
            trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
                transition: string;
            };
            typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
                fontFamily: string;
                fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
                fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
                lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
            };
        }>;
    }, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
        mobile: "(max-width: 768px)";
    }> & {
        css?: import("@stitches/react/types/css-util").CSS<{
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
            anim: (animations: (() => string)[]) => {
                animation: string;
            };
            trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
                transition: string;
            };
            typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
                fontFamily: string;
                fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
                fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
                lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
            };
        }>;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, {
        type?: "warn" | "info" | "subtle";
    }, {
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>>;
    Secondary: import("@stitches/react/types/styled-component").StyledComponent<(props: Omit<Omit<Omit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void) | import("react").RefObject<HTMLButtonElement> | null | undefined;
    }, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
        mobile: "(max-width: 768px)";
    }> & {
        css?: import("@stitches/react/types/css-util").CSS<{
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
            anim: (animations: (() => string)[]) => {
                animation: string;
            };
            trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
                transition: string;
            };
            typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
                fontFamily: string;
                fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
                fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
                lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
            };
        }>;
    }, "css"> & import("@stitches/react/types/styled-component").TransformProps<{}, {
        mobile: "(max-width: 768px)";
    }> & {
        css?: import("@stitches/react/types/css-util").CSS<{
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
            anim: (animations: (() => string)[]) => {
                animation: string;
            };
            trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
                transition: string;
            };
            typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
                fontFamily: string;
                fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
                fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
                lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
            };
        }>;
    }) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, {}, {
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
        anim: (animations: (() => string)[]) => {
            animation: string;
        };
        trans: (properties: (keyof import("csstype").PropertiesHyphen<0 | (string & {}), string & {}>)[]) => {
            transition: string;
        };
        typo: ({ size, weight, height }: import("../../styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>>;
};
export default _default;