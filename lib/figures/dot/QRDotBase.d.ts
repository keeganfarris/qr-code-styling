import { DotType } from "../../types";
export declare type GetNeighbor = (x: number, y: number) => boolean;
export declare type DrawArgs = {
    x: number;
    y: number;
    xIndex: number;
    yIndex: number;
    size: number;
    cornerIndex: number;
    getNeighbor: GetNeighbor;
};
export declare type BasicFigureDrawArgs = {
    x: number;
    y: number;
    size: number;
    rotation: number;
};
export declare type RotateFigureArgs = {
    x: number;
    y: number;
    size: number;
    rotation: number;
    draw: () => void;
};
export declare type RotateRectangleArgs = {
    x: number;
    y: number;
    xSize: number;
    ySize: number;
    rotation: number;
    draw: () => void;
};
export default abstract class QRDotBase {
    abstract _type: DotType;
    abstract _basicRectangle(args: {
        x: number;
        y: number;
        xSize: number;
        ySize: number;
    }): void;
    abstract _basicCornersRounded(args: BasicFigureDrawArgs): void;
    abstract _basicCornerExtraRounded(args: BasicFigureDrawArgs): void;
    abstract _basicSquare(args: BasicFigureDrawArgs): void;
    abstract _basicReducedSquare(args: BasicFigureDrawArgs, baseSize: number): void;
    abstract _basicDot(args: BasicFigureDrawArgs): void;
    abstract _basicDiamond(args: BasicFigureDrawArgs): void;
    abstract _basicCornerRounded(args: BasicFigureDrawArgs): void;
    abstract _basicCornerRibbon(args: BasicFigureDrawArgs): void;
    abstract _basicSideDiamond(args: BasicFigureDrawArgs): void;
    abstract _basicCornerDiamond(args: BasicFigureDrawArgs): void;
    abstract _basicSideRounded(args: BasicFigureDrawArgs): void;
    abstract _reducedBasicSideRounded(args: BasicFigureDrawArgs, baseSize: number): void;
    abstract _basicReducedDot(args: BasicFigureDrawArgs, baseSize: number): void;
    abstract _drawPath({ x, y, size }: DrawArgs): void;
    draw({ x, y, xIndex, yIndex, size, getNeighbor, cornerIndex }: {
        x: number;
        xIndex: number;
        yIndex: number;
        y: number;
        size: number;
        getNeighbor: GetNeighbor;
        cornerIndex?: number;
    }): void;
    _getNeighbors(getNeighbor: GetNeighbor): {
        left: number;
        right: number;
        top: number;
        bottom: number;
        count: number;
    };
    _getSideRotation({ right, top, bottom }: {
        right: number;
        top: number;
        bottom: number;
    }): number;
    _drawClassyRounded({ x, y, size, getNeighbor }: DrawArgs): void;
    _drawDot({ x, y, size }: DrawArgs): void;
    _drawSquare({ x, y, size }: DrawArgs): void;
    _drawRounded({ x, y, size, getNeighbor }: DrawArgs): void;
    _drawExtraRounded({ x, y, size, getNeighbor }: DrawArgs): void;
    _drawClassy({ x, y, size, getNeighbor }: DrawArgs): void;
    _drawHorizontalRounded({ x, y, size: baseSize, getNeighbor }: DrawArgs): void;
    _drawVerticalRounded({ x, y, size: baseSize, getNeighbor }: DrawArgs): void;
    _drawRibbon({ x, y, size, getNeighbor }: DrawArgs): void;
    _drawDiamondSpecial({ x, y, size, getNeighbor }: DrawArgs): void;
    _drawShake({ x, y, xIndex, yIndex, size: baseSize, cornerIndex }: DrawArgs): void;
}
