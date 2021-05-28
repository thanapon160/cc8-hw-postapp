import { Box, Heading, Button } from '@chakra-ui/react'

function DesignSystemPage() {
  return (
    <Box>
      <Box bg="primary.200" p="10" fontSize="30" color="white">
        Test Page: App's Design System
      </Box>
      <Box bg="muted.300" p="5" borderRadius="xl">
        <Heading>Buttons</Heading>
        <Button size="sm" colorScheme="blue">Size sm</Button>
        <Button size="md" colorScheme="green">Size md</Button>
        <Button size="lg" colorScheme="blue">Size lg</Button>
      </Box>
      <Box bg="muted.300" p="5" borderRadius="xl">
        <Heading>Button Variant</Heading>
        <Button size="sm" variant="Primary">Primay</Button>
        <Button size="md" colorScheme="green" variant="solid">Solid</Button>
        <Button size="lg" colorScheme="blue" variant="link">Size lg</Button>
      </Box>
    </Box>
  )
}

export default DesignSystemPage