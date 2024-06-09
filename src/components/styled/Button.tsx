import { styled, Button as MUIButton } from "@mui/material"

const StyledButton = styled(MUIButton)({
  borderRadius: 15,
  backgroundColor: "#46b781",
  color: "#000000",
  ":hover": {
    backgroundColor: "#6cce48",
  }
})

interface ButtonProps {
  children: React.ReactNode,
  onClick?: () => void,
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return <StyledButton variant="contained" onClick={onClick}>{children}</StyledButton>
}