import React from 'react';
import { AssistantInfoProps } from '@/components/AssistantInfo';
import { FooterProps } from '@/components/Footer';
import { HeaderProps } from '@/components/Header';
import { Nullish } from '@/types';
export interface ChatProps extends HeaderProps, AssistantInfoProps, FooterProps, React.PropsWithChildren<unknown> {
    /**
     * A short description of the assistant to help frame the conversation.
     */
    description: string;
    /**
     * If true, shows a loading indicator.
     */
    isLoading: boolean;
    /**
     * A unix timestamp indicating the start of the conversation.
     */
    startTime?: Nullish<number>;
    /**
     * If true, a Voiceflow watermark is added to the footer.
     */
    withWatermark: boolean;
    /**
     * A callback that is executed when the chat widget is minimized.
     */
    onMinimize?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * A callback that is executed when the conversation ends.
     */
    onEnd?: React.MouseEventHandler<HTMLButtonElement>;
    liveAgent: any;
}
/**
 * A full chat dialog with header, footer, overlay and auto-scrolling content.
 *
 * @see {@link https://voiceflow.github.io/react-chat/?path=/story/templates-chat--empty}
 */
declare const _default: React.NamedExoticComponent<ChatProps> & {
    Container: import("@stitches/react/types/styled-component").StyledComponent<(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, {
        withPrompt?: boolean | "true" | "false";
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
    Dialog: import("@stitches/react/types/styled-component").StyledComponent<(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, {}, {
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
    Overlay: import("@stitches/react/types/styled-component").StyledComponent<(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, {}, {
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
    Spacer: import("@stitches/react/types/styled-component").StyledComponent<(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, {}, {
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
    Status: import("@stitches/react/types/styled-component").StyledComponent<(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>, {}, {
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
