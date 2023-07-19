import { styled } from "@/styles/stitches.config";

export const AboutMeSection = styled("section", {
  background: "$grey1",
  padding: "5rem 0", 
  border: "1px solid",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const UserImage = styled("img", {
    borderRadius: "50%",
    "@tablet": {
        backgroundPosition: "right center",
      },
    "@mobile": {
        padding: "9rem 0 6rem 0",
        display: "none",
        backgroundImage: `none`,
    },
    "@mobileLittle": {
        padding: "9rem 0 0 0",
    },
  });

export const AboutMeSectionContent = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "@mobile": {
    flexDirection: "column",
  },
});

export const AboutMeSectionText = styled("aside", {
  maxWidth: "26.25rem",
  display: "grid",
  gridGap: "$2",
  height: "max-content",
  position: "sticky",
  top: "8rem",
  "@mobile": {
    position: "static",
    marginBottom: "$5",
  },
});

export const AboutMeCards = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    "@mobile": {
      width: "100%",
    },
  });
  