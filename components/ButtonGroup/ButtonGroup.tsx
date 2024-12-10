import { useState } from "react";
import { Box, styled } from "@mui/material";

const CounterBox = styled(Box)(() => ({
  width: "153px",
  height: "49px",
  border: "1px solid #EAEDEE",
  borderRadius: "5px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 16px",
}));

const CounterButton = styled("button")(({ theme }) => ({
  background: "transparent",
  border: "none",
  fontSize: "20px",
  color: theme.palette.grey[200],
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const CounterText = styled("span")(({ theme }) => ({
  fontSize: "16px",
  color: theme.palette.grey[900],
}));

const ButtonStyle = styled("button")(({ theme }) => ({
  background: theme.palette.primary.light,
  width: "592px",
  height: "50px",
  padding: "14px 0",
  border: "none",
  borderRadius: "5px",
  color: theme.palette.background.paper,
  textTransform: "uppercase",

  [theme.breakpoints.down("lg")]: {
    width: "90%",
  },
}));

const ButtonGroup = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      <CounterBox>
        <CounterButton onClick={handleDecrement}>−</CounterButton>
        <CounterText>{count}</CounterText>
        <CounterButton onClick={handleIncrement}>+</CounterButton>
      </CounterBox>
      <ButtonStyle>Ajouter au panier</ButtonStyle>
    </Box>
  );
};

export default ButtonGroup;
