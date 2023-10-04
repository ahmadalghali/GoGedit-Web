import { MantineProvider, createEmotionCache } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import { AuthProvider } from "@/contexts/AuthContext";

const cache = createEmotionCache({
  key: "mantine",
  prepend: false,
});

function App() {
  return (
    <MantineProvider emotionCache={cache} withGlobalStyles withNormalizeCSS>
      <ModalsProvider>
        <Notifications transitionDuration={400} autoClose={2500} position='bottom-center' />
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ModalsProvider>
    </MantineProvider>
  );
}

export default App;
