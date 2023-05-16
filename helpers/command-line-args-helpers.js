export const ARGS = {
  "-s": { type: "string", key: "s" },
  "-h": { type: "boolean", key: "h" },
  "-t": { type: "string", key: "t" },
};

function isValidValue(value) {
  return !ARGS[value];
}

export function parseParam(arg, value) {
  if (!arg || !isValidValue(value)) return;
  if (arg.type === "boolean") return { [arg.key]: true };
  return { [arg.key]: value };
}

export function getArgs(args) {
  const [, , ...restArgs] = args;
  return restArgs.reduce((acc, item, index, array) => {
    const param = parseParam(ARGS[item], array[index + 1]);
    if (param) Object.assign(acc, param);
    return acc;
  }, {});
}
