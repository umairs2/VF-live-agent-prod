export { isObject } from 'remeda';
export declare const isEnumValue: <T extends {
    [k: string]: string;
}>(value: any, enumObject: T) => value is T[keyof T];
export { default as cuid } from 'cuid';
