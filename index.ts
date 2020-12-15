type classNamesType = string | Array<string | boolean | null | undefined | classNamesType> | {
    [x: string]: classNamesType;
};

export default function twx(classNames: classNamesType, add = '', separator = ':'): string {
    if (Array.isArray(classNames)) {
        return classNames
            .map(className => {
                if (typeof className === "string") {
                    return add.length > 0 ? `${add}${separator}${className}` : className;
                }
                if (Array.isArray(className)) {
                    return twx(className);
                }
                if (typeof className === "object") {
                    return twx(classNames);
                }
                return "";
            })
            .filter(className => className.length > 0)
            .join(" ");
    } else if (typeof classNames === "object") {
        const keys = Object.keys(classNames);

        return keys
            .flatMap(key => {
                return twx(classNames[key], key.length > 0 ? (add.length > 0 ? `${add}${separator}${key}` : key) : add);
            })
            .join(" ");
    }
    return classNames;
}