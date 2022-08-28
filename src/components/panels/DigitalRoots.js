import { Typography, Container, TextField } from "@mui/material";
import PanelHeader from "./PanelHeader";
import { useState } from "react";
const DigitalRoots = () => {
  const [number, updateNumber] = useState("0");
  const example = (n) => {
    if (!n) return "Enter a Whole Number";
    const split = n.split("").join(" + ");
    const sum = n.split("").reduce((a, c) => a + Number(c), 0);

    return (
      <>
        {n} ⇒ {split} = {sum}
        <br />
        {sum > 9 && example(String(sum))}
      </>
    );
  };
  return (
    <>
      <PanelHeader title="Digital Roots" />
      <Container sx={{ p: 3 }}>
        <Typography variant="h2" sx={{ mt: 5, fontSize: 36 }}>
          What is a Digital Root?
        </Typography>
        <Typography sx={{ my: 3 }}>
          A digital root is the result of repeatedly summing all the digits in a
          whole number until only one digit remains.
        </Typography>
        <Typography sx={{ my: 3 }}>For Example take the number 66.</Typography>
        <Typography variant="h6" sx={{ m: 3 }}>
          66 ⇒ 6 + 6 = 12 <br />
          12 ⇒ 1 + 2 = 3
        </Typography>
        <Typography sx={{ my: 3 }}>
          You can see that by taking the result of the digit sum over and over
          will give us the digital root.
        </Typography>
        <Typography variant="h2" sx={{ mt: 5, fontSize: 36 }}>
          Interesting Properties
        </Typography>
        <Typography sx={{ my: 3 }}>
          Now consider a different number, lets pick 9090.
        </Typography>
        <Typography variant="h6" sx={{ m: 3 }}>
          9090 ⇒ 9 + 0 + 9 + 0 = 18 <br />
          18 ⇒ 1 + 8 = 9
        </Typography>
        <Typography sx={{ my: 3 }}>
          Notice that the 0's eliminate themselves, keep this in mind as we will
          explore this later.
        </Typography>
        <Typography sx={{ my: 3 }}>
          Now we'll try 4 more numbers: 123, 1239, 12399 and 123918
        </Typography>
        <Typography variant="h6" sx={{ m: 3 }}>
          123 ⇒ 1 + 2 + 3 = 6
        </Typography>
        <Typography variant="h6" sx={{ m: 3 }}>
          1239 ⇒ 1 + 2 + 3 + 9 = 15 <br />
          15 ⇒ 1 + 5 = 6
        </Typography>
        <Typography variant="h6" sx={{ m: 3 }}>
          12399 ⇒ 1 + 2 + 3 + 9 + 9 = 24 <br />
          24 ⇒ 2 + 4 = 6
        </Typography>
        <Typography variant="h6" sx={{ m: 3 }}>
          123918 ⇒ 1 + 2 + 3 + 9 + 1 + 8 = 24 <br />
          24 ⇒ 2 + 4 = 6
        </Typography>
        <Typography sx={{ my: 3 }}>
          Stangely, it appears that adding any multiple of 9 (eg, 9, 90, 900, 18
          ..) to a number leaves the digital root unchanged.
        </Typography>
        <Typography variant="h5" sx={{ my: 5 }}>
          Try it out yourself
        </Typography>
        <TextField
          onChange={(e) => updateNumber(e.target.value)}
          id="input-number"
          label="Enter a Positive Number"
          type="number"
        />
        <Typography variant="h6" sx={{ m: 3 }}>
          {example(number)}

          <br />
        </Typography>
      </Container>
    </>
  );
};

export default DigitalRoots;
