import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import Platform from "../entities/Platform";

interface Props {
  platforms: Platform[];
}
const PlatformIconList = ({ platforms }: Props) => {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    intentdo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    mac: FaApple,
    android: FaAndroid,
  };
  return (
    <HStack paddingY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconsMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
