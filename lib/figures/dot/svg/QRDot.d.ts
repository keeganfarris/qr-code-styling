import { DotType } from "../../../types";
import QRDotBase, { BasicFigureDrawArgs, DrawArgs, RotateFigureArgs, RotateRectangleArgs } from "../QRDotBase";
export default class QRDot extends QRDotBase {
    _element?: SVGElement;
    _svg: SVGElement;
    _type: DotType;
    constructor({ svg, type }: {
        svg: SVGElement;
        type: DotType;
    });
    _rotateFigure({ x, y, size, rotation, draw }: RotateFigureArgs): void;
    _rotateRectangle({ x, y, xSize, ySize, rotation, draw }: RotateRectangleArgs): void;
    _basicDot(args: BasicFigureDrawArgs): void;
    _basicReducedDot(args: BasicFigureDrawArgs, baseSize: number): void;
    _basicSquare(args: BasicFigureDrawArgs): void;
    _basicReducedSquare(args: BasicFigureDrawArgs, baseSize: number): void;
    _basicRectangle(args: {
        x: number;
        y: number;
        xSize: number;
        ySize: number;
    }): void;
    _basicSideRounded(args: BasicFigureDrawArgs): void;
    _reducedBasicSideRounded(args: BasicFigureDrawArgs, baseSize: number): void;
    _basicCornerRounded(args: BasicFigureDrawArgs): void;
    _basicCornerExtraRounded(args: BasicFigureDrawArgs): void;
    _basicCornersRounded(args: BasicFigureDrawArgs): void;
    _basicCornerRibbon(args: BasicFigureDrawArgs): void;
    _basicDiamond(args: BasicFigureDrawArgs): void;
    _basicSideDiamond(args: BasicFigureDrawArgs): void;
    _basicCornerDiamond(args: BasicFigureDrawArgs): void;
    _drawPath({ x, y, size }: DrawArgs): void;
}
