import { VariantProp } from '@/types';
export declare const tag: {
    <Tag extends keyof JSX.IntrinsicElements>(tag: Tag, suffix?: string | undefined): (props: import("react").ComponentProps<Tag>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    <Props extends unknown>(component: import("react").ComponentType<Props>, suffix?: string | undefined): (props: Props) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
};
export declare const DefaultImageBase: import("@stitches/react/types/styled-component").StyledComponent<(props: import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, {
    isRounded?: boolean | "true";
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
    typo: ({ size, weight, height }: import("@/styles").FontOptions) => {
        fontFamily: string;
        fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
        fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
        lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
    };
}>>;
export interface DefaultImageProps extends React.ComponentProps<typeof DefaultImageBase> {
    /**
     * A URL for the image to render.
     */
    image: string | null;
    /**
     * If true, rounds the corners of the image border.
     *
     * @default true
     */
    isRounded?: VariantProp<typeof DefaultImageBase, 'isRounded'>;
}
/**
 * An image rendered as the `src` of an `<img>`.
 *
 * @see {@link https://voiceflow.github.io/react-chat/?path=/story/core-image--round-corners}
 */
declare const _default: import("react").FC<DefaultImageProps> & {
    Base: import("@stitches/react/types/styled-component").StyledComponent<(props: import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, {
        isRounded?: boolean | "true";
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
        typo: ({ size, weight, height }: import("@/styles").FontOptions) => {
            fontFamily: string;
            fontSize: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontSize | "$1" | "$2" | "$3";
            fontWeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.FontWeight | "$1" | "$2";
            lineHeight: import("@stitches/react/types/css").Globals | import("@stitches/react/types/theme").ScaleValue | import("@stitches/react/types/util").Index | import("@stitches/react/types/css").Property.LineHeight | "$1" | "$2" | "$3";
        };
    }>>;
};
export default _default;
