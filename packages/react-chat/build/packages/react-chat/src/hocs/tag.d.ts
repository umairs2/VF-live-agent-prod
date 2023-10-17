export declare const tagFactory: (prefix: string) => {
    <Tag extends keyof JSX.IntrinsicElements>(tag: Tag, suffix?: string): (props: import("react").ComponentProps<Tag>) => React.ReactElement;
    <Props extends unknown>(component: import("react").ComponentType<Props>, suffix?: string): (props: Props) => React.ReactElement;
};
