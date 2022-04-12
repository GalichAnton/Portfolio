import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
interface IAccount {
  url: string;
  label: string;
  type: string;
  icon: JSX.Element;
}
interface IConfig {
  copyright: string;
  author: {
    name: string;
    accounts: IAccount[];
  };
}

const myConfig: IConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
  author: {
    name: "Muhammad Ahmad",
    accounts: [
      {
        url: "https://github.com/GalichAnton",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />,
      },
      {
        url: "https://t.me/Anton_Galich",
        label: "Telegram Account",
        type: "telegram",
        icon: <FaTelegram />,
      },
      {
        url: "https://www.linkedin.com/in/antongalich",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />,
      },
      {
        url: "mailto:inthesky133@gmail.com",
        label: "Mail me",
        type: "gray",
        icon: <FiMail />,
      },
    ],
  },
};

export default myConfig;
