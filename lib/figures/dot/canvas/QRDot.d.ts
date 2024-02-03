import { DotType } from "../../../types";
import QRDotBase, { BasicFigureDrawArgs, DrawArgs, RotateFigureArgs, RotateRectangleArgs } from "../QRDotBase";
export default class QRDot extends QRDotBase {
    _context: CanvasRenderingContext2D;
    _type: DotType;
    constructor({ context, type }: {
        context: CanvasRenderingContext2D;
        type: DotType;
    });
    _rotateFigure({ x, y, size, rotation, draw }: RotateFigureArgs): void;
    _rotateRectangle({ x, y, xSize, ySize, rotation, draw }: RotateRectangleArgs): void;
    _basicDot(args: BasicFigureDrawArgs): void;
    _basicReducedDot(args: BasicFigureDrawArgs, baseSize: number): void;
    _basicSquare(args: BasicFigureDrawArgs): void;
    _basicReducedSquare(args: BasicFigureDrawArgs, baseSize: number): void;
    _basicSideRounded(args: BasicFigureDrawArgs): void;
    _reducedBasicSideRounded(args: BasicFigureDrawArgs, baseSize: number): void;
    _basicCornerRounded(args: BasicFigureDrawArgs): void;
    _basicCornerExtraRounded(args: BasicFigureDrawArgs): void;
    _basicCornersRounded(args: BasicFigureDrawArgs): void;
    _basicCornersExtraRounded(args: BasicFigureDrawArgs): void;
    _basicRectangle(args: {
        x: number;
        y: number;
        xSize: number;
        ySize: number;
    }): void;
    _basicCornerRibbon(args: BasicFigureDrawArgs): void;
    _basicDiamond(args: BasicFigureDrawArgs): void;
    _basicSideDiamond(args: BasicFigureDrawArgs): void;
    _basicCornerDiamond(args: BasicFigureDrawArgs): void;
    _drawPath({ x, y, size }: DrawArgs): void;
}
