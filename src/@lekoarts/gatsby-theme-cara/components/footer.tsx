/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  const isLight = colorMode === `light`
  const toggleColorMode = (e: any) => {
    setColorMode(isLight ? `dark` : `light`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isLight ? `Dark` : `light`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. Mayank Gehlot. All rights reserved.
    </Box>
  )
}

export default Footer
