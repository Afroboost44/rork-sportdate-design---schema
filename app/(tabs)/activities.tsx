import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, MapPin, Users } from "lucide-react-native";
import { mockOffers } from "@/mocks/offers";
import Colors from "@/constants/colors";

export default function ActivitiesScreen() {
  const upcomingActivities = mockOffers.slice(0, 3);

  return (
    <View style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>My Activities</Text>
          <Text style={styles.headerSubtitle}>Upcoming bookings</Text>
        </View>
      </SafeAreaView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {upcomingActivities.map((activity) => (
          <TouchableOpacity
            key={activity.id}
            style={styles.card}
            activeOpacity={0.8}
          >
            <View style={styles.cardHeader}>
              <View style={styles.iconCircle}>
                <Calendar size={20} color={Colors.branding.primaryPink} />
              </View>
              <View style={styles.cardHeaderText}>
                <Text style={styles.cardTitle}>{activity.title}</Text>
                <Text style={styles.sport}>{activity.sport}</Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.infoContainer}>
              <View style={styles.infoRow}>
                <Calendar size={16} color={Colors.text.secondary} />
                <Text style={styles.infoText}>
                  {new Date(activity.datetime).toLocaleDateString('en-US', {
                    weekday: 'long',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </Text>
              </View>

              <View style={styles.infoRow}>
                <MapPin size={16} color={Colors.text.secondary} />
                <Text style={styles.infoText}>{activity.location}</Text>
              </View>

              <View style={styles.infoRow}>
                <Users size={16} color={Colors.text.secondary} />
                <Text style={styles.infoText}>
                  {activity.current_participants} / {activity.max_participants} participants
                </Text>
              </View>
            </View>

            <View style={styles.footer}>
              <View style={styles.statusBadge}>
                <Text style={styles.statusText}>Confirmed</Text>
              </View>
              <Text style={styles.price}>${activity.price}</Text>
            </View>
          </TouchableOpacity>
        ))}

        {upcomingActivities.length === 0 && (
          <View style={styles.emptyState}>
            <Calendar size={48} color={Colors.text.muted} />
            <Text style={styles.emptyTitle}>No upcoming activities</Text>
            <Text style={styles.emptyText}>
              Book your first activity from the Discover tab!
            </Text>
          </View>
        )}

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
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '700' as const,
    color: Colors.text.main,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: Colors.backgrounds.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(232, 62, 140, 0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeaderText: {
    flex: 1,
    gap: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600' as const,
    color: Colors.text.main,
  },
  sport: {
    fontSize: 13,
    color: Colors.branding.primaryPink,
    fontWeight: '600' as const,
    textTransform: 'uppercase',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.backgrounds.main,
    marginBottom: 16,
  },
  infoContainer: {
    gap: 12,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: Colors.text.secondary,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: 'rgba(46, 204, 113, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: {
    color: Colors.actions.success,
    fontSize: 13,
    fontWeight: '600' as const,
  },
  price: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: Colors.text.main,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    gap: 12,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600' as const,
    color: Colors.text.main,
    marginTop: 8,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.text.secondary,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  bottomPadding: {
    height: 20,
  },
});
