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
    addedAt: new Date("13-04-2022"),
    tag_list: ["tutorial", "javascript", "book"],
  },
  {
    id: "2",
    title: "React documentation",
    link: "https://reactjs.org/",
    description: "React js documentation",
    addedAt: new Date("14-04-2022"),
    tag_list: ["tutorial", "rect", "documentation"],
  },
];
