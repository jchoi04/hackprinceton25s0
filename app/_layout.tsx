import { Stack } from 'expo-router';

export const unstable_settings = {
  showLinkPreview: false, // This disables the preview bar that shows file names and route info
};

export default function Layout() {
  return (
    <Stack 
      screenOptions={{
        headerShown: false, // Remove the default top header (debug bar)
      }} 
    />
  );
}
