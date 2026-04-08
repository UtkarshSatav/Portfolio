import {
  DiscordIcon,
  GitHubIcon,
  InstaIcon,
  LinkedInIcon,
  TwitterIcon,
  ResumeIcon,
} from "../Components/Icons";

export const links = [
  {
    href: "https://github.com/utkarshsatav",
    name: "GitHub",
    target: "_blank",
    Icon: <GitHubIcon className="md:size-6 size-7 fill-white/85" />,
  },
  {
    href: "https://www.linkedin.com/in/utkarshsatav",
    name: "LinkedIn",
    target: "_blank",
    Icon: <LinkedInIcon className="md:size-6 size-7 fill-white/85" />,
  },
  {
    href: "https://x.com/UtkarshSatav",
    name: "X (Twitter)",
    target: "_blank",
    Icon: <TwitterIcon className="md:size-6 size-7 fill-white/85" />,
  },
  {
    href: "https://www.instagram.com/_utkarsh_satav_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    name: "Instagram",
    target: "_blank",
    Icon: <InstaIcon className="md:size-6 size-7 fill-white/85" />,
  },
  {
    href: "/Utkarsh_Satav_Full_Stack_Developer_Resume.docx",
    name: "Resume",
    target: "_blank",
    Icon: <ResumeIcon className="md:size-6 size-7 stroke-white/85" />,
  },
];
