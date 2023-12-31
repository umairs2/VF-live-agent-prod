import { RefObject } from 'react';
import { CardProps } from '../Card';
export declare const useScrollTo: <T extends HTMLElement>(ref: RefObject<T> | undefined, getNextIndex: (el: T) => number) => () => void;
export declare const useScrollObserver: (containerRef: RefObject<HTMLDivElement> | undefined, controlsRef: RefObject<HTMLSpanElement> | undefined, cards: CardProps[]) => {
    previousButtonRef: RefObject<HTMLButtonElement>;
    nextButtonRef: RefObject<HTMLButtonElement>;
    showPreviousButton: boolean;
    showNextButton: boolean;
};
