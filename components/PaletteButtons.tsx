const palettesMock = [
  { mainColor: "#a00", isObtained: true, isWishlisted: false },
  { mainColor: "#00a", isObtained: true, isWishlisted: true },
  { mainColor: "#0a0", isObtained: false, isWishlisted: false },
];

export default function PaletteButtons() {
  const isUnlocked = true;
  const palettes = palettesMock;

  return (
    <div style={{ display: "flex" }}>
      {palettes.map((palette, i) => {
        return (
          <section key={i}>
            <div style={{ backgroundColor: palette.mainColor, width: 50 }}>
              color swatch
            </div>
            {/* <ObtainedButton />
            <WishlistButton /> */}
          </section>
        );
      })}
    </div>
  );
}
