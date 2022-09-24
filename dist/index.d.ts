declare function JSONWasm(name: any, input: any, options: {
    output_mode: "rust" | "typescript" | "typescript/typealias" | "kotlin/jackson" | "kotlin/kotlinx" | "kotlin" | "python" | "json_schema" | "shape";
}): Promise<any>;

export { JSONWasm };
