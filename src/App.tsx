import { Suspense, lazy } from "react";
const MainPageDraft = lazy(() => import("./components/MainPageDraft"));

function App() {
  return (
    <Suspense fallback={<p>Loading card component...</p>}>
      <MainPageDraft />
    </Suspense>
  );
}

export default App;
