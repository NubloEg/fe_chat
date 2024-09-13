import Block from "../../components/Block/Block";

interface Props {}

export const ComingSoon = (props: Props) => {
  return (
    <Block>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          fontSize: "6vw",
        }}
      >
        Coming Soon
      </div>
    </Block>
  );
};
