import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card width='300px'>
      <Skeleton borderRadius = {10} height="250px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};
export default GameCardSkeleton;
