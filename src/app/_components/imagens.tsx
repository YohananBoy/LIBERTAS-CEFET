"use client";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme, useMediaQuery } from "@mui/material";

export default function Imagens() {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.down("md"));

  let cols = 4;
  if (isXs) cols = 1;
  else if (isSm) cols = 2;

  return (
    <ImageList sx={{ width: "80%" }} cols={cols}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "/images/Imagem1.jpeg",
    title: "Vai continuar se contentando com pouco?",
  },
  {
    img: "/images/Imagem2.jpeg",
    title: "Queremos que você seja livre",
  },
  {
    img: "/images/Imagem3.jpeg",
    title: "Não acredite nas mentiras deles",
  },
  {
    img: "/images/Imagem4.jpeg",
    title: "Cadê nossa cantina?",
  },
];
