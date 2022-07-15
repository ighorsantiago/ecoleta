import { StatusBar } from 'expo-status-bar';

import { Routes } from './src/routes/stack.routes';

export default function App() {
      return (
            <>
                  <StatusBar style="dark" translucent backgroundColor="transparent" />
                  <Routes />
            </>
      );
}
