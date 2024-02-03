declare type Path = {
    path: string;
    size: number;
};
declare const paths: {
    [key in string]: Path;
};
export declare const lazyPaths: {
    [x: string]: () => Promise<{
        default: Path;
    }>;
};
export default paths;
