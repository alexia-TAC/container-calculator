import { hubspot, Button, Text, Flex } from '@hubspot/ui-extensions';

hubspot.extend(({ actions }) => (
  <CalculatorCard openIframeModal={actions.openIframeModal} />
));

const CalculatorCard = ({ openIframeModal }) => {
  const openCalculator = () => {
    openIframeModal({
      uri: 'https://alexia-tac.github.io/container-calculator/',
      height: 850,
      width: 1100,
      title: 'Container Loading Calculator',
      flush: true,
    });
  };

  return (
    <Flex direction="column" gap="md" align="start">
      <Text>Calculate container loading for this deal.</Text>
      <Button onClick={openCalculator} variant="primary">
        Open Calculator
      </Button>
    </Flex>
  );
};
