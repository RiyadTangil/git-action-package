const A = "data:image/png;base64,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";
export {
  A as p
};
