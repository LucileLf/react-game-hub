import { Platform } from "../hooks/useGames";
import { HStack, Icon  } from "@chakra-ui/react";

import {
  FaXbox,
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = { //index signature = specify types of key/values
    xbox: FaXbox,
    pc: FaWindows,
    playstation: FaPlaystation,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}> in chakra, 1 means 4 px
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500'/> // slug is name inlowercase (textual id)
      ))}
    </HStack>
  );
};


export default PlatformIconList;
