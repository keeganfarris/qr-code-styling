import cornerDotTypes from "../../../constants/cornerDotTypes";
import { CornerDotType } from "../../../types";
import { cornerDotPathBuilder } from "../../PathBuilder";

type DrawArgs = {
  x: number;
  y: number;
  size: number;
  context: CanvasRenderingContext2D;
  rotation: number;
};

type BasicFigureDrawArgs = {
  x: number;
  y: number;
  size: number;
  context: CanvasRenderingContext2D;
  rotation: number;
};

type RotateFigureArgs = {
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

  static loadPath(type: string | undefined): Promise<void> {
    return cornerDotPathBuilder.loadPath(type);
  }

  constructor({ context, type }: { context: CanvasRenderingContext2D; type: CornerDotType }) {
    this._context = context;
    this._type = type;
  }

  draw(x: number, y: number, size: number, rotation: number): void {
    const context = this._context;
    const type = this._type;
    let drawFunction;

    switch (type) {
      case cornerDotTypes.square:
        drawFunction = this._drawSquare;
        break;
      case cornerDotTypes.rounded:
      case cornerDotTypes.square2:
      case cornerDotTypes.square3:
      case cornerDotTypes.dot2:
      case cornerDotTypes.dot3:
      case cornerDotTypes.dot4:
      case cornerDotTypes.sun:
      case cornerDotTypes.star:
      case cornerDotTypes.diamond:
      case cornerDotTypes.x:
      case cornerDotTypes.xRounded:
      case cornerDotTypes.cross:
      case cornerDotTypes.crossRounded:
      case cornerDotTypes.heart:
        drawFunction = this._drawPath;
        break;
      case cornerDotTypes.dot:
      default:
        drawFunction = this._drawDot;
    }

    drawFunction.call(this, { x, y, size, context, rotation });
  }

  _rotateFigure({ x, y, size, context, rotation, draw }: RotateFigureArgs): void {
    const cx = x + size / 2;
    const cy = y + size / 2;

    context.translate(cx, cy);
    rotation && context.rotate(rotation);
    draw();
    context.closePath();
    rotation && context.rotate(-rotation);
    context.translate(-cx, -cy);
  }

  _basicDot(args: BasicFigureDrawArgs): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.arc(0, 0, size / 2, 0, Math.PI * 2);
      }
    });
  }

  _basicSquare(args: BasicFigureDrawArgs): void {
    const { size, context } = args;

    this._rotateFigure({
      ...args,
      draw: () => {
        context.rect(-size / 2, -size / 2, size, size);
      }
    });
  }

  _drawDot({ x, y, size, context, rotation }: DrawArgs): void {
    this._basicDot({ x, y, size, context, rotation });
  }

  _drawSquare({ x, y, size, context, rotation }: DrawArgs): void {
    this._basicSquare({ x, y, size, context, rotation });
  }

  _drawPath({ x, y, size, context }: DrawArgs): void {
    const path2D = new Path2D(cornerDotPathBuilder.build({ type: this._type, size, x, y }));
    context.fill(path2D);
  }
}
