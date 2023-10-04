// taken from https://synthetic.garden/3y3.htm

export function is3y3(text) {
    return !![...text].some((x) => 0xe0000 < x.codePointAt(0) && x.codePointAt(0) < 0xe007f);
  }
  
  export function decode3y3(text) {
    return ((text) =>
      [...text]
        .map((x) =>
          0xe0000 < x.codePointAt(0) && x.codePointAt(0) < 0xe007f
            ? String.fromCodePoint(x.codePointAt(0) - 0xe0000)
            : x
        )
        .join(""))(text);
  }
  
  export function encode3y3(text) {
    return ((text) =>
      [...text]
        .map((x) =>
          0x00 < x.codePointAt(0) && x.codePointAt(0) < 0x7f
            ? `${String.fromCodePoint(x.codePointAt(0) + 0xe0000)}`
            : x
        )
        .join(""))(text);
  }