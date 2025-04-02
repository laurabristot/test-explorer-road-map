import { useState } from "react";
import "./styles.css";

export default function App() {
  const [step, setStep] = useState("jr");
  return (
    <>
      <button onClick={() => setStep("senior")}>senior</button>
      <button onClick={() => setStep("pleno")}>pleno</button>
      <button onClick={() => setStep("jr")}>jr</button>
      <div className="App">
        <img
          className="montanha"
          src="https://sdmntprwestus.oaiusercontent.com/files/00000000-078c-5230-8c2e-d7974ed74987/raw?se=2025-04-02T20%3A35%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=b718a1c4-ea69-5be8-a3eb-75c74b211595&skoid=e825dac8-9fae-4e05-9fdb-3d74e1880d5a&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-02T16%3A08%3A02Z&ske=2025-04-03T16%3A08%3A02Z&sks=b&skv=2024-08-04&sig=bmD7HdDKZpiLto4ye%2BW1oVbQ8fYXN3fMWwSv9KzYkgw%3D"
          alt=""
        />
        <div className={`explorer ${step}`}>
          <img
            className="corpo"
            src="https://lh3.googleusercontent.com/pw/AP1GczOjSioAK-Mrdi5Uomp-chVyBUN_1Gx8-Zunn7zrEMP50J0CKkS9P4AWru6PPXawp5Z_mjs00A9AqwF2US2OTXc4V7Tzxj_Yv3j7jd5NRORL8aSJgI6ZQyQ_wylFMcxxgukCS05HJdZdxVSIbn5Cc5NsOQ=w578-h963-s-no-gm?authuser=0"
          />
          <img
            className="cabeca"
            src="https://lh3.googleusercontent.com/pw/AP1GczM6QYvyrK2dMxUQJZPBFgdrcFps9sMgBV92Eq6EG61RBmKZmQQhgr4mvD_hvqrt0n7QX115aH_GsSsYvA4xzhMwaFCI3tvOMkITrHhmQTfseChYdNMv0FNo5SGH8-rbQpqWO2PimfxMmiH2M9lI8_5zGA=w578-h963-s-no-gm?authuser=0"
          />
        </div>

        {/* <div className="explorer pleno">
        <img
          className="corpo"
          src="https://lh3.googleusercontent.com/pw/AP1GczOjSioAK-Mrdi5Uomp-chVyBUN_1Gx8-Zunn7zrEMP50J0CKkS9P4AWru6PPXawp5Z_mjs00A9AqwF2US2OTXc4V7Tzxj_Yv3j7jd5NRORL8aSJgI6ZQyQ_wylFMcxxgukCS05HJdZdxVSIbn5Cc5NsOQ=w578-h963-s-no-gm?authuser=0"
        />
        <img
          className="cabeca"
          src="https://lh3.googleusercontent.com/pw/AP1GczM6QYvyrK2dMxUQJZPBFgdrcFps9sMgBV92Eq6EG61RBmKZmQQhgr4mvD_hvqrt0n7QX115aH_GsSsYvA4xzhMwaFCI3tvOMkITrHhmQTfseChYdNMv0FNo5SGH8-rbQpqWO2PimfxMmiH2M9lI8_5zGA=w578-h963-s-no-gm?authuser=0"
        />
      </div>
      <div className="explorer senior">
        <img
          className="corpo"
          src="https://lh3.googleusercontent.com/pw/AP1GczOjSioAK-Mrdi5Uomp-chVyBUN_1Gx8-Zunn7zrEMP50J0CKkS9P4AWru6PPXawp5Z_mjs00A9AqwF2US2OTXc4V7Tzxj_Yv3j7jd5NRORL8aSJgI6ZQyQ_wylFMcxxgukCS05HJdZdxVSIbn5Cc5NsOQ=w578-h963-s-no-gm?authuser=0"
        />
        <img
          className="cabeca"
          src="https://lh3.googleusercontent.com/pw/AP1GczM6QYvyrK2dMxUQJZPBFgdrcFps9sMgBV92Eq6EG61RBmKZmQQhgr4mvD_hvqrt0n7QX115aH_GsSsYvA4xzhMwaFCI3tvOMkITrHhmQTfseChYdNMv0FNo5SGH8-rbQpqWO2PimfxMmiH2M9lI8_5zGA=w578-h963-s-no-gm?authuser=0"
        />
      </div> */}
      </div>
    </>
  );
}
