declare type Path = {
    path: string;
    size: number;
};
declare const paths: {
    [key in string]: {
        path: string;
        size: number;
    };
};
export declare const lazyPaths: {
    [x: string]: () => Promise<{
        default: Path;
    }>;
};
export default paths;
