import { useState } from "react";
import styles from "./PaletteButtons.module.scss";

const palettesMock = [
  [1, 1],
  [3, 3],
  [10, 4],
];

const palettes = [
  // #1
  [
    "rgb(241,225,225)",
    "rgb(239,223,225)",
    "rgb(248,220,199)",
    "rgb(246,201,176)",
    "rgb(234,180,139)",
    "rgb(237,151,102)",
    "rgb(239,146,57)",
    "rgb(237,122,52)",
  ],

  // #2
  [
    "rgb(216,204,223)",
    "rgb(167,156,191)",
    "rgb(130,119,179)",
    "rgb(104,86,152)",
    "rgb(143,121,158)",
    "rgb(92,78,114)",
    "rgb(92,88,125)",
    "rgb(64,52,86)",
  ],

  // #3
  [
    "rgb(235,236,229)",
    "rgb(232,241,228)",
    "rgb(218,229,227)",
    "rgb(202,210,251)",
    "rgb(211,208,205)",
    "rgb(208,211,219)",
    "rgb(235,228,244)",
    "rgb(225,207,223)",
  ],

  // #4
  [
    "rgb(244,199,251)",
    "rgb(152,96,149)",
    "rgb(175,110,132)",
    "rgb(158,73,85)",
    "rgb(131,103,118)",
    "rgb(119,60,80)",
    "rgb(116,35,75)",
    "rgb(80,53,67)",
  ],

  // #5
  [
    "rgb(154,217,211)",
    "rgb(97,169,173)",
    "rgb(71,154,162)",
    "rgb(78,157,176)",
    "rgb(171,185,189)",
    "rgb(133,166,172)",
    "rgb(30,67,123)",
    "rgb(39,71,144)",
  ],

  // #6
  [
    "rgb(215,202,192)",
    "rgb(184,162,144)",
    "rgb(193,170,139)",
    "rgb(134,112,95)",
    "rgb(112,89,77)",
    "rgb(174,103,80)",
    "rgb(100,46,34)",
    "rgb(62,39,29)",
  ],

  // #7
  [
    "rgb(240,254,203)",
    "rgb(221,227,188)",
    "rgb(178,188,169)",
    "rgb(146,159,142)",
    "rgb(215,254,199)",
    "rgb(217,209,192)",
    "rgb(205,193,162)",
    "rgb(169,152,68)",
  ],

  // #8
  [
    "rgb(246,201,199)",
    "rgb(240,151,152)",
    "rgb(236,98,119)",
    "rgb(212,110,152)",
    "rgb(224,100,103)",
    "rgb(207,120,126)",
    "rgb(205,85,109)",
    "rgb(192,43,92)",
  ],
  // #9
  [
    "rgb(214,221,220)",
    "rgb(215,221,226)",
    "rgb(213,213,219)",
    "rgb(198,205,215)",
    "rgb(174,179,179)",
    "rgb(160,171,185)",
    "rgb(137,149,160)",
    "rgb(118,128,136)",
  ],
  // #10
  [
    "rgb(254,254,204)",
    "rgb(252,243,221)",
    "rgb(250,229,174)",
    "rgb(248,213,119)",
    "rgb(242,190,69)",
    "rgb(243,204,80)",
    "rgb(218,179,114)",
    "rgb(213,171,79)",
  ],
  // #11
  [
    "rgb(242,220,201)",
    "rgb(232,190,200)",
    "rgb(237,179,190)",
    "rgb(234,172,171)",
    "rgb(238,194,204)",
    "rgb(231,187,210)",
    "rgb(235,172,189)",
    "rgb(219,151,170)",
  ],
  // #12
  [
    "rgb(218,236,242)",
    "rgb(210,253,253)",
    "rgb(150,198,207)",
    "rgb(82,165,193)",
    "rgb(160,199,222)",
    "rgb(116,150,176)",
    "rgb(60,119,169)",
    "rgb(54,115,175)",
  ],
  // #13
  [
    "rgb(215,233,219)",
    "rgb(212,230,207)",
    "rgb(206,232,208)",
    "rgb(184,221,211)",
    "rgb(121,137,122)",
    "rgb(115,138,125)",
    "rgb(118,135,140)",
    "rgb(88,106,104)",
  ],
  // #14
  [
    "rgb(236,165,145)",
    "rgb(226,147,135)",
    "rgb(230,140,113)",
    "rgb(224,99,76)",
    "rgb(219,74,51)",
    "rgb(188,62,31)",
    "rgb(181,37,40)",
    "rgb(108,28,51)",
  ],
  // #15
  [
    "rgb(255,255,255)",
    "rgb(245,242,239)",
    "rgb(238,230,221)",
    "rgb(228,221,211)",
    "rgb(239,228,220)",
    "rgb(234,213,197)",
    "rgb(218,210,202)",
    "rgb(177,167,153)",
  ],
  // #16
  [
    "rgb(71,78,82)",
    "rgb(50,51,50)",
    "rgb(12,28,34)",
    "rgb(21,19,25)",
    "rgb(54,69,115)",
    "rgb(22,57,78)",
    "rgb(17,37,34)",
    "rgb(13,30,61)",
  ],
];

export default function PaletteButtons() {
  const isUnlocked = true;
  const [selectedDye, setSelectedDye] = useState(1);
  const [selectedPaletteColor, setSelectedPalettedColor] = useState([0, 0]);

  const handleClickDye = (e) => {
    console.log({ selectedDye });
    setSelectedDye(Number(e.target.value));
  };

  const getHandleClick = (paletteNumber: number, colorNumber: number) => () =>
    setSelectedPalettedColor([paletteNumber, colorNumber]);

  return (
    <>
      <section className={styles.dyeingContainer}>
        <h3 className={styles.dyeingTitle}>Dyeing</h3>
        {/* <div className={styles.dyeingColors}> */}
        {palettesMock.map((color, i) => {
          return (
            <button
              value={i + 1}
              onClick={handleClickDye}
              className={styles.dyeColor}
            >
              <div
                className={styles.dye}
                style={{ backgroundColor: palettes[color[0]][color[1]] }}
              />
              {i + 1}
            </button>
          );
        })}
        {/* </div> */}
      </section>

      <div className={styles.container}>
        {palettes.map((palette, i) => {
          return (
            <section key={i} className={styles.palette}>
              {palette.map((paletteColor, i2) => {
                return (
                  <button onClick={getHandleClick(i + 1, i2 + 1)}>
                    <div
                      className={styles.color}
                      style={{ backgroundColor: paletteColor }}
                    />
                  </button>
                );
              })}
              <h3 className={styles.paletteTitle}># {i + 1}</h3>
            </section>
          );
        })}
      </div>
    </>
  );
}
