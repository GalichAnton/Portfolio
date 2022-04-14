export interface ILink {
  id: string;
  title: string;
  link: string;
  description: string;
  addedAt: Date;
  tag_list: string[];
}

export const interestingLinks: ILink[] = [
  {
    id: "1",
    title: "Learn.js",
    link: "https://learn.javascript.ru/",
    description: "The best javascript tutorial in my opinion",
    addedAt: new Date(2022, 3, 13),
    tag_list: ["tutorial", "javascript", "book"],
  },
  {
    id: "2",
    title: "React documentation",
    link: "https://reactjs.org/",
    description: "React js documentation",
    addedAt: new Date(2022, 3, 14),
    tag_list: ["tutorial", "react", "documentation"],
  },
  {
    id: "3",
    title: "Collection of TypeScript type challenges",
    link: "https://github.com/type-challenges/type-challenges",
    description:
      "High-quality types can help improve projects' maintainability while avoiding potential bugs. There are a bunch of awesome type utility libraries may boost your works on types, like ts-toolbelt, utility-types, SimplyTyped, etc., which you can already use.",
    addedAt: new Date(2022, 3, 15),
    tag_list: ["typescript", "challenge", "game"],
  },
  {
    id: "5",
    title: "JS, TS, questions and tasks",
    link: "https://galichanton.github.io/Answers/",
    description:
      "Collection of popular questions and problems on js, ts, react",
    addedAt: new Date(2022, 3, 10),
    tag_list: ["javascript", "typescript", "tasks", "study"],
  },
];
