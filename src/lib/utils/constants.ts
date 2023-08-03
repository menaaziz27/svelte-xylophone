import a from "$lib/assets/a.mp4";
import b from "$lib/assets/b.mp4";
import c2 from "$lib/assets/c2.mp4";
import c from "$lib/assets/c.mp4";
import d1 from "$lib/assets/d1.mp4";
import e1 from "$lib/assets/e1.mp4";
import f from "$lib/assets/f.mp4";
import g from "$lib/assets/g.mp4";

export type NoteType = {
  name: string;
  file: string;
};

export const notes = [
  {
    name: "c",
    file: c,
  },
  {
    name: "d1",
    file: d1,
  },
  {
    name: "e1",
    file: e1,
  },
  {
    name: "f",
    file: f,
  },
  {
    name: "g",
    file: g,
  },
  {
    name: "a",
    file: a,
  },
  {
    name: "b",
    file: b,
  },
  {
    name: "c2",
    file: c2,
  },
];
