import { useEffect, useRef, useState } from "react"

function App() {

  function normalizeArray(arr: number[]) {

    const maxVal = Math.max(...arr);
    const minVal = Math.min(...arr);

    const normalizedArray = arr.map(val => (val - minVal) / (maxVal - minVal));
    return normalizedArray;
  }

  const data = [14, 85, 52, 55, 94, 87, 57, 35, 49, 33, 89, 90, 12, 82, 68, 87, 91, 78, 36, 87, 25, 68, 13, 67, 9, 11, 81, 46, 7, 64, 20, 57, 73, 23, 14, 62, 49, 33, 61, 63, 74, 90, 50, 53, 48, 3, 17, 35, 42, 68, 88, 86, 40, 7, 71, 39, 50, 10, 21, 13, 98, 40, 89, 8, 98, 28, 44, 26, 82, 43, 54, 15, 7, 9, 80, 34, 59, 67, 64, 78, 42, 39, 97, 3, 31, 28, 41, 85, 74, 63, 83, 49, 50, 13, 65, 3, 66, 43, 24, 41, 45, 42, 43, 97, 11, 54, 78, 97, 55, 8, 54, 70, 94, 81, 52, 48, 29, 5, 29, 7, 70, 77, 98, 75, 4, 24, 39, 83, 72, 73, 66, 88, 74, 93, 45, 14, 72, 16, 39, 100, 85, 43, 62, 93, 21, 7, 66, 22, 90, 22, 28, 22, 88, 65, 39, 4, 55, 27, 5, 24, 48, 49, 12, 42, 13, 45, 12, 16, 35, 52, 77, 71, 62, 91, 56, 52, 18, 62, 24, 82, 32, 21, 60, 69, 16, 47, 95, 75, 40, 47, 58, 72, 74, 91, 27, 74, 50, 25, 43, 80, 46, 19, 28, 88, 97, 71, 47, 10, 30, 10, 84, 100, 91, 21, 96, 100, 40, 12, 46, 91, 35, 50, 4, 69, 28, 12, 92, 95, 53, 32, 20, 29, 43, 57, 3, 23, 30, 63, 43, 4, 23, 38, 48, 94, 70, 31, 34, 3, 9, 74, 94, 95, 12, 16, 38, 51, 52, 48, 74, 83, 78, 54, 91, 62, 24, 16, 78, 91, 24, 58, 89, 2, 98, 18, 59, 38, 6, 44, 3, 82, 24, 11, 44, 17, 94, 4, 70, 98, 45, 30, 8, 58, 77, 8, 10, 56, 2, 95, 19, 74, 95, 47, 84, 57, 98, 55, 27, 28, 5, 76, 98, 52, 74, 39, 73, 76, 5, 74, 10, 94, 77, 40, 6, 53, 96, 45, 98, 43, 55, 46, 93, 24, 74, 82, 37, 85, 46, 33, 66, 32, 74, 84, 26, 66, 70, 3, 31, 11, 68, 9, 11, 65, 43, 100, 36, 67, 51, 5, 70, 19, 64, 75, 10, 27, 48, 73, 63, 14, 83, 3, 44, 5, 17, 99, 74, 94, 38, 80, 63, 6, 36, 44, 60, 85, 72, 62, 91, 91, 25, 43, 22, 16, 73, 11, 49, 98, 78, 31, 93, 57]

  const normalizedData = normalizeArray(data);

  const showSteps = 30;

  const [crtStep, setCrtStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCrtStep(crtStep => crtStep + 1);
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <>
      <h2 css={{ color: "red" }}> particles </h2 >
      <button
        onClick={() => { setIsPlaying(!isPlaying) }}
      > PLAY
      </button> <br />

      <input
        ref={inputRef}
        value={crtStep}
        type="range"
        min="0"
        max={normalizedData.length}
        onChange={(e) => {
          setCrtStep(Number(e.target.value))
        }}
      />

      <div css={{ color: "red", fontSize: "24px" }}> {crtStep && crtStep} </div>
      <div css={{ display: "flex", alignItems: "center", minHeight: "100px" }}>
        {
          normalizedData.slice(crtStep, crtStep + showSteps)
            .map((item, index) => {
              return <div key={index}
                css={{
                  width: "10px",
                  background: "linear-gradient(#e2b3b3, #5b63c4)",
                  height: `${item * 100}px`,
                }}>
              </div>
            })}
      </div >
    </>
  )
}

export default App
