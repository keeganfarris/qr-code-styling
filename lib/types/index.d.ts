export interface UnknownObject {
    [key: string]: any;
}
export declare type DotType = "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded" | "horizontal-rounded" | "vertical-rounded" | "star" | "diamond" | "x" | "cross" | "cross-rounded" | "x-rounded" | "heart" | "sparkle" | "ribbon" | "diamond-special" | "shake";
export declare type CornerDotType = "dot" | "square" | "rounded" | "square2" | "square3" | "dot2" | "dot3" | "dot4" | "sun" | "star" | "diamond" | "x" | "x-rounded" | "cross" | "cross-rounded" | "heart";
export declare type CornerSquareType = "dot" | "square" | "extra-rounded" | "shape1" | "shape2" | "shape3" | "shape4" | "shape5" | "shape6" | "shape7" | "shape8" | "shape9" | "shape10" | "shape11" | "shape12";
export declare type Extension = "png" | "jpeg" | "webp" | "svg";
export declare type GradientType = "radial" | "linear";
export declare type DrawType = "canvas" | "svg";
export interface DotTypes {
    [key: string]: DotType;
}
export interface GradientTypes {
    [key: string]: GradientType;
}
export interface CornerDotTypes {
    [key: string]: CornerDotType;
}
export interface CornerSquareTypes {
    [key: string]: CornerSquareType;
}
export interface DrawTypes {
    [key: string]: DrawType;
}
export declare type TypeNumber = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40;
export declare type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
export declare type Mode = "Numeric" | "Alphanumeric" | "Byte" | "Kanji";
export interface QRCode {
    addData(data: string, mode?: Mode): void;
    make(): void;
    getModuleCount(): number;
    isDark(row: number, col: number): boolean;
    createImgTag(cellSize?: number, margin?: number): string;
    createSvgTag(cellSize?: number, margin?: number): string;
    createSvgTag(opts?: {
        cellSize?: number;
        margin?: number;
        scalable?: boolean;
    }): string;
    createDataURL(cellSize?: number, margin?: number): string;
    createTableTag(cellSize?: number, margin?: number): string;
    createASCII(cellSize?: number, margin?: number): string;
    renderTo2dContext(context: CanvasRenderingContext2D, cellSize?: number): void;
}
