declare type PathArr = Array<string | number>;
export default class SvgParser {
    static components(type: string, path: string, cursor: number, size: number): [number, PathArr];
    static parse(path: string, size: number): PathArr;
}
export {};
