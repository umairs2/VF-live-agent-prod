export interface FooterProps {
    /**
     * If true, shows a watermark indicating that the conversation is powered by Voiceflow.
     */
    withWatermark: boolean;
    /**
     * If true, shows a prompt to start a new chat by calling the {@link onStart} handler.
     * If false, renders controls for the user to write a response.
     */
    hasEnded?: boolean | undefined;
    /**
     * A callback to start a new conversation.
     */
    onStart?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    /**
     * A callback to submit a user response.
     */
    onSend?: ((message: string) => void) | undefined;
    isLiveAgentEnabled?: boolean;
    liveAgent?: any;
}
/**
 * Footer for the chat widget; displays input controls or a prompt to restart the conversation.
 *
 * @see {@link https://voiceflow.github.io/react-chat/?path=/docs/components-chat-footer--running}
 */
declare const _default: import("react").FC<FooterProps> & {
    Container: import("@stitches/react/types/styled-component").StyledComponent<(props: import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, {
        withShadow?: boolean | "true";
        withWatermark?: boolean | "true";
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
    Watermark: import("@stitches/react/types/styled-component").StyledComponent<(props: import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLElement>, HTMLElement>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, {}, {
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
