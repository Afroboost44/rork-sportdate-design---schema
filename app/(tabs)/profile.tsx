import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { Settings, MapPin, Heart, Calendar, LogOut } from "lucide-react-native";
import { mockCurrentUser } from "@/mocks/users";
import Colors from "@/constants/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={24} color={Colors.text.main} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: mockCurrentUser.image_urls[0] }}
              style={styles.avatar}
              contentFit="cover"
            />
            <View style={styles.statusDot} />
          </View>

          <Text style={styles.name}>{mockCurrentUser.name}</Text>
          <View style={styles.locationRow}>
            <MapPin size={14} color={Colors.text.secondary} />
            <Text style={styles.location}>{mockCurrentUser.location}</Text>
          </View>

          <Text style={styles.bio}>{mockCurrentUser.bio}</Text>

          <View style={styles.sportsContainer}>
            {mockCurrentUser.sports.map((sport, index) => (
              <View key={index} style={styles.sportTag}>
                <Text style={styles.sportText}>{sport}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconContainer}>
              <Calendar size={20} color={Colors.branding.primaryPink} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>My Bookings</Text>
              <Text style={styles.menuSubtitle}>View all your activities</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconContainer}>
              <Heart size={20} color={Colors.branding.primaryPink} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>Favorites</Text>
              <Text style={styles.menuSubtitle}>Saved activities</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconContainer}>
              <Settings size={20} color={Colors.text.secondary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>Settings</Text>
              <Text style={styles.menuSubtitle}>Preferences and privacy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
            <View style={styles.menuIconContainer}>
              <LogOut size={20} color={Colors.actions.danger} />
            </View>
            <View style={styles.menuContent}>
              <Text style={[styles.menuTitle, styles.dangerText]}>Sign Out</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgrounds.main,
  },
  safeArea: {
    backgroundColor: Colors.backgrounds.main,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: Colors.text.main,
  },
  settingsButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  profileCard: {
    backgroundColor: Colors.backgrounds.card,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  statusDot: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.actions.success,
    borderWidth: 3,
    borderColor: Colors.backgrounds.card,
  },
  name: {
    fontSize: 26,
    fontWeight: '700' as const,
    color: Colors.text.main,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  location: {
    fontSize: 14,
    color: Colors.text.secondary,
  },
  bio: {
    fontSize: 15,
    color: Colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  sportsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
  },
  sportTag: {
    backgroundColor: 'rgba(232, 62, 140, 0.15)',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 16,
  },
  sportText: {
    fontSize: 13,
    fontWeight: '600' as const,
    color: Colors.branding.primaryPink,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: Colors.text.main,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  menuItem: {
    backgroundColor: Colors.backgrounds.card,
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.backgrounds.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuContent: {
    flex: 1,
    gap: 2,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600' as const,
    color: Colors.text.main,
  },
  menuSubtitle: {
    fontSize: 13,
    color: Colors.text.secondary,
  },
  dangerText: {
    color: Colors.actions.danger,
  },
  bottomPadding: {
    height: 20,
  },
});
