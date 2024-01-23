import {
  Card,
  CardBody,
  CardHeader,
  VStack,
  Tag,
  TagLeftIcon,
  TagLabel,
  Text,
  ComponentWithAs,
  IconProps,
} from "@chakra-ui/react";
import { CheckOneIcon } from "../../icons/icons";

interface infoCardProps {
  icon: ComponentWithAs<"svg", IconProps>;
  iconColor: string;
  tagText: string;
  tagTextIcon?: boolean;
  candidateProperty?: number;
  tagBackgroundColor: string;
  style?: React.CSSProperties;
}

export function SmallInfoCardWithIcon({
  icon,
  tagText,
  tagTextIcon,
  candidateProperty,
  iconColor,
  tagBackgroundColor,
}: infoCardProps) {
  return (
    <Card minW={"16%"}>
      <CardHeader />
      <CardBody>
        <VStack height={"100%"} justify={"center"}>
          <Tag size="lg" backgroundColor={tagBackgroundColor}>
            <TagLeftIcon as={icon} color={iconColor} />
            <TagLabel color={iconColor} fontWeight="600">
              {candidateProperty ? candidateProperty : ""}
            </TagLabel>
          </Tag>
          <Text color="qeeps.main" fontSize="0.625rem" fontWeight="300">
            {tagText} {tagTextIcon ? <CheckOneIcon /> : ""}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
}
