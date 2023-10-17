import type { SystemResponseProps } from '@/components/SystemResponse';
import type { UserResponseProps } from '@/components/UserResponse';
export declare enum TurnType {
    USER = "user",
    SYSTEM = "system"
}
export interface UserTurnProps extends UserResponseProps {
    id: string;
    type: TurnType.USER;
}
export interface SystemTurnProps extends Omit<SystemResponseProps, 'avatar'> {
    id: string;
    type: TurnType.SYSTEM;
    timestamp: number;
}
export declare type TurnProps = UserTurnProps | SystemTurnProps;
