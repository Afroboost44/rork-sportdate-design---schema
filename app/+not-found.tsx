import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { AlertCircle } from "lucide-react-native";
import Colors from "@/constants/colors";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen 
        options={{ 
          title: "Oops!",
          headerStyle: {
            backgroundColor: Colors.backgrounds.main,
          },
          headerTintColor: Colors.text.main,
        }} 
      />
      <View style={styles.container}>
        <AlertCircle size={64} color={Colors.branding.primaryPink} />
        <Text style={styles.title}>Page Not Found</Text>
        <Text style={styles.description}>
          The page you&apos;re looking for doesn&apos;t exist.
        </Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to Discover</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: Colors.backgrounds.main,
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700" as const,
    color: Colors.text.main,
    marginTop: 16,
  },
  description: {
    fontSize: 16,
    color: Colors.text.secondary,
    textAlign: "center",
    marginBottom: 8,
  },
  link: {
    marginTop: 8,
    backgroundColor: Colors.branding.primaryPink,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  linkText: {
    fontSize: 16,
    color: Colors.text.main,
    fontWeight: "600" as const,
  },
});
