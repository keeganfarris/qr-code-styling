import { CornerDotType } from "../../../types";
declare type DrawArgs = {
    x: number;
    y: number;
    size: number;
    context: CanvasRenderingContext2D;
    rotation: number;
};
declare type BasicFigureDrawArgs = {
    x: number;
    y: number;
    size: number;
    context: CanvasRenderingContext2D;
    rotation: number;
};
declare type RotateFigureArgs = {
    x: number;
    y: number;
    size: number;
    context: CanvasRenderingContext2D;
    rotation: number;
    draw: () => void;
};
export default class QRCornerDot {
    _context: CanvasRenderingContext2D;
    _type: CornerDotType;
    static loadPath(type: string | undefined): Promise<void>;
    constructor({ context, type }: {
        context: CanvasRenderingContext2D;
        type: CornerDotType;
    });
    draw(x: number, y: number, size: number, rotation: number): void;
    _rotateFigure({ x, y, size, context, rotation, draw }: RotateFigureArgs): void;
    _basicDot(args: BasicFigureDrawArgs): void;
    _basicSquare(args: BasicFigureDrawArgs): void;
    _drawDot({ x, y, size, context, rotation }: DrawArgs): void;
    _drawSquare({ x, y, size, context, rotation }: DrawArgs): void;
    _drawPath({ x, y, size, context }: DrawArgs): void;
}
export {};
