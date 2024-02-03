declare type Path = {
    path: string;
    size: number;
};
declare type Paths = {
    [key in string]: Path;
};
declare type LazyPath = Promise<{
    default: Path;
}>;
declare class PathBuilder {
    cachedPaths: {
        [key in string]: {
            [key in number]: string;
        };
    };
    cachedRelativePaths: {
        [key in string]: Array<string | number>;
    };
    paths: Paths;
    lazyPaths: {
        [key in string]: () => LazyPath;
    };
    constructor(paths: Paths, lazyPaths?: {});
    loadPath(type: string | undefined): Promise<void>;
    build({ type, size, x, y }: {
        type: string;
        size: number;
        x: number;
        y: number;
    }): string;
}
export declare const cornerSquarePathBuilder: PathBuilder;
export declare const cornerDotPathBuilder: PathBuilder;
export declare const dotPathBuilder: PathBuilder;
export default PathBuilder;
