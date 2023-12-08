import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellox' : ''
  return (
    <Badge colorScheme={color} fontSize="14px" padding={2} borderRadius="4px">
      {" "}
      {score}
    </Badge>
  );
};

export default CriticScore;
